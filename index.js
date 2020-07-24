// const puppeteer = require('puppeteer')

// const start = async () => {
//     const browser = await puppeteer.launch() //executar
//     const page = await browser.newPage() // nova pag
//     await page.goto('https://www.instagram.com/filipedeschamps/followers/') // va para esse site
// }
var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("<h1>Juju gatinha, to com saudades</h1>")
})
app.listen(3000, () => console.log("deu certo porra"))