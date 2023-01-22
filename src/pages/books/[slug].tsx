import { allBooks } from "contentlayer/generated";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { MDXProvider } from '@mdx-js/react';
import { motion, useScroll } from "framer-motion";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Book(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { book } = props;

  const { scrollYProgress } = useScroll();

  if (!book) {
    return <div>No book was found ...</div>;
  }

  const MDXContent = useMDXComponent(book.body.code);

  return (
    <div>
      
      <h1>{book.title}</h1>
      <div>{book.date}</div>
      <img src={book.image} alt="" width={200} />
      {book.body && (
        <div>
          <MDXProvider>
            <MDXContent {...book.body}>
            </MDXContent>
          </MDXProvider>
        </div>
      )}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBooks.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const book = allBooks.find((book) => book.slug === params?.slug) ?? null;

  return {
    props: {
      book,
    },
  };
}
