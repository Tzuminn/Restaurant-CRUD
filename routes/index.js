// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')
const auth = require('./modules/auth')

// 掛載middleware
const { authenticator } = require('../middleware/auth')

// 將網址結構符合指定字串的request導向指定的模組 
router.use('/restaurants', authenticator, restaurants)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router