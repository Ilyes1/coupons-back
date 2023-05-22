const express = require('express')
const router = express.Router()
const UserController = require('./controllers/user');

router.post('/signup', UserController.signup)

router.post('/login', UserController.login)

router.get('/sellers', UserController.getSellers)

router.get('/buyers', UserController.getBuyers)

router.post('/update', UserController.updateStatus)

router.delete('/delete/:username', UserController.deleteUser)

module.exports = router