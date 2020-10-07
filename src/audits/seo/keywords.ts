import { Audit } from 'lighthouse';
import ArtifactsInterface from '../../interfaces/Artifacts';
import AuditScoreInterface from '../../interfaces/AuditScore';
import CollectionInterface from '../../interfaces/Collection';

const MIN_KEYWORD_COUNT = 2;
const MIN_INSTANCE_COUNT = 2;

// wish there was a better way :(
const ignoreWords = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'by',
  'can',
  'cant',
  'for',
  'from',
  'in',
  'in',
  'if',
  'it',
  'let',
  'of',
  'on',
  'out',
  'the',
  'their',
  'them',
  'there',
  'theyre',
  'this',
  'that',
  'to',
  'us',
  'was',
  'we',
  'yall',
  'you',
];

const ignoreWordsMap: CollectionInterface = ignoreWords.reduce(
  (accumulator, current) => ({
    ...accumulator,
    [current]: current,
  }),
  {},
);

const getOnlyLettersAndSpaces = (text: string): string =>
  text
    .replace(/[^a-z A-Z]/gi, '')
    .replace(/  +/g, ' ')
    .toLowerCase();

export const UIStrings = {
  title: 'Has keyword content',
  failureTitle: `Keywords of at least ${MIN_KEYWORD_COUNT} words do not exist in the title, description and exist at least ${MIN_INSTANCE_COUNT} times in the content of the page`,
  description: `Keywords present in the title, description and content of a page help narrow targeted search result ranking. At least ${MIN_KEYWORD_COUNT} words should exist in the title, description and exist at least ${MIN_INSTANCE_COUNT} times in the content of the page`,
};

export default class Keywords extends Audit {
  static get meta() {
    return {
      id: 'keywords',
      title: UIStrings.title,
      failureTitle: UIStrings.failureTitle,
      description: UIStrings.description,
      requiredArtifacts: ['Elements', 'MetaElements', 'TitleElement'],
    };
  }

  static audit(artifacts: ArtifactsInterface): AuditScoreInterface {
    const [body] = artifacts.Elements?.body || [];
    const { MetaElements, TitleElement } = artifacts;

    if (!body || !body.text) {
      return {
        score: 0,
      };
    }

    if (!TitleElement || !TitleElement.text) {
      return {
        score: 0,
      };
    }

    const metaDescription = (MetaElements || []).find(
      (meta: any) => meta.name === 'description',
    );

    if (!metaDescription || !metaDescription.content) {
      return {
        score: 0,
      };
    }

    const content = body.text;
    const description = metaDescription.content;
    const title = TitleElement.text;

    const contentOnlyLetters = getOnlyLettersAndSpaces(content);
    const descriptionOnlyLetters = getOnlyLettersAndSpaces(description);
    const titleOnlyLetters = getOnlyLettersAndSpaces(title);

    const words = titleOnlyLetters
      .split(' ')
      .reduce((accumulator: any[], word: string) => {
        if (ignoreWordsMap[word]) {
          return accumulator;
        }

        return [
          ...accumulator,
          {
            word,
            descriptionMatches: (
              descriptionOnlyLetters.match(new RegExp(word, 'g')) || []
            ).length,
            contentMatches: (
              contentOnlyLetters.match(new RegExp(word, 'g')) || []
            ).length,
          },
        ];
      }, []);

    let keywordCount = 0;
    for (const word of words) {
      if (
        word.descriptionMatches &&
        word.contentMatches >= MIN_INSTANCE_COUNT
      ) {
        keywordCount++;
      }

      if (keywordCount >= MIN_KEYWORD_COUNT) {
        return {
          score: 1,
        };
      }
    }

    return {
      score: 0,
    };
  }
}
