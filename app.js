const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')
require('./config/mongoose')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'mySecret',
  name: 'user',
  saveUninitialized: false,
  resave: true,
}))

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', 'hbs')

app.use(routes)

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})