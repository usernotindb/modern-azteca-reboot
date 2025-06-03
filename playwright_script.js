import { chromium } from 'playwright';

async function getLinks(pagePath) {
  let browser;
  try {
    browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const url = `${process.env.BASE_URL}${pagePath}`;
    console.log(`Navigating to ${url}...`);
    // Increased timeout and changed waitUntil strategy
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });

    // Keep a small delay for any post-load rendering
    await page.waitForTimeout(3000);

    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('a')).map(anchor => ({
        href: anchor.getAttribute('href'),
        text: anchor.textContent.trim()
      }));
    });
    console.log(`Found ${links.length} links on ${pagePath}`);
    return links;
  } catch (error) {
    console.error(`Error processing page ${pagePath}: ${error.message}`);
    if (error.stack) {
        console.error(error.stack);
    }
    return []; // Return empty array on error
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

(async () => {
  const pagesToTest = ['/', '/about', '/contact', '/products', '/services', '/legal/privacy-policy'];
  const allLinks = {};

  for (const pagePath of pagesToTest) {
    const links = await getLinks(pagePath);
    allLinks[pagePath] = links;
  }

  console.log('--- EXTRACTED LINKS (JSON) ---');
  console.log(JSON.stringify(allLinks, null, 2));

  console.log('\n--- LINK ANALYSIS SUMMARY ---');
  for (const pagePath in allLinks) {
    console.log(`\nPage: ${pagePath}`);
    let internalCount = 0;
    let externalCount = 0;
    let hashCount = 0;
    let mailtoCount = 0;
    let otherCount = 0;

    allLinks[pagePath].forEach(link => {
      if (link.href) {
        if (link.href.startsWith(process.env.BASE_URL) || link.href.startsWith('/')) {
          internalCount++;
        } else if (link.href.startsWith('http')) {
          externalCount++;
        } else if (link.href.startsWith('#')) {
          hashCount++;
        } else if (link.href.startsWith('mailto:')) {
          mailtoCount++;
        } else {
          otherCount++;
        }
      }
    });
    console.log(`  Internal: ${internalCount}, External: ${externalCount}, Hash: ${hashCount}, Mailto: ${mailtoCount}, Other: ${otherCount}`);
  }

})();
