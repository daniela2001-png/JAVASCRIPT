const { app, BrowserWindow } = require('electron');

let mainWindow;


const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 800,
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', () => {
        // por último escuchamos el evento `closed` de la ventana para limpar la variable `window`
        // de esta forma permitimos matar la ventana sin matar al aplicación
        mainWindow = null
    });
}

// con ayuda de app que abrira un proceso en 2do plano ejecutaremos nuestra funcion createWindow
app.on('ready', createWindow)
