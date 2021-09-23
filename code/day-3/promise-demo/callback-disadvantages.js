const fsModule = require('fs')
const readCallback = (err, data) => {
    if (err)
        console.log(err)

    if (data)
        console.log(data.toString())
}

const readData = (filePath, callbackFnRef) => {
    fsModule.readFile(filePath, callbackFnRef)
}

readData('./data.txt', readCallback)

// const getData = (readCallback) => {
//     readData('./data.txt', readCallback)
// }

// const buttonClicked = () => {
//     getData(readCallback)
// }