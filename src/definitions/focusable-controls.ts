export default [
  `<p>Manually check that all custom controls are keyboard focusable
and display a focus indicator.
The order in which elements are focused should aim to follow the DOM order.
If you're unsure which elements should receive focus,
see <a href="https://developers.google.com/web/fundamentals/accessibility/focus/">Introduction to Focus</a>.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To test that the custom control is focusable
and displays a focus indicator,
start by tabbing through your site.
Use <code>TAB</code> (or <code>SHIFT + TAB</code>) to move between controls, and use the arrow keys and
<code>ENTER</code> and <code>SPACE</code> to manipulate their values
(see also <a href="/keyboard-access">Keyboard access fundamentals</a>):</p>`,
  `<div>
  <iframe allow="camera; clipboard; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi; vr" loading="lazy" src="https://glitch.com/embed/#!/embed/interactive-elements?attributionHidden=true&amp;sidebarCollapsed=true&amp;path=index.html&amp;previewSize=100" style="height: 100%; width: 100%; border: 0;" title="interactive-elements on Glitch"></iframe>
</div>`,
  `<p>Are you able to reach all of the interactive controls on the page?
Is there a focus indicator on each interactive control?</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>If you aren't able to tab through all elements on a page,
you may need to use <code>tabindex</code> to improve the focusability of those controls.</p>`,
  `<p>To make a custom control focusable,
insert the custom control element into the natural tab order using <code>tabindex="0"</code>
(see also <a href="/control-focus-with-tabindex">Control focus with tabindex</a>).
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Focus me with the TAB key<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<p>You may also need to add the appropriate ARIA roles to the custom control elements.
See <a href="/custom-control-roles">Custom controls have ARIA roles</a>.</p>`,
  `<p>If you're not seeing a focus indicator,
consider using <code>:focus</code> to always show a focus indicator.
Regardless of whether you use a mouse or a keyboard to tab to it,
the button's focus indicator always looks the same
(see also <a href="/style-focus">Style focus</a>).</p>`,
  `<div>
  <iframe allow="camera; clipboard; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi; vr" loading="lazy" src="https://glitch.com/embed/#!/embed/focus-style?attributionHidden=true&amp;sidebarCollapsed=true&amp;path=index.html&amp;previewSize=100" style="height: 100%; width: 100%; border: 0;" title="focus-style on Glitch"></iframe>
</div>`,
  `<h2>Why this matters <a class="w-headline-link" href="#why-this-matters" aria-hidden="true">#</a></h2>`,
  `<p>For users who either cannot or choose not to use a mouse,
keyboard navigation is the primary means of reaching everything on a screen.
Good keyboarding experiences depend on a logical tab order and easily discernable focus styles.
If a keyboard user can't see what's focused, they have no way of interacting with the page.</p>`,
  `<p>Learn more in <a href="https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader">How to do an Accessibility Review</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/manual/focusable-controls.js">Source code for <strong>Interactive controls are keyboard focusable</strong> audit</a></li>
<li><a href="/tabindex">Some elements have a <code>[tabindex]</code> value greater than <code>0</code></a></li>
<li><a href="/use-semantic-html">Use semantic HTML for easy keyboard wins</a></li>
<li><a href="https://web.dev/focusable-controls/" rel="noopener">Interactive controls are keyboard focusable</a></li></ul>`,
];
