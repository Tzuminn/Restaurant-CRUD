const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require("../../restaurant.json").results
const db = require('../../config/mongoose')

const SEED_USER = [
  {
    name: 'User1',
    email: 'user1@example.com',
    password: '12345678',
    restaurantIndex: [0, 1, 2]
  },
  {
    name: 'User2',
    email: 'user2@example.com',
    password: '12345678',
    restaurantIndex: [3, 4, 5]
  }
]
// 連線成功
db.once('open', () => {
  Promise.all(Array.from(
    // 產生2組seed user
    { length: 2 },
    (_, i) => bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(SEED_USER[i].password, salt))
      .then(hash => User.create({
        name: SEED_USER[i].name,
        email: SEED_USER[i].email,
        password: hash
      }) // 產生餐廳種子資料
        .then(user => {
          const SEED_RESTAURANT = SEED_USER[i].restaurantIndex.map(index => {
            restaurantList[index].userId = user._id
            return restaurantList[index]
          })
          return Restaurant.create(SEED_RESTAURANT)
        }))
  ))
    .then(() => {
      console.log('done.')
      process.exit()   // 關閉這段 Node 執行程序
    })
    .catch(err => console.log(err))
})