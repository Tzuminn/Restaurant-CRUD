// 載入mongoose及使用Schema模組
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用 new Schema() 的方式來建構一個新的 Schema
const restaurantSchema = new Schema({
  name: {          
    type: String,  
    required: true 
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  google_map: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true
  }
})

// 透過 module.exports 輸出mongoose.model，命名為Restaurant。
module.exports = mongoose.model('Restaurant', restaurantSchema)