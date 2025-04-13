# 🏫 School Vaccination Portal – Backend API

This is the **Node.js + Express + MongoDB backend API** for the **School Vaccination Portal**. It helps school coordinators manage student records, vaccination drives, and reports.

- 🧠 Built with: Node.js, Express.js, MongoDB, Mongoose
- 🛡️ Auth: JWT-based token authentication (simulated login)
- 📥 Supports CSV upload for bulk student import
- 📊 Includes dashboard analytics API
- 🔌 RESTful API ready to be consumed by ReactJS frontend

---

## 📁 Project Structure

```bash
backend/
├── config
| ├── db.js
├── controllers/
│ ├── authController.js
│ ├── studentController.js
│ ├── driveController.js
├── services/
│ ├── studentService.js
│ ├── driveService.js
├── middleware/
│ ├── authMiddleware.js
│ ├── uploadMiddleware.js
├── models/
│ ├── Student.js
│ ├── VaccinationDrive.js
│ ├── User.js
├── routes/
│ ├── authRoutes.js
│ ├── studentRoutes.js
│ ├── driveRoutes.js
├── uploads/
│ └── students.csv
├── .env
├── app.js
├── server.js
├── package.json
```

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
