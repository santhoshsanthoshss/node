// const a = require("./index.js");

// console.log(a);

// ! ex 2

// const { a, b } = require("./index.js");

// console.log(a);
// console.log(b);

// !3

// let { sname, age } = require("./index.js");

// console.log(sname);
// console.log(age);

// ! 4

// const giveuser = require("./index.js");
// console.log(giveuser(10, 60));

// ! file creating

// const { error } = require("console");
// const fs = require("fs");

// fs.writeFile("./user.txt", "hello js 1", (err) => {
//   if (err) {
//     throw error(err);
//   } else {
//     console.log("data sended");
//   }
// });

// ! append file to add another data

// const { error } = require("console");
// const fs = require("fs");

// fs.appendFile =
//   ("./syllabus.txt",
//   "user1",    //!doubt
//   "utf-8",
//   (err) => {
//     if (err) {
//       throw error(err);
//     } else {
//       console.log("data sended");
//     }
//   });

// !read file

// const { error } = require("console");
// const fs = require("fs");

// fs.readFile("./syllabus.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw new error("data not read");
//   } else {
//     console.log(data); //! we get the data in buffer format we can use tostring() or else utf8
//   }
// });

// ! reading the one file to another file

// const fs = require("fs");

// fs.readFile("./syllabus.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw Error("File not match");
//   } else {
//     fs.writeFile("./user1.txt", data, (err) => {
//       if (err) {
//         throw Error("Not data Transfered");
//       }
//     });
//   }
// });

// ! creating folder

// const fs = require("fs");

// fs.mkdir("Public", (err) => {
//   if (err) {
//     throw Error("foldernot created");
//   } else {
//     console.log("Folder created");
//   }
// });

// ! remove folder

// const fs = require("fs");

// fs.rmdir("Public", (err) => {
//   if (err) {
//     throw Error("throw error");
//   } else {
//     console.log("file removed");
//   }
// });

// ! rename folder

// const fs = require("fs");

// fs.rename("./user.txt", "./user2.txt", (err) => {
//   if (err) {
//     throw Error("No file file is renamed");
//   } else {
//     console.log("file renamed successfully");
//   }
// });

//! To check file status file and folder

// const fs = require("fs");

// fs.stat("Public", (err, status) => {
//   if (err) {
//     throw Error("status sucess");
//   } else {
//     console.log(status);
//     // console.log(status.isFile());
//     console.log(status.isDirectory());
//   }
// });

// ! delete file

// const fs = require("fs");

// fs.unlink("./user2.txt", (err) => {
//   if (err) {
//     throw Error("file not deleted");
//   } else {
//     console.log("file deleted");
//   }
// });

// ! copy the file, one file to another file
// ! another reading the one file to another file
// const fs = require("fs");

// fs.copyFile("./user.txt", "./syllabus.txt", (err) => {
//   if (err) {
//     throw Error("data not copied");
//   } else {
//     console.log("file copied success");
//   }
// });

// -------------------------------------------------------------------------------------
// ! Synchrous method
// ! In synchrous will not have callback function
// ! write file synchrous

// const fs = require("fs");
// !if the file not there it will create a file ,
// ! if the file is already there it will over right the data
// fs.writeFileSync("./user.txt", "dataget");

// ! append file
// ! it will not overright the data , it will add next to the data
// const fs = require("fs");
// fs.appendFileSync("./user.txt", " data in reactjs");

// ! read file

// const fs = require("fs");
// let data = fs.readFileSync("./demo.txt", "utf-8");
// console.log(data);

//! copy file to another file

// const fs = require("fs");

// fs.copyFileSync("./demo.txt", "./syllabus.txt");

// ! unlink
// ! delete the file

// const fs = require("fs");

// fs.unlinkSync("./demo.txt");

// ! mkdir

// const fs = require("fs");

// fs.mkdirSync("USER");

// ! Rename
// ! rename for file
// ! it will rename and it will create one new updated file
// const fs = require("fs");
// fs.renameSync("./user.txt", "./datasend");

//! status

// const fs = require("fs");

// let users = fs.statSync("./syllabus.txt");

