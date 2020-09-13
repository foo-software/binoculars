export default [
  `<p>Each ID in your HTML document must be unique.
Using the same ID on more than one element may cause screen readers and other
assistive technologies to only announce the first element with the shared ID,
preventing users from accessing the later elements.</p>`,
  `<p>Avoiding duplicate IDs is particularly important
when using the <code>aria-labelledby</code> attribute.
<code>aria-labelledby</code> provides an accessible name for an element
by pointing to a second element, using its ID.
If more than one element shares that ID,
assistive technologies will read the first instance,
which may not be what you intended.</p>`,
  `<h2>How Lighthouse identifies ARIA elements that refer to duplicate IDs <a class="w-headline-link" href="#how-lighthouse-identifies-aria-elements-that-refer-to-duplicate-ids" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags elements that share an ID referred to
by another element's <code>aria-labelledby</code> attribute:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/duplicate-id-aria/duplicate-id-aria.png" alt="Lighthouse audit showing ARIA elements with duplicate IDs">
</figure>`,
  `<p>This audit is similar to the
<a href="/duplicate-id-active"><strong><code>[id]</code> attributes on active, focusable elements are not unique</strong></a> audit
but checks for duplicate IDs in a different set of elements.</p>`,
  `<h2>How to fix duplicate IDs <a class="w-headline-link" href="#how-to-fix-duplicate-ids" aria-hidden="true">#</a></h2>`,
  `<p>Change an ID value if it is used more than once.</p>`,
  `<p>For example, the following code sample includes two elements with the same ID.
One ID should be changed:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabpanel<span class="token punctuation">"</span></span> <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabpanel-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></span><br><mark class="highlight-line highlight-line-active">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabpanel-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></mark><br><span class="highlight-line">    Tab panel title</span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span></span><br><mark class="highlight-line highlight-line-active">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabpanel-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></mark><br><span class="highlight-line">    Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span><br><span class="highlight-line">    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span><br><span class="highlight-line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span></span><br><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/duplicate-id-aria.js" rel="noopener">Source code for <strong>ARIA IDs are not all unique</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/duplicate-id-aria" rel="noopener">IDs used in ARIA and labels must be unique (Deque University)</a></li>
<li><a href="https://web.dev/duplicate-id-aria/" rel="noopener">ARIA IDs are not unique</a></li></ul>`,
];
