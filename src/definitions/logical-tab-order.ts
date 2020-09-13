export default [
  `<p>Many different users rely on the keyboard to navigate applications,
from users with temporary and permanent motor impairments
to users who use keyboard shortcuts to be more efficient and productive.
A logical tab order is an important part
of providing a smooth keyboard navigation experience.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To check if your application's tab order is logical,
try tabbing through your page.
The order in which elements are focused should aim to follow the DOM order.
In general,
focus should follow reading order, moving from left to right,
from the top to the bottom of your page.</p>`,
  `<p>Learn more in <a href="/keyboard-access">Keyboard access fundamentals</a>.</p>`,
  `<p>Are you able to reach all of the interactive controls on the page?
If not, you may need to use <code>tabindex</code> to improve the focusability of those controls.
The general rule of thumb is that any control a user can interact with or provide input to
should aim to be focusable and display a focus indicator.
If a keyboard user can't see what's focused, they have no way of interacting with the page.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>If the focus order seems wrong,
you should rearrange the elements in the DOM to make the tab order more natural.</p>`,
  `<p>If you aren't able to reach all of the interactive controls on the page,
the first go-to fix is to replace custom controls with native HTML alternatives.
For example,
replace a <code>&lt;div&gt;</code> acting like a button with <code>&lt;button&gt;</code>.
Using built-in HTML elements can greatly improve the accessibility of your site,
and significantly cut down on your workload.</p>`,
  `<p>If you're building custom interactive components with no native HTML equivalent,
use the <code>tabindex</code> attribute to ensure that they're keyboard accessible.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Focus me with the TAB key<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Learn more in <a href="/control-focus-with-tabindex">Control focus with tabindex</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/logical-tab-order.js">Source code for <strong>The page has a logical tab order</strong> audit</a><li><a href="https://web.dev/logical-tab-order/" rel="noopener">The page has a logical tab order</a></li></p>`,
];
