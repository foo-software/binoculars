export default [
  `<p>Ensure that only relevant parts of the page are exposed to screen readers and
other assistive technologies.
For instance,
content that's offscreen or just presentational
should be hidden from assistive technologies.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To check that offscreen content is hidden,
you need to manually test that content using a screen reader.</p>`,
  `<ul>
<li>For Mac users, check out
<a href="https://www.youtube.com/watch?v=5R-6WvAihms&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&amp;index=6">this video on using VoiceOver</a>.</li>
<li>For PC users, check out
<a href="https://www.youtube.com/watch?v=Jao3s_CwdRU&amp;list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&amp;index=4">this video on using NVDA</a>.</li>
<li>For Chromebooks users, check out
<a href="https://support.google.com/chromebook/answer/7031755?hl=en">ChromeVox, the built-in screen reader</a>.</li>
</ul>`,
  `<p>Use the <code>TAB</code> key to tab through your page.
The screen reader shouldn't announce hidden content.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>To hide offscreen content,
remove the element containing that content from the
tab order by setting it to <code>display: none</code> or <code>visibility: hidden</code>.</p>`,
  `<p>For example:</p>`,
  `<web-copy-code><pre class="language-css"><code class="language-css"><span class="token selector">.remove-me</span> <span class="token punctuation">{</span><br>  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span><br><span class="token punctuation">}</span></code></pre>
</web-copy-code>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remove-me<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Can't reach me with the TAB key!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>See also <a href="/keyboard-access/#correctly-set-the-visibility-of-offscreen-content">Correctly set the visibility of offscreen content</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/offscreen-content-hidden.js">Source code for <strong>Offscreen content is hidden from assistive technology</strong> audit</a><li><a href="https://web.dev/offscreen-content-hidden/" rel="noopener">Offscreen content is hidden from assistive technology</a></li></p>`,
];
