// const { product } = require('./model/product')
// const { addProduct } = require('./manager/productManager')

import { product } from "./model/product";
import { addProduct } from "./manager/productManager";

const newProduct = new product(1, 'ashgdf', 100, 'jhascgjhasg')
addProduct(newProduct)
console.log('welcome to complete app')