# Lab 6 Demo Steps

This is a demo that performs a live chat feature using Express's websockets.

## 1. Run `npm init` and accept all defaults

This creates a package.json file, which keeps track of your project metadata and any dependencies you install. Remember to change the `type` to `type:"module"` in the package.json

## 2. Run `npm install express` and `npm install express-ws`

This downloads the Express library and websockets library and saves it to your node_modules folder.
Express will also be listed in package.json under dependencies.

## 3. Create `app.js`

This will be the main entry point of your web server. We use app.js in this class but sometimes people use server.js instead

## 4. Write the Demo code

Read notes in code

## 5. Run the server using `node app.js`

Open browser to 2 webpage of the same localhost

http://localhost:3000 to show User 1 sending message
http://localhost:3000 to show User 2 sending message
Refresh the pages to see how the chats are synced up
