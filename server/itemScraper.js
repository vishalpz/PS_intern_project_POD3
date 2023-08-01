import puppeteer from "puppeteer";
import fs from 'fs';
import cheerio from 'cheerio';
import axios from "axios";

export default async function scrapeItems() {
    
    // Set up Puppeteer
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 720});
    page.setDefaultTimeout(1000000);

    // Get items URLs
    const sitemapUrl = "https://groceries.asda.com/sitemap-products.xml";
    let { data } = await axios.get(sitemapUrl);
    const sitemapUrls = cheerio.load(data);

    var itemsUrl = '';
    const itemsUrls = [];

    // Store each items URL into array
    sitemapUrls('loc').each( (idx, el) => {
        itemsUrl = sitemapUrls(el).text();
        itemsUrls.push(itemsUrl);
        //console.log(itemsUrl);
    });


    // Go through items URLs
    let i = 0;
    for (const url of itemsUrls) {
        if (i === 0 ) {
            console.log(url);
            await page.goto(url);
            // Wait for items modal to load
            await page.waitForSelector('.product-detail-page__main-cntr');

            // Click 'Accept' for Privacy Policy
            try {
                await page.click('#onetrust-accept-btn-handler');
            }
            catch(err){
            }
            // Go to Details tab of items
            //await page.click('.asda-tab[aria-label="Details"]');

            
            const content = await page.content();

            // Load HTML into Cheerio and find the JSON with items info 
            const $ = cheerio.load(content);
            var scripts = $('script[type="application/ld+json"]');

            // There are two JSONs but only the second one is the one we want so dump that
            scripts.each( (idx, el) => {
                if (idx === 1) {
                    //console.log($(el).text());
                    const obj = JSON.parse($(el).text());
                    console.log(obj);
                    fs.writeFileSync('scriptdump.json', $(el).text());
                }
            });

            var description = $('div.pdp-main-details');
            //var description = $('pdp-description-reviews__product-details-cntr');
            description.each((i, div) => {
                const obj = $(div).text()
                console.log(obj);

            });
            
        }
        
    };

}

