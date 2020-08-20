#!/usr/bin/env node
import meow from 'meow';
import puppeteer from 'puppeteer';

const cli = meow();
const { url } = cli.flags;

const TIMEOUT = 10000; // 10 seconds

const binoculars = async () => {
  let browser;

  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      ...(process.env.LOG_LEVEL !== 'debug' ? {} : { dumpio: true }),
    });

    console.log('browser launched ✔️');

    const page = await browser.newPage();
    page.setDefaultTimeout(TIMEOUT);
    page.setDefaultNavigationTimeout(TIMEOUT);

    await page.goto(`${url}`);

    console.log('page fetch complete ✔️');

    const dataString = await page.evaluate(async () => {
      const title = document.querySelector('title');
      return JSON.stringify({
        title: !title ? null : title.innerText,
      });
    });

    const pageData = JSON.parse(dataString);

    console.log('page evaluation complete ✔️', pageData);

    await browser.close();

    process.exit(0);
  } catch (error) {
    if (browser) {
      await browser.close();
    }

    console.error(error);
    process.exit(1);
  }
};

binoculars();

export default binoculars;
