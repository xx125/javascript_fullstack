let url = require('url')
let request = {
  // 在方法前面加get，该方法可以直接通过使用url(方法名)来调用
  get url () {    // 这样就可以用ctx.request,url取值
    return this.req.url
  },
  get path () {
    return url.parse(this.req.url).pathname
  },
  get query () {
    return url.parse(this.req.url).query
  }
  // ...
}

module.exports =  request