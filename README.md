# Real-Time Device Detection

**Description**  
A real-time device location tracker built with Node.js, Express, and Socket.IO. It uses the browser’s Geolocation API for capturing user location and renders it on an interactive OpenStreetMap with Leaflet.js.

## Features
- Real-time location tracking via WebSockets
- Interactive map using OpenStreetMap + Leaflet.js
- Responsive frontend and backend setup

---

#Project Structure
Real-Time-Device-Detection/
├── public/  
│   ├── index.html          <!-- Frontend UI -->
│   ├── main.js             <!-- Client-side JS (Socket.IO + Leaflet) -->
│   └── styles.css          <!-- Basic styling -->
├── src/  
│   ├── server.js           <!-- Express + Socket.IO setup -->
│   └── routes/             <!-- Optional: API endpoints -->
├── package.json
└── README.md


---

## Tech Stack
- **Backend**: Node.js, Express, Socket.IO  
- **Frontend**: HTML/CSS/JS, Leaflet.js, OpenStreetMap  
- **Client**: Browser’s Geolocation API

---

## Prerequisites
- Node.js (v14+)
- npm or yarn

---

## Setup & Installation
1. Clone the repo:  
   ```bash
   git clone https://github.com/Abdullah-Builds/Real-Time-Device-Detection.git
   cd Real-Time-Device-Detection
