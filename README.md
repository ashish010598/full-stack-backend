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

---

## 🔗 API Endpoints & Testing with cURL

### 1. 🔐 Login and Get Token

#### Request

```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

#### Response

```bash
{
    "token": "eyJhbGciOi..."
}
```

### 2. 👤 Add Single Student

#### Request

```bash
curl --location 'http://localhost:8081/api/students' \
--header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmMwNTMzYTdjNmMxYmYzODZmZjBlMyIsImlhdCI6MTc0NDU3MTAxNH0.KxSMvzRlkJl9yXweTac3Y4l7IL5CBb5JdpxzW131t4U' \
--data '{
    "name": "Ashish Pathak",
    "class": "Btech-FSE",
    "studentId": "2024TM93035"
}'
```

#### Response

```bash
{
    "_id": "67fc0ed4be0e7e57824fa895",
    "name": "Ashish Pathak",
    "class": "Mtech-FSE",
    "studentId": "2024TM93035",
    "vaccinationRecords": [],
    "__v": 0
}
```

### 3. 📥 Upload Students CSV

#### Request

```bash
curl --location 'http://localhost:8081/api/students/upload' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmMwNTMzYTdjNmMxYmYzODZmZjBlMyIsImlhdCI6MTc0NDU3MTAxNH0.KxSMvzRlkJl9yXweTac3Y4l7IL5CBb5JdpxzW131t4U' \
--form 'file=@"postman-cloud:///1f019519-c2bd-48d0-96e9-f8ecb9af7127"'
```

#### Response

```bash
{
  "message": "Bulk upload successful",
  "uploaded": 2
}
```

### 4. 📚 Get All Students

#### Request

```bash
curl --location 'http://localhost:8081/api/students' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmMwNTMzYTdjNmMxYmYzODZmZjBlMyIsImlhdCI6MTc0NDU3MTAxNH0.KxSMvzRlkJl9yXweTac3Y4l7IL5CBb5JdpxzW131t4U'
```

#### Response

```bash
[
    {
        "_id": "67fc0ed4be0e7e57824fa895",
        "name": "Ashish Pathak",
        "class": "5A",
        "studentId": "2024TM93035",
        "vaccinationRecords": [],
        "__v": 0
    },
    {
        "_id": "67fd42b40be3b5010d141323",
        "name": "Aikansh Boyal",
        "class": "5C",
        "studentId": "2024TM93021",
        "vaccinationRecords": [],
        "__v": 0
    },
    {
        "_id": "67fd42b40be3b5010d141324",
        "name": "Riyazuddin",
        "class": "6B",
        "studentId": "2024TM93254",
        "vaccinationRecords": [],
        "__v": 0
    }
]
```

### 5. 📆 Create Vaccination Drive

#### Request

```bash
curl --location 'http://localhost:8081/api/drives' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZmMwNTMzYTdjNmMxYmYzODZmZjBlMyIsImlhdCI6MTc0NDU3MTAxNH0.KxSMvzRlkJl9yXweTac3Y4l7IL5CBb5JdpxzW131t4U' \
--header 'Content-Type: application/json' \
--data '{
    "vaccineName": "Polio",
    "date": "2025-05-01",
    "totalDoses": 100,
    "applicableClasses": ["5A", "5B", "5C", "5D"]
}'
```

#### Response

```bash
{
    "vaccineName": "Polio",
    "date": "2025-05-01T00:00:00.000Z",
    "totalDoses": 100,
    "availableDoses": 100,
    "applicableClasses": [
        "5A",
        "5B",
        "5C",
        "5D"
    ],
    "_id": "67fd4f79f44b4bc75eec1abb",
    "__v": 0
}
```
