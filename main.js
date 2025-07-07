//const { app, BrowserWindow } = require('electron')
//const { initRemix } = require("remix-electron");
//const path = require('node:path')

import path from 'node:path';
import { initRemix } from 'remix-electron';
import { app, BrowserWindow } from 'electron';

/*const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'build/server/index.s')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})*/

/** @type {BrowserWindow | undefined} */
let win

app.whenReady().then(async () => {
    try {

        const url = await initRemix({
            serverBuild: path.join(process.cwd(), "build/server/index.js"),
        });

        console.log("path is : ", url);
        win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        })
        await win.loadURL(url)
        win.once("ready-to-show", () => {
            win.show(); // this ensures it appears only when ready
        });
        console.log("Window created");
    } catch (error) {
        console.error(error)
    }
});