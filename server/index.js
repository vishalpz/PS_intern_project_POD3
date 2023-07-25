const web_scraper = require('./web_scraper.js');

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: web_scraper.test() });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});