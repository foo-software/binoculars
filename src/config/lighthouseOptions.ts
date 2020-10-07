export const PORT = process.env.BINOCULARS_CHROME_PORT || 4000;

export default {
  chromeFlags: [
    '--disable-dev-shm-usage',
    '--headless',
    '--no-sandbox',
    '--ignore-certificate-errors',
  ],
  port: PORT,
};
