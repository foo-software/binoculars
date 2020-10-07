import { Audit } from 'lighthouse';
import ElementsInterface from '../../interfaces/Elements';
import AuditScore from '../../interfaces/AuditScore';

export const UIStrings = {
  title: 'Has `<h1>` and `<h2>` headings',
  failureTitle: 'Does not have both `<h1>` and `<h2>` headings',
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
      requiredArtifacts: ['Elements'],
    };
  }

  static audit(artifacts: { Elements: ElementsInterface }): AuditScore {
    const elements = artifacts.Elements;
    return {
      score: elements.h1.length && elements.h2.length && 1,
    };
  }
}
