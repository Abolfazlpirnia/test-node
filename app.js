const _ = require('lodash')     
const items = [1,[2,[3,[4]]]]
const n = _.flattenDeep(items)
console.log(n)
