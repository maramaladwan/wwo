const express = require('express')

// controller functions
 const { signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', ()=>{})

// signup route
router.post('/signup', signupUser)

module.exports = router