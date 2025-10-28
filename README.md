# crypto-tracker

# 💰 Crypto Tracker

A **MERN stack-based cryptocurrency tracker** that displays real-time data for the top coins using the **CoinGecko API**.  
It automatically updates data every hour on the backend using **Node Cron** and refreshes the frontend every 30 seconds to show the latest prices.

---

## 🚀 Features

- 📊 View live cryptocurrency data (name, symbol, price, market cap, etc.)
- 🕒 Auto-refresh UI every **30 seconds**
- ⏰ Auto-update coin data in database every **1 hour** using **Node Cron**
- 🧠 View detailed **coin history** for each cryptocurrency
- ⚡ Built with **MERN Stack (MongoDB, Express, React, Node.js)**
- 💅 Responsive UI using **Tailwind CSS**
- 🔙 Easy navigation with a **Back button** on the details page

---

## 🧩 Tech Stack

**Frontend:**
- React.js
- Axios
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Node Cron
- Axios

---

## ⚙️ Project Structure

crypto-tracker/
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Reusable components (e.g., Card)
│ │ ├── pages/ # Dashboard, CoinDetails
│ │ ├── services/ # API functions (axios)
│ │ └── App.jsx
│ └── package.json
│
├── server/ # Node Backend
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routes
│ ├── controllers/ # Business logic
│ ├── server.js # Main entry file
│ └── package.json
│
└── README.md


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Inzamam-7/crypto-tracker.git
cd crypto-tracker
2️⃣ Install Dependencies


#Backend:
bash
Copy code
cd server
npm install


#Frontend:
bash
Copy code
cd ../client
npm install
▶️ Run the App

#Start Backend:
bash
Copy code
npm start

#Start Frontend:
bash
Copy code
npm run dev

Then visit 👉 http://localhost:5173/