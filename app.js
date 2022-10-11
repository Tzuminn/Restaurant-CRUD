// 載入express及套件
const express = require('express')
const mongoose = require('mongoose') 
const exphbs = require('express-handlebars')  
const Restaurant = require('./models/restaurant')
const { response } = require('express')
const restaurant = require('./models/restaurant')

const app = express()
const port = 3000

// 設定連線到mongoDB
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
})

// 設定為handlebars引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 設定首頁路由
app.get('/', (req, res) => {
  // 拿餐廳的資料
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// 監聽器
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
}
)