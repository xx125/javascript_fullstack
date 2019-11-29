const https = require('https');
const http = require('http');
const cheerio = require('cheerio');   // cheerio用来解析html

// doubanSpider('https://movie.douban.com/top250?start=25', (data) => {
//   // 得到结果
//   console.log(data);
// })

function doubanSpider(url, cb) {
  https.get(url,
    (res) => {
      let html = '';
      // 以流的形式传输
      res.on('data', (chunk) => {
        html += chunk;
      })
      res.on('end', () => {
        // console.log(html);
        // jquery
        const $ = cheerio.load(html);
        let movies = [];
        $('li .item').each(function () {      // li .item 空格！
          // 拿到每一个电影
          const picUrl = $('.pic img', this).attr('src');    // $('.pic img', item)item用来限制，当前电影的pic img
          const title = $('.info .title', this).text();
          const star = $('.star .rating_num', this).text()
          const inq = $('.inq', this).text();
          // console.log({
          //   picUrl,
          //   title,
          //   star,
          //   inq
          // })
          movies.push({
            picUrl,
            title,
            star,
            inq
          })
        })
        cb(movies);
      })
    })
}

http.createServer((req, res) => {
  doubanSpider('https://movie.douban.com/top250?start=25', 
  (data) => {
    // text/plain 纯文本
    // text/html html
    // mine 类型
    console.log('data', data)
    res.writeHead(200, {
      'Content-type': 'application/json',
      'Access-Control-Allow-origin': '*'
    })
    res.end(JSON.stringify(data))
  })
}).listen(3000, () => {
    console.log('server is running 3000');
})

