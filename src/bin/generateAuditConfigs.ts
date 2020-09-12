#!/usr/bin/env node
import shell from 'shelljs';

const audits = [
  { name: 'accesskeys', path: 'accessibility/accesskeys' },
  { name: 'aria-allowed-attr', path: 'accessibility/aria-allowed-attr' },
  { name: 'aria-hidden-body', path: 'accessibility/aria-hidden-body' },
  { name: 'aria-hidden-focus', path: 'accessibility/aria-hidden-focus' },
  {
    name: 'aria-input-field-name',
    path: 'accessibility/aria-input-field-name',
  },
  { name: 'aria-required-attr', path: 'accessibility/aria-required-attr' },
  {
    name: 'aria-required-children',
    path: 'accessibility/aria-required-children',
  },
  { name: 'aria-required-parent', path: 'accessibility/aria-required-parent' },
  { name: 'aria-roles', path: 'accessibility/aria-roles' },
  {
    name: 'aria-toggle-field-name',
    path: 'accessibility/aria-toggle-field-name',
  },
  { name: 'aria-valid-attr', path: 'accessibility/aria-valid-attr' },
  {
    name: 'aria-valid-attr-value',
    path: 'accessibility/aria-valid-attr-value',
  },
  { name: 'button-name', path: 'accessibility/button-name' },
  { name: 'bypass', path: 'accessibility/bypass' },
  { name: 'canonical', path: 'seo/canonical' },
  { name: 'color-contrast', path: 'accessibility/color-contrast' },
  { name: 'crawlable-anchors', path: 'seo/crawlable-anchors' },
  {
    name: 'custom-controls-labels',
    path: 'accessibility/manual/custom-controls-labels',
  },
  {
    name: 'custom-controls-roles',
    path: 'accessibility/manual/custom-controls-roles',
  },
  { name: 'definition-list', path: 'accessibility/definition-list' },
  { name: 'dlitem', path: 'accessibility/dlitem' },
  { name: 'document-title', path: 'accessibility/document-title' },
  { name: 'duplicate-id-active', path: 'accessibility/duplicate-id-active' },
  { name: 'duplicate-id-aria', path: 'accessibility/duplicate-id-aria' },
  { name: 'focus-traps', path: 'accessibility/manual/focus-traps' },
  {
    name: 'focusable-controls',
    path: 'accessibility/manual/focusable-controls',
  },
  { name: 'font-size', path: 'seo/font-size' },
  {
    name: 'form-field-multiple-labels',
    path: 'accessibility/form-field-multiple-labels',
  },
  { name: 'frame-title', path: 'accessibility/frame-title' },
  { name: 'heading-order', path: 'accessibility/heading-order' },
  { name: 'hreflang', path: 'seo/hreflang' },
  { name: 'html-has-lang', path: 'accessibility/html-has-lang' },
  { name: 'html-lang-valid', path: 'accessibility/html-lang-valid' },
  { name: 'http-status-code', path: 'seo/http-status-code' },
  { name: 'image-alt', path: 'accessibility/image-alt' },
  { name: 'input-image-alt', path: 'accessibility/input-image-alt' },
  {
    name: 'interactive-element-affordance',
    path: 'accessibility/manual/interactive-element-affordance',
  },
  { name: 'is-crawlable', path: 'seo/is-crawlable' },
  { name: 'label', path: 'accessibility/label' },
  { name: 'layout-table', path: 'accessibility/layout-table' },
  { name: 'link-name', path: 'accessibility/link-name' },
  { name: 'link-text', path: 'seo/link-text' },
  { name: 'list', path: 'accessibility/list' },
  { name: 'listitem', path: 'accessibility/listitem' },
  { name: 'logical-tab-order', path: 'accessibility/manual/logical-tab-order' },
  { name: 'managed-focus', path: 'accessibility/manual/managed-focus' },
  { name: 'meta-description', path: 'seo/meta-description' },
  { name: 'meta-refresh', path: 'accessibility/meta-refresh' },
  { name: 'meta-viewport', path: 'accessibility/meta-viewport' },
  { name: 'object-alt', path: 'accessibility/object-alt' },
  {
    name: 'offscreen-content-hidden',
    path: 'accessibility/manual/offscreen-content-hidden',
  },
  { name: 'plugins', path: 'seo/plugins' },
  { name: 'robots-txt', path: 'seo/robots-txt' },
  { name: 'structured-data', path: 'seo/manual/structured-data' },
  { name: 'tabindex', path: 'accessibility/tabindex' },
  { name: 'tap-targets', path: 'seo/tap-targets' },
  { name: 'td-headers-attr', path: 'accessibility/td-headers-attr' },
  { name: 'th-has-data-cells', path: 'accessibility/th-has-data-cells' },
  { name: 'use-landmarks', path: 'accessibility/manual/use-landmarks' },
  { name: 'valid-lang', path: 'accessibility/valid-lang' },
  { name: 'video-caption', path: 'accessibility/video-caption' },
  { name: 'video-description', path: 'accessibility/video-description' },
  { name: 'viewport', path: 'viewport' },
  {
    name: 'visual-order-follows-dom',
    path: 'accessibility/manual/visual-order-follows-dom',
  },
];

for (const audit of audits) {
  shell.exec(`npm run generate auditConfig ${audit.name} ${audit.path}`);
  shell.exec('npm run test');
}
