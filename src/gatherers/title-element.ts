import { Gatherer } from 'lighthouse';
import pageFunctions from 'lighthouse/lighthouse-core/lib/page-functions';

function collectTitleElement() {
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
  /**
   * @param {LH.Gatherer.PassContext} passContext
   * @return {Promise<LH.Artifacts['AnchorElements']>}
   */
  async afterPass(passContext: any) {
    const driver = passContext.driver;
    const expression = `(() => {
      ${pageFunctions.getElementsInDocumentString};
      ${pageFunctions.getNodeDetailsString};

      return (${collectTitleElement})();
    })()`;

    const result = await driver.evaluateAsync(expression, {
      useIsolation: true,
    });
    return result;
  }
}
