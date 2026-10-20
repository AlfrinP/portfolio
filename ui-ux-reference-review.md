# UI/UX Reference Review

**Reference:** `parascodes.is-a.dev` screenshots in `/home/alfrin/Downloads/review/black-theme.png` and `white-theme.png`  
**Reviewed against:** the current portfolio homepage, navigation, footer, shared data, and project design notes.

## Overall direction

The screenshots show one portfolio in two themes: a centered, narrow editorial column with a profile-led introduction and a long sequence of compact, clearly separated sections. The strongest ideas to carry over are the consistent page structure across themes, the restrained use of borders, the dense but scannable content, and the balance between professional work and personal interests.

Use the reference as a layout and hierarchy guide, not as a reason to replace this site's engineering-notebook identity. Keep the Astro structure and notebook-first positioning. Use Inter for interface text, JetBrains Mono for code, and a light-blue accent with the neutral black/white surfaces.

## What the reference does well

- **Clear identity at the top:** a wide cover image, small profile image, name, role/location details, short bio, and compact links establish who the page is about before the visitor reaches the long-form content.
- **A readable narrow measure:** the main content sits in a centered column. This keeps text and metadata easy to scan even though the page is long.
- **Consistent section rhythm:** headings, fine rules, compact labels, and restrained gaps make each section recognizable without enclosing the whole page in heavy panels.
- **Useful variety in content layouts:** experience uses rows, projects use a small card grid, skills use wrapping tags, and activity uses compact visual summaries. The page avoids presenting every kind of content as the same card.
- **A complete personal profile:** professional experience and projects sit alongside education, interests, highlights, activity, and a guestbook, giving visitors multiple ways to understand the person.
- **Two coherent themes:** dark and light versions retain the same order and components. Surfaces, text, and borders change together while the page remains recognizable.

## Current project fit

The homepage currently contains a framed hero, Notebook cards, a large featured project panel, and an About & Approach section. The navigation links to Notebook, Projects, and About; the footer provides resource, navigation, and contact links.

This already has useful ingredients from the reference: a personal introduction, a writing section, selected work, and understated technical borders. The main mismatch is the overall composition. The current page uses a very wide maximum width, large vertical gaps, a prominent grid-backed hero, and a custom showcase panel. The reference is narrower, more compact, and gives its sections a more even editorial rhythm. The current homepage also lacks the profile image/cover treatment and several optional profile sections seen in the reference.

The current implementation uses many hard-coded dark colors and applies `dark` directly to the document. Its light and dark CSS values are currently identical. That means the reference's paired theme behavior is not yet represented in the implementation, even though the project design notes call for both themes.

## Recommended homepage structure

Use this compact sequence as one narrative, with a current-section side index on desktop and floating navigation on mobile:

1. **Intro** — name, role, concise bio, and links to the Notebook and Projects sections.
2. **About** — a short engineering approach and interest tags.
3. **Notebook** — a recent entry with date, reading time, and topic; keep this prominent.
4. **Projects** — a compact feature card with a technical summary and a real internal detail link.
5. **Socials & Contact** — keep GitHub, LinkedIn, email, resume, and RSS links together here.
6. **Footer** — copyright and a short site tagline.

Do not add all reference sections just to match its length. Experience, education, skills, and achievements need real content. The homepage intentionally omits a Currently section. Notebook and projects remain the site's defining material.

## Visual system recommendations

### Layout and hierarchy

- Bring the primary reading column closer to the reference's narrow editorial measure. Keep a wider outer frame only for page-level decoration or a desktop section index; avoid stretching paragraphs across the full viewport.
- Reduce the current large gaps between every section. Use a consistent, moderate section rhythm, then reserve more whitespace for the intro and Notebook.
- Use a shared section heading pattern: a small number or label, a clear heading, a brief optional description, and a fine divider. Keep section numbering subtle and consistent.
- Give each content type its own structure: experience as rows, Notebook as editorial entries, projects as cards, skills as tags, and activity as compact charts only when real data is available.
- Use corner marks selectively on the hero or one featured item. Repeating them on every panel will compete with the reference's quiet rules and borders.
- Keep a mobile-first single column. Let tag groups and metadata wrap naturally, and make any desktop section index collapse into ordinary page navigation on smaller screens.

