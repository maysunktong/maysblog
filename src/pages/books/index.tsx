import { allBooks } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function Books(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { books } = props;
  return (
    <>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quae ea
        et ad debitis quam commodi non earum dicta alias pariatur nisi, modi sint ut facilis distinctio enim
        officia iusto consectetur! Eligendi quisquam quidem soluta cum in,
        incidunt labore unde magni quam adipisci ex quasi. Illo doloribus in
        quasi. Adipisci?
      </h3>
      <ul>
        {books.map(({ title, slug, date, description, tags}) => (
          <li key={slug}>
            <Link href={`/books/${slug}`}>{title}</Link>
            <time dateTime={date} className="block text-sm text-slate-600">
              {format(parseISO(date), "LLLL d  yyyy")}
            </time>
            <p>{description}</p>
            {/* add tags */}
            <p>{tags}</p>
          </li>
        ))}
      </ul>
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
