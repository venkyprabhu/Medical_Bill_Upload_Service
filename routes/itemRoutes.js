const express =require('express')
const itemsController= require('../controller/itemsController')
const validateDto = require('../middleware/validateMiddleware');
const billSchema = require('../schema/bills');

const router= express.Router()

// routes
router.get('/', itemsController.re_route)
router.get('/items', itemsController.items_get)
router.post('/items', validateDto(billSchema), itemsController.items_post)

module.exports=router