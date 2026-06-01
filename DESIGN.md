---
name: Ray Myers
description: Retrofuturist Software Mender
colors:
  paper: "#faf8f3"
  ink: "#3a3430"
  muted: "#8b7d76"
  accent: "#8b6b7f"
  highlight: "#e5ffc3"
  dark-paper: "#232127"
  dark-ink: "#ddd8e0"
  dark-muted: "#9990a0"
  dark-accent: "#9a7088"
typography:
  display:
    fontFamily: "\"iA Writer Mono\", monospace"
    fontSize: "2em"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "\"iA Writer Mono\", monospace"
    fontSize: "1.3em"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "\"iA Writer Mono\", monospace"
    fontSize: "1.2em"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "\"Lora\", Georgia, serif"
    fontSize: "clamp(1rem, 0.96rem + 0.22vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "\"iA Writer Mono\", monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
rounded:
  hover: "2px"
  avatar: "50%"
spacing:
  page-pad: "20px"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  theme-toggle:
    textColor: "{colors.muted}"
    typography: "{typography.title}"
---

# Design System: Ray Myers

## 1. Overview

**Creative North Star: "The Marginalia Workshop"**

This design system should feel like a personal notebook kept by a programmer who cares about craft: text-led, slightly old-world, technically literate, and more interested in durable thought than presentation fashion. The current site is intentionally compact, centered, and readable. It uses type, rhythm, and a small number of color decisions rather than layout spectacle.

The system rejects trend-chasing by staying close to the writing. It should not become a SaaS landing page, an influencer portfolio, a generic developer template, or a fashionable editorial costume. Polish is welcome when it sharpens the reading experience; decoration is suspect unless it helps curiosity.

**Key Characteristics:**
- Warm paper and espresso ink in light mode, with a quiet violet-gray dark mode.
- Lora carries long-form prose; iA Writer Mono marks headings, navigation, code, and labels.
- Flat surfaces, no cards by default, no ambient shadows.
- Compact navigation and tag affordances that invite browsing without turning the site into an app shell.
- Small, handmade details are allowed; trendy visual systems are not.

## 2. Colors

The palette is a restrained personal-site palette: warm paper, dark brown ink, weathered gray headings, and a muted mauve accent used mostly through links and quote structure.

### Primary
- **Workshop Mauve**: Primary accent. Use for link underlines, blockquote structure, and subtle hover tint. Its job is quiet emphasis, not decoration.

### Secondary
- **Curiosity Highlight**: Selection highlight. Use only for text selection or rare inline attention states that should feel discovered rather than advertised.

### Neutral
- **Paper**: Light surface. Use as the default page background.
- **Espresso Ink**: Primary light-mode text and link color. It should remain the dominant foreground.
- **Weathered Gray**: Secondary text, heading color, timestamps, and inactive icon state.
- **Night Paper**: Dark-mode surface.
- **Night Ink**: Primary dark-mode text.
- **Night Gray**: Dark-mode secondary text.
- **Night Mauve**: Dark-mode link underline and accent.

### Named Rules
**The Accent Scarcity Rule.** Workshop Mauve should appear in small doses: link underlines, quotes, and state feedback. If it starts filling large panels, the system has become too designed.

**The Reading Contrast Rule.** Body text must stay high contrast against the active paper color. Never use Weathered Gray for paragraph text.

## 3. Typography

**Display Font:** iA Writer Mono with monospace fallback  
**Body Font:** Lora with Georgia and serif fallbacks  
**Label/Mono Font:** iA Writer Mono

**Character:** The pairing reads as literary prose annotated by a precise programmer. Lora gives essays a bookish cadence; iA Writer Mono adds mechanical labeling without turning the whole site into a terminal.

