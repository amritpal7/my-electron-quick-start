// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require("electron");
// const appVersion = document.getElementById("version");
const select = selector => document.querySelector(selector);

let container = select("#messages");
// let progressBar = select("#progressBar");
let version = select("#version");

ipcRenderer.on("message", (event, text) => {
  let message = document.createElement("div");
  message.innerHTML = text;
  container.appendChild(message);
});

ipcRenderer.send("app_version");

ipcRenderer.on("app_version", (event, arg) => {
  ipcRenderer.removeAllListeners("app_version");
  version.innerText = "App version " + arg.version;
});
