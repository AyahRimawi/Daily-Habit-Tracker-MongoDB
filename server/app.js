const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

connectDB();


// -------habitRoutes-----------
const habitRoutes = require("./src/routes/habitRoutes");
app.use("/api/habits", habitRoutes);
// -----------------------------

const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
