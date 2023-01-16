import { allBooks } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Post } from "../../components/Card/Post";
import { BsDot } from "react-icons/bs";
import { RoughNotation } from "react-rough-notation";
import { useRive } from "@rive-app/react-canvas";

export default function Books(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { books } = props;
  const { RiveComponent, rive } = useRive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    autoplay: false,
  });

  return (
    <>
      <RiveComponent
        onMouseEnter={() => rive && rive.play()}
        onMouseLeave={() => rive && rive.pause()}
      />
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

      <>
        {books.map(({ title, slug, date, description, tags, author }) => (
          <Post key={slug}>
            <Link href={`/books/${slug}`} className="group">
              <p className="text-xl group-hover:text-pink-500 group-hover:font-bold">
                {title}
              </p>

              <div className="flex items-center">
                <time dateTime={date} className="block  text-slate-600">
                  {format(parseISO(date), "LLLL d  yyyy")}
                </time>
                <BsDot />
                <div className="flex justify-start items-center gap-x-2">
                  <p>{author.name}</p>
                  <img
                    src={author.image}
                    alt=""
                    width={30}
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="group-hover:text-gray-700">{description}</p>
              {/* add tags */}
              <p>{tags}</p>
            </Link>
          </Post>
        ))}
      </>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      books: allBooks,
    },
  };
}
