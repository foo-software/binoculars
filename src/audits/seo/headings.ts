import { Audit } from 'lighthouse';
import AuditScoreInterface from '../../interfaces/AuditScore';
import ArtifactsInterface from '../../interfaces/Artifacts';

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

  static audit(artifacts: ArtifactsInterface): AuditScoreInterface {
    const elements = artifacts.Elements;
    return {
      score: (elements?.h1?.length && elements?.h2?.length && 1) || 0,
    };
  }
}
