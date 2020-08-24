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
export default {
  extends: 'lighthouse:default',
  categories: {
    seo: {
      title: 'SEO',
      description: 'Ipsum lorem',
      auditRefs: [
        // from SEO category
        {
          id: 'viewport',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'document-title',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'meta-description',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'http-status-code',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'link-text',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'crawlable-anchors',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'is-crawlable',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'robots-txt',
          weight: 1,
          group: 'seo-crawl',
        },
        {
          id: 'image-alt',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'hreflang',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'canonical',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'font-size',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'plugins',
          weight: 1,
          group: 'seo-content',
        },
        {
          id: 'tap-targets',
          weight: 1,
          group: 'seo-mobile',
        },
        {
          id: 'structured-data',
          weight: 0,
        },
        // from accessibility category
        {
          id: 'accesskeys',
          weight: 0,
          group: 'a11y-navigation',
        },
        {
          id: 'aria-allowed-attr',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'aria-hidden-body',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-hidden-focus',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'aria-input-field-name',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-attr',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-children',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-required-parent',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-roles',
          weight: 10,
          group: 'a11y-aria',
        },
        {
          id: 'aria-toggle-field-name',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'aria-valid-attr-value',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'aria-valid-attr',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'button-name',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'bypass',
          weight: 3,
          group: 'a11y-navigation',
        },
        {
          id: 'color-contrast',
          weight: 3,
          group: 'a11y-color-contrast',
        },
        {
          id: 'definition-list',
          weight: 0,
          group: 'a11y-tables-lists',
        },
        {
          id: 'dlitem',
          weight: 0,
          group: 'a11y-tables-lists',
        },
        {
          id: 'duplicate-id-active',
          weight: 0,
          group: 'a11y-navigation',
        },
        {
          id: 'duplicate-id-aria',
          weight: 0,
          group: 'a11y-aria',
        },
        {
          id: 'form-field-multiple-labels',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'frame-title',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'heading-order',
          weight: 2,
          group: 'a11y-navigation',
        },
        {
          id: 'html-has-lang',
          weight: 3,
          group: 'a11y-language',
        },
        {
          id: 'html-lang-valid',
          weight: 3,
          group: 'a11y-language',
        },
        {
          id: 'image-alt',
          weight: 10,
          group: 'a11y-names-labels',
        },
        {
          id: 'input-image-alt',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'label',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'layout-table',
          weight: 0,
          group: 'a11y-tables-lists',
        },
        {
          id: 'link-name',
          weight: 3,
          group: 'a11y-names-labels',
        },
        {
          id: 'list',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'listitem',
          weight: 3,
          group: 'a11y-tables-lists',
        },
        {
          id: 'meta-refresh',
          weight: 0,
          group: 'a11y-best-practices',
        },
        {
          id: 'meta-viewport',
          weight: 10,
          group: 'a11y-best-practices',
        },
        {
          id: 'object-alt',
          weight: 0,
          group: 'a11y-names-labels',
        },
        {
          id: 'tabindex',
          weight: 0,
          group: 'a11y-navigation',
        },
        {
          id: 'td-headers-attr',
          weight: 0,
          group: 'a11y-tables-lists',
        },
        {
          id: 'th-has-data-cells',
          weight: 0,
          group: 'a11y-tables-lists',
        },
        {
          id: 'valid-lang',
          weight: 0,
          group: 'a11y-language',
        },
        {
          id: 'video-caption',
          weight: 0,
          group: 'a11y-audio-video',
        },
        {
          id: 'video-description',
          weight: 0,
          group: 'a11y-audio-video',
        },
        {
          id: 'logical-tab-order',
          weight: 0,
        },
        {
          id: 'focusable-controls',
          weight: 0,
        },
        {
          id: 'interactive-element-affordance',
          weight: 0,
        },
        {
          id: 'managed-focus',
          weight: 0,
        },
        {
          id: 'focus-traps',
          weight: 0,
        },
        {
          id: 'custom-controls-labels',
          weight: 0,
        },
        {
          id: 'custom-controls-roles',
          weight: 0,
        },
        {
          id: 'visual-order-follows-dom',
          weight: 0,
        },
        {
          id: 'offscreen-content-hidden',
          weight: 0,
        },
        {
          id: 'use-landmarks',
          weight: 0,
        },
      ],
    },
  },
  // example custom title and description
  groups: {
    'seo-mobile': {
      title: 'Mobile Friendly',
      description: `Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/).`,
    },
  },
  settings: {
    emulatedFormFactor: 'mobile',
    onlyCategories: ['seo'],
    throttling: throttling.mobileSlow4G,
    throttlingMethod: 'simulate',
  },
};
