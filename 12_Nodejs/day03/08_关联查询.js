const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 1000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
}
mongoose.connect('mongodb://test:test@localhost/playground', options).then(
  () => console.log('数据库连接成功')
).catch(function (err) {
  console.log(err.reason, '数据库连接失败')
  return
})

console.log(1)

// 用户集合规则
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

// 文章集合规则
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User1'
  }
})

// 用户集合
const User = mongoose.model('User1', userSchema)
// 文章集合
const Post = mongoose.model('Post1', postSchema)

// User.create({ name: 'itheima' }).then(result => console.log(result))
// Post.create({ title: '123111111', author: '5ef6c37b76c275311d11e484' }).then(result => console.log(result))

Post.find().populate('author').then(result => console.log(result))