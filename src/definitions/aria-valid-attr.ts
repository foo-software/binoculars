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
For example, the <code>aria-selected</code> attribute is used to indicate whether
elements with <code>option</code>, <code>tab</code>, or similar roles are currently selected.</p>`,
  `<p>If an element's ARIA attribute is invalid,
assistive technologies won't be able
to interact with it as the developer intended.</p>`,
  `<h2>How Lighthouse checks for invalid ARIA attributes <a class="w-headline-link" href="#how-lighthouse-checks-for-invalid-aria-attributes" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://developers.google.com/web/tools/lighthouse" rel="noopener">Lighthouse</a>
flags invalid ARIA attributes:</p>`,
  `<figure>
  <img class="w-screenshot" src="https://webdev.imgix.net/aria-valid-attr/aria-valid-attr.png" alt="Lighthouse audit showing ARIA attribute has invalid value">
</figure>`,
  `<p>Lighthouse uses the
<a href="https://www.w3.org/TR/wai-aria-1.1/#states_and_properties" rel="noopener">states and properties from the WAI-ARIA specification</a>
to check that all ARIA attributes are valid.
A page fails this audit
when it contains an invalid attribute.</p>`,
  `<p>In the example Lighthouse audit above,
the <code>aria-checked</code> attribute has been misspelled as
<code>aria-cheked</code>, making it invalid.</p>`,
  `<h2>How to fix invalid ARIA attributes <a class="w-headline-link" href="#how-to-fix-invalid-aria-attributes" aria-hidden="true">#</a></h2>`,
  `<p>Refer to the
<a href="https://www.w3.org/TR/wai-aria-1.1/#states_and_properties" rel="noopener">WAI-ARIA supported states and properties</a>
to see the full list of valid ARIA attributes.
Make sure all ARIA attributes on your page match one of the defined states or properties.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<ul>
<li><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/aria-valid-attr.js" rel="noopener">Source code for <strong><code>[aria-*]</code> attributes are not valid or misspelled</strong> audit</a></li>
<li><a href="https://dequeuniversity.com/rules/axe/3.3/aria-valid-attr" rel="noopener">ARIA attributes must conform to valid names (Deque University)</a></li>
<li><a href="https://www.w3.org/TR/wai-aria-1.1/#states_and_properties" rel="noopener">States and properties from the WAI-ARIA specification</a></li>
<li><a href="https://web.dev/aria-valid-attr/" rel="noopener">[aria-*] attributes are not valid or misspelled</a></li></ul>`,
];
