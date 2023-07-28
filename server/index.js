import express from 'express';
//import handler from './database_handler.js';
import scrapeData from './web_scraper.js';
import scrapeRecipes from './recipeScraper.js';
//const web_scraper = require('./web_scraper.js');
//const database_handler = require('./database_handler.js');

//const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    // handler();
    //scrapeData();
    scrapeRecipes();
    res.json({ message: "Hello world!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});