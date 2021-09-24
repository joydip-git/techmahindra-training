const { Container } = require('./DI')
// const { DataService } = require('./service')
class DataController {
    constructor() {
        //this.serviceRef = new DataService()
        this.serviceRef = Container.create()
    }
    getData = (req, res) => {
        res.end(JSON.stringify({ name: 'joydip', age: 23 }))
    }
    getByName = (req, res) => {
        const data = req.params.name
        res.end(data)
    }
    create = async (req, res) => {
        //console.log(req.body)
        const data = req.body
        this.serviceRef.addData(data)
        res.end('data added')
    }
}
module.exports = {
    DataController
}