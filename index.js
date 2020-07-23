const puppeteer = require('puppeteer')

const start = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/filipedeschamps/followers/')
}