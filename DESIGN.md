---
name: Ray Myers
description: Retrofuturist Software Mender
colors:
  paper: "oklch(96.1% 0.006 220)"
  paperSoft: "oklch(98.5% 0.003 220)"
  ink: "#252525"
  muted: "oklch(43% 0.014 225)"
  accent: "oklch(41% 0.04 238)"
  highlight: "oklch(90.5% 0.04 215)"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.65rem, 1.48rem + 0.85vw, 2.15rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  heading2:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  heading3:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "1.0625rem"
    fontWeight: 360
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: '"iA Writer Mono", monospace'
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  hover: "2px"
  avatar: "50%"
spacing:
  page-pad: "clamp(1.25rem, 1.1rem + 0.95vw, 1.875rem)"
  paragraph: "1em"
  nav-gap: "12px"
  nav-gap-mobile: "8px"
  header-gap: "1.25rem"
  post-gap: "30px"
components:
  link:
    textColor: "{colors.ink}"
    rounded: "{rounded.hover}"
  tag:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  navigation:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body} sized, heading family"
---

# Design System: Ray Myers

## 1. Overview

**Creative North Star: "The Marginalia Workshop"**

This design system should feel like a personal notebook kept by a programmer who cares about craft: text-led, slightly old-world, technically literate, and more interested in durable thought than presentation fashion. The current site is intentionally compact, centered, and readable. It uses type, rhythm, and a small number of color decisions rather than layout spectacle.

The system rejects trend-chasing by staying close to the writing. It should not become a SaaS landing page, an influencer portfolio, a generic developer template, or a fashionable editorial costume. Polish is welcome when it sharpens the reading experience; decoration is suspect unless it helps curiosity.

**Key Characteristics:**

- Pale blueprint-paper field and dense ink, intentionally light-mode only.
- Source Serif 4 (lightened to weight 360 via the variable font) carries long-form prose; quiet system sans handles headings and navigation; iA Writer Mono marks code and tags.
- Flat surfaces, no cards by default, no ambient shadows.
- Compact navigation and tag affordances that invite browsing without turning the site into an app shell.
- Small, handmade details are allowed; trendy visual systems are not.

## 2. Colors

The palette is a restrained personal-site palette: cool gray paper, dense ink, slate headings, and a muted workbench-blue accent used mostly through links, rules, quotes, and state feedback. The background should feel less blank than browser white without becoming cream, sand, or a themed dark mode.

### Primary

- **Workbench Blue**: Primary accent. Use for link underlines, blockquote structure, and subtle hover tint. Its job is quiet emphasis, not decoration.

### Secondary

- **Proof Highlight**: Selection highlight. Use only for text selection or rare inline attention states that should feel discovered rather than advertised.

### Neutral

- **Blueprint Paper**: Very light gray surface with a cool cast. Use as the default page background.
- **Soft Paper**: Near-white, brand-tinted surface. Use only where a subtle relief is needed, such as mixed quote or code backgrounds.
- **Dense Ink**: Primary text and link color. It should remain the dominant foreground.
- **Blue Gray**: Secondary text, heading color, timestamps, and inactive icon state.

### Named Rules

**The Accent Scarcity Rule.** Workbench Blue should appear in small doses: link underlines, quotes, and state feedback. If it starts filling large panels, the system has become too designed.

**The Reading Contrast Rule.** Body text must stay high contrast against the active paper color. Never use Printer's Gray for paragraph text.

## 3. Typography

**Heading Font:** System sans stack (ui-sans-serif, system-ui)  
**Body Font:** Source Serif 4 (variable, weight 360) with Georgia and serif fallbacks  
**Label/Mono Font:** iA Writer Mono for code and tags

**Character:** Lightened Source Serif 4 gives essays an open, unhurried text color, closer to a well-set book page than a default web serif. The quiet system sans frames structure (headings, navigation) without competing with the prose; iA Writer Mono adds mechanical texture only where content is literally technical (code, tags).

### Hierarchy

