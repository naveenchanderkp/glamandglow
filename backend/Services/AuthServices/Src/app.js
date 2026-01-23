// import express from "express";
const express = require('express');
// import cors from "cors";
const cors = require('cors');
// import authRoutes from "./routes/auth.routes.js";
const authRoutes = require("./routes/auth.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

// export default app;
module.exports = app;
