export default [
  `<p>When an image is being used as an <code>&lt;input&gt;</code> button,
providing alternative text helps users of screen readers and other
assistive technologies understand the purpose of the button.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags <code>&lt;input type="image"&gt;</code> elements that don't have <code>alt</code> text:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/input-image-alt/input-image-alt.png" alt="Lighthouse audit showing input types with a value of 'image' do not have alt attributes">
</figure>`,
  `<h2>How to add alternative text to image inputs <a class="w-headline-link" href="#how-to-add-alternative-text-to-image-inputs" aria-hidden="true">#</a></h2>`,
  `<p>Provide an <code>alt</code> attribute for every <code>&lt;input type="image"&gt;</code> element.
Describe the action that occurs when the user clicks on the button
in the <code>alt</code> text:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><br>    Username:<br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sign in<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./sign-in-button.png<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>See the <a href="/labels-and-text-alternatives#include-text-alternatives-for-images-and-objects">Include text alternatives for images and objects</a> post for more information.</p>`,
  `<h2>Tips for writing effective <code>alt</code> text <a class="w-headline-link" href="#tips-for-writing-effective-alt-text" aria-hidden="true">#</a></h2>`,
  `<ul>
<li>As previously mentioned, describe the action that occurs when the user clicks on the button.</li>
<li><code>alt</code> text should give the intent, purpose, and meaning of the image.</li>
<li>Blind users should get as much information from alt text as a sighted user gets from the image.</li>
<li>Avoid non-specific words like "chart", "image", or "diagram".</li>
</ul>`,
  `<p>Learn more in
<a href="https://webaim.org/techniques/alttext/">WebAIM's guide to Alternative Text</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/input-image-alt.js">Source code for <strong><code>&lt;input type="image"&gt;</code> elements do not have <code>[alt]</code> text</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/input-image-alt">Image buttons must have alternate text (Deque University)</a></li>
<li><a href="https://web.dev/input-image-alt/" rel="noopener"><input type="image"> elements do not have [alt] text</a></li></ul>`,
];
