export const LIGHTHOUSE_DOCUMENTATION_WEBSITE = 'https://web.dev';
const regexMarkdownLink = /\[([^[]+)\]\((.*)\)/;
const regexMarkdownLinks = /(?:__|[*#])|\[(.*?)\]\(.*?\)/gm;

export default (text: string): Array<string> => {
  const linkMatches = text.match(regexMarkdownLinks) || [];
  const links: Array<string> = [];

  for (const linkMatch of linkMatches) {
    const linkParts = regexMarkdownLink.exec(linkMatch);
    if (linkParts) {
      const [, , link] = linkParts;

      // only look for documentation links
      if (link.includes(LIGHTHOUSE_DOCUMENTATION_WEBSITE)) {
        links.push(link);
      }
    }
  }
  return links;
};