### Hierarchy
- **Display** (400, 2em, 1.1): Article titles and major page titles. Keep it plain and exact.
- **Headline** (400, 1.3em, 1.1): Post list titles and prominent inline headings.
- **Title** (400, 1.2em, 1.1): Site subtitle and secondary headers.
- **Body** (400, clamp(1rem, 0.96rem + 0.22vw, 1.125rem), 1.6): Default prose. Keep the page width capped around 70ch.
- **Long-form Body** (400, same size scale, 1.8): Article content that benefits from slower reading rhythm.
- **Label** (400, 0.8rem, normal letter spacing): Tags, navigation, and compact metadata.

### Named Rules
**The Prose First Rule.** Body copy is the authority. Do not let mono headings become oversized branding artifacts.

**The No Costume Mono Rule.** Monospace is for structure and technical texture only. Do not use it as lazy shorthand for "developer".

## 4. Elevation

This system is flat by default. Depth comes from document structure, line-height, whitespace, text color, underline treatment, and the sticky navigation backdrop. Shadows are not part of the current vocabulary.

### Named Rules
**The Flat Reading Rule.** Do not add card shadows to make ordinary content feel important. If a surface needs emphasis, use hierarchy, spacing, or a stronger heading.

## 5. Components

### Buttons
- **Shape:** Unframed text button unless a real form action requires a stronger affordance.
- **Primary:** The current theme toggle is icon-like text on a transparent background, using Weathered Gray and no border.
- **Hover / Focus:** Hover moves toward the active ink color. Focus states should be visible and high contrast.
- **Secondary / Ghost / Tertiary:** Prefer plain text links for navigation and actions. Avoid filled marketing buttons unless a future workflow truly needs one.

### Chips
- **Style:** Tags are text-first inline chips, prefixed with `#`, using the primary ink color and compact label scale.
- **State:** Hover may increase weight or add subtle text emphasis. Do not wrap tags in pill backgrounds by default.

### Cards / Containers
- **Corner Style:** No card containers by default. The avatar is circular; link hover rounds are tiny.
- **Background:** Page background carries the whole surface.
- **Shadow Strategy:** None.
- **Border:** Use simple rules such as `hr` or a blockquote accent only when the content already has a document reason.
- **Internal Padding:** Keep content rhythm prose-based: 20px page padding, 1em paragraph rhythm, and 30px post separation.

### Inputs / Fields
- **Style:** Bare form fields inherit the prose type scale and use full width where needed.
- **Focus:** Use a visible outline or border shift that meets WCAG AA contrast.
- **Error / Disabled:** Not currently defined. Add these deliberately if a form surface grows beyond the newsletter page.

### Navigation
- **Style:** Sticky, left-aligned text navigation with translucent paper backing and a 1px backdrop blur.
- **Typography:** iA Writer Mono at label scale, lowercase route names.
- **Default / Hover / Active:** Links use ink text and mauve underline. Navigation hover should stay restrained and avoid filled backgrounds.
- **Mobile:** Tighten horizontal spacing from 12px to 8px below 600px.

### Post List
Post list items are plain document entries with title, date, description, and tags. Use spacing and type contrast instead of card borders.

### Avatar
The author image is a 100px circular crop beside the site title. Treat it as a personal signature, not a brand logo.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body column around 70ch and let the writing own the page.
- **Do** use Lora for prose and iA Writer Mono for headings, navigation, code, and compact labels.
- **Do** keep Workshop Mauve scarce and purposeful.
- **Do** preserve light and dark theme support whenever changing tokens.
- **Do** use browsing paths such as posts, talks, tags, and RSS to encourage curiosity.

### Don't:
- **Don't** make the site feel trendy, growth-hacked, SaaS-like, influencer-coded, or visually optimized for whatever design pattern is currently fashionable.
- **Don't** turn post lists into repeated marketing cards.
- **Don't** add purple gradients, glassmorphism, hero metrics, or generic developer-template ornament.
- **Don't** use Weathered Gray for paragraph text.
- **Don't** replace the handmade personal-site feeling with a product dashboard shell.
