# AGENTS.md

## Project Overview

This repository contains the personal website of **Alfrin Poulose**.

The website is a personal software engineering portfolio, technical notebook, project showcase, and public representation of Alfrin's engineering interests.

The website should position Alfrin primarily as:

> **Software Engineer · AI · Systems · Performance · Open Source**

Alfrin is a developer, maker, tinkerer, and technically curious person interested in understanding how software works underneath abstractions.

The website should communicate:

* software engineering depth
* curiosity
* AI
* system design
* systems
* performance engineering
* emerging technologies
* open source
* experimentation
* building things from scratch
* technical writing

The site must **not** feel like a generic developer portfolio.

---

# Design Specification Reference

`design.md` (in the repository root) is the visual and content specification for this project — typography, color system, section-by-section copy direction, layout intent, and the overall "engineering notebook" personality.

`AGENTS.md` (this file) is the **implementation contract** — it governs how that design gets built and maintained in code.

Relationship between the two:

* `design.md` describes *what the site should look and feel like*.
* `AGENTS.md` describes *how to build and maintain it correctly, forever*.
* Where the two ever appear to disagree, treat `AGENTS.md`'s architectural rules (shadcn as the primitive layer, centralized data, static-first Astro, accessibility, performance) as non-negotiable, and treat `design.md` as the source of truth for visual/content detail within those constraints.

Read `design.md` before implementing any new section for the first time.

---

# Core Product Concept

The central concept of the website is:

> **A personal engineering notebook that happens to contain projects.**

The site should feel like an engineer's technical notebook transformed into a polished public website.

It should communicate:

* what Alfrin builds
* what Alfrin is learning
* what Alfrin is curious about
* what Alfrin has experimented with
* what Alfrin thinks about engineering
* what Alfrin has contributed to open source

The **Notebook** is a first-class part of the website and should receive more visual importance than a conventional portfolio blog.

---

# Technology Stack

The primary stack is:

* Astro
* TypeScript
* Tailwind CSS
* shadcn/ui
* Markdown
* Astro Content Collections / Content Layer
* JetBrains Mono
* Static generation by default

The project already has **shadcn/ui installed and configured**.

The existing shadcn configuration is the source of truth for:

* typography
* colors
* design tokens
* component primitives
* radius
* component states
* accessibility behavior

**Do not replace, reset, or override the existing shadcn theme.**

---

# Existing UI System

## shadcn/ui Is Already Configured

The project already contains the required shadcn/ui setup.

If, at any point, the shadcn configuration is missing or incomplete for a token described in `design.md` (JetBrains Mono, the violet accent, dark-first theming), initialize it **once**, using `design.md` as the specification. After that initial calibration, the resulting shadcn configuration becomes authoritative — do not re-derive or second-guess those tokens again in later sessions.

The agent must:

* inspect the existing shadcn components before creating new ones
* reuse existing components whenever applicable
* use the existing theme tokens
* use the existing typography
* use the existing accent color
* preserve the existing component styling
* preserve the existing accessibility behavior

Do not recreate components that shadcn already provides.

Examples include:

* Button
* Badge
* Card
* Dialog
* Sheet
* Tooltip
* Separator
* Tabs
* Dropdown Menu
* Navigation Menu
* Input
* Textarea
* Scroll Area

Use the installed component if it solves the requirement.

---

# Do Not Override shadcn

**This is a strict rule.**

Do not:

* redefine the primary color
* redefine the accent color
* replace the font
* introduce another color system
* override shadcn component defaults globally
* replace shadcn radius tokens
* replace shadcn spacing conventions unnecessarily
* create a competing component library
* copy shadcn components and substantially alter their foundation without a reason

The existing shadcn configuration already contains the intended:

```text
JetBrains Mono
Violet accent
Theme tokens
Component styling
```

Treat those as established project decisions.

---

# Tailwind CSS

Tailwind CSS is the primary styling layer.

Use Tailwind for:

* layout
* responsive behavior
* spacing
* positioning
* typography utilities
* composition
* responsive states
* small visual adjustments
* custom portfolio-specific visual details

However:

> **Do not use Tailwind to recreate styles that are already provided by shadcn/ui.**

For example, if a Button component already exists, use:

```astro
<Button>View Projects</Button>
```

