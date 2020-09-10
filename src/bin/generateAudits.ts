#!/usr/bin/env node
import shell from 'shelljs';

const audits = [
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
  shell.exec(`npm run generate auditDefinition ${audit.name} ${audit.path}`);
  shell.exec('npm run test');
}
