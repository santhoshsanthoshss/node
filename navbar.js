// const fs = require("fs");
// const http = require("http");

// let server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./navbar.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         res.write(data);
//         fs.readFile("./index.html", "utf-8", (err, data) => {
//           if (err) {
//             throw Error(err);
//           } else {
//             return res.end(data);
//           }
//         });
//       }
//     });
//   } else if (req.url === "/singup") {
//     fs.readFile("./navbar.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         res.write(data);
//         fs.readFile("./singup.html", "utf-8", (err, data) => {
//           if (err) {
//             throw Error(err);
//           } else {
//             return res.end(data);
//           }
//         });
//       }
//     });
//   } else if (req.url === "/addproduct") {
//     fs.readFile("./navbar.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         res.write(data);
//         fs.readFile("./addproduct.html", "utf-8", (err, data) => {
//           if (err) {
//             throw Error(err);
//           } else {
//             return res.end(data);
//           }
//         });
//       }
//     });
//   }
// });

// server.listen(4000, () => {
//   console.log("server started");
// });