// console.log(users.isDirectory());
// console.log(users.isFile());

//  ! synchronous
// ! line by line execution
// const fs = require("fs");

// console.log("data started");

// let data = fs.readFileSync("./syllabus.txt", "utf-8");
// console.log(data);

// console.log("data ended");

// ! asyncronous data

// const fs = require("fs");
// console.log("data started");

// fs.readFile("./syllabus.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw Error("data not send");
//   } else {
//     console.log(data);
//   }
// });
// console.log("data ended");

// ! Stream
// ! stream using create stream
// const fs = require("fs");

// let writedata = fs.createWriteStream("./higher.txt", "utf-8");

// writedata.write("hello react", (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("data sended");
//   }
// });

// !readable stream

// const fs = require("fs");

// let readfile = fs.createReadStream("./syllabus.txt", "utf-8");

// readfile.on("data", (chunk) => {
//   console.log(chunk);
// });
// readfile.on("error", (err) => {
//   console.log(err);
// });

// ! duplex stream

// const fs = require("fs");
// let create = fs.createWriteStream("./random.txt");
// let read = fs.createReadStream("./datasend");

// read.pipe(create);

// ! http module
// const http = require("http");

// let server = http.createServer((req, res) => {
//   console.log("Iam server");
//   console.log(req.method);
// });
// server.listen(4000, (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("Port running succesfully");
//   }
// });

// ! setting the status code and content type

// const http = require("http");

// let server = http.createServer((req, res) => {
//   res.setHeader("content-type", "text/html");
//   res.statusCode = 300;
//   res.end("<h1>Hello Nodejs</h1>");
// });
// server.listen(4000, (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("port ruuning success");
//   }
// });

// ! creating the api

// const http = require("http");
// let student = [
//   { id: 1, sname: "santhosh", gender: "male" },
//   { id: 2, sname: "kishore", gender: "male" },
// ];
// let server = http.createServer((req, res) => {
//   res.setHeader("content-type", "application/json");
//   res.statusCode = 201;
//   //!   res.end(student.toString()); it will display object object
//   res.end(JSON.stringify(student));
// });
// server.listen(4000, (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("api created successful");
//   }
// });

// !

// const http = require("http");
// const fs = require("fs");
// let server = http.createServer((req, res) => {
//   res.writeHead(200, { contenttype: "textfile" });
//   fs.readFile("./index.html", "utf-8", (err, data) => {
//     if (err) {
//       throw Error(err);
//     } else {
//       return res.end(data);
//     }
//   });
// });

// server.listen(4000, (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("server run in 4000");
//   }
// });

// ! Routing
// ! redirect the url
// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   console.log(req.url);
//   console.log(req.method);

//   res.writeHead(200, { contenttype: "html/file" });
//   fs.readFile("./index.html", "utf-8", (err, data) => {
//     if (err) {
//       throw Error(err);
//     } else {
//       console.log("data readed");
//       res.end(data);
//     }
//   });
// });

// server.listen(4000, (err) => {
//   if (err) {
//     throw Error(err);
//   } else {
//     console.log("Server connected");
//   }
// });

// !

// const http = require("http");
// const fs = require("fs");

// let server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./index.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         return res.end(data);
//       }
//     });
//   } else if (req.url === "/singup") {
//     fs.readFile("./singup.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         return res.end(data);
//       }
//     });
//   } else if (req.url === "/login") {
//     fs.readFile("./login.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         return res.end(data);
//       }
//     });
//   } else if (req.url === "/product" && req.method === "GET") {
//     fs.readFile("./Product.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         return res.end(data);
//       }
//     });
//   } else if (req.url === "/product" && req.method === "POST") {
//     fs.readFile("./addproduct.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         return res.end(data);
//       }
//     });
//   } else if (req.url === "/student") {
//     fs.readFile("./student.json", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         res.end(data);
//       }
//     });
//   } else {
//     fs.readFile("./pagenotfound.html", "utf-8", (err, data) => {
//       if (err) {
//         throw Error(err);
//       } else {
//         res.end(data);
//       }
//     });
//   }
// });

// server.listen(4000, () => {
//   console.log("server started");
// });

//
