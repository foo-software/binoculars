# `@foo-software/binoculars`

A tool to measure web page SEO friendliness. Binoculars extends [Google's Lighthouse](https://github.com/GoogleChrome/lighthouse) to provide a more opinionated, SEO specific audit.

# Meaningful Content

Binoculars extends Lighthouse by adding the following audits in a custom group named "Meaningful Content".

- **Title Length**: Title should be between 50 - 70 characters.
- **Description Length**: Descriptions should be between 100 - 160 characters.
- **Keywords**: Keyword phrases of at least 2 words should exist in the title, description and at least twice in the content of the page.
- **Headings**: Has at least 1 `<h1>` tag and 1 `<h2>` tag.
- **Meaningful Text**: Has sufficient textual content (300 characters).
- **Meaningful Tag Structure**: Has at least 2 different informational HTML tags of the following types: `<p>`, `<li>`, `<img>`, `<table>`.

## Metrics

Binoculars accounts for metrics from Lighthouse SEO and accessibility categories and weights them more accordingly. It combines metrics from these categories with the new, custom "Meaningful Content" group detailed above. See the complete list of audits and weighting [here](src/config/auditRefsConfig.ts).
