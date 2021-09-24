const http = require('http')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.APP_PORT

const server = http.createServer(
    (req, res) => {
        console.log(req)
        console.log('receving request')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>hello</h1>')
    }
)
server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})
