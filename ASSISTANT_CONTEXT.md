# Assistant Context

## Project overview
This repository is a static documentation website for two related content areas:

- AI usage policy and safety guidance for Envisage staff
- SAM feature documentation for Sapphire for Asset Managers

The site is built as a set of standalone HTML pages with shared CSS and small JavaScript enhancements. There is no application build pipeline or framework runtime in this repository.

## Repository structure

### Root files
- index.html: landing page that links to the two documentation hubs
- README.md: short project description
- SAM-logoLine.png: shared logo asset

### Policy documentation hub
Path: sapphire-ai-policy-core/

Purpose:
- Explains AI usage policy, best practices, safety, verification, and tool selection
- Intended for internal policy and operational guidance

Key files:
- index.html: landing page for the policy content
- styles.css: shared visual design for the policy site
- i18n.js: language switcher for English, Thai, and Burmese
- Topic pages such as:
  - claude.html
  - token-efficiency.html
  - data-security.html
  - verification.html
  - ai-toolkit.html
  - ai-tools-directory.html
  - osint-usage.html
  - por-case-study.html

### Feature documentation hub
Path: sapphire-ai-policy-features/

Purpose:
- Documents SAM feature releases and product capabilities
- Organized by feature category rather than as a single long list

Key files:
- index.html: landing page for the feature documentation site
- styles.css: styling for the feature docs
- help-search.JS: interactive help search behavior
- search-data.JSO: searchable index of feature pages
- Feature pages such as:
  - prompt-studio.html
  - prompt-templates.html
  - filtering-tools.html
  - citation-management.html
  - context-management.html
  - scorecard-rankings.html
  - portfolio-analyst-launch.html

## Site flow
1. Open index.html at the repository root.
2. Choose either the policy docs hub or the SAM feature docs hub.
3. Navigate through topic pages using the top navigation or category menus.
4. In the feature docs section, use the help search bar to quickly find related pages.

## Design and layout conventions
Both sections follow a similar pattern:
- sticky top navigation
- hero section with a strong headline
- content sections built with cards and callouts
- light background with dark navy accents and blue highlights
- responsive layout for desktop and mobile

The policy site is more editorial and instructional.
The feature site is more like a knowledge base with category-based browsing and search.

## Technical notes
- Files are plain HTML, CSS, and JavaScript.
- There is no package.json or build step to run.
- The site can be viewed directly in a browser by opening the HTML files.
- The JavaScript is lightweight and enhances navigation and search behavior.

## Working assumptions for future agents
- Preserve the static-site structure and simple navigation model.
- Keep content pages consistent with the existing style and tone.
- Avoid introducing a framework unless explicitly requested.
- When editing pages, maintain the existing HTML/CSS conventions and relative links.
- If adding new documentation pages, follow the same pattern as the existing hubs.

## Recommended starting points
- For overall structure: index.html
- For policy content style: sapphire-ai-policy-core/index.html
- For feature content style: sapphire-ai-policy-features/index.html
- For interactivity: sapphire-ai-policy-features/help-search.JS and sapphire-ai-policy-core/i18n.js

## Keeping this file current
Whenever a change alters the structure or conventions described above (new top-level section, new hub, added/removed key files, a shift in navigation or design pattern, a new build step, etc.), update the relevant section of this file to match. No need to log individual edits or keep a changelog — just keep the descriptions here accurate to the current state of the repo.
