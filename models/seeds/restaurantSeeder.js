// 載入資料
const Restaurant = require('../restaurant')

// 載入restaurant的JSON檔
const restaurantList = require("../../restaurant.json").results

// 取得資料庫連線狀態
const db = require('../../config/mongoose')

// 連線成功
db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log("done!")
      db.close()
    })
    .catch(err => console.log(err))
})