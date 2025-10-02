const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // only works with 'localhost:3000 or 'localhost:3000/'
  res.type("text");
  res.send("Hello World");
});

// create an endpoint that generates a hyperlink to another website
// Using /.*/ (regex) instead of "*", this creates an endpoint that handles *any* route
app.get(/.*/, (req, res) => {
  // req.url gets everything after the domain name, substring(1) removes the leading '/'
  const url = req.url.substring(1);
  console.log(url);

  res.type("html");
  res.send(`
        <html>
            <body>
                <h1>This is your requested url: ${url}</h1>
                <a href=${url}>Go to the link</a>
            </body>
        </html>
        `);
});

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}: http://localhost:${PORT}`);
});
