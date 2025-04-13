# 🏫 School Vaccination Portal – Backend API

This is the **Node.js + Express + MongoDB backend API** for the **School Vaccination Portal**. It helps school coordinators manage student records, vaccination drives, and reports.

- 🧠 Built with: Node.js, Express.js, MongoDB, Mongoose
- 🛡️ Auth: JWT-based token authentication (simulated login)
- 📥 Supports CSV upload for bulk student import
- 📊 Includes dashboard analytics API
- 🔌 RESTful API ready to be consumed by ReactJS frontend

---

## 📁 Project Structure

backend/ ├── controllers/ # Route handlers ├── services/ # Business logic ├── middleware/ # JWT Auth, error handling, multer upload ├── models/ # Mongoose models ├── routes/ # Route definitions ├── uploads/ # Temporary CSV uploads ├── app.js # Express app config ├── server.js # App entry point ├── .env # Environment config

---

## ⚙️ Getting Started

### 📦 Install Dependencies

```bash
cd backend
npm install
```

### 🌱 Setup .env

```bash
MONGO_URI=mongodb://127.0.0.1:27017/vaccine-portal
JWT_SECRET=mysecretkey
```

### 🚀 Run Development Server

```bash
npm run dev
```

Server runs at: **http://localhost:8081**
