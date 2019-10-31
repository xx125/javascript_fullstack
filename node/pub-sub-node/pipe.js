const fs = require('fs');

// 复制文件方法1：先读取本地文件，读完之后data放在内存里，如果文件太大(100G)，该方法不合适
fs.readFile('./index.html', (err, data) => {    
  fs.writeFile('./index-copy.html', data, (err, res) => {
    if(!err) {
      console.log('writed!!');
    }
  })
})

// 复制文件方法2：不是一次性全部读完，读一点写一点，适合大文件
// 流的知识 stream模块
fs.createReadStream('./music.js')   // 复制一份文件，先读文件有什么内容，再写到另一份文件里面
  .pipe(    // 充当管子的角色，要考虑谁在传数据，谁在取数据
    fs.WriteStream('./music-copy.js')
  )