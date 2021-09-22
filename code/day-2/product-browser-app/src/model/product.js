export class product {
    constructor(id, name, price, description) {
        this.name = name
        this.id = id
        this.price = price
        this.description = description
    }
    getInfo() {
        return `Name:${this.name}, Price: ${this.price}, Description: ${this.description}`
    }
}

//module.exports['product'] = product