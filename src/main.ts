import { chromium } from 'playwright-chromium'

// Main
;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com/')
  await page.screenshot({ path: 'screenshots/example.png' })
  await browser.close()
})()