rather than creating a new button using:

```html
<button class="...">
```

for the same purpose.

Tailwind should complement shadcn, not compete with it.

---

# Tailwind and shadcn Relationship

The intended hierarchy is:

```text
shadcn/ui
    ↓
Reusable UI primitives
    ↓
Tailwind CSS
    ↓
Portfolio-specific composition
```

For example:

```text
Button
 └── shadcn Button

Notebook status
 └── shadcn Badge

Mobile navigation
 └── shadcn Sheet

Project container
 └── shadcn Card where appropriate

Separators
 └── shadcn Separator

Tooltips
 └── shadcn Tooltip
```

Then compose these components into the custom portfolio design.

---

# Custom Components

Custom components are encouraged when the website has a visual pattern that does not exist in shadcn.

Examples:

```text
NotebookEntry
NotebookIndex
ProjectCard
TechnicalLabel
PaperFrame
SectionHeading
Hero
SocialLinks
CurrentFocus
EngineeringTimeline
```

These should compose existing shadcn primitives whenever possible.

For example:

```text
NotebookEntry
 ├── Badge
 ├── Separator
 └── Link
```

rather than independently recreating badge/separator/button styles.

---

# Custom Visual Identity

The portfolio has a custom visual language on top of shadcn.

The custom identity consists of:

* technical notebook aesthetic
* subtle paper borders
* editorial layout
* technical annotations
* strong typography
* dark-first theme
* violet highlights
* restrained motion
* generous but controlled whitespace

These custom visual elements should be layered **on top of** the existing shadcn system.

Do not replace the underlying component system.

---

# Primary Accent Color

The project already has the required violet accent configured.

Use the existing shadcn semantic tokens.

Do **not** introduce another primary color.

Do not hardcode the violet value throughout components.

Prefer the existing semantic tokens such as:

```text
bg-primary
text-primary
text-primary-foreground
border-primary
ring-primary
```

or whatever equivalent tokens are already defined by the installed shadcn setup.

If the existing theme uses different token names, follow the existing names.

**Never create a second `primary` color definition.**

---

# Typography

The project already has **JetBrains Mono** configured.

Use the existing typography configuration.

Do not:

* install another font
* introduce another primary font
* override the global font family
* add unnecessary font weights
* replace JetBrains Mono with another typeface

Typography hierarchy should be achieved using the existing font with:

* size
* weight
* line height
* tracking
* spacing
* color
* composition

---

# Dark and Light Mode

The project already supports the required theme system.

Dark mode should remain the preferred/default visual experience.

Do not replace the existing theme implementation.

Do not install another theme library.

Do not create a second dark/light mode system.

The implementation should respect the project's existing shadcn theme architecture.

Theme switching should work correctly across:

* homepage
* Notebook
* articles
* projects
* navigation
* dialogs/sheets
* interactive components

---

# Astro Architecture

Astro is the primary rendering architecture.

Prefer:

```text
Astro
  ↓
Static HTML
  ↓
Tailwind / shadcn
  ↓
Small interactive islands where required
```

Avoid turning the website into a client-side SPA.

Static content should remain static.

Use Astro components for:

* hero
* navigation
* Notebook listing
* Notebook articles
* projects
* about
* contact
* footer

Only hydrate components that genuinely require client-side interaction.

---

# JavaScript Philosophy

Default rule:

> If CSS, Astro, shadcn, or native browser APIs can solve it, do not add JavaScript.

Avoid unnecessary:

* global state
* client-side rendering
* animation libraries
* data fetching
* event listeners
* client-side routing
* hydration

Interactive components such as the theme toggle or mobile navigation may use small islands.

Do not hydrate the entire page.

---

# Project Structure

Prefer a structure similar to:

```text
.
├── public/
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── robots.txt
│   └── ...
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.*
│   │   │   ├── badge.*
│   │   │   ├── card.*
│   │   │   └── ...
│   │   │
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── NotebookEntry.astro
│   │   ├── ProjectCard.astro
│   │   ├── SectionHeading.astro
│   │   └── ...
│   │
│   ├── content/
│   │   └── notebook/
│   │       ├── first-post.md
│   │       └── ...
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   └── experience.ts
│   │
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── NotebookLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── notebook/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── projects/
│   │       └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── components.json
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── design.md
└── AGENTS.md
```

