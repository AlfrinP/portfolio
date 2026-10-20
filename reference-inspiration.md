# Portfolio Design Inspiration: parascodes.is-a.dev

## Reference access

The reference URL could not be loaded in the available browser or network tools, and a search for the exact domain did not return an indexed copy. This note therefore records the design direction Alfrin specifically called out—borders and color theme—and translates it into practical ideas for this portfolio. Exact colors, measurements, layouts, and interactions from the reference have **not** been verified. A screenshot or accessible copy would let us make a more precise visual analysis.

## What to take inspiration from

### 1. Make borders a recognizable part of the identity

The border treatment is one of the elements that stood out to Alfrin. Carry that through the portfolio as a consistent visual language:

- Use fine, low-contrast outlines to define cards, sections, and navigation boundaries.
- Add a second offset line or small corner marks selectively, so important panels feel carefully framed.
- Vary the treatment by purpose: a quiet outline for ordinary cards, a brighter edge or corner detail for a featured notebook entry or active state.
- Use rules to separate metadata from titles and content, rather than enclosing every element in a box.
- Keep corners square or only slightly rounded if that supports the reference’s technical feel.
- Make the border useful: it should clarify grouping, focus, and hierarchy at desktop and mobile sizes.

The existing project design already calls for subtle technical-pen borders, offset outlines, corner marks, and fine rules. The reference can reinforce that direction; it need not introduce a separate design system.

### 2. Borrow the color relationships, not unverified hex values

Alfrin likes the reference’s color theme. Until its exact palette can be inspected, take inspiration from the *relationships* that make a palette feel cohesive:

- Keep the page background deep and restrained.
- Use a slightly lighter surface for cards and panels, with borders distinct enough to remain visible.
- Reserve the strongest accent color for small, intentional moments: links, active navigation, status indicators, and featured details.
- Keep body text high-contrast and secondary labels muted, but still readable.
- Avoid adding multiple competing accent colors; a small palette makes border details feel deliberate.

This portfolio already defines a dark notebook palette with a violet accent (`#6F70F2`) and dark/light theme tokens. Preserve those established choices unless a direct visual comparison shows a clear reason to adjust them. In particular, do not claim the reference uses these values.

### 3. Use framing to create hierarchy

Borders work best when they help the visitor scan the content. Possible applications:

- Frame the hero as a single editorial panel, without adding a heavy container around every child element.
- Give notebook entries and featured projects distinct frames so they read as important content.
- Use thin dividers between metadata, descriptions, and links.
- Highlight the active navigation item with a small border, underline, or accent marker.
- Use corner marks or an offset outline on only a few high-priority panels.

### 4. Keep the palette and border style responsive

- Preserve visible edge contrast in both dark and light themes.
- On small screens, simplify layered outlines if they crowd the content.
- Keep focus indicators visible and distinct from decorative borders.
- Respect reduced-motion preferences if any border or accent animation is added.

## Suggested translation into this project

1. Reuse the existing background, surface, text, border, and violet tokens in `src/styles/global.css`.
2. Use existing corner-mark utilities where they improve the composition; avoid applying them to every card.
3. Apply the strongest framing to the hero and featured notebook content, then use quieter rules and outlines elsewhere.
4. Keep light mode in view when tuning border contrast.
5. If exact reference matching is desired, compare against a screenshot before changing token values.

## Current project references

- `design.md` defines the portfolio’s technical notebook personality and subtle border treatment.
- `src/styles/global.css` contains the current dark surfaces, text/border colors, violet/blue accents, grid background, and corner-mark utilities.
- `src/pages/index.astro` uses the current grid background and framed hero panel.

## Confidence

**High confidence:** The border treatment and palette are worth exploring because Alfrin explicitly likes them.

**Not verified:** The reference’s exact hex values, border thickness, radius, spacing, typography, page layout, hover states, and responsive behavior. These should not be presented as observations until the reference can be viewed.
