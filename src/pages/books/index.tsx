import { allBooks } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Post } from "../../components/Card/Post";
import { BsDot } from "react-icons/bs";
import { RoughNotation } from "react-rough-notation";
import { BsArrowRight } from "react-icons/bs";
import clsx from "clsx";

type BooksProps = {
  className?: string;
} & InferGetStaticPropsType<typeof getStaticProps>


export default function Books(props: BooksProps) {
  const { books, className } = props;

  return (
    <div>
      <h3>
        <RoughNotation type="highlight" show={true} color="#ffc8dd">
          Hello RoughNotation
        </RoughNotation>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae ea
        et ad debitis quam commodi non earum dicta alias pariatur nisi, modi
        sint ut facilis distinctio enim officia iusto consectetur! Eligendi
        <RoughNotation
          type="circle"
          show={true}
          color="#ffbe0b"
          strokeWidth={2}
        >
          Hello RoughNotation
        </RoughNotation>
        quisquam quidem soluta cum in, incidunt labore unde magni quam adipisci
        ex quasi. Illo doloribus in quasi. Adipisci?
      </h3>

      <div className="py-8 space-y-6">
        {books.map(
          ({ title, slug, date, description, tags, author, image }) => (
            <Post
              key={slug}
              className="transition-all ease-in-out bg-white duration-300 transform  hover:shadow-blue-200"
            >
              <Link
                href={`/books/${slug}`}
                className="group flex justify-between items-center gap-x-8"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p
                      className={clsx(
                        className,
                        "text-xl text-black group-hover:text-pink-500 font-bold group-hover:translate-x-1 transition-all transform ease-in-out flex items-center gap-x-1 duration-300"
                      )}
                    >
                      <BsArrowRight className="hidden group-hover:block" />
                      {title}
                    </p>
                    <div className="flex items-center text-sm text-slate-400">
   
                        <p>By {author.name}</p>
                
                      
                      <BsDot />
                      <time dateTime={date} className="block">
                        {format(parseISO(date), "LLLL d  yyyy")}
                      </time>
                    </div>
                  </div>
                  <p className="text-slate-400 group-hover:text-black transition-all ease-in-out duration-300 leading-8">{description}</p>
                  {/* add tags */}
                </div>
                <div
                  className="w-full hidden 
                lg:block"
                >
                  <img
                    src={image}
                    alt=""
                    className="rounded-2xl h-full object-cover object-center"
                  />
                </div>
              </Link>
            </Post>
          )
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      books: allBooks,
    },
  };
}
