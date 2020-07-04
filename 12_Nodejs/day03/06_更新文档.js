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

// 如果匹配了多条文档, 只会更新匹配成功的第一条文档
// User.updateOne({ name: '李四' }, { age: 120, name: '李狗蛋' }).then(result => console.log(result))

// 根据条件删除多条文档
User.deleteMany({ age: 50 }).then(result => console.log(result))