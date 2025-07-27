# 🛡️ Terminal Launcher – CODEHIVE’25 3rd Place Project

We’re thrilled to announce that our team won **🥉 3rd Place** at **CODEHIVE’25**, the flagship hackathon hosted by **Vel Tech Multi Tech**! 🚀  
While our original project tackled cutting-edge cybersecurity (including **Moving Target Defense**, **Reverse Shell**, and **Backdoor Detection**), this repository highlights the **Terminal Launcher** – an Electron-based desktop app designed for fast, cross-platform command-line access.

---

## 🚀 Project Overview

The **Terminal Launcher** is a sleek, cyberpunk-styled Electron app that provides:

- ⚙️ **Cross-platform terminal access** (CMD for Windows, Terminal for macOS, xterm/gnome-terminal for Linux)
- 🎨 **Modern UI** inspired by hacker aesthetics
- 🖱️ **One-click launch** of system terminal
- 🧠 **Platform auto-detection**
- 🌈 **Animated UI elements and responsive design**

---

## 🖥️ Getting Started

### 🔧 1. Install Dependencies

Make sure you have **Node.js** and **Python 3** installed.

```bash
npm install
pip install psutil
```

### ▶️ 2. Start in Development Mode

```bash
npm start
```

### 🏗️ 3. Build Windows Executable

```bash
npm run dist
```
The distributable .exe and installer will be available in the release/ directory.

---

## 🧪 Demo Features

### 🛡️ Reverse Shell Detection
- Detects suspicious outbound shell connections.
- Displays output directly in the app interface.
- Uses Python (psutil) for process monitoring.

### 💀 Simulated Reverse Shell (Demo Mode)
- Launches a local "attacker-like" shell for safe testing.
- Helps demonstrate the app’s detection capabilities.
- No actual remote connections are made.

---

## 📁 Project Structure

| Path/Filename   | Description                                               |
|-----------------|-----------------------------------------------------------|
| main.js         | Electron main process. Window creation, terminal logic, IPC communication. |
| preload.js      | Secure context bridge for renderer ↔ main process communication. |
| index.html      | Landing page with cyberpunk UI and navigation.            |
| run.html        | Terminal launcher and detection interface.                |
| detect.py       | Python script for shell detection (requires psutil).      |
| package.json    | Project metadata, scripts, and dependencies.              |
| node_modules/   | Auto-generated Node.js dependencies.                      |
| release/        | Output folder for Windows builds.                         |

---

## 📸 Screenshots
Preview the interface and features of Terminal Launcher.

- 🖼️ Home Screen (Cyberpunk Style)
  <img width="1914" height="966" alt="Screenshot 2025-07-28 003356" src="https://github.com/user-attachments/assets/a6a7c197-f5c5-4cbf-b9f7-f515840a35b1" />

- 🧪 Reverse Shell Detection Output
  <img width="1919" height="946" alt="Screenshot 2025-07-28 003409" src="https://github.com/user-attachments/assets/482f86f5-115a-4c42-b50c-0172a31fe9e9" />

- 💻 Terminal Launch in Action
![1742393300585](https://github.com/user-attachments/assets/0a97a86f-0e4d-4220-8be4-fb87ad570473)

---

## 🛠️ Built With
- **Electron** – for cross-platform desktop apps
- **HTML5 + CSS3** – responsive and animated UI
- **JavaScript** – app logic and event handling
- **Python (psutil)** – process inspection for reverse shell detection

---

## 👨‍💻 Team & Credits
- 💫 Ranjith Ganesh B
- 💫 Dharun Kumar K
- 💫 Madhavan R
- 💫 Charan P G

Huge thanks to Vel Tech Multi Tech for organizing CODEHIVE’25 and to our mentors for their incredible support.

---

## 🏆 Original Submission Highlights – CODEHIVE’25
Our full project included:

### 🔁 Moving Target Defense (MTD):
- Dynamic IP & port shuffling
- Code structure randomization
- Storage pattern encryption

### 🔍 Reverse Shell & Backdoor Detection:
- Live process monitoring
- Real-time outbound connection tracking
- In-memory inspection and fake attacker redirection

This Terminal Launcher is a updated version of Reverse Shell & Backdoor Detection which was developed during the final stages of the hackathon to showcase clean design and fast local terminal interaction.

---

## 📄 License
This project is open for educational and demonstration purposes. For commercial use, please contact the authors.
