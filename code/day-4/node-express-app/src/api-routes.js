const { Router } = require('express')
const { getData, getByName, create } = require('./controller')

const router = Router()
const BASE_URL = process.env.BASE_URL
router.get(BASE_URL, getData)
router.get(`${BASE_URL}/:name`, getByName)
router.post(BASE_URL, create)

module.exports = router
//export default router