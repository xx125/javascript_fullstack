const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // png多
  if (req.url === './logo.png') {
    return ''
  }
  // 读一个文件响应给用户
  fs.createReadStream('./index.html').pipe(res)
}).listen(8888, () => {
  console.log('http://localhost:8888')
})