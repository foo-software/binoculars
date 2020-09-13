export default [
  `<p>Definition list items (<code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code>) must be wrapped
in a parent <code>&lt;dl&gt;</code> element
to ensure that screen readers and other assistive technologies
can properly announce them.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse reports when definition list items are not wrapped in <code>&lt;dl&gt;</code> elements:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/dlitem/dlitem.png" alt="Lighthouse audit showing definition list items are not wrapped in <dl> elements">
</figure>`,
  `<h2>How to fix orphaned definition list items <a class="w-headline-link" href="#how-to-fix-orphaned-definition-list-items" aria-hidden="true">#</a></h2>`,
  `<p>Wrap all definition list items in parent <code>dl</code> elements
to ensure the list follows the proper hierarchy.</p>`,
  `<p>Definition list items require <code>dl</code> elements around the list,
<code>dt</code> elements for each term, and <code>dd</code> elements for each definition.
Each set of <code>dt</code> elements must be followed by one or more <code>dd</code> elements.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Trail shoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Extra grip for uneven, natural survaces, such as forest trails.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span><br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>Road shoe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>Extra cushioning for hard surfaces, such as sidewalks and roads.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/dlitem.js">Source code for <strong>Definition list items are not wrapped in <code>&lt;dl&gt;</code> elements</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.1/dlitem"><code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code> elements must be contained by a <code>&lt;dl&gt;</code> (Deque University)</a></li>
<li><a href="https://web.dev/dlitem/" rel="noopener">Definition list items are not wrapped in <dl> elements</a></li></ul>`,
];
