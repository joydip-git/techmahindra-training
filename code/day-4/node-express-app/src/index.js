const dotenv = require('dotenv')
const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')
const router = require('./api-routes')

dotenv.config()
const PORT = process.env.APP_PORT

const app = express()
app.use(router)
app.use(json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/${process.env.BASE_URL}`)
})