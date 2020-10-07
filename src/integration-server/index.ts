import express from 'express';
import fetch from 'node-fetch';
import http from 'http';
import CatPicDataInterface from '../interfaces/CatPicData';
import page from './content/page';
import getDocument from './content/getDocument';

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

app.get('/', async (_req, res) => {
  const catPicData = await fetchKitty();
  return res.send(
    getDocument({
      content: page({
        catPicData,
        h1: 'Hello world',
      }),
      description: `Cry louder at ipsum reflection leave dead animals as gifts bite nose of your human chew the plant no, you can't close the door lorem.`,
      title: `Cry louder at ipsum reflection leave dead animals as gifts lorem`,
    }),
  );
});

export const PORT = process.env.PORT || 3000;

export default http.createServer(app);
