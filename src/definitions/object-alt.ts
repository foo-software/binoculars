export default [
  `<p>Screen readers and other assistive technologies cannot translate non-text content.
Adding alternative text to define <code>&lt;object&gt;</code> elements helps
assistive technologies convey meaning to users.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags <code>&lt;object&gt;</code> elements that don't have alternative text:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/object-alt/object-alt.png" alt="Lighthouse audit showing <object> elements do not have alternative text">
</figure>`,
  `<h2>How to add alternative text to <code>&lt;object&gt;</code> elements <a class="w-headline-link" href="#how-to-add-alternative-text-to-lessobjectgreater-elements" aria-hidden="true">#</a></h2>`,
  `<p>Describe the object in the text content of the <code>&lt;object&gt;</code> element.
In the example below <code>2019 Web Accessibility Report</code> is the description
of the object.</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>object</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>application/pdf<span class="token punctuation">"</span></span><br>    <span class="token attr-name">data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/report.pdf<span class="token punctuation">"</span></span><br>    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span><br>    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>2019 Web Accessibility Report<br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>object</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Learn more in <a href="/labels-and-text-alternatives#include-text-alternatives-for-images-and-objects">Include text alternatives for images and objects</a>.</p>`,
  `<h2>Tips for writing effective <code>alt</code> text <a class="w-headline-link" href="#tips-for-writing-effective-alt-text" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>As previously mentioned, describe the information contained in the embedded object.</li>
<li>Alternative text should give the intent, purpose, and meaning of the object.</li>
<li>Blind users should get as much information from alternative text as a sighted user gets from the object.</li>
<li>Avoid non-specific words like "chart", "image", or "diagram".</li>
</ul>`,
  `<p>Learn more in
<a href="https://webaim.org/techniques/alttext/">WebAIM's guide to Alternative Text</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/object-alt.js">Source code for <strong><code>&lt;object&gt;</code> elements do not have <code>[alt]</code> text</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/object-alt">&lt;object&gt; elements must have alternate text (Deque University)</a></li>
<li><a href="https://web.dev/object-alt/" rel="noopener"><object> elements do not have [alt] text</a></li></ul>`,
];
