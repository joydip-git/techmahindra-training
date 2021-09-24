const { Router } = require('express')
const { DataController } = require('./controller')

const controller = new DataController()
const router = Router()
const BASE_URL = process.env.BASE_URL
router.get(BASE_URL, controller.getData)
router.get(`${BASE_URL}/:name`, controller.getByName)
router.post(BASE_URL, controller.create)

module.exports = router
//export default router