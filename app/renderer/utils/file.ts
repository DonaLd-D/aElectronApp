import fs, { promises as fsPromiseAPIs } from 'fs';

export const  read=(path: string, encoding?: BufferEncoding): Promise<string> => {
  return fsPromiseAPIs.readFile(path, { encoding: encoding || 'utf8' });
}
export const  write=(path: string, content: string, encoding?: BufferEncoding): Promise<void> => {
  return fsPromiseAPIs.writeFile(path, content, { encoding: encoding || 'utf8' });
}
export const  rename=(oldPath: string, newPath: string) => {
  return fsPromiseAPIs.rename(oldPath, newPath);
}
export const  _delete=(path: string) => {
  return fsPromiseAPIs.unlink(path);
}
export const  hasFile=(path: string) => {
  return fsPromiseAPIs.access(path, fs.constants.F_OK);
}
export const  canWrite=(path: string) => {
  return fsPromiseAPIs.access(path, fs.constants.W_OK);
}
export const  canRead=(path: string) => {
  return fsPromiseAPIs.access(path, fs.constants.R_OK);
}