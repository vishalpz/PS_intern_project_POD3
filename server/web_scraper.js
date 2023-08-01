import axios from 'axios';
import cheerio from 'cheerio';
import pretty from 'pretty';
import fs from 'fs';

// const axios = require('axios');
// const cheerio = require('cheerio');
// const pretty = require('pretty');

let sitemapUrl = "https://groceries.asda.com/sitemap-recipes.xml";

export default async function scrapeData() {
    try {
        let { data } = await axios.get(sitemapUrl);
        const sitemapUrls = cheerio.load(data);

        var recipeUrl  = '';
        const recipeUrls = [];
 
        // Store each recipe URL into array
        sitemapUrls('loc').each( (idx, el) => {
            recipeUrl = sitemapUrls(el).text();
            recipeUrls.push(recipeUrl);
        });

        console.log(recipeUrls[0]);
        

        // axios.get('https://groceries.asda.com/')
        //     .then(response => {
        //         setTimeout( () => {
        //             const recipeHtml = cheerio.load(response.data);
        //             console.log(recipeHtml.html());
        //             console.log('done');
        //         }, 10000);
                
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         console.log("ERROR");
        //     });
        
        // let recipeHtml = cheerio.load(test);
        // console.log(recipeHtml);

        var file = fs.createWriteStream('recipes.txt');
        recipeUrls.forEach( (v) => { 
            file.write(v + '\n'); 
        });
        file.end();

        

    } catch (err) {
        console.log(err);
    };
};

// module.exports = { scrapeData };
