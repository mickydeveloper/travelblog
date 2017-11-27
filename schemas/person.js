export default {
 title: "Person",
 name: "person",
 type: "document",
 fields: [
   {
     title: "Name",
     name: "name",
     type: "string",
   },
   {
     title: 'Profile',
     name: 'profile',
     type: 'image'
   },
   {
     title: 'Roles',
     name: 'roles',
     type: 'array',
     of: [{type: 'string'}]
   },
 ]
}
