import replaceLinks from './replaceLinks';

const icons = `
  <link rel="shortcut icon" href="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-16.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-16.png">
`;

const logo = `
  <img src="https://lighthouse-check.s3.amazonaws.com/images/logo-simple-blue-light-180.png" class="lh-topbar__logo" />
`;

const iconRegex = /<\s*link rel="icon"[^>]*>/g;
const viewerRegex = /<\s*a role="menuitem" tabindex="-1" href="#" class="report-icon report-icon--open lh-tools--viewer"[^>]*>(.*?)<\s*\/\s*a>/g;
const lhGeneratedPrefix = '<div class="lh-generated"';
const logoPrefix = '<svg class="lh-topbar__logo"';
const hideStyle = ' style="display: none"';

export default (reportContent: string) => {
  let content = reportContent;
  content = content.replace(/Lighthouse Report/g, 'Binoculars Report');
  content = content.replace(iconRegex, icons);
  content = content.replace(viewerRegex, '');
  content = content.replace(logoPrefix, `${logo}${logoPrefix}${hideStyle}`);
  content = content.replace(
    lhGeneratedPrefix,
    `${lhGeneratedPrefix}${hideStyle}`,
  );
  return replaceLinks(content);
};
