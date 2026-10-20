# Personal Portfolio — Design Specification

## 1. Project Vision

This website is the personal portfolio and engineering notebook of **Alfrin Poulose**, a software engineer, maker, tinkerer, and technically curious developer.

The website must **not** feel like a conventional developer portfolio. It should communicate:

- deep technical curiosity
- software engineering rather than framework collecting
- interest in AI and systems
- performance consciousness
- experimentation
- open-source culture
- building things to understand them
- writing and documenting technical discoveries
- a strong personal identity

**Central idea:** A personal engineering notebook that happens to contain projects.

The website should feel like an engineer's private technical notebook that has been carefully turned into a polished public website — sophisticated, restrained, technical, personal, and highly readable.

## 2. Design Personality

The visual personality should combine:

- technical notebook
- engineering sketchbook
- editorial website
- developer workspace
- minimal documentation interface

**Avoid** making it look like:

- a SaaS landing page
- a generic developer portfolio
- a terminal emulator
- a futuristic cyberpunk website
- a crypto website
- a template portfolio
- a dashboard
- an excessive glassmorphism design

The design should communicate technical depth without relying on visual clichés.

## 3. Core Identity

**Primary positioning:** Software Engineer

**Secondary areas:**

- Artificial Intelligence
- Systems
- System Design
- Performance Engineering
- Open Source
- Developer Tools
- New Technologies
- Experimentation

The website should position Alfrin primarily as a software engineer interested in understanding systems deeply. Frontend development, React, Next.js, Spring Boot, Android, TypeScript, etc. can appear naturally inside projects, experience, and writing — but should not dominate the homepage identity.

## 4. Typography

**Primary interface font:** Inter. Use it for the navigation, headings, body copy, labels, and metadata to match the supplied visual reference. Use JetBrains Mono only for code samples and inline code.

Typography hierarchy should come from: font size, font weight, line height, letter spacing, opacity, spacing, layout.

| Level | Style | Used for |
|---|---|---|
| Display | Large, bold Inter | Homepage identity, major section titles, important Notebook titles |
| Heading | Medium/bold Inter | Subsection titles, project titles, article headings |
| Body | Regular Inter, generous line height | Body copy |
| Metadata | Small Inter, uppercase, increased letter spacing, muted color | e.g. `AUG 10, 2026 · 8 MIN READ` |

Typography should feel clear and editorial, matching the supplied reference rather than a monospace-heavy developer portfolio. Code remains monospaced for readability.

## 5. Color System

**Primary accent:** a restrained light blue, adapted for contrast in each theme.
```css
--color-primary-dark-theme: #8BBCE8;
--color-primary-light-theme: #3976AD;
```
Blue is an accent, not the dominant color.

### Dark Mode (default)

```css
--color-background: #09090B;
--color-surface: #101014;
--color-surface-elevated: #15151B;

--color-text: #F4F4F5;
--color-text-secondary: #A1A1AA;
--color-text-tertiary: #71717A;

--color-border: #27272A;
--color-border-subtle: #1F1F23;

--color-primary: #8BBCE8;
```
The background should be almost black rather than pure `#000000`.

## 6. Light Mode

Light mode should feel like the same notebook exposed to daylight — do not simply invert every dark-mode color.

```css
--color-background: #F7F7F5;
--color-surface: #FFFFFF;
--color-surface-elevated: #FFFFFF;

--color-text: #18181B;
--color-text-secondary: #52525B;
--color-text-tertiary: #71717A;

--color-border: #D4D4D8;
--color-border-subtle: #E4E4E7;

--color-primary: #3976AD;
```
Use the same light-blue hue in both themes and adjust its brightness for readable contrast.

## 7. Theme Behavior

- Dark mode is the default.
- Theme preference order: (1) explicit user preference stored locally → (2) OS/browser `prefers-color-scheme` → (3) dark mode fallback.
- Avoid a flash of incorrect theme during page load.
- Theme switching should be lightweight and require minimal JavaScript.
- The theme toggle should be a small interactive island / lightweight client-side script rather than turning the entire page into a client-rendered application.

## 8. Border / Paper Aesthetic

A defining characteristic of the site is the border treatment. Cards and sections should look subtly like they were drawn with a technical pen on paper.

Do **not** use conventional `border: 1px solid gray` everywhere without variation. Instead use:

- thin borders
- offset borders
- occasional secondary outline
- small corner marks
- subtle line interruptions
- tiny annotation labels
- slightly different border tones
- occasional imperfect/hand-drawn feeling

