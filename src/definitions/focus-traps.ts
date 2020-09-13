export default [
  `<p>Keyboard focus should never be locked or trapped at one particular page element.
Users should be able to navigate to and from all page elements
using only the keyboard.</p>`,
  `<h2>How to manually test <a class="w-headline-link" href="#how-to-manually-test" aria-hidden="true">#</a></h2>`,
  `<p>To test users can't accidentally trap their focus,
navigate to and from all page elements using only the keyboard.
Use <code>TAB</code> to navigate "forward" and <code>SHIFT + TAB</code> to navigate "backward."</p>`,
  `<p>If you can't tab through all page elements successfully,
then you've failed the test.
When testing, watch out in particular for autocomplete widgets,
where keyboard focus may get stuck.</p>`,
  `<h2>How to fix <a class="w-headline-link" href="#how-to-fix" aria-hidden="true">#</a></h2>`,
  `<p>Pages that present content in multiple formats, such as modal dialogs,
widgets, are at risk for focus traps.
In the case of a displaying a modal,
when you don't want the user interacting with the rest of the page,
it makes sense to temporarily trap the user.</p>`,
  `<p>But you should aim to provide a keyboard-accessible method of escaping the modal as well.
Check out <a href="https://github.com/gdkraus/accessible-modal-dialog">this example on how to create an accessible modal</a>.
See also <a href="https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex#modals_and_keyboard_traps">Modals and Keyboard Traps</a>.
In this example,
you get the desired behaviors of a modal,
without forcing the user to refresh the page to get out of the focus trap.</p>`,
  `<h2>Why this matters <a class="w-headline-link" href="#why-this-matters" aria-hidden="true">#</a></h2>`,
  `<p>For users who either cannot or choose not to use a mouse,
keyboard navigation is the primary means of reaching everything on a screen.
Good keyboarding experiences depend on a logical tab order and easily discernible focus styles.
If a keyboard user gets trapped in a particular page element,
they have no way of interacting with the page.</p>`,
  `<p>Learn more in <a href="https://developers.google.com/web/fundamentals/accessibility/how-to-review#try_it_with_a_screen_reader">How to do an Accessibility Review</a>.</p>`,
  `<h2>Resources <a class="w-headline-link" href="#resources" aria-hidden="true">#</a></h2>`,
  `<p><a href="https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/audits/accessibility/manual/focus-traps.js">Source code for <strong>User focus is not accidentally trapped in a region</strong> audit</a><li><a href="https://web.dev/focus-traps/" rel="noopener">User focus is not accidentally trapped in a region</a></li></p>`,
];
