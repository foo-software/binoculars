export default [
  `<p>Interactive elements, such as links and buttons,
should indicate their state and be distinguishable from non-interactive elements.
To check that interactive elements indicate their purpose and state,
use both a visual and a screen reader test.</p>`,
  `<h2>How to manually test visual focus <a class="w-headline-link" href="#how-to-manually-test-visual-focus" aria-hidden="true">#</a></h2>`,
  `<p>To manually test visual focus,
<code>TAB</code> through your page.</p>`,
  `<ul>
<li>Are you able to tab to each interactive element?</li>
<li>When you get to an interactive element, is there a visual clue that users can interact with it?</li>
<li>Does each interactive element change in appearance when you select it?</li>
</ul>`,
  `<p>There are many ways to style the focus indicators for each interactive element.
One sure way is to use <code>:focus</code>.
The <code>:focus</code> pseudo-class lets you apply a uniform style to an element.
That style is applied any time the element is focused,
regardless of the input device or method used to focus it.</p>`,
  `<p>Learn more in <a href="/style-focus">Style focus</a>.</p>`,
  `<h2>How to manually test with a screen reader <a class="w-headline-link" href="#how-to-manually-test-with-a-screen-reader" aria-hidden="true">#</a></h2>`,
  `<p>Using a screen reader,
navigate your page and check that the screen reader is able
to announce the name of each interactive control,
the role of that control, and the current interactive state.
If the role of an element is unclear, and the state of the element is unclear,
you may need to add the appropriate ARIA roles.
Learn more in <a href="/custom-control-roles">Custom controls have ARIA roles</a>.</p>`,
  `<p>It is also important to pay close attention to how interactive elements are labeled.
Users of screen readers and other assistive technologies
rely on labels to understand the context of that element.
Vague labels are common,
and they are non-helpful for navigating content.
Learn how to improve <a href="/labels-and-text-alternatives">Labels and text alternatives</a>.</p>`,
  `<h2>Why this matters <a class="w-headline-link" href="#why-this-matters" aria-hidden="true">#</a></h2>`,
  `<p>Providing visual hints about what a control will do
helps people operate and navigate your site.
These hints are called affordances.
Providing affordances makes it possible for people to use your site on a wide variety of devices.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/ecd10efc8230f6f772e672cd4b05e8fbc8a3112d/lighthouse-core/audits/accessibility/manual/interactive-element-affordance.js">Source code for <strong>Interactive elements indicate their purpose and state</strong> audit</a><li><a href="https://web.dev/interactive-element-affordance/" rel="noopener">Interactive elements indicate their purpose and state</a></li></p>`,
];
