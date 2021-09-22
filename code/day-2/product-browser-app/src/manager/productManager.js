// const { products } = require('../repository/productRepository')

import { products } from '../repository/productRepository'

export function addProduct(productObj) {
    products.push(productObj)
    console.log(products)
}

// module.exports = {
//     addProduct
// }