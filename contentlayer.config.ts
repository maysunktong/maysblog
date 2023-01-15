import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: false },
    tags: { type: "string", required: false},
    image: 
      { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Book],
});
