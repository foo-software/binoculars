export default [
  `<p>Access keys let users quickly <a href="/keyboard-access/#focus-and-the-tab-order">focus</a>
or activate an element on your page
by pressing the specified key, usually in combination with the <code>Alt</code> key
(or <code>Control+Alt</code> on Mac).</p>`,
  `<p>Duplicating <code>accesskey</code> values creates unexpected effects
for users navigating via the keyboard.</p>`,
  `<h2>How the Lighthouse access key audit fails <a class="w-headline-link" href="#how-the-lighthouse-access-key-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags pages with duplicate access keys:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/accesskeys/accesskeys.png" alt="Lighthouse: Access keys are not unique">
</figure>`,
  `<p>For example, these links both have <code>g</code> as their access key:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>google.com<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Link to Google<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github.com<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Link to GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>How to fix duplicate access keys <a class="w-headline-link" href="#how-to-fix-duplicate-access-keys" aria-hidden="true">#</a></h2>`,
  `<p>Evaluate the duplicate <code>accesskey</code> values flagged by Lighthouse
and make each <code>accesskey</code> value unique.
For example, to fix the example above,
you can change the value for the GitHub link:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="highlight-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>google.com<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Link to Google<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></span><br><mark class="highlight-line highlight-line-active"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>github.com<span class="token punctuation">"</span></span> <span class="token attr-name">accesskey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Link to GitHub<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span></mark></code></pre>
</web-copy-code>`,
  `<p>For each defined <code>accesskey</code>,
make sure the value doesn't conflict with any default browser
or screen reader shortcut keys.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/accesskeys.js">Source code for <strong><code>[accesskey]</code> values are not unique</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/accesskeys">accesskey attribute value must be unique (Deque University)</a></li>
<li><a href="https://web.dev/accesskeys/" rel="noopener">[accesskey] values are not unique</a></li></ul>`,
];
