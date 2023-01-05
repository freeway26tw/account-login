const express = require('express')
const router = express.Router()
const Login = require('../../models/login')

function auth(req, res, next) {
  if (req.session.user) {
    console.log('authenticated')
    next()
  } else {
    console.log('not authenticated')
    return res.redirect('/')
  }
}

router.get('/', (req, res) => {
  console.log(req.session)
  if (req.session.user) {
    return res.redirect('/success')
  }
  res.render('index')
})

router.get('/success', (req, res) => {
  const firstName = req.session.user
  res.render('success', { firstName })
})

router.post('/login', (req, res) => {
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

  const { email, password } = req.body
  const check = users.find((user) => {
    return user.email === email && user.password === password
  })

  if (check) {
    const firstName = check.firstName
    req.session.user = check.firstName
    res.redirect('/success')
  } else {
    res.render('index', { error: 'Username 或Password 錯誤' })
  }

})

module.exports = router