export default [
  `<p>Informative elements should aim for short, descriptive alternate text.
Decorative elements can be ignored with an empty alt attribute.</p>`,
  `<h2>How the Lighthouse image alternative text audit fails <a class="w-headline-link" href="#how-the-lighthouse-image-alternative-text-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags <code>&lt;img&gt;</code> elements that don't have <code>alt</code> attributes:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/image-alt/image-alt.png" alt="Lighthouse audit showing <img> elements do not have alt attributes">
</figure>`,
  `<h2>How to add alternative text to images <a class="w-headline-link" href="#how-to-add-alternative-text-to-images" aria-hidden="true">#</a></h2>`,
  `<p>Provide an <code>alt</code> attribute for every <code>&lt;img&gt;</code> element.
If the image fails to load,
the <code>alt</code> text is used as a placeholder
so users have a sense of what the image was trying to convey.
(See also
<a href="/labels-and-text-alternatives#include-text-alternatives-for-images-and-objects">Include text alternatives for images and objects</a>.)</p>`,
  `<p>Most images should have short, descriptive text:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Audits set-up in Chrome DevTools<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>If the image acts as decoration and does not provide any useful content,
give it an empty <code>alt=""</code> attribute to remove it from the accessibility tree:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Tips for writing effective <code>alt</code> text <a class="w-headline-link" href="#tips-for-writing-effective-alt-text" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><code>alt</code> text should give the intent, purpose, and meaning of the image.</li>
<li>Blind users should get as much information from alt text as a sighted user gets from the image.</li>
<li>Avoid non-specific words like "chart", "image", or "diagram".</li>
</ul>`,
  `<p>Learn more in
<a href="https://webaim.org/techniques/alttext/">WebAIM's guide to Alternative Text</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/image-alt.js">Source code for <strong>Image elements do not have <code>[alt]</code> attributes</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/image-alt">Images must have alternate text (Deque University)</a></li>
<li><a href="https://web.dev/image-alt/" rel="noopener">Image elements do not have [alt] attributes</a></li></ul>`,
];
