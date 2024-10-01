// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: process.env.origin,
  method: process.env.method,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.apiKey;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});