The effect must remain subtle. The visitor should think *"this feels like an engineer's notebook,"* not *"this website has a notebook theme."*

## 9. Decorative Technical Details

Use restrained visual details such as:

- Section numbers: `01` `02` `03`
- Small labels: `NOTEBOOK / 2026`, `PROJECT / 03`, `CURRENTLY`, `OPEN SOURCE`
- Tiny light-blue indicators: `●`
- Corner marks
- Fine horizontal rules
- Fine dotted rules spanning each section to create a ruled-notebook rhythm
- Small technical annotations

These should create texture without becoming distracting.

## 10. Navigation

Desktop navigation should be a compact, fixed side index with a visible current-section state. Mobile navigation should be a floating bottom bar with comfortable touch targets. Do not render a top navigation bar.

The navigation should remain visually lightweight. Mark the active section with light-blue text and a subtle rule. Keep all social and contact links together in one homepage section.

## 11. Homepage Structure

Single coherent narrative:

1. Intro
2. About
3. Notebook
4. Projects
5. Socials & Contact
6. Footer

## 12. Intro / Hero

The hero should immediately communicate identity:

```
ALFRIN POULOSE
SOFTWARE ENGINEER
AI · SYSTEMS · PERFORMANCE · OPEN SOURCE

I build software, explore new ideas,
and like understanding what happens
underneath the abstractions.

[ Explore Notebook ]    [ View Projects ]
```

Avoid oversized marketing copy. The hero should feel personal and direct.

Do not render a Currently section or hero exploration annotation on the homepage.

## 15. Notebook

The most important section after the introduction — should receive stronger visual treatment than Projects.

**Heading:** `NOTEBOOK`
**Supporting copy:** "Things I've learned, broken, built, and understood."

Posts are ordered newest-first.

## 16. Notebook Card

Each post should include: title, short description, publish date, reading time, optional tags, and a `NEW` indicator for the newest article.

```
01

HOW DOES A DATABASE
ACTUALLY FIND YOUR DATA?

A dive into indexes, B-Trees,
and what happens underneath
a simple query.

AUG 10, 2026
8 MIN READ

NEW
```

The `NEW` indicator uses the light-blue accent. Only the latest published post is marked `NEW`.

## 17. Notebook Detail Page

Article pages should prioritize reading:

```
NOTEBOOK

Article title
Short description

DATE · READING TIME · TAGS
────────────────────
Article content
────────────────────
Previous / Next
```

Do not surround the entire article with excessive cards — it should feel like a technical publication.

## 18. Markdown Content

Notebook posts are authored as Markdown files with strongly-typed frontmatter via Astro content collections:

```yaml
---
title: "How Does a Database Actually Find Your Data?"
description: "A practical exploration of indexes, B-Trees, and query execution."
publishedAt: 2026-08-10
updatedAt: 2026-08-10
readingTime: "8 min"
tags:
  - databases
  - systems
  - performance
draft: false
---

# Introduction
...
```

## 19. Projects

Projects should communicate engineering thinking rather than simply displaying technology logos. Each project should answer:

- What is it?
- Why did I build it?
- What is technically interesting?
- What did I learn?
- Where can someone explore it?

```
PROJECT / 01

PROJECT NAME

Short description explaining
the actual problem or idea.

WHY I BUILT THIS
...

WHAT'S INTERESTING
...

TECHNOLOGIES
TypeScript · AI · PostgreSQL

GitHub ↗    Live Demo ↗
```

## 20. Project Types

Types: `project`, `experiment`, `open-source`, `tool` — represented subtly, no giant category badges.

## 21. Experiments

Experiments are particularly important to the identity. An experiment can be small or unfinished. Examples:

- implementing a tiny database
- building a toy compiler
- experimenting with LLM inference
- testing a new protocol
- benchmarking two approaches
- building a developer tool
- reverse-engineering a concept
- creating a hardware/software experiment

Experiments should not need to look production-ready — the site should communicate that *curiosity is enough reason to build something.*

## 22. Open Source

Visible but not necessarily a huge standalone section:

```
OPEN SOURCE

Things I've contributed to,
built in public, or learned from.

Repository · Description · Contribution · GitHub ↗
```

If there are only a few contributions, fold this into Projects.

## 23. About

Short section describing: who Alfrin is, engineering interests, curiosity, open-source interest, previous experience, current direction. Avoid turning it into a traditional resume page — the resume exists separately.

