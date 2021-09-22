// function product(id, name, price, description) {
//     this.name = name
//     this.id = id
//     this.price = price
//     this.description = description
// }
class product {
    constructor(id, name, price, description) {
        this.name = name
        this.id = id
        this.price = price
        this.description = description
    }
    // get Id() {
    //     return this.id
    // }
    // set Id(value) {
    //     this.id = value
    // }
}

//module.exports.product = product
// module.exports = {
//     product
// }
module.exports['product'] = product