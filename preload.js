const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openTerminal: () => ipcRenderer.invoke('open-terminal'),
  runDetectPy: (mode) => ipcRenderer.invoke('run-detect-py', mode),
});
