#!/usr/bin/env node
import meow from 'meow';

const cli = meow();
const { url } = cli.flags;

const binoculars = () => {
  console.log('binoculars urls', url);
};

binoculars();

export default binoculars;
