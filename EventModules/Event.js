// const event = require('event');
// const { EventEmitter } = require("events");

// let ev = new EventEmitter();
// ev.on("display", () => {
//   console.log("Display Event");
// });

// ev.emit("display");

// ! ev.once it will display only onces

// const { EventEmitter } = require("events");

// let ev = new EventEmitter();
// ev.once("display", () => {
//   console.log("Display Event");
// });

// ev.emit("display");
// ev.emit("display");
// ev.emit("display");
// ev.emit("display");

// ! write event
// const { EventEmitter } = require("events");

// let ev = new EventEmitter();
// ev.on("write", () => {
//   console.log("Write Event");
// });

// ev.emit("write");
// ev.emit("write");
// ev.emit("write");
// ev.emit("write");

// ! Read Event

// const { EventEmitter } = require("events");

// let ev = new EventEmitter();
// ev.once("read", () => {
//   console.log("READ Event");
// });

// ev.emit("read");
// ev.emit("read");
// ev.emit("read");
// ev.emit("read");

// ! using the addevent listener
const { EventEmitter } = require("events");

let ev = new EventEmitter();

let dp = () => {
  console.log("iam display");
};
ev.addListener("diplay", dp);

ev.removeListener("diplay", dp);
