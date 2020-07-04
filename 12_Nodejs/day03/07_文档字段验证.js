const mongoose = require('mongoose')
mongoose.connect('mongodb://test:test@localhost/playground', { useUnifiedTopology: true, useNewUrlParser: true }).then(
  () => console.log('数据库连接成功')
).catch(err => {
  console.log(err, '数据库连接失败')
})

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '请输入文章标题']
  },
  age: {
    type: Number,
    min: 18,
    max: 30
  },
  publishDate: {
    type: Date,
    default: () => new Date(+new Date() + 8 * 60 * 60 * 1000)
  },
  category: {
    type: String,
    // 枚举 列举出当前字段可以拥有的值
    enum: {
      values: ['html', 'css', 'javascript', 'node.js'],
      message: '分类名称要在一定范围内才可以'
    }
  },
  author: {
    type: String,
    validate: {
      validator: v => {
        return v && v.length > 4
      },
      message: '传入的值不符合规则'
    }
  }
})

postSchema.plugin(timezone)
const Post = mongoose.model('Post', postSchema)

Post.create({
  title: 'learn node.js',
  age: 19,
  category: 'css',
  author: 'sawyer'
}).then(result => console.log(result)).catch(error => {
  const err = error.errors
  for (var attr in err) {
    console.log(err[attr]['message'])
  }
})