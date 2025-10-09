const express = require("express")
const fs = require('fs').promises
const app = express()

const BASE_DIR = process.cwd();
console.log(BASE_DIR)

// use async so doesnt get called unless server is being called on

app.get('/', async (req, res) => {

  // gets the file directory and all file names inside of the song_lyrics folder
  let new_dir = `${BASE_DIR}/song_lyrics`
  console.log(new_dir)

  const files = await fs.readdir(new_dir)
  console.log(files)

  const fileContent = await (fs.readFile(`${new_dir}/${files[0]}`))
  const lyrics = fileContent.toString()

  console.log(lyrics)

  // server sends text type back to browser using HTTP response
  res.type("txt")
  res.send(lyrics)
})

app.get('/test', (req, res) => {
  console.log('test')

  res.type("txt")
  res.send('hi')
})

app.listen(3000, 'localhost', () => {
  console.log("listening on port 3000, open webpage at http://localhost:3000 pls")
})

