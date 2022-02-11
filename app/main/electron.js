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
  const isDev=process.env.NODE_ENV==='development'
  const devView='http://127.0.0.1:7001'
  const distView=`file://${path.join(__dirname,'../dist/index.html')}`
  mainWin.loadFile(isDev?devView:distView)
}

app.whenReady().then(()=>{
  createWin()
  app.on("activate",()=>{
    if(BrowserWindow.getAllWindows().length===0) createWin()
  })
})
