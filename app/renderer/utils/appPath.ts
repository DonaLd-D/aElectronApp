import { ipcRenderer } from "electron";

export function getPath(){
  return new Promise(
    (resolve: (value: string) => void, reject: (value: Error) => void) => {
      ipcRenderer.send('get-root-path', null);
      ipcRenderer.on('res-root-path', (e, arg: string) => {
        if (arg) {
          resolve(arg);
        } else {
          reject(new Error('项目路径错误'));
        }
      });
    }
  );
}