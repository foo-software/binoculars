import express from 'express';
import fetch from 'node-fetch';
import http from 'http';
import CatPicDataInterface from '../interfaces/CatPicData';
import getDocument from './content/getDocument';
import logger from '../helpers/logger';
import page from './content/page';

const app = express();

const fetchKitty = async (): Promise<CatPicDataInterface> => {
  try {
    const catPicResult = await fetch(
      'https://api.thecatapi.com/v1/images/search',
    );
    const catPicList = await catPicResult.json();
    const [catPicData] = catPicList;

    if (!catPicData.url) {
      throw Error('no url');
    }

    return catPicData;
  } catch (error) {
    return {
      caption: 'Roscoe & Chico',
      height: 1500,
      url: 'https://s3.amazonaws.com/foo.software/images/chico-roscoe.jpg',
      width: 2000,
    };
  }
};

const description = `Cry louder at ipsum reflection leave dead animals as gifts bite nose of your human chew the plant no, you can't close the door lorem.`;
const title = `Cry louder at ipsum reflection leave dead animals as gifts lorem`;
const h1 = 'Hello world';

app.get('/', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,
      }),
      description,
      title,
    }),
  );
});

app.get('/short-description', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,
      }),
      description: 'ipsum lorem',
      title,
    }),
  );
});

app.get('/short-title', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,
      }),
      description,
      title: 'ipsum lorem',
    }),
  );
});

app.get('/no-h1', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
      }),
      description,
      title,
    }),
  );
});

app.get('/missing-keywords', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,
      }),
      description:
        'no keywords in this description no keywords in this description no keywords in this description no keywords in this description',
      title,
    }),
  );
});

app.get('/poor-tag-structure', (_req, res) => {
  return res.send(
    getDocument({
      content: page({
        // because we don't add `catPicData` - the page will not have an image
        h1,
      }),
      description,
      title,
    }),
  );
});

app.get('/no-text', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,

        // "ipsum" and "lorem" are "keywords"
        content: '<h2>ipsum lorem</h2><p>ipsum lorem</p>',
      }),
      description,
      title,
    }),
  );
});

app.get('/fail-all', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1,
        content: '<span>ipsum lorem</span>',
      }),
      description: 'hello world',
      title: 'short title',
    }),
  );
});

const server = http.createServer(app);

export const PORT = process.env.BINOCULARS_INTEGRATION_SERVER_PORT || 3000;
export const HOST =
  process.env.BINOCULARS_INTEGRATION_SERVER_DOMAIN || 'localhost';
export const PROTOCOL =
  process.env.BINOCULARS_INTEGRATION_SERVER_PROTOCOL || 'http';
export const ORIGIN = `${PROTOCOL}://${HOST}:${PORT}`;

export const startServer = () =>
  new Promise((resolve) =>
    server.listen(PORT, () => {
      logger.info(`listening on port ${PORT}`);
      resolve();
    }),
  );

export const stopServer = () =>
  new Promise((resolve) =>
    server.close(() => {
      logger.info('server stopped');
      resolve();
    }),
  );

export default server;
