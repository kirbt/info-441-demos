const express = require("express");
const fs = require("fs").promises;
const app = express();

// get current base directory
const BASE_DIR = process.cwd();
console.log(BASE_DIR);

app.get("/", async (req, res) => {
  // gets the file directory and all file names inside of the "song_lyrics" folder
  const files = await fs.readdir(BASE_DIR + "/song_lyrics");
  console.log(files);

  // read the contents of the first file in the directory (file[0])
  const fileContent = await fs.readFile(BASE_DIR + "/song_lyrics/" + files[5]);
  const lyrics = fileContent.toString();
  console.log(lyrics);

  // server sends text type back to browser
  res.type("txt");
  res.send(lyrics);
});

app.listen(3000, () => {
  console.log("listening on port 3000, open webpage at: http://localhost:3000");
});
