const express = require("express");
const path = require('path');
const https = require('https');
const app = express();
const fs = require('fs')

var publicDir = path.join(__dirname, 'public');
app.use("/public", express.static(publicDir));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

const options = {
    key: fs.readFileSync('keys/server.key'),
    cert: fs.readFileSync('keys/server.crt')
}

https.createServer(options, app).listen(3000, function () {
  console.log("Server is running on localhost3000");
});