### Color and themes

- Treat the screenshots as evidence for the *relationship* between colors: near-black dark canvas with slightly lifted surfaces, and white/light-neutral canvas with subtle gray borders. Their exact colors cannot be reliably measured from these scaled screenshots.
- Keep one semantic token set for background, surface, foreground, muted text, border, and the light-blue accent. Map both themes to those same roles so sections and controls change together.
- Preserve the project's configured shadcn theme as the source of truth. Before changing colors, check the actual shadcn token configuration; do not introduce a second competing palette or hard-code theme-specific values throughout the page.
- Add a visible, accessible theme control if light mode is part of the intended experience. Respect the saved user preference and system preference, with dark mode as the documented fallback.
- Check contrast for muted text, subtle borders, tags, and focus indicators in both themes. Decorative borders must not replace visible keyboard focus.

### Typography and borders

- Keep the established project type choices and build hierarchy through size, weight, line height, and spacing. Use monospace for compact metadata and technical labels; keep body copy comfortably readable rather than forcing every paragraph into tiny uppercase text.
- Use dotted, low-contrast rules to organize sections and frame cards. Reserve stronger outlines and the light-blue accent for active links, focus, status, or one featured item.
- Standardize surface, border, and radius treatment across Notebook and project elements so the page reads as one system. The reference generally relies on restrained framing; avoid making every section a separate dark slab.
- Keep the decorative grid in the hero faint and localized. The reference's comparatively quiet canvas lets its content lead.

## Section-by-section adaptation

| Current section | Recommendation |
| --- | --- |
| Hero | Keep the identity and concise bio. Reduce the heavy full-panel feel; use a compact profile header with a clear role and links. Add an image only if there is a suitable portrait/cover asset. |
| Notebook | Keep prominent. Improve entry metadata and ensure the “View all” action reaches a real index. Avoid duplicate placeholder links or entries. |
| Selected Projects | Keep the featured engineering story, but balance it with a compact grid/list of other real projects. Use consistent card framing and ensure labels/metrics are factual. |
| About & Approach | Keep the engineering perspective, but make it more personal and concise. Three equal cards currently make it feel like a feature grid; use a short editorial block with optional principles or interests. |
| Navigation | Use a current-section side index on desktop and a floating bottom bar on mobile. Keep social destinations in the Socials & Contact section, not in navigation. |
| Footer | Keep the footer minimal; keep all social and contact links in one dedicated section. |

## Suggested additions, by priority

1. **Experience**, if verified role history is ready. It is the most useful missing professional context from the reference.
2. **A real contact invitation** in the Socials & Contact section, alongside the complete set of social links.
3. **A curated Open Source / Experiments block**, if there are meaningful repositories or experiments beyond the featured project.
4. **Education or certifications**, if credentials are relevant and accurate.
5. **Skills, hackathons, DSA stats, interests, highlights, or guestbook**, only when each has content worth maintaining. Treat these as optional, not required page furniture.

## Implementation notes for a future redesign

- Keep the current Astro/static-first architecture and centralized personal data. Move any new experience, project, credential, or interest content into data/content files rather than hard-coding it into page markup.
- Reuse installed shadcn primitives and existing tokens; build custom composition for editorial rows and project features where needed.
- First standardize the page width, spacing scale, heading/divider pattern, and surfaces. Then make every existing and new section use those shared rules.
- Replace hard-coded dark-only utility colors with the project's semantic theme tokens where appropriate. Confirm the intended light/dark behavior at the layout and global stylesheet level before tuning individual components.
- Keep the same information order and component behavior in both themes. Only theme tokens should change; avoid separate dark/light layouts.
- Preserve accessible focus, keyboard operation, descriptive icon links, and readable contrast while simplifying the visual treatment.

## Review limits

This review is based on two supplied, scaled screenshots and the current repository files. Fine-grained measurements, exact reference colors, hover behavior, and mobile behavior cannot be confirmed from these images. The section suggestions are recommendations; the screenshots do not establish that every listed section belongs on Alfrin's site.
