#!/usr/bin/env node
// import fs from 'fs';
// import path from 'path';
import getDocumentationLinks from '../helpers/getDocumentationLinks';
import * as audits from '../config/audits';

interface Audit {
  [key: string]: any;
}

const auditColletion: Audit = audits;
const links = [];

for (const key in auditColletion) {
  const { description } = auditColletion[key]();
  const descriptionLinks = getDocumentationLinks(description);

  if (descriptionLinks.length) {
    links.push(...descriptionLinks);
  }
}

console.log('links', links);
