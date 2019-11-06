const http = require('http')
const fs = require('fs')    /* 需要文件操作 */
const urlModule = require('url')
const nodemailer = require('nodemailer')
let code = 233333

// 当访问register时，展示一个注册的html
// 注册成功之后，展示一个成功html
http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const urlObj = urlModule.parse(url)   /* 解析 */
  console.log('url', url)
  if (url === '/register' && method === 'GET'){
    // req和res两个对象继承了流Stream和事件Event
    res.writeHead(200, {
      'Content-type': 'text/html;charset=TF8'
    })
    fs.createReadStream('./register.html').pipe(res)
  }
  else if (urlObj.pathname === '/sendEmail' && method === 'GET') {
    const emailQs = urlObj.query
    const email = emailQs.split('=')[1]
    const transport = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '997982590@qq.com',
        pass: 'intywymzzkkrbcec'
      }
    })
    transport.sendMail({
      to: email,
      html: `<h2>${code}</h2>`,
      from: '997982590@qq.com',
      subject: 'xxx网站验证'
    }, (err, info) => {
      res.writeHead(200, {
        'Content-type': 'application/json'
      })
      if (err) {
        res.end(JSON.stringify({    /* end只能返回字符串 */
          code: 500,
          email
        }))
      } 
    })
  }
  else if (urlObj.pathname === '/register1' && method === 'POST') {
    let data
    req.on('data', (c) => {
        data += c
    })
    req.on('end', () => {
        console.log('data', data)
        res.end(data)
    })
  } 
  else {
    res.end('访问出错')
  }
})

.listen(3344, () => {
  console.log('server is running in http://localhost:3344')
})