export default [
  `<p>Custom interactive controls should be focusable.
If you use JavaScript to turn a <code>&lt;div</code>&gt; into a fancy dropdown,
it won't automatically be inserted into the tab order.
You need to manually check that all custom controls are keyboard focusable.
See also <a href="/keyboard-access">Keyboard access fundamentals</a>.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To test that the custom control is focusable,
press the <code>TAB</code> key to navigate through the site:</p>`,
  `<div>
  <iframe allow="camera; clipboard; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi; vr" loading="lazy" src="https://glitch.com/embed/#!/embed/tabindex-zero?attributionHidden=true&amp;sidebarCollapsed=true&amp;path=index.html&amp;previewSize=100" style="height: 100%; width: 100%; border: 0;" title="tabindex-zero on Glitch"></iframe>
</div>`,
  `<p>Are you able to reach all of the interactive controls on the page?
If not, you may need to use <code>tabindex</code> to improve the focusability of those controls.
See also <a href="/control-focus-with-tabindex">Control focus with tabindex</a>.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>To make a custom control focusable,
insert the custom control element into the natural tab order using <code>tabindex="0"</code>.
For example:</p>`,
  `<web-copy-code><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Focus me with the TAB key<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
</web-copy-code>`,
  `<h2>Why this matters <a class="w-headline-link" href="#why-this-matters" aria-hidden="true">#</a></h2>`,
  `<p>For users who either cannot or choose not to use a mouse,
keyboard navigation is the primary means of reaching everything on a screen.
Good keyboarding experiences depend on a logical tab order and easily discernable focus styles.
If a keyboard user can't see what's focused, they have no way of interacting with the page.</p>`,
  `<p>Learn more in <a href="https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader">How to do an Accessibility Review</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/manual/custom-controls-labels.js">Source code for <strong>Custom controls have associated labels</strong> audit</a></li>
<li><a href="/tabindex">Some elements have a <code>[tabindex]</code> value greater than <code>0</code></a></li>
<li><a href="https://web.dev/custom-controls-labels/" rel="noopener">Custom controls have associated labels</a></li></ul>`,
];
