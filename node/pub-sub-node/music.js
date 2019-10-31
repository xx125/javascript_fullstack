// node music.js内容
// console.log(process.argv)
const request = require('request');
const Events = require('events');
const inquirer = require('inquirer');
const fs = require('fs');
const ev = new Events();

function main(argv) {
  if (argv.length) {
    let search = argv[0];
    console.log(search)
    // 模块解耦
    ev.emit('search', search)
  }
}

// download
ev.on('download', (id) => {
  request({
    url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
    method: 'get',
    json: true
  }, (err, res) => {
    const body = res.body;
    console.log('地址', body.data[0].url);
    if (body.data && body.data[0] && body.data[0].url){
      // 下载
      request(body.data[0].url).pipe(   // pipe是node内置的方法，返回json，获得二进制文件
        fs.createWriteStream(`./${id}.mp3`)   // createWriteStream 构造本地路径
      )
    } else {
      console.log('没有找到这首歌，请重新选择');
    }
  })
})

// select
ev.on('select', (songLists) => {
  // expand checkBox input 按回车键选择
  // 生成一个列表
  inquirer.prompt([   // 是个方法，不要赋值
    {
      type: 'list',
      name: 'song',
      message: `共有${songLists.result.songCount}首歌，回车下载`,
      choices: songLists.result.songs.map(song => {
        return {
          value: song.id,
          name: song.name + (song.artists[0] ? song.artists[0].name : '')
        }
      })
    }
  ])
  .then(id => {
    // console.log('选择了', id);
    id = id.song;
    ev.emit('download', id);
  })
})

// 搜索模块
ev.on('search', (search) => {
   // /search?keywords=海阔天空
   // http
   search = encodeURIComponent(search);
   request({
     method: 'GET', 
     json: true, 
     url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${search}`   // 动态放进来的搜索的内容
   }, (err, body) => {
     if (err) {
       console.log('搜索出错啦', err)
     } else {
       // console.log(body.body);
       ev.emit('select', body.body)
     }
   })
})

main(process.argv.slice(2))   // 先订阅，再发布，从第二个开始截取掉