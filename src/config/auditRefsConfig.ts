export const seoAuditRefs = [
  // custom Binoculars content group
  {
    id: 'title-length',
    group: 'meaningful-content',
    weight: 7,
  },
  {
    id: 'description-length',
    group: 'meaningful-content',
    weight: 7,
  },
  {
    id: 'headings',
    group: 'meaningful-content',
    weight: 5,
  },
  {
    id: 'meaningful-text',
    group: 'meaningful-content',
    weight: 5,
  },
  {
    id: 'meaningful-tag-structure',
    group: 'meaningful-content',
    weight: 5,
  },
  {
    id: 'keywords',
    group: 'meaningful-content',
    weight: 7,
  },
  // from SEO category
  {
    id: 'viewport',
    weight: 5,
    group: 'seo-mobile',
  },
  {
    id: 'document-title',
    weight: 10,
    group: 'seo-content',
  },
  {
    id: 'meta-description',
    weight: 10,
    group: 'seo-content',
  },
  {
    id: 'http-status-code',
    weight: 1,
    group: 'seo-crawl',
  },
  {
    id: 'link-text',
    weight: 2,
    group: 'seo-content',
  },
  {
    id: 'crawlable-anchors',
    weight: 1,
    group: 'seo-crawl',
  },
  {
    id: 'is-crawlable',
    weight: 5,
    group: 'seo-crawl',
  },
  {
    id: 'robots-txt',
    weight: 2,
    group: 'seo-crawl',
  },
  {
    id: 'image-alt',
    weight: 1,
    group: 'seo-content',
  },
  {
    id: 'hreflang',
    weight: 2,
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
    weight: 5,
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
    weight: 5,
    group: 'a11y-aria',
  },
  {
    id: 'aria-required-parent',
    weight: 5,
    group: 'a11y-aria',
  },
  {
    id: 'aria-roles',
    weight: 5,
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
    weight: 3,
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
];
