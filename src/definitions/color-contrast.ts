export default [
  `<p>Text that has a low contrast ratio—that is,
text whose brightness is too close to the background brightness—can be
hard to read.
For example, presenting light gray text on a white background
makes it difficult for users to distinguish the shapes of the characters,
which can reduce reading comprehension and slow down reading speed.</p>`,
  `<p>While this issue is particularly challenging for people with low vision,
low-contrast text can negatively affect the reading experience
for all your users.
For example, if you've ever read something on your mobile device outside,
you've probably experienced the need for text with sufficient contrast.</p>`,
  `<h2>How the Lighthouse color contrast audit fails <a class="w-headline-link" href="#how-the-lighthouse-color-contrast-audit-fails" aria-hidden="true">#</a></h2>`,
  `<p>Lighthouse flags text whose background and
foreground colors don't have a sufficiently high contrast ratio:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/color-contrast/color-contrast.png" alt="Lighthouse audit showing background and foreground colors do not have sufficient contrast ratio">
</figure>`,
  `<p>To evaluate text's color contrast, Lighthouse uses
<a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" rel="noopener">success criterion 1.4.3 from WCAG 2.1</a>:</p>`,
  `<ul>
<li>Text that is 18&nbsp;pt, or 14&nbsp;pt and bold, needs a contrast ratio of 3:1.</li>
<li>All other text needs a contrast ratio of 4.5:1.</li>
</ul>`,
  `<p>Because of the nature of the audit,
Lighthouse can't check the color contrast of
text superimposed on an image.</p>`,
  `<h2>How to ensure text has sufficient color contrast <a class="w-headline-link" href="#how-to-ensure-text-has-sufficient-color-contrast" aria-hidden="true">#</a></h2>`,
  `<p>Make sure all text on your page meets the minimum color contrast ratios
<a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" rel="noopener">specified by WCAG</a>:</p>`,
  `<ul>
<li>3:1 for text that is 18&nbsp;pt, or 14&nbsp;pt and bold</li>
<li>4.5:1 for all other text</li>
</ul>`,
  `<p>One way to find a color that will meet contrast requirements
is to use Chrome DevTools' color picker:</p>`,
  `<ol>
<li>Right-click (or <code>Command</code>-click on Mac) the element you want to check,
and select <strong>Inspect</strong>.</li>
<li>In the <strong>Styles</strong> tab of the <strong>Elements</strong> pane,
find the <code>color</code> value for the element.</li>
<li>Click the color thumbnail next to the value.</li>
</ol>`,
  `<p>The color picker tells you whether the element
meets color contrast requirements,
taking font size and weight into account:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/color-contrast/color-picker.png" alt="Screenshot of Chrome DevTools color picker with color contrast information highlighted">
</figure>`,
  `<p>You can use the color picker to adjust the color
until its contrast is high enough.
It's easiest to make adjustments in the HSL color format.
Switch to that format by clicking the toggle button on the right of the picker:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/color-contrast/color-format-toggle.png" alt="Screenshot of Chrome DevTools color picker with the color format toggle highlighted">
</figure>`,
  `<p>Once you have a passing color value, update your project's CSS.</p>`,
  `<p>More complex cases, like text on a gradient or text on an image,
need to be checked manually,
as do UI elements and images.
For text on an image, you can use DevTools' background color picker to check
the background that the text appears on:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/color-contrast/bg-color-picker.png" alt="Screenshot of Chrome DevTools background color picker">
</figure>`,
  `<p>For other cases, consider using a tool like the Paciello Group's
<a href="https://developer.paciellogroup.com/resources/contrastanalyser" rel="noopener">Colour Contrast Analyser</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/color-contrast.js" rel="noopener">Source code for <strong>Background and foreground colors do not have a sufficient contrast ratio</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/color-contrast" rel="noopener">Text elements must have sufficient color contrast against the background (Deque University)</a></li>
<li><a href="https://developer.paciellogroup.com/resources/contrastanalyser" rel="noopener">Colour Contrast Analyser</a></li>
<li><a href="https://web.dev/color-contrast/" rel="noopener">Background and foreground colors do not have a sufficient contrast ratio</a></li></ul>`,
];
