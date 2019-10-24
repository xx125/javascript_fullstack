const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200, height = 100;

ctx.width = width + "px";
ctx.height = height + "px";

canvas.addEventListener('click', function() {
  ctx.clearRect(0, 0, width, height);
  drawLine();
  drawText();
})

drawLine();
function drawLine() {
  for (i = 0; i < 6; i++) {
    let beginX = Math.random() * width;
    let beginY = Math.random() * height;
    let endX = Math.random() * width;
    let endY = Math.random() * height;
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);   // 起点
    ctx.lineTo(endX, endY);     // 终点
    ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.stroke();   // 实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径
  }
}

drawText()
function drawText() {
  var sourceText = ['a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'o', 'p',
                    'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z', 
                    '0', '1', '2', '3', '4', 
                    '5', '6', '7', '8', '9']    // 随机选4个不重复的
  let result = [] 
  for (let i = 0; i < 4; i++) {
    const idx = Math.floor(Math.random() * sourceText.length);
    result.push(sourceText[idx]);
    // 删除
    sourceText.splice(idx, 1);    // 从被选中的元素开始删除一个元素
  }
  console.log('result', result);
  for (let i = 0; i < result.length; i++) {
    //
    ctx.font = '40px Helvetica'
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    ctx.baseLine = 'middle'   // 基准线，还有top, bottom属性
    let preWidth = width / 4 - 10
    ctx.fillText(result[i], Math.random() * preWidth + i * preWidth, height / 2);
  }
}