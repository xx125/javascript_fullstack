var http = require('http')
var fs = require('fs')

var server = http.createServer(function (rerq, res) {
  res.writeHead(200, {"Content-type": "text/html"})
  // 创建一个读文件的方法，__dirname绝对路径
  const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
  // 管道
  myreadstream.pipe(res)
})

var io = require('socket.io')(server)

io.on("connection", function (socket) {
  console.info('一个socket连接成功了')
  socket.on('link_to_server', function (msg) {
    console.log(`我收到一个问题${msg}`)
    // socket.emit('link_to_client', 'of course')
    io.emit('link_to_client', msg)
  })
})

server.listen(8888, '127.0.0.1')
console.log('server is running...')