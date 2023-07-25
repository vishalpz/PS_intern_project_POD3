const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

let sitemapUrl = "https://groceries.asda.com/sitemap-recipes.xml";

async function scrapeData() {
    try {
        let { data } = await axios.get(sitemapUrl);
        let recipeUrl  = '';
        let recipeHtml = '';

        const sitemapUrls = cheerio.load(data);
        // Loop through each recipe URL
        const recipeUrls = sitemapUrls("loc");
        //console.log(recipeUrls.length);
        recipeUrls.each( (idx, el) => {
            //console.log(idx, sitemapUrls(el).text());
            recipeUrl = sitemapUrls(el).text();
            data = axios.get(recipeUrl);
            recipeHtml = cheerio.load(data);

            console.log(pretty(recipeHtml.html()));
            

        });

        //console.log(pretty($.html()));

    } catch (err) {
        console.log(err);
    };
};

module.exports = { scrapeData };
