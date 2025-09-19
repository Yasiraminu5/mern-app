const express = require('express');

//controlller functions
const { signupUser, loginUser } = require('../controllers/userController')

const router = express.Router()

//login route
//router.post('/login', () => loginUser)
router.post('/login', loginUser)

//signup route
//router.post('/signup', () => signupUser)
router.post('/signup', signupUser)

module.exports = router
