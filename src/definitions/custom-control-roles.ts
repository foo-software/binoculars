export default [
  `<p>Check that all custom controls have an appropriate <code>role</code> and
any required ARIA attributes that confer their properties and state.
For example, a custom checkbox needs a <code>role="checkbox"</code> and
<code>aria-checked="true|false"</code> to properly convey its state.
See the <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-aria/">Introduction to ARIA</a>
for a general overview of how ARIA can provide missing semantics for custom controls.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To check that all custom interactive controls have appropriate ARIA roles,
test the page using either the
<a href="https://developers.google.com/web/tools/chrome-devtools/accessibility/reference#pane">Chrome DevTools accessibility pane</a>
or a screen reader.
<a href="https://www.freedomscientific.com/products/software/jaws/">JAWS</a> and
<a href="https://www.nvaccess.org/">NVDA</a>
are two of the more popular screen readers for Windows.
<a href="https://www.apple.com/accessibility/mac/vision/">VoiceOver</a>
is the screen reader built into MacOS.</p>`,
  `<p>Using CSS, it's possible
to style the <code>&lt;div&gt;</code> and <code>&lt;button&gt;</code> elements so they convey the same visual affordances,
but the two experiences are very different when using a screen reader.
A <code>&lt;div&gt;</code> is just a generic grouping element,
so a screen reader only announces the text content of the <code>&lt;div&gt;</code>.
The <code>&lt;button&gt;</code> is announced as a "button,"
a much stronger signal to the user that it's something they can interact with.
See also <a href="/semantics-and-screen-readers">Semantics and screen readers</a>.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>The simplest
and often best solution to this problem
is to avoid custom interactive controls altogether.
For example, replace a <code>&lt;div&gt;</code> that's acting like a button
with an actual <code>&lt;button&gt;</code>.</p>`,
  `<p>If you must keep the <code>&lt;div&gt;</code>,
then add <code>role="button"</code> and <code>aria-pressed="false"</code> to the <code>&lt;div&gt;</code>:</p>`,
  `<div>
  <iframe allow="camera; clipboard; clipboard-read; clipboard-write; encrypted-media; geolocation; microphone; midi; vr" loading="lazy" src="https://glitch.com/embed/#!/embed/gorgeous-raven?attributionHidden=true&amp;sidebarCollapsed=true&amp;path=example.html%3A13%3A39&amp;previewSize=100" style="height: 100%; width: 100%; border: 0;" title="gorgeous-raven on Glitch"></iframe>
</div>`,
  `<p>Now screen readers will announces the role and interactive state for the <code>&lt;div&gt;</code>.</p>`,
  `<h2>Why this matters <a class="w-headline-link" href="#why-this-matters" aria-hidden="true">#</a></h2>`,
  `<p>The only way to truly understand how assistive technology users
experience your content
is to check that content yourself using a screen reader.
Using a screen reader first hand will give you a clear understanding
of how your content is labeled, and if there are any obstructions to
assistive technology navigation.
If you're unfamiliar with how semantic markup gets interpreted by assistive technology,
see the <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/">Introduction to Semantics</a> for a refresher.</p>`,
  `<p>See also <a href="https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader">How to Do an Accessibility Review</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/manual/custom-controls-roles.js">Source code for <strong>Custom controls have ARIA roles</strong> audit</a><li><a href="https://web.dev/custom-control-roles/" rel="noopener">Custom controls have ARIA roles</a></li></p>`,
];
