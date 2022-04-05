
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


import products from './documents/products.js'
import category from './documents/category'




export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    products,
    category
    /* Your types here! */
  ]),
})

// 1.alt *