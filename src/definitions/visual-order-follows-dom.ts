export default [
  `<p>Implementing a logical tab order is an important part of
providing your users with a smooth keyboard navigation experience.
Screen readers and other assistive technologies navigate the page in DOM order.
The flow of information should make sense.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To check if your application's tab order is logical,
try tabbing through your page.
In general,
focus should follow reading order,
moving from left to right,
from the top to the bottom of your page.</p>`,
  `<p>There are two main ideas to keep in mind when assessing your tab order:</p>`,
  `<ul>
<li>Are the elements in the DOM arranged in a logical order?</li>
<li>Is offscreen content correctly hidden from navigation?</li>
</ul>`,
  `<p>Notice any jumps in navigation that seem jarring.
Also notice any offscreen jumps,
where tabbing brings you to content that's not meant to be visible.</p>`,
  `<p>Learn more in <a href="/keyboard-access">Keyboard access fundamentals</a>.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>If the focus order seems wrong,
you should rearrange the elements in the DOM to make the tab order more natural.</p>`,
  `<p>If you've used CSS to visually reposition elements,
assistive technology users will experience a nonsensical navigation.
Instead of using CSS,
move the element to an earlier position in the DOM.</p>`,
  `<p>If offscreen content is still accessible to keyboard controls,
consider removing it using <code>tabindex="-1"</code>.</p>`,
  `<p>Learn more in <a href="/control-focus-with-tabindex">Control focus with tabindex</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/visual-order-follows-dom.js">Source code for <strong>Visual order on the page follows DOM order</strong> audit</a><li><a href="https://web.dev/visual-order-follows-dom/" rel="noopener">Visual order on the page follows DOM order</a></li></p>`,
];
