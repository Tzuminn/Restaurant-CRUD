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
  },
  // 用來關聯restaurant和user資料庫
  userId: {
    type: Schema.Types.ObjectId, // 定義userId是一個 ObjectId，它會連向另一個資料物件
    ref: 'User',                 // 定義對象是 User model
    index: true,                 // 把 userId 設定成「索引」，加快查找效率。
    required: true
  }
})

// 透過 module.exports 輸出mongoose.model，命名為Restaurant。
module.exports = mongoose.model('Restaurant', restaurantSchema)