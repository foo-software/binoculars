export default [
  `<p>When a button doesn't have an accessible name,
screen readers and other assistive technologies announce it as <em>button</em>,
which provides no information to users about what the button does.</p>`,
  `<h2>How the Lighthouse button name audit fails <a class="w-headline-link" href="#how-the-lighthouse-button-name-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags buttons that don't have text content or an <code>aria-label</code> property:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/button-name/button-name.png" alt="Lighthouse audit showing buttons do not have an accessible name">
</figure>`,
  `<h2>How to add accessible names to buttons <a class="w-headline-link" href="#how-to-add-accessible-names-to-buttons" aria-hidden="true">#</a></h2>`,
  `<p>For buttons with visible labels,
add text content to the <code>button</code> element.
Make the label a clear call to action.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>Book room<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>For buttons without visible labels, like icon buttons,
use the <code>aria-label</code> attribute to clearly describe the action
to anyone using an assistive technology, for example:</p>`,
  `<div>
  <iframe allow="camera; clipboard; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi; vr" loading="lazy" src="https://glitch.com/embed/#!/embed/lh-button-name?attributionHidden=true&amp;sidebarCollapsed=true&amp;path=index.html&amp;previewSize=0" style="height: 100%; width: 100%; border: 0;" title="lh-button-name on Glitch"></iframe>
</div>`,
  `<p>See also <a href="/labels-and-text-alternatives#label-buttons-and-links">Label buttons and links</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/button-name.js">Source code for <strong>Buttons do not have an accessible name</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/button-name">Buttons must have discernible text (Deque University)</a></li>
<li><a href="https://web.dev/button-name/" rel="noopener">Buttons do not have an accessible name</a></li></ul>`,
];
