import { Audit } from 'lighthouse';
import { ElementsInterface } from '../../gatherers/elements';
import AuditScore from '../../interfaces/AuditScore';

const MIN_DIVERSITY = 2;

export const UIStrings = {
  title: 'Meaningful tag structure',
  failureTitle: `Does not have at least ${MIN_DIVERSITY} different informational HTML tags of the following types: p, li, img, table`,
  description:
    'Semantic HTML with a variety of tags defining content will improve signaling to search engines.',
};

export default class MeaningfulTagStructure extends Audit {
  static get meta() {
    return {
      id: 'meaningful-tag-structure',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['Elements'],
    };
  }

  static audit(artifacts: { Elements: ElementsInterface }): AuditScore {
    const { img, li, p, table } = artifacts.Elements;

    const diversity = [img, li, p, table].reduce((accumulator, current) => {
      if (!current.length) {
        return accumulator;
      }

      return accumulator + 1;
    }, 0);

    return {
      score: diversity < MIN_DIVERSITY ? 0 : 1,
    };
  }
}