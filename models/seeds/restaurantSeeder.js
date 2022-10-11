// 載入資料
const mongoose = require('mongoose')
const Restaurant = require('../restaurant')

// 載入restaurant的JSON檔
const restaurantList = require("../../restaurant.json").results

// 設定連線到 mongoDB
mongoose.connect(process.env.MONGODB_URI)

// 取得資料庫連線狀態
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')

  Restaurant.create(restaurantList)
    .then(() => {
      console.log("done!")
      db.close()
    })
    .catch(err => console.log(err))
})