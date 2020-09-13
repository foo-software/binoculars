export default [
  `<p>Although technically valid,
using a <code>tabindex</code> greater than <code>0</code> is considered an anti-pattern because
it shifts the affected element to the end of the
<a href="/keyboard-access/#focus-and-the-tab-order">tab order</a>.
This unexpected behavior can make it seem like some elements can't be accessed
via keyboard, which is frustrating for users who rely on assistive technologies.</p>`,
  `<h2>How the Lighthouse <code>tabindex</code> audit fails <a class="w-headline-link" href="#how-the-lighthouse-tabindex-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags elements that have a <code>tabindex</code> value greater than <code>0</code>:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/tabindex/tabindex.png" alt="Lighthouse audit showing some elements have a tabindex value greater than 0">
</figure>`,
  `<h2>How to fix problematic <code>tabindex</code> values <a class="w-headline-link" href="#how-to-fix-problematic-tabindex-values" aria-hidden="true">#</a></h2>`,
  `<p>If you have a <code>tabindex</code> greater than <code>0</code>,
and you're using a native link or form element,
remove the <code>tabindex</code>.
Native HTML elements such as <code>&lt;button&gt;</code> or <code>&lt;input&gt;</code>
have keyboard accessibility built-in for free.</p>`,
  `<p>If you're using custom interactive components,
set the <code>tabindex</code> to <code>0</code>.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Focus me with the TAB key<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>If you need an element to come sooner or later in the tab order,
it should be moved to a different spot in the DOM.
Learn more in
<a href="/control-focus-with-tabindex">Control focus with tabindex</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/tabindex.js">Source code for <strong>Some elements have a <code>[tabindex]</code> value greater than 0</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/tabindex">Elements should not have tabindex greater than zero (Deque University)</a></li>
<li><a href="https://web.dev/tabindex/" rel="noopener">Some elements have a [tabindex] value greater than 0</a></li></ul>`,
];
