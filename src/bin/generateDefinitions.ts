#!/usr/bin/env node
import camelcase from 'camelcase';
import fs from 'fs';
import path from 'path';
import Collection from '../interfaces/Collection';
import getDocumentationLinks from '../helpers/getDocumentationLinks';
import getDocumentationElements from '../helpers/getDocumentationElements';
import * as audits from '../config/audits/lighthouse';
import * as categories from '../config/categories';
import * as groups from '../config/groups';

const definitionPath = path.resolve('src/definitions');
const definitionIndexPath = path.resolve('src/definitions/index.ts');
const glossaryPath = path.resolve('src/glossary.ts');

const generateDefinitions = async (Collection: Collection) => {
  const urls: Array<string> = [];

  for (const key in Collection) {
    const { description } = Collection[key]();
    const descriptionLinks = getDocumentationLinks(description);

    if (descriptionLinks.length) {
      urls.push(...descriptionLinks);
    }
  }

  for (const url of urls) {
    const parts = url.split('/');
    const name = parts[parts.length - 2];
    const elements = await getDocumentationElements(url);

    let content = `export default [`;
    for (const element of elements) {
      content += `\n  \`${element}\`,`;
    }
    content += '\n];\n';

    // create definition file
    fs.writeFileSync(`${definitionPath}/${name}.ts`, content);

    // update exports
    let exportContent = fs.readFileSync(definitionIndexPath, 'utf8');
    exportContent = exportContent.replace(
      '// replace me',
      `export { default as ${camelcase(
        name,
      )} } from './${name}';\n// replace me`,
    );
    fs.writeFileSync(definitionIndexPath, exportContent);

    // update glossary
    let glossaryContent = fs.readFileSync(glossaryPath, 'utf8');
    glossaryContent = glossaryContent.replace(
      '// replace me',
      `'${name}',\n  // replace me`,
    );
    fs.writeFileSync(glossaryPath, glossaryContent);
  }
};

(async () => {
  await generateDefinitions(audits);
  await generateDefinitions(categories);
  await generateDefinitions(groups);
})();
