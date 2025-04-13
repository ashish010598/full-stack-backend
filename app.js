const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

const driveRoutes = require("./routes/driveRoutes");
app.use("/api/drives", driveRoutes);

module.exports = app;
