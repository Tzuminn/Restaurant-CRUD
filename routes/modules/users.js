const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')

// 登入頁
router.get('/login', (req, res) => {
  res.render('login')
})

// 登入功能
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login'
}))

// 註冊頁
router.get('/register', (req, res) => {
  res.render('register')
})


// 註冊功能
router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []

  if (!email || !password || !confirmPassword) {
    errors.push({ message: '除了名稱，其他欄位都是必填。' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相符！' })
  }
  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '這個信箱已經註冊過了。' })
        return res.render('register', {
          errors,
          name,
          email,
          password,
          confirmPassword
        })
      }
      return User.create({
        name,
        email,
        password
      })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    })
})

// 登出功能
router.get('/logout', (req, res) => {
  req.logout()           // 清除session
  req.flash('success_msg', '你已經成功登出。')
  res.redirect('/users/login')
})

module.exports = router