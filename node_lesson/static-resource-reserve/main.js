const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  // node内置的__dirname代码运行的目录
  const filePath = path.join(__dirname, req.url)
  // 读取文件属性
  fs.stat(filePath, (err, stats) => {
    // 如果访问出错
    if (err) {
      res.statusCode = 404
      res.end(`${filePath}: 404`)
      return
    }
    // 如果访问的是文件
    if (stats.isFile()) {
      res.statusCode = 200
      // 读文件内容
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      // 读文件夹
      fs.readdir(filePath, (err, files) => {
        // /static/css
        let filesLink = files.map(file => {
          return `<a href="${req.url === '/' ? '' : req.url + '/'}${file}">${file}</a><br>`
        }).join('')
        res.end(filesLink)
      })
    }
  })
}).listen(9999, () => {
  console.log('http://localhost:9999')
})