const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db")
const routes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Auth api is running");
});

app.use("/api/auth", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
