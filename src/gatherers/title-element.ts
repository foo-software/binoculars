import { Gatherer } from 'lighthouse';
import pageFunctions from 'lighthouse/lighthouse-core/lib/page-functions';
import ElementInterface from '../interfaces/Element';

function collectTitleElement(): ElementInterface {
  // @ts-expect-error - put into scope via stringification
  const [node] = getElementsInDocument('title') || [];

  if (node instanceof HTMLTitleElement) {
    return {
      text: node.innerText,
    };
  }

  return {
    text: null,
  };
}

export default class TitleElement extends Gatherer {
  async afterPass(passContext: any): Promise<ElementInterface> {
    const driver = passContext.driver;
    const expression = `(() => {
      ${pageFunctions.getElementsInDocumentString};

      return (${collectTitleElement})();
    })()`;

    const result = await driver.evaluateAsync(expression, {
      useIsolation: true,
    });
    return result;
  }
}
