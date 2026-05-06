const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(5000, () => {
  console.log("server is on 5000 port");
});