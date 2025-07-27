const { app, BrowserWindow, ipcMain } = require('electron');
const { exec, spawn } = require('child_process');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 500,
    backgroundColor: '#0f0f0f',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icon.png'), // Optional: add your icon
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('open-terminal', async () => {
  // Windows: start cmd, Mac: open Terminal, Linux: gnome-terminal/x-terminal-emulator
  if (process.platform === 'win32') {
    exec('start cmd');
  } else if (process.platform === 'darwin') {
    exec('open -a Terminal');
  } else {
    exec('x-terminal-emulator || gnome-terminal || xterm');
  }
});

// IPC: Run detect.py in detect or attack mode
ipcMain.handle('run-detect-py', async (event, mode) => {
  return new Promise((resolve) => {
    const script = path.join(__dirname, 'detect.py');
    const py = spawn('python', [script, mode]);
    let output = '';
    let error = '';
    py.stdout.on('data', (data) => {
      output += data.toString();
    });
    py.stderr.on('data', (data) => {
      error += data.toString();
    });
    py.on('close', (code) => {
      resolve({ output, error, code });
    });
  });
});
