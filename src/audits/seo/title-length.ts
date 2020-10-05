import { Audit } from 'lighthouse';

export const UIStrings = {
  title: 'Title should be between 60 - 70 characters',
  failureTitle: 'Title is not between 60 - 70 characters',
  description:
    'A title defines a descriptive summary of a page and should have the right amount of content for search engines to parse.',
  explanation: 'Title text is missing or empty.',
};

export default class TitleLength extends Audit {
  static get meta() {
    return {
      id: 'title-length',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['TitleElement'],
    };
  }

  static audit(artifacts: any) {
    const title = artifacts.TitleElement;

    if (!title || !title.text) {
      return {
        score: 0,
        explanation: UIStrings.explanation,
      };
    }

    const trimmedTitleLength = title.text.trim().length;

    if (trimmedTitleLength < 60 || trimmedTitleLength > 70) {
      return {
        score: 0,
      };
    }

    return {
      score: 1,
    };
  }
}
