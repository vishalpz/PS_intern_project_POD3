import axios from 'axios';
import cheerio from 'cheerio';
import pretty from 'pretty';

// const axios = require('axios');
// const cheerio = require('cheerio');
// const pretty = require('pretty');

let sitemapUrl = "https://groceries.asda.com/sitemap-recipes.xml";

export default async function scrapeData() {
    try {
        let { data } = await axios.get(sitemapUrl);
        var recipeUrl  = '';
        var recipeHtml = '';
        const recipeUrls = [];

        const sitemapUrls = cheerio.load(data);
        
        // Loop through each recipe URL
        sitemapUrls('loc').each( (idx, el) => {
            recipeUrl = sitemapUrls(el).text();
            console.log(idx);
            console.log(recipeUrl);
            recipeUrls.push(recipeUrl);
        });

        console.log(recipeUrls);

    } catch (err) {
        console.log(err);
    };
};

// module.exports = { scrapeData };
