const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = new Schema({
  account: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Login', loginSchema)