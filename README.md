#  Vidyut – EV Live Tracker

Vidyut is a **full-stack EV tracking dashboard** that displays the **live location of an electric vehicle on Google Maps**, along with route information, speed estimation, ETA, and battery status.

The project demonstrates **real-time data handling, API integration, and cloud deployment** using modern web technologies.

---

#  Live Demo

Frontend: https://vidhyut-ev-tracker.vercel.app
Backend API: https://vidhyut-ev-tracker.onrender.com/api/live

---

#  Features

•  **Live Vehicle Tracking** – Displays EV location on Google Maps
•  **Route Rendering** – Shows route between user and EV
•  **Speed Calculation** – Calculates vehicle speed using GPS coordinate differences
•  **Battery Level Display** – Shows current battery percentage
•  **ETA Calculation** – Estimated arrival time updates dynamically
•  **Live Refresh** – Fetches updated location data from backend API
• ☁ **Cloud Deployment** – Frontend and backend deployed for global access

---

# 🛠 Tech Stack

### Frontend

* React (Vite)
* Google Maps JavaScript API
* Axios

### Backend

* Node.js
* Express.js
* Axios
* CORS

### APIs

* Google Maps Directions API
* GPS Tracking API (Onelap)

### Deployment

* Vercel – Frontend hosting
* Render – Backend API hosting

---

# 📂 Project Structure

```
Vidyut_EV_tracker
│
├── client/              # React frontend
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
├── server/              # Node.js backend
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# ⚙️ Environment Variables

### Backend (`server/.env`)

```
PORT=5050
BASE_URL=your_tracking_api_url
DEVICE_ID=your_device_id
PHONE=your_phone
PASSWORD=your_password
```

### Frontend (`client/.env`)

```
VITE_API=https://your-backend-url
VITE_DIRECTION_KEY=your_google_maps_api_key
```

---

# 🚀 Running Locally

### Clone the repository

```
git clone https://github.com/Harshitjhamb/Vidyut_EV_tracker.git
cd Vidyut_EV_tracker
```

### Start Backend

```
cd server
npm install
node server.js
```

### Start Frontend

```
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🧠 Key Learning Outcomes

• Integrating **Google Maps with React**
• Building **REST APIs with Express**
• Handling **real-time GPS data**
• Calculating **speed and ETA from coordinates**
• Deploying **full-stack applications to the cloud**
• Managing **environment variables securely**

---

# 📸 Future Improvements

• Smooth vehicle movement animation
• Multiple vehicle tracking
• Fleet dashboard UI
• Trip history visualization
• WebSocket real-time updates

---

# 👨‍💻 Author

**Harshit Jhamb**

GitHub: https://github.com/Harshitjhamb

---

⭐ If you found this project interesting, consider starring the repository!
