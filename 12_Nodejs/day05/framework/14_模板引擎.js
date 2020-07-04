const express = require('express')
const path = require('path')
const app = express()

// 1.告诉express框架使用什么模板引擎渲染什么后缀的模板文件
//  1.模板后缀
//  2.使用的模板引擎
app.engine('art', require('express-art-template'))
// 2.告诉express框架模板存放的位置是什么
app.set('views', path.join(__dirname, 'views'))
// 3.告诉express框架模板的默认后缀是什么
app.set('view engine', 'art')

app.get('/index', (req, res) => {
  res.render('index', {
    msg: 'message',
    users: [
      { name: 'sy', age: 23 }
    ]
  })
})

app.get('/list', (req, res) => {
  res.render('list', {
    msg: 'list page'
  })
})

app.listen(3000)