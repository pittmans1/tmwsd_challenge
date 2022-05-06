var express = require('express')
var router = express.Router()
const controller = require('../controllers/messages')


// getting the messages from the database
router.get('/', controller.getAllMessages)


// add to the database
router.post('/message/add', controller.postMessage)

//get the message from the database then database deletes it
router.get('/messages/detail/:identifier', controller.getTheMessage)

module.exports = router
