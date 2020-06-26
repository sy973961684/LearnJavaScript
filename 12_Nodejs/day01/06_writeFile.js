const fs = require('fs')

fs.writeFile('./demo.txt', 'hello nodejs', err => {
  if (err != null) {
    console.log(err)
    return
  }
  console.log('文件写入成功')
})