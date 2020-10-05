import { Audit } from 'lighthouse';
import { HeadingElementsInterface } from '../../gatherers/heading-elements';
import AuditScore from '../../interfaces/AuditScore';

export const UIStrings = {
  title: 'Headings',
  failureTitle: 'Does not have both h1 and h2 tags',
  description:
    'Headings are important in signaling a hierarchy of content to the search engine.',
};

export default class Headings extends Audit {
  static get meta() {
    return {
      id: 'headings',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['HeadingElements'],
    };
  }

  static audit(artifacts: {
    HeadingElements: HeadingElementsInterface;
  }): AuditScore {
    const headingElements = artifacts.HeadingElements;
    return {
      score: headingElements.h1s.length && headingElements.h2s.length && 1,
    };
  }
}
