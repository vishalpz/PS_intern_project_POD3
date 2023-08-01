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
        if (i > 1784) {
            console.log(i, url);
            await page.goto(url);
            // Wait for recipe modal to load
            await page.waitForSelector('.recipe-modal__content-wrapper');

            // Click 'Accept' for Privacy Policy
            try {
                await page.click('#onetrust-accept-btn-handler');
            } catch (err) {

            }
            
            // Go to Details tab of recipes
            await page.click('.asda-tab[aria-label="Details"]');

            
            const content = await page.content();

            // Load HTML into Cheerio 
            const $ = cheerio.load(content);

            // 1) Find the JSON with recipe info 
            var scripts = $('script[type="application/ld+json"]');

            var recipeDetails = '';
            var nutritionInfo = '';

            // There are two JSONs but only the second one is the one we want so dump that
            scripts.each( (idx, el) => {
                if (idx === 1) {
                    recipeDetails = JSON.parse($(el).text());
                    //console.log(recipeDetails);
                    //fs.writeFileSync('scriptdump.json', $(el).text());
                }
            });

            // 2) Get recipe nutritional info
            var nutritionContainer = $('.nutrition-panel__item');
            nutritionContainer.each( (idx, el) => {
                nutritionInfo = $(el).attr('aria-label');
                //console.log(nutritionInfo);
            });
            //console.log('');
            const recipeData = `This recipe is ${recipeDetails.name}.\
${recipeDetails.description}.\
Keywords to describe this recipe are: ${recipeDetails.keywords}.\
The categories of this recipe are ${recipeDetails.recipeCategory}.\
The ingredients needed are: ${recipeDetails.recipeIngredient}.\
The cuisine is ${recipeDetails.recipeCuisine}.\
The instructions are: ${recipeDetails.recipeInstructions}.\
The total amount of calories is ${recipeDetails.nutrition.calories}.\n`
            
            fs.appendFileSync('recipedetails.txt', recipeData);

            
        }
        i++;
    };


}
