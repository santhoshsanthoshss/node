const fs = require("fs");
const http = require("http");

let readindex = fs.createReadStream("./index.html", "utf-8");
let readproduct = fs.createReadStream("./Product.html", "utf-8");
// let readsign = fs.createReadStream("./singup.html", "utf-8");
// let readlogin = fs.createReadStream("./login.html", "utf-8");
// let readpagenot = fs.createReadStream("./pagenotfound.html", "utf-8");

let server = http.createServer((req, res) => {
  //   res.setHeader(200, { contenttype: "index/html" });

  if (req.url === "/") {
    return readindex.pipe(res);
  } else if (req.url === "/product") {
    return readproduct.pipe(res);
  }
});

server.listen(4000, () => {
  console.log("data");
});
