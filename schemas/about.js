export default {
 title: "About",
 name: "about",
 type: "document",
 fields: [
   {
     title: "Title",
     name: "title",
     type: "string",
   },
   {
     title: 'Person',
     name: 'person',
     type: 'reference',
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
     title: "Secondary Title",
     name: "secondaryTitle",
     type: "string",
   },
   {
     title: "Secondary Content",
     name: "secondaryContent",
     type: "text",
   },
 ]
}
