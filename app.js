// 載入express及套件
const express = require('express')
const mongoose = require('mongoose') // 載入 mongoose

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

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('Hello')
})

// 監聽器
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
}
)