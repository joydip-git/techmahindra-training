const fsModule = require('fs')

//asynchronous operation
const readData = (filePath) => {
    const p = new Promise(
        //executor
        (resolve, reject) => {
            fsModule.readFile(filePath, (err, data) => {
                if (err)
                    reject(err)
                if (data)
                    resolve(data.toString())
            })
        }
    )
    return p
}

const p = readData('./data1.txt')
console.log('hello')

p
    .then(
        (data) => {
            console.log('data callback')
            console.log(data)
        },
        (e) => console.log(e)
    )
   // .catch(e => console.log(e))

// const getData = (readCallback) => {
//     readData('./data.txt', readCallback)
// }

// const buttonClicked = () => {
//     getData(readCallback)
// }