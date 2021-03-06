let http = require('http')  // 引入http这个核心模块，来创建web服务器
let fs = require('fs')      // 操作服务器的资源文件

let server = http.createServer()

server.on('request', (req, res) => {        // server服务监听前端往后段发送的请求
    let url = req.url
    if (url === '/') {
        fs.readFile('./resource/index.html', (error,data) => {
            if(error) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                res.end('你需要的资源不存在')
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }
})

server.listen(3000, () => {
    console.log('服务器已启动')
})