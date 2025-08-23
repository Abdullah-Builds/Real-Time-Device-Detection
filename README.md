# Real-Time Device Detection

A **real-time device location tracker** built with **Node.js**, **Express**, and **Socket.IO**.  
It uses the browser’s **Geolocation API** to capture user location and displays it on an interactive **OpenStreetMap** with **Leaflet.js**.

---

## 🚀 Features
- 📡 Real-time location tracking via **WebSockets**
- 🗺️ Interactive map using **OpenStreetMap + Leaflet.js**
- 📱 Responsive **frontend + backend** setup
- 🔒 Secure and lightweight

---

## 📂 Project Structure

```text
├── .gitignore
├── README.md
├── app.js
├── package-lock.json
├── package.json
├── public
    ├── css
    │   └── style.css
    └── js
    │   └── script.js
└── views
    └── index.ejs


```


### Explanation:
- **public/** → Contains all frontend assets (HTML, CSS, client-side JS).  
- **index.html** → The main UI where the map and location tracking is displayed.  
- **main.js** → Client logic: connects to Socket.IO, fetches Geolocation, updates map markers.  
- **styles.css** → Custom styling for the UI and map.  
- **src/** → Server-side code.  
- **server.js** → Sets up Express server and Socket.IO connection for real-time events.  
- **routes/** → Optional folder for defining additional REST APIs if needed.  
- **package.json** → Defines dependencies (`express`, `socket.io`, `leaflet`, etc.) and scripts.  
- **README.md** → Documentation (this file).  

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express, Socket.IO  
- **Frontend**: HTML, CSS, JavaScript, Leaflet.js, OpenStreetMap  
- **Client API**: Browser’s Geolocation API  

---

## ✅ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v14+)  
- npm or yarn  

---

## ⚡ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdullah-Builds/Real-Time-Device-Detection.git
   cd Real-Time-Device-Detection

<img width="866" height="729" alt="Screenshot 2025-08-22 172116" src="https://github.com/user-attachments/assets/b499224f-abcb-40fb-a356-4f6263c68983" />

<img width="1909" height="957" alt="Screenshot 2025-08-22 172321" src="https://github.com/user-attachments/assets/5a789d21-f2eb-412c-b425-f9a333fd0194" />
