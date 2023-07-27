import puppeteer from "puppeteer";
import fs from 'fs';
export default async function puppetTest() {
    // const json = parser.toJson(sitemapXml, {
    //     object: true,
    //     coerce: true,
    // });
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 720});
    page.setDefaultTimeout(10000);

    await page.goto('https://groceries.asda.com/recipes/Halloween-popcorn/384edd0d-2aff-11e9-8802-7daf07a34f81');
    await page.waitForSelector('.recipe-modal__content-wrapper');

    // YOU GET THE IDEA
    const content = await page.content();
    fs.writeFileSync(`test.html`, content);

}

