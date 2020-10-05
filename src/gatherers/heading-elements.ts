import { Gatherer } from 'lighthouse';
import pageFunctions from 'lighthouse/lighthouse-core/lib/page-functions';

interface HeadingElementInterface {
  text: string | null;
}

export interface HeadingElementsInterface {
  h1s: HeadingElementInterface[];
  h2s: HeadingElementInterface[];
}

function isValidHeadingElement(node: HTMLElement): boolean {
  return node instanceof HTMLHeadingElement;
}

function getHeadingElement(node: HTMLHeadingElement): HeadingElementInterface {
  return {
    text: node.innerText,
  };
}

function collectHeadingElements(): HeadingElementsInterface {
  // @ts-expect-error - put into scope via stringification
  const h1Elements = getElementsInDocument('h1');

  // @ts-expect-error - put into scope via stringification
  const h2Elements = getElementsInDocument('h2');

  return {
    h1s: h1Elements.filter(isValidHeadingElement).map(getHeadingElement),
    h2s: h2Elements.filter(isValidHeadingElement).map(getHeadingElement),
  };
}

export default class HeadingElements extends Gatherer {
  async afterPass(passContext: any): Promise<HeadingElementInterface[]> {
    const driver = passContext.driver;
    const expression = `(() => {
      ${pageFunctions.getElementsInDocumentString};
      ${pageFunctions.getNodeDetailsString};
      ${getHeadingElement.toString()};
      ${isValidHeadingElement.toString()};

      return (${collectHeadingElements})();
    })()`;

    const result = await driver.evaluateAsync(expression, {
      useIsolation: true,
    });
    return result;
  }
}
