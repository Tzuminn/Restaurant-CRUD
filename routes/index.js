// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')

// 將網址結構符合指定字串的request導向指定的模組 
router.use('/restaurants', restaurants)
router.use('/users', users)
router.use('/', home)

// 匯出路由器
module.exports = router