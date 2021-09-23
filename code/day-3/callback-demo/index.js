const fs = require('fs')
//main(){
const add = (a, b) => a + b
const print = () => console.log('hello')
const onReadOver = (err, data) => {
    if (err) {
        console.log(err)
    }
    if (data) {
        console.log(data.toString())
    }
}

setTimeout(print, 1000)

fs.readFile('./data.txt', onReadOver)

const res = add(10, 20)

console.log(res)
//}