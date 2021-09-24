const fs = require('fs')
const getData = (req, res) => {
    res.end(JSON.stringify({ name: 'joydip', age: 23 }))
}
const getByName = (req, res) => {
    const data = req.params.name
    res.end(data)
}
const create = async (req, res) => {
    //console.log(req.body)
    const data = req.body
    fs.writeFile(process.env.FILE_PATH, JSON.stringify(data), () => console.log('done'))
    console.log('sending response')
    res.end('hello')
}
module.exports = {
    getData,
    getByName,
    create
}