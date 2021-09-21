'use strict'
//manager object
const productManager = function () {

    const productExists = (id) => {
        //debugger
        let status;
        for (let index = 0; index < products.length; index++) {
            const productObj = products[index];
            if (productObj.id === id) {
                status = true
                break
            }
        }
        return status
    }

    return {
        addProduct: (productObj) => {
            if (productObj) {
                if (!productExists(productObj.id)) {
                    products.push(productObj)
                    return productObj.id;
                } else {
                    return undefined;
                }
            }
            return undefined;
        },
        findProductById: (id) => {
            let found;
            if (productExists(id)) {
                for (let index = 0; index < products.length; index++) {
                    found = products[index];
                    break;
                }
            }
            return found
        }
    }
}