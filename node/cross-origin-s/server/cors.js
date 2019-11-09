const http = require('http')

http.createServer((req, res) => {
  console.log(req.url, req.method)
  res.writeHead(200, {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-auth, content-type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS', 
    'Access-Control-Allow-Credentials': true    /* 是否允许cookie传输 */
  })
  // res.end(JSON.stringify({
  //   bookName: 'php'
  // }))

  // jsonP核心
  // getBook和前端定义的方法一样
  res.end(`
    getBook(${JSON.stringify({bookName: 'php'})})
  `)
})
.listen(3000, () => {
  console.log('server is running')
})