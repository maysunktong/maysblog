// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource,
  defineNestedType
} from "contentlayer/source-files";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true }
  }
}));
var Book = defineDocumentType(() => ({
  name: "Book",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: false },
    tags: { type: "string", required: false },
    image: { type: "string", required: false },
    author: {
      type: "nested",
      of: Author,
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Book]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-G4NNOTSK.mjs.map
