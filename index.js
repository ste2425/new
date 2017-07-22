// This is free and unencumbered software released into the public domain.
// See LICENSE for details

const {app, BrowserWindow, Menu, protocol, ipcMain, dialog} = require('electron');
const {autoUpdater} = require("electron-updater");
let win;

function createDefaultWindow() {
  win = new BrowserWindow();
  win.on('closed', () => {
    win = null;
  });
  win.loadURL(`file://${__dirname}/index.html`);
  return win;
}

//autoUpdater.on('update-downloaded', (info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  //setTimeout(function() {
    //autoUpdater.quitAndInstall();  
  //}, 5000)
//})




autoUpdater.on('update-available', (info) => {
    dialog.showErrorBox('available', 'lol')
});

app.on('ready', function()  {
    createDefaultWindow();
  autoUpdater.checkForUpdates();
});

app.on('window-all-closed', () => {
  app.quit();
});
