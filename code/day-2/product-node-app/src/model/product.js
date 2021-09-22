function product(id, name, price, description) {
    this.name = name
    this.id = id
    this.price = price
    this.description = description
}
//module.exports.product = product
// module.exports = {
//     product
// }
module.exports['product'] = product