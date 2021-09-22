//const productModule = require('../model/product')
const repoModule = require('../repository/productRepository')

function addProduct(productObj) {
    repoModule.products.push(productObj)
    console.log(repoModule.products)
}
module.exports = {
    addProduct
}