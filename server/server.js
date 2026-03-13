const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());
const PORT = process.env.PORT || 5000;
const authHeader =
  "Basic " +
  Buffer.from(`${process.env.PHONE}:${process.env.PASSWORD}`).toString("base64");
app.get("/", (req, res) => {
  console.log("Root route hit");              
  res.send("Server is working");
});
app.get("/api/live", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/api/positions/latest?deviceId=${process.env.DEVICE_ID}`,
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error fetching GPS");
  }
});

console.log("PORT VALUE =", PORT);
console.log("PORT VALUE =", PORT);
app.listen(PORT, () => {
  console.log("PORT VALUE =", PORT);
  console.log(`Server running on port ${PORT}`);
});
