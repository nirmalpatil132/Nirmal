# NIRMAL PORTFOLIO V2 — DESIGN SYSTEM & VISUAL DIRECTION DOCUMENTATION

## 1. Design Philosophy
Nirmal Portfolio V2 is designed to communicate two professional capabilities with equal strength:
1. **Professional Full-Stack Software Developer**: Engineered precision, clean architecture, performance, type safety, and robust system design.
2. **Professional UI/UX & Product Designer**: Visual polish, harmonious color tokens, intentional typography scales, responsive layouts, subtle micro-interactions, and accessibility.

The core visual message is: *"A designer who can build production software."*

---

## 2. Old Portfolio Analysis
Analysis of `assets/source/old-portfolio/` (`index.html`, `style.css`, `script.js`):

- **Strengths**:
  - Dark theme aesthetic provided good contrast.
  - Interactive project filtering by category was functional.
  - Distinct indigo/purple accent color scheme (`#5451fb` / `#8c8afc`).
- **Weaknesses**:
  - Used `font-size: 62.5%` CSS hack resulting in brittle `rem` scale calculations.
  - Overly reliance on heavy box-shadow glows and 3D card tilts that felt template-like.
  - Hardcoded pixel responsive breakpoints.
  - External JS dependencies (ScrollReveal, Boxicons) instead of native motion & scalable component primitives.
- **Improved Concepts**:
  - Replaced brittle CSS hacks with a centralized token architecture (`var(--font-size-*)`, `var(--space-*)`).
  - Replaced heavy drop shadows with refined glassmorphism and subtle border tokens.
  - Upgraded typography hierarchy and component primitives (`Button`, `Card`, `FormField`, `Badge`, `Tag`).

---

## 3. Preserved Concepts
- Deep space dark background aesthetic (`#0b0f19`).
- Dual persona positioning: Software Development + UI/UX Product Design.
- Interactive category filter chips for project taxonomy.
- Dedicated resume download triggers and quick contact actions.

---

## 4. Removed Concepts
- Heavy 3D tilt effects and neon glow shadows.
- Brittle `62.5%` rem font-size scaling.
- Random floating elements and uncalibrated animations.
- External animation libraries (ScrollReveal, Typed.js).

---

## 5. Color System
A curated dark-first color palette defined in `apps/web/src/app/globals.css`:

- **Background Primary**: `var(--bg-primary)` (`#0b0f19`) — Main dark canvas.
- **Background Secondary**: `var(--bg-secondary)` (`#111827`) — Card and section surface.
- **Background Elevated**: `var(--bg-elevated)` (`#1f2937`) — Raised surface & modals.
- **Glass Surface**: `var(--bg-glass)` (`rgba(17, 24, 39, 0.75)`) — Backdrop blur overlays.
- **Primary Accent**: `var(--primary)` (`#6366f1`) — Indigo for main CTA buttons and active states.
- **Secondary Accent**: `var(--secondary)` (`#38bdf8`) — Electric cyan for highlights and tech badges.
- **Purple Accent**: `var(--accent)` (`#8b5cf6`) — Accent gradient & category highlights.
- **Text Primary**: `var(--text-primary)` (`#f9fafb`) — High contrast body and headings.
- **Text Muted**: `var(--text-muted)` (`#9ca3af`) — Metadata and subtitles.
- **Border Subtle**: `var(--border-subtle)` (`#1f2937`) & **Border Default**: `var(--border-default)` (`#374151`).
- **Semantic Feedback**: Success (`#10b981`), Warning (`#f59e0b`), Error (`#ef4444`).

---

## 6. Typography
Fluid typography scale built with system font fallback stacks:
- **Display Title**: `3.0rem` / `48px` (Bold, `-0.03em` letter-spacing)
- **Heading 1 (H1)**: `2.25rem` / `36px` (Bold)
- **Heading 2 (H2)**: `1.875rem` / `30px` (Semibold)
- **Heading 3 (H3)**: `1.25rem` / `20px` (Semibold)
- **Body Base**: `1.0rem` / `16px` (Normal, `1.6` line-height)
- **Body Small / Caption**: `0.875rem` / `14px` & `0.75rem` / `12px`

---

## 7. Spacing System
Standard 8px-grid spacing tokens:
- `var(--space-2xs)`: `4px`
- `var(--space-xs)`: `8px`
- `var(--space-sm)`: `12px`
- `var(--space-md)`: `16px`
- `var(--space-lg)`: `24px`
- `var(--space-xl)`: `32px`
- `var(--space-2xl)`: `48px`
- `var(--space-3xl)`: `64px`

---

