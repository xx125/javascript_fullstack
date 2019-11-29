// 无头浏览器
// 软件自动化测试
// cnpm i puppeteer -S    装一个浏览器的命令
const puppeteer = require('puppeteer');
run();
async function run() {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage();
  await page.goto('https://juejin.im/books', {
    waitUntil: 'networkidle0'   // 等到没有网络请求的时候网页才算打开完成
  })
  await page.screenshot({   // 自动截图命名
    path: './books.png'
  })
}