import express from "express";
import enableWs from "express-ws";

const app = express();
enableWs(app);

let socketCounter = 1;
let allSockets = {}; // {Users1, Users2, Users3}

// TODO: WebSocket connection
app.ws("/socket", (ws, res) => {
  let mySocketNum = socketCounter;
  allSockets[mySocketNum] = {
    socket: ws,
    name: `Users${mySocketNum}`,
  };
  socketCounter++;

  ws.on("message", (chat) => {
    const message = JSON.parse(chat);
    try {
      if (message["action"] == "updateName") {
        allSockets[mySocketNum].name = message.name;
      } else if (message["action"] == "sendMessage") {
        // User 1: as;df;asd;jf
        // User 2: a;s;jaf;df;
        const name = allSockets[mySocketNum].name;
        const currentMsg = message.message;
        for (const [socketNum, socketInfo] of Object.entries(allSockets)) {
          socketInfo.socket.send(name + ": " + currentMsg);
        }
      } else {
        throw new Error("it failed to send a message inside");
      }
    } catch {
      throw new Error("it failed");
    }
  });

  ws.on("close", () => {
    console.log(`user ${mySocketNum} has disconnected`);
    delete allSockets[mySocketNum];
  });
});

app.get(`/`, (req, res) => {
  res.sendFile(process.cwd() + `/index.html`);
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
