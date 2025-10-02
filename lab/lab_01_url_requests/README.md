# Lab 1 Demo Steps

## 1. Run `npm init` and accept all defaults

This creates a package.json file, which keeps track of your project metadata and any dependencies you install.

## 2. Run `npm install express`

This downloads the Express library and saves it to your node_modules folder.
Express will also be listed in package.json under dependencies.

## 3. Create `app.js`

This will be the main entry point of your web server. We use app.js in this class but sometimes people use server.js instead

## 4. Write the Demo code

Read notes in code

## 5. Run the server using `node app.js`

Open browser to

http://localhost:3000 to show Hello World

http://localhost:3000/http://www.google.com to show a hyperlink to http://www.google.com

## Notes / Common Issues

In Express 4 you could use `app.get("*", ...)`.
In Express 5 the routing library changed, so `*` no longer works. Use a regex instead: `/.*/`
