import puppeteer from "puppeteer";
import fs from 'fs';
import cheerio from 'cheerio';
import axios from "axios";

export default async function scrapeRecipes() {
    
    // Set up Puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 720});
    page.setDefaultTimeout(10000);

    // Get recipe URLs
    const sitemapUrl = "https://groceries.asda.com/sitemap-recipes.xml";
    let { data } = await axios.get(sitemapUrl);
    const sitemapUrls = cheerio.load(data);

    var recipeUrl  = '';
    const recipeUrls = [];

    // Store each recipe URL into array
    sitemapUrls('loc').each( (idx, el) => {
        recipeUrl = sitemapUrls(el).text();
        recipeUrls.push(recipeUrl);
    });

    // Go through recipe URLs
    let i = 0;
    for (const url of recipeUrls) {
        if (i === 0 ) {
            console.log(url);
            await page.goto(url);
            // Wait for recipe modal to load
            await page.waitForSelector('.recipe-modal__content-wrapper');

            // Click 'Accept' for Privacy Policy
            await page.click('#onetrust-accept-btn-handler');
            // Go to Details tab of recipes
            await page.click('.asda-tab[aria-label="Details"]');

            
            const content = await page.content();

            // Load HTML into Cheerio and find the JSON with recipe info 
            const $ = cheerio.load(content);
            var scripts = $('script[type="application/ld+json"]');

            // There are two JSONs but only the second one is the one we want so dump that
            scripts.each( (idx, el) => {
                if (idx === 1) {
                    console.log($(el).text());
                    fs.writeFileSync('scriptdump.json', $(el).text());
                }
            });
            i++;
        }
        
    };

}

