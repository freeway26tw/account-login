const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const check = users.find((user) => {
    return user.email === email && user.password === password
  })
  if (check) {
    const firstName = check.firstName
    res.render('success', { firstName })
  } else {
    res.render('index', { error: 'Username 或Password 錯誤' })
  }

})

module.exports = router