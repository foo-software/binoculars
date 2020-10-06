import { Audit } from 'lighthouse';
import { ElementsInterface } from '../../gatherers/elements';
import AuditScore from '../../interfaces/AuditScore';

export const MIN_TEXT_LENGTH = 300;

export const UIStrings = {
  title: 'Has sufficient, meaningful text content',
  failureTitle: `Document body does not have at least ${MIN_TEXT_LENGTH} characters`,
  description: `A minimal amount of textual content is necessary for search engines to pickup. Document body should have at least ${MIN_TEXT_LENGTH} characters.`,
};

export default class MeaningfulText extends Audit {
  static get meta() {
    return {
      id: 'meaningful-text',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['Elements'],
    };
  }

  static audit(artifacts: { Elements: ElementsInterface }): AuditScore {
    const {
      body: [body],
    } = artifacts.Elements;

    return {
      score: !body || !body.text || body.text.length < MIN_TEXT_LENGTH ? 0 : 1,
    };
  }
}
