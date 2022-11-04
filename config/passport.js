// 載入套件
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// 載入模組
const User = require('../models/user')

// 匯出模組
module.exports = app => {

  // 初始化 Passport 模組
  app.use(passport.initialize())
  app.use(passport.session())

  // 設定Strategies (登入策略)
    //本地帳號
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: '此信箱尚未註冊，請點下方註冊。' })
        }
        if (user.password !== password) {
          return done(null, false, { message: '信箱或密碼錯誤。' })
        }
        return done(null, user)
      })
      .catch(err => done(err, false))
  }))
  // 設定序列化與反序列化
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .lean()
      .then(user => done(null, user))
      .catch(err => done(err, null))
  })
}