Adapt this to the existing project rather than blindly restructuring it.

---

# shadcn Components Directory

Do not modify existing components inside:

```text
src/components/ui/
```

unless the task specifically requires changing that primitive.

If a design requires different composition, wrap or compose the primitive instead.

For example:

```text
src/components/ui/button.*
```

should remain the standard Button primitive.

Create:

```text
src/components/ResumeButton.astro
```

or equivalent composition if the portfolio needs a special presentation.

Do not create a second Button implementation.

---

# Adding New shadcn Components

If a required primitive does not already exist:

1. Check whether shadcn provides it.
2. Prefer adding the official shadcn component.
3. Follow the project's existing shadcn configuration.
4. Do not manually recreate the primitive.
5. Do not change global tokens just to make the component fit.

The existing design system must remain consistent.

---

# Personal Data

Personal information must be centralized.

For example:

```ts
export const profile = {
  name: "Alfrin Poulose",

  role: "Software Engineer",

  headline:
    "Building things, understanding how they work, and exploring what's next.",

  description:
    "Software engineer exploring AI, systems, performance, open source, and emerging technologies.",

  interests: [
    "Artificial Intelligence",
    "System Design",
    "Performance Engineering",
    "Distributed Systems",
    "Open Source",
    "Developer Tools",
  ],

  social: {
    github: "",
    linkedin: "",
    email: "",
    resume: "/resume.pdf",
  },

  currently: {
    exploring: [] as string[],
    building: [] as string[],
    learning: [] as string[],
  },
};
```

Do not hardcode personal information inside components.

This includes:

* name
* email
* GitHub
* LinkedIn
* resume
* bio
* interests
* current activities

---

# Notebook

Notebook is the most important content section.

The Notebook should feel more like an engineering journal than a conventional blog.

Each entry should communicate:

* title
* short description
* publication date
* optional reading time
* optional tags
* `NEW` state for the newest published post

Example:

```text
01                                  NEW
How Does a Database Actually
Find Your Data?

A practical exploration of indexes,
B-Trees, and query execution.

AUG 10, 2026 · 8 MIN READ
```

---

# Notebook Content Architecture

Notebook articles should be Markdown files.

Example:

```text
src/content/notebook/
├── understanding-btrees.md
├── building-an-llm-runtime.md
└── why-latency-matters.md
```

Use Astro's content collection/content layer for:

* schema validation
* querying
* sorting
* generating pages
* generating metadata

Do not manually import every Markdown article into the homepage.

---

# Notebook Frontmatter

