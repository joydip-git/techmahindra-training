const fs = require('fs')
class DataService {
    constructor() {
        this.filePath = process.env.FILE_PATH
    }
    addData(data) {
        fs.writeFile(this.filePath, JSON.stringify(data), () => console.log('done'))
    }
    findData(criteria) {

    }
}

module.exports = {
    DataService
}