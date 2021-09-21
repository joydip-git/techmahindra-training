'use strict'

//UI
const create = () => {

    const name = prompt('name: ', '')
    const price = parseInt(prompt('price: ', '0'))
    const description = prompt('description: ', '')
    const id = Math.floor(Math.random() * 999)

    const productObj = new product(id, name, price, description)

    const manager = productManager()
    const res = manager.addProduct(productObj)
    console.log(res ? `added the record with id# ${res}` : 'no record added')
    console.log(products)
}

const showProduct = (id) => {
    const manager = productManager()
    const found = manager.findProductById(product)
    if (found) {
        console.log(found)
    } else {
        console.log('no record found')
    }
}

let toContinue = 'n';
do {
    alert('1. add new product 2. view a product')

    const choice = parseInt(prompt('enter choice: ', '0'))
    switch (choice) {
        case 1:
            create()
            break;

        case 2:
            const id = parseInt(prompt('enter id: ', '0'))
            showProduct(id)
            break;

        default:
            break;
    }
    toContinue = prompt('continue? ', 'n')
} while (toContinue !== 'n')

