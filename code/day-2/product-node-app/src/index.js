// const productModule = require('./model/product')
// const managerModule = require('./manager/productManager')

const { product } = require('./model/product')
const { addProduct } = require('./manager/productManager')

// const newProduct = new productModule.product(1, 'ashgdf', 100, 'jhascgjhasg')
const newProduct = new product(1, 'ashgdf', 100, 'jhascgjhasg')
//newProduct.id = 2

// managerModule.addProduct(newProduct)
addProduct(newProduct)