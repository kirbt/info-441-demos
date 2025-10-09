import {promises as fs} from 'fs'
import pluralize from 'pluralize';
import express from 'express'
import fetch from 'node-fetch'
import parser from 'node-html-parser'
const app = express()

app.get('/', async (req, res) => {
    console.log("request to '/', sending back html")
    res.type('html')
    let fileContents = await fs.readFile('index.html')
    res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
    console.log("request to '/style.css', sending back css")
    res.type('css')
    let fileContents = await fs.readFile('style.css')
    res.send(fileContents)
})

app.get('/index.js', async (req, res) => {
    console.log("request to '/index.js', sending back js")
    res.type('js')
    let fileContents = await fs.readFile('index.js')
    res.send(fileContents)
})

app.get('/favicon.ico', async (req, res) => {
    console.log("request to '/favicon.ico', sending back png")
    res.type('png')
    let fileContents = await fs.readFile('favicon.ico')
    res.send(fileContents)
})

app.get('/api/pluralize', async (req, res) => {
    let inputWord = req.query.word
    let pluralWord = pluralize(inputWord)
    res.type("txt")
    res.send(pluralWord)
})

app.get('/api/find-img-tags', async (req, res) => {
    let link = req.query.link
    const response = await fetch(link)
    const html = await response.text()

    const roothtml = parser.parse(html)
    const images = roothtml.querySelectorAll('img')
    console.log(roothtml)
    console.log(`images: ${images}`)

    let resultHtml = '<html><body><h2>Images with alt text</h2>'


    for (let img of images) {
        console.log(img)
        if (img.getAttribute('alt') !== null) {
            let src = img.getAttribute('src')
            let alt = img.getAttribute('alt')
            console.log(`img found | src = ${src} | alt = ${alt}`)
            resultHtml += `<div><img src="${src}" alt="${alt}" /><p>Alt: ${alt}</p></div>`;
            resultHtml += '</body></html>';
        }
    }

    res.type('html')
    res.send(resultHtml)

})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})