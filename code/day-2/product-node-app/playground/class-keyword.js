// 'use strict'
class person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    static Invoke() {
        //console.log(this.id)
        console.log('static called')
    }
    //methods
    getInfo() {
        return `Name:${this.name}, Id: ${this.id}`
    }
}

//person.Invoke()
const p = new person(1, 'joy')
console.log(p.getInfo())
// const getInfoFnRef = p.getInfo;
// console.log(getInfoFnRef())
