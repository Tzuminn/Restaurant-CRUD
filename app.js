// 載入express及套件
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride =  require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// 設定為handlebars引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(express.urlencoded({ extended: true }))

// 設定靜態檔案的位置
app.use(express.static('public'))

// 用 app.use 規定每一筆請求都需要透過 method-override 進行前置處理
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)

// 監聽器
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})