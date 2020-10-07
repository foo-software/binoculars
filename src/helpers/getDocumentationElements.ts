import puppeteer from 'puppeteer';
import logger from './logger';

const TIMEOUT = 10000; // 10 seconds

export default async (url: string): Promise<Array<string>> => {
  let browser;

  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      ...(process.env.LOG_LEVEL !== 'debug' ? {} : { dumpio: true }),
    });

    logger.info(`browser launched for ${url} ✔️`);

    const page = await browser.newPage();
    page.setDefaultTimeout(TIMEOUT);
    page.setDefaultNavigationTimeout(TIMEOUT);

    await page.goto(`${url}`);

    logger.info('page fetch complete ✔️');

    const dataString = await page.evaluate(async () => {
      const content = document.querySelector('.w-post-content');
      const title = document.querySelector('title');
      const elements: Array<string> = [];
      if (content) {
        let isPreviousElementResourceHeader = false;
        Array.from(content.children).forEach((element) => {
          const tagName = element.tagName.toLowerCase();
          if (
            !element.classList.contains('w-article-header') &&
            !element.classList.contains('w-aside') &&
            !element.classList.contains('w-aside') &&
            !element.classList.contains('w-chips') &&
            !element.classList.contains('w-post-github-link') &&
            tagName !== 'web-feedback'
          ) {
            let html = `${element.innerHTML}`;

            if (isPreviousElementResourceHeader) {
              const resourceItem = `<li><a href="${window.location.href}" rel="noopener">${title?.innerText}</a></li>`;
              html = `${html}${resourceItem}`;
            }

            elements.push(`<${tagName}>${html}</${tagName}>`);

            if (element.id === 'resources') {
              isPreviousElementResourceHeader = true;
            } else {
              isPreviousElementResourceHeader = false;
            }
          }
        });
      }
      return JSON.stringify({
        elements,
      });
    });

    const pageData = JSON.parse(dataString);

    logger.info('page evaluation complete ✔️');

    await browser.close();

    return pageData.elements;
  } catch (error) {
    // we want to close the browser before throwing the error
    if (browser) {
      await browser.close();
    }

    throw error;
  }
};
