import fetch from 'node-fetch';
import BinocularsResultInterface from '../interfaces/BinocularsResult';

export default async ({
  commentAccessToken,
  commentUrl,
  results,
}: {
  commentAccessToken: string;
  commentUrl: string;
  results: BinocularsResultInterface[];
}) => {
  let markdown = '\n<table><tr><th colspan="3">Binoculars Results</th></tr>';

  // table header
  const reportHeader = !results[0].report ? '' : '<th>report</th>';
  markdown += `<tr><th>url</th>${reportHeader}<th>score</th></tr>`;

  results.forEach((result) => {
    const urlCell = `<td>${result.url}</td>`;
    const scoreCell = `<td><code>${
      result.result.categories.binocularsSeo.score * 100
    }</code></td>`;
    const reportCell = !result.report
      ? ''
      : `<td><a href="${result.report}">report</a></td>`;

    markdown += `<tr>${urlCell}${reportCell}${scoreCell}</tr>`;
  });

  // table end
  markdown += `</table>\n\n`;

  // create an identifier within the comment when searching comments
  // in the future
  const commentIdentifier = '<!-- generated by binoculars -->';
  markdown += commentIdentifier;

  // establish existing comment
  let existingComment;

  // get existing comments to see if we've already posted scores
  const existingCommentsResult = await fetch(commentUrl, {
    method: 'get',
    headers: {
      'content-type': 'application/json',
      authorization: `token ${commentAccessToken}`,
    },
  });
  const existingCommentsJsonResult = await existingCommentsResult.json();

  if (
    Array.isArray(existingCommentsJsonResult) &&
    existingCommentsJsonResult.length
  ) {
    existingComment = existingCommentsJsonResult.find((current) =>
      current.body.includes(commentIdentifier),
    );
  }

  // create or update the comment with scores
  const shouldUpdate = existingComment && existingComment.id;
  const url = !shouldUpdate
    ? commentUrl
    : `${commentUrl}/${existingComment.id}`;

  const result = await fetch(url, {
    method: !shouldUpdate ? 'post' : 'put',
    body: JSON.stringify({
      ...(shouldUpdate
        ? {}
        : {
            event: 'COMMENT',
          }),
      body: markdown,
    }),
    headers: {
      'content-type': 'application/json',
      authorization: `token ${commentAccessToken}`,
    },
  });
  const jsonResult = await result.json();

  if (!jsonResult.id) {
    throw Error(jsonResult.message || 'unknown error');
  }
};