## 8. Grid System
- Flexbox and CSS Grid layout structures.
- Auto-fit responsive grids: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`.
- Consistent column gap spacing using `var(--space-md)` and `var(--space-lg)`.

---

## 9. Containers & Layout
- `var(--max-width-container)`: `1200px` for main content sections.
- `var(--max-width-content)`: `800px` for text-focused articles & health screens.
- `Container` primitive handles responsive padding and horizontal centering.

---

## 10. Responsive System
- **Mobile**: `< 640px` (Single column, full-width touch targets >= 44px, hidden desktop menus).
- **Tablet**: `640px - 1024px` (2-column grids, compact padding).
- **Desktop**: `> 1024px` (Multi-column grids, fixed header navigation).
- **Large Desktop**: `> 1440px` (Max container width cap with centered alignment).

---

## 11. Component Foundation
UI primitive components located in `apps/web/src/components/ui/`:
- `Container`, `Section`, `SectionHeader`, `PageHeader`
- `Button`, `Badge`, `Tag`, `Card`, `Divider`
- `Input`, `Textarea`, `FormField`, `StatusIndicator`, `LoadingState`
- `CertificateFlipCard`

---

## 12. Button System
- **Primary**: Indigo background (`var(--primary)`), white text.
- **Secondary**: Elevated surface (`var(--bg-elevated)`), subtle border.
- **Ghost**: Transparent background with subtle border outline.
- **Text**: Cyan text (`var(--secondary)`), no padding/background.
- **Danger**: Red error background (`var(--error)`).
- **States**: Hover (color shift), Focus (`var(--focus-ring)`), Active (pressed), Disabled (`opacity: 0.5`, `not-allowed`).

---

## 13. Card System
- **Default Card**: Surface background (`var(--bg-secondary)`), subtle border.
- **Elevated Card**: Raised surface (`var(--bg-elevated)`), shadow `var(--shadow-md)`.
- **Glassmorphism Card**: Glass background (`var(--bg-glass)`), backdrop-filter `blur(12px)`.

---

## 14. Form System
- `Input` & `Textarea` primitives with `var(--bg-primary)` background and `var(--border-default)`.
- `FormField` wrapper providing automatic labels, required asterisks (*), helper text, and error states.
- High-visibility focus indicators with `var(--focus-ring)`.

---

## 15. Icon Strategy
- Coherent inline SVG icon system.
- Standard sizes: `16px` (sm), `20px` (md), `24px` (lg).
- Accessible `aria-hidden="true"` for decorative icons; labeled text for screen readers.

---

## 16. Motion System
- CSS transitions using standard easing curves: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Duration tokens: `--transition-fast` (150ms), `--transition-normal` (250ms), `--transition-bounce` (500ms).
- Applied to hover states, card elevations, button presses, and 3D card flips.

---

## 17. Reduced Motion
- Full compliance with `@media (prefers-reduced-motion: reduce)`.
- Automatically sets animation and transition durations to `0.01ms` and disables smooth scrolling.

---

## 18. Accessibility (a11y)
- WCAG AA contrast ratio compliance for text against dark backgrounds.
- Explicit `:focus-visible` ring outlines (`var(--focus-ring)`).
- Touch target minimum sizes (44x44px) on mobile.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`).

---

## 19. Image & Media System
- Authoritative assets preserved in root and `assets/source/`:
  - `Resume_Nirmal_Patil.pdf`
  - `Nirmal Passport Photo.png`
- Aspect ratio tokens: `16:9` (projects), `1:1` (profile/avatars), `4:3` (certificates).
- `object-fit: cover` with subtle rounded border radii.

---

## 20. Navigation Philosophy (Future Phase 3)
- Responsive header navigation supporting Home, About, Skills, Projects, Experience, Certificates, Education, Contact.
- Mobile drawer navigation with backdrop overlay.
- Active route highlight indicator.

---

## 21. Project Card Philosophy (Future Phase 6)
- Project cards will showcase: Thumbnail, Category Badge, Title, Description, Technology Tags, GitHub Link, Live Demo Link, and Case Study detail trigger.

---

## 22. Certificate Card Flip Interaction Philosophy (Future Phase 8)
- **Front Side**: Title, Issuer, Issue Date, Verified Badge.
- **3D Flip Mechanism**: Triggers on hover or click/tap; uses CSS `perspective: 1000px`, `transform-style: preserve-3d`, and `rotateY(180deg)`.
- **Back Side**: Skills list, Credential ID, Verification URL link, Detailed description.
- **Accessibility**: Keyboard navigable via `tabIndex={0}` and `Enter`/`Space` key toggles.

---

## 23. Internship Presentation Philosophy (Future Phase 7)
- Timeline layout showcasing Company, Role, Dates, Location, Responsibilities, Key Contributions, and Associated Technologies.

---

## 24. WhatsApp UX Philosophy (Future Phase 9)
- Floating bottom-right quick-connect action button with z-index `var(--z-overlay)`.
- Mobile safe-area inset compliance.
- Direct message trigger to WhatsApp API without blocking contact form fallback.
