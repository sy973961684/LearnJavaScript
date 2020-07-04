const http = require('http')
const url = require('url')
const app = http.createServer()
app.on('request', (req, res) => {
  // 获取请求方式
  // req.method

  // 获取请求地址
  // req.url

  // 获取请求头信息
  // req.headers

  res.writeHead(200, {
    'content-type': 'text/html;charset=utf8'
  })

  // 1. 要解析的url地址
  // 2. 将查询参数是否解析成对象形式
  let { query, pathname } = url.parse(req.url, true)
  console.log(query)
  console.log(pathname)

  if (pathname == '/index' || pathname == '/') {
    res.end('<h2>欢迎来到首页</h2>')
  } else if (pathname == '/list') {
    res.end('welcome to listpage')
  } else {
    res.end('not found')
  }
})

app.listen(3000)