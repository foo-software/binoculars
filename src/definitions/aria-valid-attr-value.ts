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
  `<p>Each ARIA <code>role</code> supports a specific subset of <code>aria-*</code> attributes
that define the state and properties of that role.
For example, the <code>aria-selected</code> attribute indicates whether
an element is currently selected depending on whether its value
is <code>true</code> or <code>false</code>.</p>`,
  `<p>If an element's ARIA attribute doesn't have a valid value,
assistive technologies won't be able
to interact with it as the developer intended.</p>`,
  `<h2>How Lighthouse determines an ARIA attribute's value is invalid <a class="w-headline-link" href="#how-lighthouse-determines-an-aria-attribute's-value-is-invalid" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags ARIA attributes with invalid values:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-valid-attr-value/aria-valid-attr-value.png" alt="Lighthouse audit showing aria-checked without the value 'true'">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#states_and_properties" rel="noopener">states and properties from the WAI-ARIA specification</a>
to check that all ARIA attributes have valid values.
A page fails this audit
when it contains an attributes with an invalid value.</p>`,
  `<p>In the example Lighthouse audit above,
<code>aria-checked</code> should be set to either <code>true</code>, <code>false</code>, or <code>mixed</code>.</p>`,
  `<p>This issue is important to fix and
probably indicates a mistaken assumption in your code. In the example above, the
element is still announced as a checkbox, but it will have an implicit
state of <code>unchecked</code>, which may not be what's intended.</p>`,
  `<h2>How to fix invalid ARIA attribute values <a class="w-headline-link" href="#how-to-fix-invalid-aria-attribute-values" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#states_and_properties" rel="noopener">WAI-ARIA supported states and properties</a>
to see the full list of valid ARIA attribute values.
Check that you have correct values for any attributes you use.</p>`,
  `<p>Also verify that your JavaScript is updating ARIA state values
as users interact with your page.
For example, an <code>option</code> role's <code>aria-selected</code> state should toggle
between <code>true</code> and <code>false</code> when the user clicks the element or
presses <code>Enter</code> or <code>Space</code> when the element is focused.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-valid-attr-value.js" rel="noopener">Source code for <strong><code>[aria-*]</code> attributes do not have valid values</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-valid-attr-value" rel="noopener">ARIA attributes must conform to valid values (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#role_definitions" rel="noopener">Role definitions from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-valid-attr-value/" rel="noopener">[aria-*] attributes do not have valid values</a></li></ul>`,
];
