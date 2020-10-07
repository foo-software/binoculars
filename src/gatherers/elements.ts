import { Gatherer } from 'lighthouse';
import pageFunctions from 'lighthouse/lighthouse-core/lib/page-functions';
import ElementInterface from '../interfaces/Element';
import ElementsInterface from '../interfaces/Elements';
import ImageElementInterface from '../interfaces/ImageElement';

function getElement(node: HTMLElement): ElementInterface {
  return {
    text: (node.innerText && node.innerText.trim()) || null,
  };
}

function getImageElement(node: HTMLImageElement): ImageElementInterface {
  return {
    src: node.src || null,
  };
}

function collectElements(): ElementsInterface {
  // @ts-expect-error - put into scope via stringification
  const bodyElements = getElementsInDocument('body');

  // @ts-expect-error - put into scope via stringification
  const h1Elements = getElementsInDocument('h1');

  // @ts-expect-error - put into scope via stringification
  const h2Elements = getElementsInDocument('h2');

  // @ts-expect-error - put into scope via stringification
  const imgElements = getElementsInDocument('img');

  // @ts-expect-error - put into scope via stringification
  const liElements = getElementsInDocument('li');

  // @ts-expect-error - put into scope via stringification
  const pElements = getElementsInDocument('p');

  // @ts-expect-error - put into scope via stringification
  const tableElements = getElementsInDocument('table');

  return {
    body: bodyElements.map(getElement),
    h1: h1Elements.map(getElement),
    h2: h2Elements.map(getElement),
    img: imgElements.map(getImageElement),
    li: liElements.map(getElement),
    p: pElements.map(getElement),
    table: tableElements.map(getElement),
  };
}

export default class Elements extends Gatherer {
  async afterPass(passContext: any): Promise<ElementInterface[]> {
    const driver = passContext.driver;
    const expression = `(() => {
      ${pageFunctions.getElementsInDocumentString};
      ${getElement.toString()};
      ${getImageElement.toString()};

      return (${collectElements})();
    })()`;

    const result = await driver.evaluateAsync(expression, {
      useIsolation: true,
    });
    return result;
  }
}
