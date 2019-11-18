var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify    // 图片分类
var fs = require('fs')    // 引入文件模块
var APP_ID = "17798922"
var API_KEY = "aKVaRnZwygdse8Eg1KLSC4iG"
var SECRET_KEY = "CZuaPftySvN3ozh4AaODTkCphUac7S9I"
// 内存 -> I/O
var image = fs.readFileSync('./car.jpg').toString("base64")    // 同步
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY)
client.carDetect(image)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })
// console.log(image)