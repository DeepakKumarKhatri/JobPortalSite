const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const providerRoutes = require("./routes/provider");
const userRoutes = require("./routes/user");
require('dotenv').config();

const app = express();

// const MONGO_URI = `mongodb://127.0.0.1:27017/jobPortal`;
const MONGO_URI = process.env.MONGO_URL;

app.use(bodyParser.json());

// app.use("/resumes", express.static(path.join(__dirname, "resumes")));

app.use(express.json());
const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../job-frontend/build");
app.use(express.static(buildpath));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/provider", providerRoutes);
app.use("/user", userRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({
    message: message,
    data: data,
  });
});

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    console.log("Connected to Database");
    app.listen(process.env.PORT || 8080);
  })
  .catch((err) => {
    console.log(err);
  });
