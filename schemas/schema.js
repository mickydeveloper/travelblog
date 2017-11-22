const createSchema = require('part:@sanity/base/schema-creator')
const schemaTypes = require('all:part:@sanity/base/schema-type')

import person from './person'
import post from './post'

module.exports = createSchema({
  name: 'travel',
  types: schemaTypes.concat([
    person,
    post
  ])
})
