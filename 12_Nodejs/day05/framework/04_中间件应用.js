const express = require('express')
const app = express()

// 网站公告
// app.use((req, res, next) => {
// 	res.send('当前网站正在维护...')
// })

app.use('/admin', (req, res, next) => {
  let isLogin = false
  if (isLogin) {
    next()
  } else {
    res.send('您还没有登录 不能访问/admin这个页面')
  }
})

app.get('/admin', (req, res) => {
  res.send('您已经登录 可以访问当前页面')
})

app.use((req, res, next) => {
  // 为客户端响应404状态码以及提示信息
  res.status(404).send('当前访问的页面是不存在的')
})

// 监听端口
app.listen(3000)
console.log('网站服务器启动成功')