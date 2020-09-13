export default [
  `<p>Screen readers and other assistive technologies
require list items (<code>&lt;li&gt;</code>) to be contained
within parent <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> to be announced properly.</p>`,
  `<p>When assistive technologies come to a list,
they notify users how many items are within the list.
If you don't wrap list items in a parent list element,
assistive technologies can't set user expectations correctly.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags list items (<code>&lt;li&gt;</code>) that aren't contained
in <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> parent elements:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/listitem/listitem.png" alt="Lighthouse audit showing list item isn't contained within a parent list">
</figure>`,
  `<h2>How to fix orphaned list items <a class="w-headline-link" href="#how-to-fix-orphaned-list-items" aria-hidden="true">#</a></h2>`,
  `<p>Wrap any orphaned <code>&lt;li&gt;</code> elements inside a <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> element.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/listitem.js">Source code for <strong>List items (<code>&lt;li&gt;</code>) are not contained within <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> parent elements</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/listitem"><code>&lt;li&gt;</code> elements must be contained in a <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> (Deque University)</a></li>
<li><a href="https://web.dev/listitem/" rel="noopener">List items (<li>) are not contained within <ul> or <ol> parent elements</a></li></ul>`,
];
