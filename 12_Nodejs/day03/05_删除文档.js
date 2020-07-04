const mongoose = require('mongoose')
const { ResumeToken } = require('mongodb')
mongoose.connect('mongodb://test:test@localhost/playground', { useUnifiedTopology: true, useNewUrlParser: true }).then(
  () => console.log('数据库连接成功')
).catch(err => {
  console.log(err, '数据库连接失败')
})

// 创建集合规则
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
})

const User = mongoose.model('User', userSchema)
// 查找到第一条文档并删除
// 返回删除的文档
// 如果查询条件匹配了多个文档,那么将会删除第一个匹配的文档
// User.findOneAndDelete({ _id: '5ef62a647b3e5955d92358e6' }).then(result => console.log(result))
// 删除所有文档
User.deleteMany({}).then(result => console.log(result))