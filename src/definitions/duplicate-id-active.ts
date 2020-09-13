export default [
  `<p>Each ID in your HTML document must be unique.
Using the same ID on more than one element may cause screen readers and other
assistive technologies to only announce the first element with the shared ID,
preventing users from accessing the later elements.</p>`,
  `<p>Avoiding duplicate IDs for focusable controls like buttons and checkboxes
is particularly important to ensure that users can access
all of your page's functionality.</p>`,
  `<h2>How Lighthouse identifies focusable elements with duplicate IDs <a class="w-headline-link" href="#how-lighthouse-identifies-focusable-elements-with-duplicate-ids" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags focusable elements that have duplicate IDs:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/duplicate-id-active/duplicate-id-active.png" alt="Lighthouse audit showing focusable elements with duplicate IDs">
</figure>`,
  `<p>An element is <em>focusable</em> when keyboard users can navigate to it
using the <code>Tab</code> key.
Focusability differs somewhat across browsers, but in general,
the following elements are focusable:</p>`,
  `<ul>
<li><code>&lt;a&gt;</code></li>
<li><code>&lt;area&gt;</code></li>
<li><code>&lt;audio controls&gt;</code></li>
<li><code>&lt;button&gt;</code></li>
<li><code>&lt;iframe&gt;</code></li>
<li><code>&lt;input&gt;</code></li>
<li><code>&lt;select&gt;</code></li>
<li><code>&lt;summary&gt;</code></li>
<li><code>&lt;textarea&gt;</code></li>
<li><code>&lt;video controls&gt;</code></li>
<li>Any element with the <code>contentEditable</code> attribute</li>
<li>Any element with a <code>tabindex</code> set to a numeric value other than <code>-1</code></li>
</ul>`,
  `<p>For a complete breakdown of cross-browser focus behavior, see ally.js's
<a href="https://allyjs.io/data-tables/focusable.html" rel="noopener">Focusable Elements - Browser Compatibility Table</a>.</p>`,
  `<p>This audit is similar to the
<a href="/duplicate-id-aria"><strong>ARIA IDs are not all unique</strong></a> audit
but checks for duplicate IDs in a different set of elements.</p>`,
  `<h2>How to fix duplicate IDs <a class="w-headline-link" href="#how-to-fix-duplicate-ids" aria-hidden="true">#</a></h2>`,
  `<p>Change an ID value if it is used more than once.</p>`,
  `<p>For example, the following code sample includes two elements with the same ID.
One ID should be changed:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><mark class="highlight-line highlight-line-active"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>huey<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newphews<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Huey<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span></mark><br><mark class="highlight-line highlight-line-active"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>huey<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newphews<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dewey<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span></mark><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>louie<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>newphews<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Louie<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token punctuation">&gt;</span></span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/duplicate-id-active.js" rel="noopener">Source code for <strong><code>[id]</code> attributes on active, focusable elements are not unique</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/duplicate-id-active" rel="noopener">ID attribute value must be unique (Deque University)</a></li>
<li><a href="https://web.dev/duplicate-id-active/" rel="noopener">[id] attributes on active, focusable elements are not unique</a></li></ul>`,
];
