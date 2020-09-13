export default [
  `<p>Screen readers and other assistive technologies have a specific way of
announcing definition lists.
When definition lists are not properly marked up,
assistive technologies may produce confusing or inaccurate output.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags <code>&lt;dl&gt;</code> elements that don't
contain properly ordered <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> groups,
<code>&lt;script&gt;</code>, or <code>&lt;template&gt;</code> elements:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/definition-list/definition-list.png" alt="Lighthouse audit showing definition lists do not contain properly ordered <dt> and <dd> groups, <script>, or <template> elements">
</figure>`,
  `<h2>How to structure definition lists correctly <a class="w-headline-link" href="#how-to-structure-definition-lists-correctly" aria-hidden="true">#</a></h2>`,
  `<p>Definition list items require <code>dl</code> elements around the list,
<code>dt</code> elements for each term, and <code>dd</code> elements for each definition.
Each set of <code>dt</code> elements must be followed by one or more <code>dd</code> elements.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Trail shoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Extra grip for uneven, natural survaces, such as forest trails.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Road shoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Extra cushioning for hard surfaces, such as sidewalks and roads.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/definition-list.js">Source code for <strong><code>&lt;dl&gt;</code>s do not contain only properly ordered <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> groups, <code>&lt;script&gt;</code>, or <code>&lt;template&gt;</code> elements</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/definition-list"><code>&lt;dl&gt;</code> elements must only directly contain properly-ordered <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> groups, <code>&lt;script&gt;</code>, or <code>&lt;template&gt;</code> elements (Deque University)</a></li>
<li><a href="https://web.dev/definition-list/" rel="noopener"><dl>s do not contain only properly ordered <dt> and <dd> groups, <script>, or <template> elements</a></li></ul>`,
];
