const productModule = require('./model/product')
const managerModule = require('./manager/productManager')

const newProduct = new productModule.product(1, 'ashgdf', 100, 'jhascgjhasg')
newProduct.id = 2
managerModule.addProduct(newProduct)