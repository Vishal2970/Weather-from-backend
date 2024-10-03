// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port ="3001";
const corsOptions = {
  origin:"http://localhost:3000",
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  console.log('city',city);
  
  const apiKey ="197d20caeee5c34731cb9d451e2a02b3";
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