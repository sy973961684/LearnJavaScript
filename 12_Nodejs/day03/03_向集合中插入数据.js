const mongoose = require('mongoose')
mongoose.connect('mongodb://test:test@localhost/playground', { useUnifiedTopology: true, useNewUrlParser: true }).then(
  () => console.log('数据库连接成功')
).catch(err => {
  console.log(err, '数据库连接失败')
})

// 创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})

// 使用规则创建集合
// 1. 集合名称 2. 集合规则
const Course = mongoose.model('Course', courseSchema)

// 创建文档
const course = new Course({
  name: 'node.js',
  author: "heima",
  isPublished: true
})

Course.create({
  name: 'js',
  author: "heima",
  isPublished: true
}).then(result => console.log(result))