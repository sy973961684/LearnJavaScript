// 1. 引入系统模块http
const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const mime = require('mime')
// 2. 创建网站服务器
const app = http.createServer()
// 3. 为网站服务器对象添加事件请求
app.on('request', (req, res) => {

  let pathname = url.parse(req.url).pathname
  pathname = pathname == '/' ? '/default.html' : pathname

  let realpath = path.join(__dirname, 'public', pathname)

  let type = mime.getType(realpath)

  fs.readFile(realpath, (error, result) => {
    if (error != null) {
      res.writeHeader(404, {
        'content-type': 'text/html;charset=utf8'
      })
      res.end("你访问的文件不存在")
      return
    }
    res.writeHeader(200, {
      'content-type': type + ';charset=utf8'
    })
    res.end(result)
  })
})
app.listen(3000)