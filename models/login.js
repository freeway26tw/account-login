const mongoose = require('mongoose')
const Schema = mongoose.Schema
const loginSchema = new Schema({
  account: {
    type: String,
    required: True
  },
  password: {
    type: String,
    required: True
  }
})
module.exports = mongoose.model('Login', loginSchema)