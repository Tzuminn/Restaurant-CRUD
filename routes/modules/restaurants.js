// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Restaurant model
const Restaurant = require('../../models/restaurant')

// 新增餐廳的表單
router.get('/new', (req, res) => {
  return res.render('new')
})

// 新增一間餐廳
router.post('/', (req, res) => {
  const userId = req.user._id
  const {
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description
  } = req.body

  Restaurant.create({
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description,
    userId
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 瀏覽餐廳詳細資訊
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// 修改餐廳的表單
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// 修改餐廳資訊
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const restaurantsInfo = req.body
  return Restaurant.findByIdAndUpdate({ _id, userId }, restaurantsInfo)
    .lean()
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

// 刪除一間餐廳
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router