- **Display** (400, clamp(1.65rem, 1.48rem + 0.85vw, 2.15rem), 1): Article titles and major page titles. Keep it plain and exact.
- **Heading 2** (500, 1.5rem, 1.1): Section headings in post bodies and pages.
- **Heading 3** (500, 1.25rem, 1.1): Subsection headings.
- **Headline** (400, 1.3125rem, 1.15): Post list titles.
- **Title** (400, 1.125rem, 1.1): Site subtitle and secondary headers.
- **Body** (360, 1.0625rem, 1.6): Default prose. Keep the page width capped around 80ch.
- **Long-form Body** (360, 1.0625rem, 1.8): Article content that benefits from slower reading rhythm. Headings inside articles tighten to 1.25 with 1.5em space above.
- **Label** (400, 0.8125rem, normal letter spacing): Tags and compact metadata.

### Named Rules

**The Prose First Rule.** Body copy is the authority. Do not let mono headings become oversized branding artifacts.

**The No Costume Mono Rule.** Monospace is for structure and technical texture only. Do not use it as lazy shorthand for "developer".

## 4. Elevation

This system is flat by default. Depth comes from document structure, line-height, whitespace, text color, and underline treatment. Shadows are not part of the current vocabulary beyond the page frame's soft halo.

### Named Rules

**The Flat Reading Rule.** Do not add card shadows to make ordinary content feel important. If a surface needs emphasis, use hierarchy, spacing, or a stronger heading.

## 5. Components

### Buttons

- **Shape:** Unframed text button unless a real form action requires a stronger affordance.
- **Primary:** No persistent global button exists in the main chrome. Prefer plain text links for navigation and actions.
- **Hover / Focus:** Hover should stay quiet; focus states should be visible and high contrast.
- **Secondary / Ghost / Tertiary:** Avoid filled marketing buttons unless a future workflow truly needs one.

### Chips

- **Style:** Tags are text-first inline chips, prefixed with `#`, using the primary ink color and compact label scale.
- **State:** Hover may increase weight or add subtle text emphasis. Do not wrap tags in pill backgrounds by default.
- **Tag index:** The site-wide tag list sits under a quiet italic "Read more:" lead-in, left-aligned, with the tags wrapping on their own line.

### Cards / Containers

- **Corner Style:** No card containers by default. The avatar is circular; link hover rounds are tiny.
- **Background:** Page background carries the whole surface.
- **Shadow Strategy:** None.
- **Border:** Use simple rules such as `hr` or a blockquote accent only when the content already has a document reason.
- **Internal Padding:** Keep content rhythm prose-based: fluid page padding, 1em paragraph rhythm, and 30px post separation.

### Inputs / Fields

- **Style:** Bare form fields inherit the prose type scale and use full width where needed.
- **Focus:** Use a visible outline or border shift that meets WCAG AA contrast.
- **Error / Disabled:** Not currently defined. Add these deliberately if a form surface grows beyond the newsletter page.

### Navigation

- **Style:** Left-aligned text navigation that scrolls with the page, separated from content by a soft 1px rule.
- **Typography:** Heading sans at body scale, lowercase route names.
- **Default / Hover / Active:** Links use ink text and mauve underline. Navigation hover should stay restrained and avoid filled backgrounds.
- **Mobile:** Tighten horizontal spacing from 12px to 8px below 600px.

### Post List

Post list items are plain document entries with title, date, description, and tags. Use spacing and type contrast instead of card borders.

### Avatar

The author image is a 100px circular crop beside the site title. Treat it as a personal signature, not a brand logo.

## 6. Do's and Don'ts

### Do:

- **Do** keep the body column around 80ch and let the writing own the page.
- **Do** use Source Serif 4 (weight 360) for prose, the system sans for headings and navigation, and iA Writer Mono for code and tags.
- **Do** keep Workbench Blue scarce and purposeful.
- **Do** keep the site light-mode only unless dark mode is deliberately reintroduced.
- **Do** use browsing paths such as posts, talks, tags, and RSS to encourage curiosity.

### Don't:

- **Don't** make the site feel trendy, growth-hacked, SaaS-like, influencer-coded, or visually optimized for whatever design pattern is currently fashionable.
- **Don't** turn post lists into repeated marketing cards.
- **Don't** add purple gradients, glassmorphism, hero metrics, or generic developer-template ornament.
- **Don't** use Printer's Gray for paragraph text.
- **Don't** replace the handmade personal-site feeling with a product dashboard shell.
