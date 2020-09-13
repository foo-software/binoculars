export default [
  `<p>Users of screen readers and other assistive technologies need information
about the behavior and purpose of controls on your web page.
Native HTML controls like buttons and radio groups
come with that information <a href="/use-semantic-html">built in</a>.
For custom controls you create, however, you must provide the information with
<a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions">ARIA</a>
roles and attributes.
(Learn more in the
<a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/">Introduction to ARIA</a>.)</p>`,
  `<p>To be announced properly by assistive technologies,
both
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms" rel="noopener">native HTML controls</a>
and
<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex" rel="noopener">custom ARIA controls</a>
must have <a href="/labels-and-text-alternatives">accessible names</a>
that convey their purpose.</p>`,
  `<h2>How Lighthouse identifies ARIA toggle fields without accessible names <a class="w-headline-link" href="#how-lighthouse-identifies-aria-toggle-fields-without-accessible-names" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a>
flags custom ARIA toggle fields whose names
aren't accessible to assistive technologies:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-toggle-field-name/aria-toggle-field-name.png" alt="Lighthouse audit showing custom toggle elements without accessible names">
</figure>`,
  `<p>Elements that have any of the following ARIA roles
but don't have accessible names will cause this audit to fail:</p>`,
  `<ul>
<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox" rel="noopener">checkbox</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox" rel="noopener">menuitemcheckbox</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#menuitemradio" rel="noopener">menuitemradio</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#radio" rel="noopener">radio</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#switch" rel="noopener">switch</a></li>
</ul>`,
  `<p>This audit is similar to the
<a href="/aria-input-field-name"><strong>Not all ARIA input fields have accessible names</strong> audit</a>
but checks a different set of ARIA roles.</p>`,
  `<h2>How to add accessible names to your custom ARIA toggle fields <a class="w-headline-link" href="#how-to-add-accessible-names-to-your-custom-aria-toggle-fields" aria-hidden="true">#</a></h2>`,
  `<h3>Option 1: Add inner text to the element <a class="w-headline-link" href="#option-1:-add-inner-text-to-the-element" aria-hidden="true">#</a></h3>`,
  `<p>The easiest way to provide an accessible name for most elements
is to include text content inside the element.</p>`,
  `<p>For example, this custom checkbox will be announced as "Newspaper"
to assistive technology users:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Newspaper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h3>Option 2: Add an <code>aria-label</code> attribute to the element <a class="w-headline-link" href="#option-2:-add-an-aria-label-attribute-to-the-element" aria-hidden="true">#</a></h3>`,
  `<p>If you can't add inner text—for example, if you don't want
the element's name to be visible—use
the <code>aria-label</code> attribute.</p>`,
  `<p>This custom switch will be announced as "Toggle blue light"
to assistive technology users:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switch1<span class="token punctuation">"</span></span><br>    <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switch<span class="token punctuation">"</span></span><br>    <span class="token attr-name">aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><br>    <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Toggle blue light<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>off<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>on<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h3>Option 3: Refer to another element using <code>aria-labelledby</code> <a class="w-headline-link" href="#option-3:-refer-to-another-element-using-aria-labelledby" aria-hidden="true">#</a></h3>`,
  `<p>Use the <code>aria-labelledby</code> attribute to identify another element, using its ID,
to serve as the name for the current element.</p>`,
  `<p>For example, this custom menu radio button refers to the <code>menuitem1Label</code> paragraph
as its label and will be announced as "Sans-serif":</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menuitem1Label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Sans-serif<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menuitem1<span class="token punctuation">"</span></span><br>        <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menuitemradio<span class="token punctuation">"</span></span><br>        <span class="token attr-name">aria-labelledby</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menuitem1Label<span class="token punctuation">"</span></span><br>        <span class="token attr-name">aria-checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-toggle-field-name.js" rel="noopener">Source code for <strong>Not all ARIA toggle fields have accessible names</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-toggle-field-label" rel="noopener">ARIA toggle fields have an accessible name (Deque University)</a></li>
<li><a href="/labels-and-text-alternatives">Labels and text alternatives</a></li>
<li><a href="/use-semantic-html">Use semantic HTML for easy keyboard wins</a></li>
<li><a href="https://web.dev/aria-toggle-field-name/" rel="noopener">ARIA toggle fields do not have accessible names</a></li></ul>`,
];
