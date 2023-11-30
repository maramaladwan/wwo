const User = require('../model/userModel')
const bcrypt = require('bcrypt')
// signup a user
const signupUser = async (req, res) => {
    const {email, password} = req.body
    try {
      const exists = await User.findOne({ email })
      if (exists) {
      res.json({error: 'email already in use'})
      }
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
     await User.create({ email, password: hash })
      res.json({email})
    } catch (error) {
      res.json({error: error.message})
    }
  }
  module.exports = {signupUser}