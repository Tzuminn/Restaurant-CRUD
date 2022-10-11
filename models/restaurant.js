// 載入mongoose及使用Schema模組
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 用 new Schema() 的方式來建構一個新的 Schema
const restaurantSchema = new Schema({
  name: {          // 每筆 todo 資料都有一個叫做 name 的屬性
    type: String,  // 資料型別是字串
    required: true // 這是個必填欄位
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