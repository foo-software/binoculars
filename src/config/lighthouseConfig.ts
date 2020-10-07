import { seoAuditRefs } from './auditRefsConfig';
import a11yAria from './groups/a11y-aria';
import a11yAudioVideo from './groups/a11y-audio-video';
import a11yBestPractices from './groups/a11y-best-practices';
import a11yColorContrast from './groups/a11y-color-contrast';
import a11yLanguage from './groups/a11y-language';
import a11yNamesLabels from './groups/a11y-names-labels';
import a11yNavigation from './groups/a11y-navigation';
import a11yTablesLists from './groups/a11y-tables-lists';
import DescriptionLengthAudit from '../audits/seo/description-length';
import ElementsGatherer from '../gatherers/elements';
import HeadingsAudit from '../audits/seo/headings';
import KeywordsAudit from '../audits/seo/keywords';
import meaningfulContent from './groups/meaningful-content';
import MeaningfulTagStructureAudit from '../audits/seo/meaningful-tag-structure';
import MeaningfulTextAudit from '../audits/seo/meaningful-text';
import seo from './categories/seo';
import seoContent from './groups/seo-content';
import seoCrawl from './groups/seo-crawl';
import seoMobile from './groups/seo-mobile';
import TitleElementGatherer from '../gatherers/title-element';
import TitleLengthAudit from '../audits/seo/title-length';

// much of this was taken from
// https://github.com/GoogleChrome/lighthouse/blob/b834427d676dc77e112d124ca42cc588f896950e/lighthouse-core/config/constants.js#L8-L41
/**
 * Adjustments needed for DevTools network throttling to simulate
 * more realistic network conditions.
 * @see https://crbug.com/721112
 * @see https://docs.google.com/document/d/10lfVdS1iDWCRKQXPfbxEn4Or99D64mvNlugP1AQuFlE/edit
 */
const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const throttling = {
  DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
  DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
  // These values align with WebPageTest's definition of 'Fast 3G'
  // But offer similar charateristics to roughly the 75th percentile of 4G connections.
  mobileSlow4G: {
    rttMs: 150,
    throughputKbps: 1.6 * 1024,
    requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 1.6 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 750 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    cpuSlowdownMultiplier: 4,
  },
  // These values partially align with WebPageTest's definition of 'Regular 3G'.
  // These values are meant to roughly align with Chrome UX report's 3G definition which are based
  // on HTTP RTT of 300-1400ms and downlink throughput of <700kbps.
  mobileRegluar3G: {
    rttMs: 300,
    throughputKbps: 700,
    requestLatencyMs: 300 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 700 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    cpuSlowdownMultiplier: 4,
  },
  // Using a 'broadband' connection type
  // Corresponds to 'Dense 4G 25th percentile' in https://docs.google.com/document/d/1Ft1Bnq9-t4jK5egLSOc28IL4TvR-Tt0se_1faTA4KTY/edit#heading=h.bb7nfy2x9e5v
  desktopDense4G: {
    rttMs: 40,
    throughputKbps: 10 * 1024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 0, // 0 means unset
    downloadThroughputKbps: 0,
    uploadThroughputKbps: 0,
  },
};

// https://github.com/GoogleChrome/lighthouse/blob/master/docs/configuration.md
// okay, maybe a little different from...
// https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/perf-config.js
export default (locale: string | undefined | unknown) => ({
  extends: 'lighthouse:default',
  audits: [
    DescriptionLengthAudit,
    HeadingsAudit,
    KeywordsAudit,
    MeaningfulTagStructureAudit,
    MeaningfulTextAudit,
    TitleLengthAudit,
  ],
  categories: {
    binocularsSeo: {
      ...seo(locale),
      auditRefs: seoAuditRefs,
    },
  },
  groups: {
    'a11y-aria': a11yAria(locale),
    'a11y-audio-video': a11yAudioVideo(locale),
    'a11y-best-practices': a11yBestPractices(locale),
    'a11y-color-contrast': a11yColorContrast(locale),
    'a11y-language': a11yLanguage(locale),
    'a11y-names-labels': a11yNamesLabels(locale),
    'a11y-navigation': a11yNavigation(locale),
    'a11y-tables-lists': a11yTablesLists(locale),
    'meaningful-content': meaningfulContent(),
    'seo-content': seoContent(locale),
    'seo-crawl': seoCrawl(locale),
    'seo-mobile': seoMobile(locale),
  },
  passes: [
    {
      passName: 'defaultPass',
      gatherers: [ElementsGatherer, TitleElementGatherer],
    },
  ],
  settings: {
    emulatedFormFactor: 'mobile',
    onlyCategories: ['binocularsSeo'],
    throttling: throttling.mobileSlow4G,
    throttlingMethod: 'simulate',
  },
});
