const mongoose = require('mongoose')
const { copyFileSync } = require('fs')
mongoose.connect('mongodb://test:test@localhost:27017/playground', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
  console.log('数据库连接成功')
}).catch(err => {
  console.log(err, "数据库连接失败")
})