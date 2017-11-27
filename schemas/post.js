export default {
  title: "Blog Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Author',
      name: 'author',
  // A reference is a way to point to another document
      type: 'reference',
  // This reference is only allowed to point to a document of the type person,
  // we could list more types, but let's keep this simple:
      to: [{type: 'person'}]
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image'
    },
    {
      title: "Content",
      name: "content",
      type: "text",
    },
    {
      title: 'Additional Images',
      name: 'additionalImages',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      title: "Secondary Title",
      name: "secondaryTitle",
      type: "string",
    },
  ]
}