## 24. Contact

Simple, direct:

```
HAVE AN INTERESTING
PROBLEM TO SOLVE?

I'm always interested in interesting
engineering problems, ideas, and collaborations.

email@example.com

GitHub ↗   LinkedIn ↗   Resume ↗
```

Email should be directly clickable. No contact form unless there's a future reason to add one.

## 25. Resume

Always easy to find — use `Resume ↗` rather than hiding it behind an icon. Place the PDF at `public/resume.pdf` unless there's a deployment-specific reason to use another asset strategy.

## 26. Footer

Minimal:

```
ALFRIN POULOSE

Built with Astro.
Written with curiosity.

GitHub · LinkedIn · Resume · Email

© 2026 Alfrin Poulose
```

No unnecessary footer navigation.

## 27. Motion

**Recommended:** section reveal, slight opacity/translate transitions, border drawing, hover movement, article navigation transitions, page transitions.

**Avoid:** constant floating objects, large parallax effects, excessive spring animations, scroll hijacking, loading screens, animated backgrounds.

Respect `prefers-reduced-motion`.

## 28. Astro View Transitions

Use Astro's view transition capabilities where appropriate. Page transitions should feel like moving between pages of the same notebook (e.g. Notebook index → Notebook article, with the article title persisting visually between pages). Transitions must stay subtle and never compromise navigation accessibility.

## 29. Responsive Design

Mobile-first design.

- **Desktop:** wide editorial layout, large whitespace, technical annotations, two-column project layouts where useful
- **Tablet:** reduced spacing, single/two-column adaptive layouts
- **Mobile:** single column, compact navigation, large readable text, full-width notebook cards, comfortable touch targets

Never simply shrink the desktop design — the mobile version should feel intentionally designed.

## 30. Accessibility

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient color contrast
- accessible theme toggle
- accessible links
- descriptive image alt text
- proper heading hierarchy
- reduced-motion support
- no interaction dependent exclusively on hover

The paper-border aesthetic must never interfere with readability.

## 31. Performance Philosophy

This portfolio is itself an example of good engineering. The website should be:

- mostly static HTML
- minimal JavaScript
- optimized images
- no unnecessary client framework
- no global state library
- no client-side rendering unless necessary
- no unnecessary animation libraries

Astro's islands architecture should be used intentionally: static UI remains static, and only genuinely interactive components receive client-side behavior.

## 32. Content Architecture

```
src/
├── content/
│   └── notebook/
│       ├── first-post.md
│       ├── second-post.md
│       └── third-post.md
│
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   └── experience.ts
│
├── components/
├── layouts/
├── pages/
├── styles/
└── assets/
```

Notebook content should use Astro Content Collections.

## 33. Personal Data

Personal information should be centralized, not hardcoded into reusable UI components:

```ts
export const profile = {
  name: "Alfrin Poulose",
  role: "Software Engineer",

  headline:
    "Building things, understanding how they work, and exploring what's next.",

  description:
    "Software engineer interested in AI, systems, performance, open source, and emerging technologies.",

  interests: [
    "Artificial Intelligence",
    "System Design",
    "Performance Engineering",
    "Distributed Systems",
    "Open Source",
    "Developer Tools"
  ],

  social: {
    github: "",
    linkedin: "",
    email: "",
    resume: "/resume.pdf"
  },

  currently: {
    exploring: [],
    building: [],
    learning: []
  }
};
```

## 34. SEO

- unique page titles
- useful meta descriptions
- canonical URLs
- Open Graph metadata
- Twitter/X metadata
- sitemap
- robots.txt
- RSS for Notebook
- semantic article metadata
- structured data where appropriate

The title should position Alfrin as a software engineer rather than only a frontend developer.

**Suggested title:** `Alfrin Poulose | Software Engineer · AI · Systems`

**Suggested description:** "Software engineer exploring AI, systems, performance, open source, and emerging technologies. I build software, experiment with ideas, and write about what I learn."

## 35. Design Principle

The website should always answer: *Who is this person, what do they care about, and what have they built or learned?*

It should **not** primarily answer: *What technologies does this person know?*

Technology should support the story, not become the story.

## 36. Final Visual Direction

The final site should feel like: **a beautifully typeset engineering notebook from a curious software engineer.**

Not a resume. Not a landing page. Not a dashboard. Not a terminal. Not a design experiment for its own sake.

The visual system should make the visitor curious enough to open the Notebook and discover how Alfrin thinks.
