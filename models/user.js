// 載入mongoose及使用Schema模組
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用 new Schema() 的方式來建構一個新的 Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)