const {app, BrowserWindow}  = require ('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width:800,
        resizable:false,
        height:500
    });
    console.log(__dirname);
    mainWindow.loadURL(`file://${__dirname}/index.html`)

});