# `@foo-software/binoculars`

A tool to measure web page SEO friendliness.

## WIP Categories

- Meta data:
  - Completeness: presence of fundamental meta tags like title, description, and og:image.
  - Content: character length check of the above content.
  - Structured data: has at least one representation of structured data.
- View (better phrasing needed):
  - Language attribute on `html` tag.
  - Mobile support.
- Content:
  - At least one image?
  - Presence of prominent keywords throughout the page.
  - Variety of elements like lists, images, links, paragraphs.
  - Presence of `h1` and `h2`.
- Peformance, Acessibility and SEO extended
  - Handle this with Lighthouse. Don't be too harsh on performance since Lighthouse is flaky. Maybe target above a score of `50`.
