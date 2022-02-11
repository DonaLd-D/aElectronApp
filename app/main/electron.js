const path=require('path')
const {app,BrowserWindow}=require('electron')

const createWin=()=>{
  const mainWin=new BrowserWindow({
    width:1200,
    height:800,
    webPreferences:{
      nodeIntegration:true
    }
  })
  mainWin.loadFile('index.html')
}

app.whenReady().then(()=>{
  createWin()
  app.on("activate",()=>{
    if(BrowserWindow.getAllWindows().length===0) createWin()
  })
})
