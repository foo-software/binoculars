#!/usr/bin/env node
import * as chromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import meow from 'meow';
import puppeteer from 'puppeteer';
import lighthouseConfig from '../lighthouseConfig';
import lighthouseOptions from '../lighthouseOptions';

const cli = meow();
const { url } = cli.flags;
const PUPPETEER_TIMEOUT = 10000; // 10 seconds

const binoculars = async () => {
  let browser;

  // we need to kill chrome if something goes wrong, so we pull it up
  // into the function scope to be accessible in the catch block.
  let chrome;

  try {
    console.log('Launching Chrome...');
    chrome = await chromeLauncher.launch({
      chromeFlags: lighthouseOptions.chromeFlags,
      port: lighthouseOptions.port,
    });
    console.log('Chrome launched ✔️');

    console.log('Auditing with Lighthouse...');
    const results = await lighthouse(url, lighthouseOptions, lighthouseConfig);

    console.log('Killing Chrome...');
    await chrome.kill();

    console.log(
      'Lighthouse audit complete ✔️',
      JSON.parse(JSON.stringify(results.lhr)),
    );
  } catch (error) {
    // make sure we kill chrome
    if (chrome) {
      await chrome.kill();
    }

    console.error(error);
    process.exit(1);
  }

  try {
    console.log('Launching Puppeteer...');
    browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      ...(process.env.LOG_LEVEL !== 'debug' ? {} : { dumpio: true }),
    });
    console.log('Puppeteer launched ✔️');

    console.log('Navigating to URL...');
    const page = await browser.newPage();
    page.setDefaultTimeout(PUPPETEER_TIMEOUT);
    page.setDefaultNavigationTimeout(PUPPETEER_TIMEOUT);

    await page.goto(`${url}`);
    console.log('Navigation complete ✔️');

    console.log('Evaluting page data...');
    const dataString = await page.evaluate(async () => {
      const title = document.querySelector('title');
      return JSON.stringify({
        title: !title ? null : title.innerText,
      });
    });

    const pageData = JSON.parse(dataString);
    console.log('Page evaluation complete ✔️', pageData);

    await browser.close();
  } catch (error) {
    if (browser) {
      await browser.close();
    }

    console.error(error);
    process.exit(1);
  }

  process.exit(0);
};

binoculars();

export default binoculars;
