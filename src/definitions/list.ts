export default [
  `<p>Screen readers and other assistive technologies depend on lists
being structured properly
to keep users informed of content within the lists.
The only content lists should contain should be within <code>&lt;li&gt;</code> elements.
They can also contain script supporting elements (<code>&lt;script&gt;</code> and <code>&lt;template&gt;</code>).</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags lists that contain content elements that shouldn't be in a list:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/list/list.png" alt="Lighthouse audit showing lists contain content elements that shouldn't be within the lists">
</figure>`,
  `<h2>How to create correctly structured lists <a class="w-headline-link" href="#how-to-create-correctly-structured-lists" aria-hidden="true">#</a></h2>`,
  `<p>Remove any elements in lists that don't belong there.
Ordered and unordered lists must only contain <code>&lt;li&gt;</code>, <code>&lt;script&gt;</code> or <code>&lt;template&gt;</code> elements.</p>`,
  `<p>Valid lists must have parent elements (<code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> elements) and child elements (<code>&lt;li&gt;</code> elements).
Any other content elements are invalid.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/list.js">Source code for <strong>Lists do not contain only <code>&lt;li&gt;</code> elements and script supporting elements (<code>&lt;script&gt;</code> and <code>&lt;template&gt;</code>)</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/list"><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> must only directly contain <code>&lt;li&gt;</code>, <code>&lt;script&gt;</code> or <code>&lt;template&gt;</code> elements (Deque University)</a></li>
<li><a href="https://web.dev/list/" rel="noopener">Lists do not contain only <li> elements and script supporting elements (<script> and <template>)</a></li></ul>`,
];
