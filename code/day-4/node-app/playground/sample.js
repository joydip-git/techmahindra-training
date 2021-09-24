// const argumentsData = process.argv
// const actualArgs = argumentsData.slice(2)
// console.log(actualArgs

console.log(process.env.APP_PORT)

const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.APP_PORT)