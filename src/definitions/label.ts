export default [
  `<p>Labels ensure that form controls are announced properly
by assistive technologies like screen readers.
Assistive technology users rely on these labels
to navigate forms.
Mouse and touchscreen users also benefit from labels
because the label text makes a larger click target.</p>`,
  `<h2>How this Lighthouse audit fails <a class="w-headline-link" href="#how-this-lighthouse-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags form elements that don't have associated labels:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/label/label.png" alt="Lighthouse audit showing form elements do not have associated labels">
</figure>`,
  `<h2>How to add labels to form elements <a class="w-headline-link" href="#how-to-add-labels-to-form-elements" aria-hidden="true">#</a></h2>`,
  `<p>There are two ways to associate a label with a form element.
Either place the input element inside a label element:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><br>  Receive promotional offers?<br>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>Or use the label's <code>for</code> attribute and refer to the element's ID:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>promo<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><br><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>promo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Receive promotional offers?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>When the checkbox has been labeled correctly,
assistive technologies report that the element has a role of checkbox,
is in a checked state, and is named "Receive promotional offers?"
See also <a href="/labels-and-text-alternatives#label-form-elements">Label form elements</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/label.js">Source code for <strong>Form elements do not have associated labels</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/label">Form <code>&lt;input&gt;</code> elements must have labels (Deque University)</a></li>
<li><a href="https://web.dev/label/" rel="noopener">Form elements do not have associated labels</a></li></ul>`,
];
