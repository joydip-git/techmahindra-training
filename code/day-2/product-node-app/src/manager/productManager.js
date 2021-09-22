//const productModule = require('../model/product')
//you get the JS object from 'exports' property of 'module' object using require() method
//const repoModule = require('../repository/productRepository')

const { products } = require('../repository/productRepository')

function addProduct(productObj) {
    //repoModule.products.push(productObj)
    products.push(productObj)
    console.log(repoModule.products)
}
function deleteProduct(id) {

}
function updateProduct(updatedProduct) {

}
function findProductById(id) {

}
module.exports = {
    addProduct,
    deleteProduct,
    updateProduct,
    findProductById
}