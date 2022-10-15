// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Restaurant model
const Restaurant = require('../../models/restaurant')

// 瀏覽所有餐廳(首頁)
router.get('/', (req, res) => {
  // 拿餐廳的資料
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// 搜尋功能(Query String)
router.get('/search', (req, res) => {
  let keyword = req.query.keyword.trim().toLowerCase()
  if (!keyword) {
    return res.redirect('/')
  }

  Restaurant.find()
    .lean()
    .then((restaurants) => {
      const filterRestaurants = restaurants.filter(
        restaurant =>
          restaurant.name.toLowerCase().includes(keyword) ||
          restaurant.category.includes(keyword)
      )
      if (filterRestaurants.length === 0) {
        keyword = '找不到此餐廳，請重新輸入關鍵字!'
      }
      res.render("index", { restaurants: filterRestaurants, keyword })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router