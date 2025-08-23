
import { app, BrowserWindow } from "electron";
import { join } from "node:path";
import express from "express";
import handler from "../build/server/index.js";

let mainWindow;

app.on("ready", () => {
    const server = express();

    server.use(express.static("public")); // Serve static assets
    server.all("*", handler); // Use Remix as request handler

    const listener = server.listen(3000, () => {
        const url = `http://localhost:3000`;

        mainWindow = new BrowserWindow({
            width: 1024,
            height: 768,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
            },
        });

        mainWindow.loadURL(url);
    });
});