Preferred structure:

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
```

Use structured dates.

Do not store formatted dates as the source of truth.

---

# Notebook Ordering

Sort published posts by:

```text
publishedAt DESC
```

The newest published post automatically receives:

```text
NEW
```

Do not manually add:

```yaml
new: true
```

to articles.

The UI should derive the state from the sorted content collection.

---

# Draft Posts

Posts with:

```yaml
draft: true
```

must not appear publicly.

They should not appear in:

* Notebook listings
* homepage
* RSS
* sitemap
* related posts

They should not generate publicly accessible article routes.

---

# Notebook URLs

Notebook URLs should be readable and stable.

Preferred:

```text
/notebook/how-databases-find-your-data/
```

Avoid index-based URLs.

Do not silently change URLs for existing posts.

---

# Markdown Philosophy

Markdown should primarily contain content.

Avoid putting large amounts of HTML inside articles.

Use Astro components for reusable presentation.

Use MDX only when an article genuinely requires interactive components.

Do not introduce MDX by default.

---

# Projects

Projects should communicate engineering thinking rather than simply listing technologies.

A project should ideally answer:

1. What is it?
2. Why was it built?
3. What problem does it address?
4. What is technically interesting?
5. What was learned?
6. Where can it be explored?

Project data should remain centralized.

Example:

```ts
export interface Project {
  title: string;
  description: string;
  type: "project" | "experiment" | "open-source" | "tool";
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [];
```

---

# Project UI

Use existing shadcn components where appropriate.

For example:

```text
ProjectCard
 ├── Card
 ├── Badge
 ├── Button
 └── Separator
```

Do not recreate those primitives manually.

The project-specific visual composition should come from layout and Tailwind utilities.

---

# Open Source

Open source is part of Alfrin's engineering identity.

Prefer curated open-source information rather than meaningless statistics.

Do not invent:

* GitHub stars
* contribution counts
* repository metrics
* commit counts
* activity statistics

Only display information that is actually available.

---

# Currently

The Currently section signals that Alfrin is actively building and learning. It should read like a margin note in a notebook, not a resume bullet list.

At minimum it should communicate:

* what is currently being explored
* what is currently being built
* what is currently being learned

Drive this entirely from `src/data/profile.ts` (`currently.exploring`, `currently.building`, `currently.learning`). Do not hardcode these values inside the component.

If a field is empty, the section should degrade gracefully — hide that sub-item rather than rendering an empty heading or a broken layout. Never invent placeholder content to fill an empty field.

---

# About

The About section is short — a few sentences, not a resume page.

It should communicate:

* who Alfrin is
* what he's curious about
* his general engineering direction

It should not restate Alfrin's full work history — that belongs in `src/data/experience.ts` and/or the resume PDF. Link to the resume rather than duplicating it.

---

# Contact

The Contact section should be simple and direct. Do not add a contact form unless explicitly requested in a future task.

It must include:

* a short, direct prompt inviting interesting engineering problems, ideas, or collaboration
* a directly clickable email link (`mailto:`)
* links to GitHub, LinkedIn, and Resume

Pull every value from `src/data/profile.ts` (`social.email`, `social.github`, `social.linkedin`, `social.resume`). Never hardcode contact details directly in a component, and never fabricate a value that isn't already present in `profile.ts` — leave it as an empty string / omit the link instead.

---

# Homepage

Preferred homepage structure:

```text
Navigation

Intro

Currently

Notebook

Projects

Open Source / Experiments

About / Experience

Contact

Footer
```

Notebook should receive strong visual importance.

The homepage should quickly communicate:

> Who is this person?

and then:

> What does this person think about and build?

---

# Navigation

Desktop navigation should provide access to:

* Notebook
* Projects
* About
* GitHub
* LinkedIn
* Resume

Use shadcn primitives where applicable.

Mobile navigation should use the existing shadcn `Sheet` or equivalent installed primitive rather than creating a custom modal/navigation system.

---

# Responsive Design

Responsive UI is mandatory.

The website must work intentionally across:

* small phones
* large phones
* tablets
* laptops
* desktops
* wide monitors

Use Tailwind's mobile-first responsive system.

Base styles should work on small screens.

Enhance using:

```text
sm:
md:
lg:
xl:
2xl:
```

only when necessary.

---

# Mobile Navigation

The mobile navigation must:

* have comfortable touch targets
* be keyboard accessible
* expose all important navigation
* support theme switching
* close predictably
* prevent inappropriate body scrolling

Prefer the existing shadcn `Sheet` component.

Do not install another navigation library.

---

# Touch Targets

Interactive controls should have comfortable touch targets.

Aim for approximately:

```text
44 × 44px
```

for important interactive controls.

Use shadcn components wherever possible because their interaction states and accessibility patterns are already established.

---

# Responsive Notebook

Desktop may use an editorial/asymmetric layout.

Mobile should use:

```text
single column
comfortable spacing
large readable titles
naturally wrapping metadata
```

Do not compress Notebook entries into tiny cards.

The title should remain the most visually important element.

---

# Responsive Projects

Projects may use multi-column layouts on larger screens.

On mobile, use a single-column layout where appropriate.

Technology lists must wrap naturally.

Do not allow project cards to cause horizontal overflow.

---

# Responsive Hero

Mobile priority:

1. name
2. role
3. description
4. primary actions
5. current interests

Do not create an unnecessarily huge hero.

Users should reach the Notebook quickly.

---

# Container

Use a consistent site-wide container.

For example:

```astro
<div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
```

The exact values can follow the existing design.

Do not create arbitrary container widths for individual sections.

---

# Horizontal Overflow

The page must not create viewport-level horizontal scrolling.

Pay particular attention to:

* large headings
* navigation
* metadata
* code
* tables
* paper borders
* pseudo-elements
* decorative elements

Code and tables may scroll within their own containers.

---

# Paper / Technical Border Effect

The website has a subtle paper/technical border aesthetic.

This should be implemented as a portfolio-specific visual layer.

Use:

* Tailwind
* CSS variables
* pseudo-elements
* borders
* offsets
* technical labels
* small corner marks

Do not override shadcn's global component styling to achieve this.

If a shadcn Card is used, preserve its underlying component behavior and add the paper effect through composition.

Example concept:

```text
PaperFrame
 └── Card
      └── content
```

rather than modifying the global Card implementation.

---

# Accessibility

Accessibility is mandatory.

Use semantic HTML:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use:

* `<button>` for actions
* `<a>` for navigation
* accessible labels
* keyboard navigation
* visible focus states

Use shadcn primitives whenever they provide the required accessible behavior.

Do not replace accessible shadcn primitives with generic `<div>` implementations.

---

# Focus States

Every interactive element must have a visible focus state.

Do not remove outlines globally.

If custom focus styling is necessary, use the project's existing shadcn/Tailwind focus conventions.

---

# Color Accessibility

Do not rely exclusively on violet to communicate information.

For example, `NEW` should be communicated through:

* label
* typography
* positioning

and may additionally use violet.

Ensure sufficient contrast in both themes.

---

# Reduced Motion

Respect:

```text
prefers-reduced-motion
```

Animations should never be required to understand content.

---

# Motion

Motion should be restrained.

Good:

* opacity transitions
* subtle transforms
* border drawing
* hover transitions
* view transitions

Avoid:

* particle backgrounds
* excessive parallax
* animated gradients
* constant motion
* scroll hijacking
* loading screens
* excessive spring animations

The site should feel calm and technical.

---

# Performance

Performance is part of the portfolio's identity.

The website should demonstrate engineering discipline.

Prefer:

* static HTML
* optimized images
* minimal JavaScript
* CSS transitions
* native browser APIs
* selective hydration
* Astro content collections

Avoid:

* large JavaScript bundles
* unnecessary client rendering
* heavy animation libraries
* unnecessary API calls
* excessive third-party scripts
* autoplay media
* unnecessary dependencies

---

# Images

Use Astro image tooling where appropriate.

Images must:

* scale naturally
* preserve aspect ratio
* avoid layout shifts
* have appropriate dimensions
* have meaningful alt text

Decorative images should use empty alt text where appropriate.

---

# Resume

The resume should be directly downloadable.

Preferred:

```text
public/resume.pdf
```

URL:

```text
/resume.pdf
```

Expose it through the centralized profile data.

---

# SEO

Every page should have:

* unique title
* meta description
* canonical URL
* Open Graph metadata
* social metadata
* appropriate robots configuration

Recommended default positioning:

```text
Alfrin Poulose | Software Engineer · AI · Systems
```

Recommended description:

```text
Software engineer exploring AI, systems, performance, open source, and emerging technologies. I build software, experiment with ideas, and write about what I learn.
```

Avoid keyword stuffing.

Metadata should attract the right engineering opportunities rather than simply maximizing search keywords.

---

# Structured Data

Use structured data where appropriate.

Potential types:

```text
Person
WebSite
Article
```

Article metadata should be generated from Notebook content.

Do not manually duplicate article metadata.

---

# Sitemap and RSS

The Notebook should be represented in the sitemap.

The Notebook should also expose an RSS feed.

Only published posts should appear in:

* sitemap
* RSS
* public Notebook listings

---

# Dependency Philosophy

Before adding a dependency ask:

1. Does Astro already provide this?
2. Does shadcn already provide this?
3. Does Tailwind already provide this?
4. Does the browser already provide this?
5. Can a small local utility solve it?
6. What is the runtime cost?
7. What is the maintenance cost?

Avoid adding dependencies simply because they are popular.

---

# Design Import (Stitch or Any External Design Tool)

Alfrin may, from time to time, use an external AI design tool (for example Stitch, connected via MCP) to generate a visual reference or scaffolded markup for a page or section.

This is strictly a **one-time visual reference step**, never an ongoing part of the architecture. Treat any imported design output exactly the way you'd treat a screenshot or a Figma file: a source of visual truth to translate into the real codebase, not code to keep as-is.

When a design is imported:

1. Treat the output as a **visual specification**, not final code.
2. Extract intent — layout, spacing, visual hierarchy, copy, section structure — rather than the raw markup, class names, or components the tool generated.
3. Re-implement that intent using the project's real architecture:
   * Astro components
   * existing shadcn/ui primitives
   * Tailwind utilities
   * the project's existing design tokens (JetBrains Mono, the configured violet accent, dark/light theme)
4. Do not leave the imported HTML/CSS/JS in the codebase as-is, even temporarily.
5. Do not introduce a competing component library, CSS framework, or class-naming convention that came from the import tool.
6. Never add the design tool itself as a runtime or build dependency, and never add it to `package.json`. It is a design-time aid only.
7. Once a section (Notebook, Projects, Currently, About, Contact, etc.) has been translated into real Astro/shadcn/Tailwind code, that code — not the import — is the source of truth for that section going forward.
8. If a later design import conflicts with an already-implemented section, treat it as a design revision request, not a reset: apply the new intent through the existing architecture rather than replacing the section wholesale.

`AGENTS.md` describes how this site is built and must stay accurate indefinitely, long after any individual design import. Never let this file describe a specific import tool's output, markup, or workflow quirks — only describe the durable, resulting implementation.

---

# Do Not Introduce Another Component Library

The project already uses shadcn/ui.

Do not add:

* MUI
* Chakra
* Mantine
* DaisyUI
* Radix-based competing wrappers
* another UI kit

unless explicitly requested.

shadcn remains the project's component foundation.

---

# Do Not Invent Information

Never fabricate personal information.

Do not invent:

* email
* GitHub URL
* LinkedIn URL
* resume URL
* employment
* projects
* experience
* metrics
* open-source contributions
* article dates
* project statistics

Use explicit placeholders where information is missing.

---

# No Unnecessary Backend

This is a static portfolio.

Do not introduce:

* databases
* authentication
* CMS
* API server
* global backend state

unless explicitly required.

Markdown is sufficient for Notebook content.

TypeScript data files are sufficient for structured portfolio data.

Astro static generation is sufficient for the primary website.

---

# Source of Truth

Use clear sources of truth.

```text
Visual/content specification (reference only)
→ design.md

Personal information
→ src/data/profile.ts

Projects
→ src/data/projects.ts

Experience
→ src/data/experience.ts

Notebook
→ src/content/notebook/*.md

UI primitives
→ src/components/ui/

Design tokens (realized)
→ existing shadcn configuration

Portfolio-specific styling
→ Tailwind + small custom CSS where necessary
```

Do not duplicate the same information across multiple locations.

---

# Existing shadcn Configuration Is Authoritative

Before changing colors, typography, radius, or component styling:

1. inspect `components.json`
2. inspect the existing global CSS
3. inspect the existing shadcn UI components
4. inspect the Tailwind configuration if present
5. determine which tokens already exist
6. reuse them

Do not assume the theme needs to be recreated.

The project already has (or, on first setup, should be initialized once from `design.md` to have):

```text
JetBrains Mono
Violet accent
Dark/light theme
shadcn components
```

Once configured, these are established decisions and should not be redefined in later sessions.

---

# Agent Workflow

When modifying the project:

1. Inspect the repository.
2. Inspect `package.json`.
3. Inspect `components.json`.
4. Inspect existing `src/components/ui`.
5. Inspect the current global CSS.
6. Inspect the current Tailwind configuration/setup.
7. Inspect the Astro version.
8. Inspect the content collection setup.
9. Check `design.md` for the relevant section's visual/content intent.
10. Reuse existing shadcn primitives.
11. Keep personal data centralized.
12. Keep Notebook content in Markdown.
13. Keep static content static.
14. Use islands only where necessary.
15. Make every UI change responsive.
16. Preserve accessibility.
17. Preserve SEO.
18. Avoid unnecessary dependencies.
19. Run type checks/lint/build where available.

---

# Agent Rules for UI Implementation

When implementing a design:

1. Start with existing shadcn components.
2. Compose them into the desired portfolio layout.
3. Use Tailwind for layout and responsive styling.
4. Do not recreate shadcn primitives.
5. Do not override global shadcn tokens.
6. Do not replace JetBrains Mono.
7. Do not replace the configured violet accent.
8. Do not introduce another UI framework.
9. Add custom CSS only for portfolio-specific visual effects.
10. Preserve dark/light mode.
11. Make the design mobile-first.
12. Keep JavaScript minimal.
13. Preserve accessibility.
14. Preserve performance.

---

# Design Hierarchy

The visual hierarchy should communicate:

```text
Person
  ↓
Engineering identity
  ↓
Curiosity
  ↓
Notebook
  ↓
Projects
  ↓
Open source
  ↓
Contact
```

The Notebook should not look like a secondary blog link.

It is one of the main reasons the website exists.

---

# Design Personality

The site should feel like:

> **A beautifully typeset engineering notebook from a curious software engineer.**

It should feel:

* technical
* personal
* curious
* precise
* understated
* experimental
* thoughtful
* modern

It should NOT feel like:

* a generic portfolio template
* a resume website
* a SaaS landing page
* a dashboard
* a cyberpunk terminal
* a hacker-themed gimmick
* a template filled with gradients
* an AI-generated portfolio cliché

---

# Content Voice

Use a direct engineering voice.

Prefer:

> I built this because I wanted to understand how it worked.

over:

> I am a passionate developer who loves creating innovative solutions.

Avoid generic phrases such as:

* passionate developer
* results-driven professional
* highly motivated developer
* technology enthusiast
* innovative solutions

The Notebook should sound like a real engineer documenting real thinking.

---

# Responsive Definition of Done

A feature is not complete until it has been checked at representative widths:

```text
320px
375px
768px
1024px
1280px
1440px+
```

Verify:

* no horizontal overflow
* navigation works
* mobile navigation works
* typography remains readable
* headings wrap correctly
* paper borders remain correct
* buttons remain tappable
* images scale correctly
* Notebook remains prominent
* Projects remain usable
* footer remains readable
* dark mode works
* light mode works
* focus states work
* reduced-motion behavior works

---

# Testing

Use the project's existing package manager and scripts.

At minimum, verify the development server and production build.

For example:

```bash
npm run dev
npm run build
```

If the project defines:

```text
lint
typecheck
check
test
```

run the relevant checks as well.

Do not assume npm if the repository uses another package manager.

---

# Content Testing

When adding a Notebook article, verify:

* frontmatter validates
* title exists
* description exists
* publication date is valid
* slug is correct
* draft behavior works
* article appears in Notebook
* newest article receives `NEW`
* article metadata is correct
* RSS is correct
* sitemap is correct
* images render correctly
* code blocks work
* mobile reading experience is good

---

# Git Practices

Keep commits focused.

Examples:

```text
feat: add notebook collection
feat: add responsive navigation
feat: add theme toggle
feat: add project section
content: add article about database indexes
style: refine notebook border system
fix: prevent theme flash
fix: improve mobile article layout
```

Avoid large commits containing unrelated changes.

---

# Definition of Done

A feature is complete when:

* it works on desktop
* it works on mobile
* it works in dark mode
* it works in light mode
* it uses existing shadcn primitives where applicable
* it does not override the existing shadcn theme
* it preserves JetBrains Mono
* it preserves the configured violet accent
* it is keyboard accessible
* it has visible focus states
* it does not create horizontal overflow
* it follows the Tailwind styling system
* it uses the existing data architecture
* it does not duplicate personal information
* it has appropriate SEO
* it does not introduce unnecessary JavaScript
* it does not introduce unnecessary dependencies
* any imported design reference (Stitch or otherwise) has been fully translated into real Astro/shadcn/Tailwind code, with no leftover import artifacts
* the production build succeeds

---

# Final Engineering Principle

The website itself should demonstrate the qualities it represents.

If the site says:

> **Performance matters.**

The site should be fast.

If the site says:

> **Understanding systems matters.**

The architecture should be simple and intentional.

If the site says:

> **Curiosity matters.**

The Notebook should demonstrate that curiosity.

If the site says:

> **Open source matters.**

The website itself should be readable, maintainable, and approachable.

If the site says:

> **I build things.**

The website should itself be a carefully engineered thing.

Use Astro for what Astro is good at.

Use Markdown for content.

Use shadcn for reusable UI primitives.

Use Tailwind for composition and responsive styling.

Use custom CSS only when the portfolio's distinctive visual language genuinely requires it.

Keep the implementation simple enough to understand, fast enough to feel instant, and expressive enough to feel unmistakably personal.