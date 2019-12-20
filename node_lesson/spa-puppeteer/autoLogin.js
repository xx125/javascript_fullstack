const puppeteer = require('puppeteer')
async function run () {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  page.setViewport({
    width: 1376,
    height: 768,
  })
  await page.goto('https://juejin.im', {
    waitUntil: 'networkidle0'
  })
  await page.click('.login')
  await page.type('.input[name="loginPhoneOrEmail"]', '997982590@qq.com')
  await page.type('.input[name="loginPassword"]', 'biewangle0')
  await page.click('.panel .btn')
}
run()