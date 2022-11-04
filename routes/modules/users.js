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
  User.findOne({ email })
    .then(user => {
      if (user) {
        console.log('使用者已註冊')
        res.render('register', {
          name,
          email,
          password,
          confirmPassword
        })
      } else {
        return User.create({
          name,
          email,
          password
        })
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

// 登出功能
router.get('/logout', (req, res) => {
  req.logout()           // 清除session
  res.redirect('/users/login')
})

module.exports = router