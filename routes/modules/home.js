const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router