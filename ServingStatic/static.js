const http = require("http");
const fs = require("fs");
let indexpage = fs.createReadStream("../index.html");
let loginpage = fs.createReadStream("../login.html");
let stylepage = fs.createReadStream("../index.css");

let server = http.createServer((req, res) => {
  res.writeHead(200, { ContentType: "Text" });
  if (req.url == "/") {
    return indexpage.pipe(res);
  } else if (req.url == "/login") {
    return loginpage.pipe(res);
  } else if (req.url == "/index.css") {
    return stylepage.pipe(res);
  } else {
    res.end("not found");
  }
});

server.listen(4000, () => {
  console.log("server started");
});
