var fs = require('fs')
var AipOcrClient = require('baidu-aip-sdk').ocr    // 图片识别？从图片中提取文字
var APP_ID = '17799061'
var API_KEY = '8sLEH69PsLroTQK2LLFq0wCh'
var SECRET_KEY = '4K4ub5ruuz8RMR7v0AmGnrSben89NgT7'
var image = fs.readFileSync('./car-number2.jpg').toString('base64')    // 文件本身就是二进制文件
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)
var options = {}
client.licensePlate(image, options)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })