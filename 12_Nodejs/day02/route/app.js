// 1. 引入系统模块http
const http = require('http')
const url = require('url')
// 2. 创建网站服务器
const app = http.createServer()
// 3. 为网站服务器对象添加事件请求
app.on('request', (req, res) => {
  const method = req.method.toLowerCase()
  const pathname = url.parse(req.url).pathname
  console.log(pathname)
  res.writeHead(200, {
    'content-type': 'text/plain;charset=utf8'
  })

  // 4. 实现路由功能
  // 4.1 获取客户端的请求方式
  // 4.2 获取客户端的请求地址
  if (method == 'get') {
    if (pathname == '/' || pathname == '/index') {
      res.end("欢迎来到首页")
    } else if (pathname == '/list') {
      res.end("欢迎来到列表页")
    } else {
      res.end("您访问的页面不存在")
    }
  } else if (method == 'post') {

  }
})

app.listen(3000)