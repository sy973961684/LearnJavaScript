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

// 查询用户集合中的所有文档
// User.find().then(result => console.log(result))
// 通过id字段查找文档
// User.findOne({ _id: '5ef62a647b3e5955d92358e6' }).then(result => console.log(result))
// findOne方法返回一条文档 默认返回当前集合中的第一条文档
// User.findOne({ name: '李四' }).then(result => console.log(result))
// 查询用户集合中年龄字段大于20并且小于40的文档
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result))
// 查询用户集合中hobbies字段值包含足球的文档
// User.find({ hobbies: { $in: ['足球'] } }).then(result => console.log(result))
// 选择要查询的字段
// User.find().select('name email -_id').then(result => console.log(result))
// 根据年龄字段进行升序排列
// User.find().sort('age').then(result => console.log(result))
// 根据年龄字段进行降序排列
// User.find().sort('-age').then(result => console.log(result))
// 查询文档跳过前两条结果 限制显示3条结果(分页需要用到)
// User.find().skip(2).limit(3).then(result => console.log(result))
// 按时间查找
// db.getCollection("posts").find({"publishDate" : { $gt : ISODate("2020-06-27 11:32:18") }})

// 批量插入数据
function init () {
  var u = [{ "name": "张三", "age": 20, "hobbies": ["足球", "篮球", "橄榄球"], "email": "zhangsan@itcast.cn", "password": "123456" },
  { "name": "李四", "age": 10, "hobbies": ["足球", "篮球"], "email": "lisi@itcast.cn", "password": "654321" },
  { "name": "王五", "age": 25, "hobbies": ["敲代码"], "email": "wangwu@itcast.cn", "password": "123456" },
  { "name": "赵六", "age": 50, "hobbies": ["吃饭", "睡觉", "打豆豆"], "email": "zhaoliu@itcast.cn", "password": "123456" },
  { "name": "王二麻子", "age": 32, "hobbies": ["吃饭"], "email": "wangermazi@itcast.cn", "password": "123456" },
  { "name": "狗蛋", "age": 14, "hobbies": ["打豆豆"], "email": "goudan@163.com", "password": "123456" }
  ]
  for (var attr in u) {
    User.create(u[attr]).then((result) => console.log(result + "插入数据库成功")).catch(err => console.log(err))
  }
}
init()