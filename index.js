const {app,BrowserWindow,ipcMain} = require('electron')
const $ = require('jquery')

app.on('ready',()=>{
  mainwindow = new BrowserWindow({
      width : 800,
      height : 500
  })
  mainwindow.loadURL('file://' + __dirname + "/index.html")
})

ipcMain.on('select',()=>{
    path  = "file://" + __dirname + fs.cwd('/home/' + os.usrdir() + '/selected.html')
})
