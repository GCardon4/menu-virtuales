---
name: Artisan Hearth & Grill
colors:
  surface: '#fff9ee'
  surface-dim: '#e1d9c8'
  surface-bright: '#fff9ee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e1'
  surface-container: '#f5eddb'
  surface-container-high: '#efe8d6'
  surface-container-highest: '#eae2d0'
  on-surface: '#1e1b11'
  on-surface-variant: '#414943'
  inverse-surface: '#343024'
  inverse-on-surface: '#f8f0de'
  outline: '#717973'
  outline-variant: '#c1c8c1'
  surface-tint: '#3f6650'
  primary: '#022d1a'
  on-primary: '#ffffff'
  primary-container: '#1c432f'
  on-primary-container: '#86b096'
  inverse-primary: '#a6d0b5'
  secondary: '#914c1a'
  on-secondary: '#ffffff'
  secondary-container: '#fda36a'
  on-secondary-container: '#763705'
  tertiary: '#362200'
  on-tertiary: '#ffffff'
  tertiary-container: '#523600'
  on-tertiary-container: '#d89a2b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1edd0'
  primary-fixed-dim: '#a6d0b5'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#284e3a'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68a'
  on-secondary-fixed: '#321300'
  on-secondary-fixed-variant: '#733503'
  tertiary-fixed: '#ffddae'
  tertiary-fixed-dim: '#fdbb4a'
  on-tertiary-fixed: '#281800'
  on-tertiary-fixed-variant: '#614000'
  background: '#fff9ee'
  on-background: '#1e1b11'
  surface-variant: '#eae2d0'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system bridges the tactile authenticity of wood-fired gastronomy with the precision of a high-performance digital menu. Built primarily for rapid, distraction-free ordering via mobile QR codes and desktop browsing, it balances timeless culinary heritage with modern, frictionless interaction.

The style unites **Minimalism** and **Tactile Warmth**: clean, generous white space, rigorous typographic hierarchy, and warm organic hues. It evokes the sensory anticipation of an open ember hearth—charred oak, brushed brass finishes, and crisp linen tables—while avoiding artificial skeuomorphism or digital clutter. The interface feels grounded, prestigious, and effortless to navigate under ambient dining light.

## Colors
The palette is derived directly from kitchen elements—cast iron, glowing embers, brass hardware, and natural unbleached linen:

- **Primary (`#1C432F`)**: Deep forest green serving as the cornerstone for dominant brand actions, primary headlines, active tab bars, and high-emphasis toggles. Supported by `#166E5A` for interactive states, focused items, and subtle badges.
- **Secondary (`#AC612E`)**: Rich roasted terracotta representing charcoal fire and smoked meats. Applied to dietary tags, accent buttons, and active category states, with `#BC3321` reserved exclusively for spicy signifiers, urgent alerts, and out-of-stock notices.
- **Tertiary (`#DEA031`)**: Warm mustard gold evocative of flame reflection and aged brass. Used for featured items, star ratings, chef's specials, and subtle micro-highlights. Supported by `#F3CD7A` for tinted card backgrounds and seasonal markers.
- **Neutral (`#F8F0DE`)**: Warm cream linen acting as the base canvas. Paired with `#FBF8F1` for elevated surface containers, preventing the stark eye strain of pure `#FFFFFF` under low dining illumination while maintaining high-contrast readability against dark charcoal body copy (`#201A15`).

## Typography
Typographic rhythm sets the balance between artisanal tradition and digital clarity:

- **Headlines (`Newsreader`)**: Editorial, literary serif styling provides authority and culinary romance. Used for menu section dividers, house signature dishes, and story headers. Optical sizing ensures delicate character serifs remain crisp on mobile OLED screens.
- **Body & Labels (`Plus Jakarta Sans`)**: Clean, contemporary geometric sans-serif tuned for effortless legibility. Provides absolute clarity for allergen notes, preparation descriptions, and pricing tables.
- **Price Figures**: Set in `Plus Jakarta Sans` semi-bold/bold weights to guarantee zero hesitation or ambiguity for diners scanning quickly.

## Layout & Spacing
The layout follows a fluid-grid structure optimized for touch performance on handheld devices while scaling cleanly to larger displays:

- **Mobile Viewport (<768px)**: 4-column fluid layout with `1rem` margins and `1rem` gutters. Menu items occupy full width or stacked cards to optimize vertical thumb scrolling. Sticky navigation headers and horizontal category scroll bars ensure rapid cross-section jumping.
- **Tablet / Desktop Viewport (≥768px)**: 12-column grid with `2.5rem` margins and `1.5rem` gutters, maxing out at `1200px` content width. Menu sections switch to dual-column or 3-column asymmetric masonry grids, with wine lists and grill cuts organized in paired columns.
- **Rhythm**: Component interiors prioritize comfortable thumb touch targets (minimum 44px hit-box) with balanced macro-spacing (`space-xl`) between distinct courses (e.g., Raw Bar vs. Wood-Fired Mains).

## Elevation & Depth
Visual hierarchy is achieved through **Tonal Layering** and **Soft Ambient Shadows**, avoiding clinical borders or flat digital monotony:

- **Base Canvas**: The foundation rests on `#F8F0DE`. 
- **Surface Elevation**: Cards and popover sheets sit on `#FBF8F1` or `#FFFFFF`, lifted by subtle, warm-tinted ambient shadows (`rgba(28, 67, 47, 0.05)` to `rgba(40, 25, 15, 0.08)`) with wide blurs (8px to 24px) rather than harsh drop-shadows.
- **Ghost Dividers**: Subtle hairline rules (`1px solid rgba(28, 67, 47, 0.08)`) segment courses and menu items cleanly without cluttering the screen.
- **Sticky / Floating Layers**: The bottom order basket and top category bar utilize an ultra-subtle backdrop blur (`backdrop-filter: blur(12px)`) with 90% surface opacity, integrating effortlessly with the ambient background.

## Shapes
A roundedness factor of `2` (`0.5rem` base radius) is chosen to convey warmth and refined hospitality without feeling overly playful:

- **Cards & Dialogs**: `rounded-lg` (`1rem` / 16px) for item cards, dietary modals, and wine tasting panels.
- **Controls & Buttons**: Standard action buttons adopt `0.5rem` (8px), maintaining structured discipline.
- **Pills & Status Chips**: Dietary pills (e.g., *GF*, *Wood-Fired*, *Rare*) use fully rounded pill contours for quick cognitive scanning.
- **Image Treatment**: Food photography utilizes softened corners (`0.75rem` / 12px) with an ultra-thin inset rim to mimic framed editorial culinary prints.

## Components

- **Buttons**:
  - *Primary*: Forest Green (`#1C432F`) fill with warm cream text (`#FBF8F1`). High-touch, 48px height on mobile.
  - *Secondary / Accent*: Terracotta (`#AC612E`) fill for modifiers and order additions.
  - *Outline*: 1.5px Forest Green or Charcoal border over cream with high-contrast text.
- **Chips & Tags**:
  - Dietary markers (e.g., "Charcoal Grilled", "Dry Aged", "Gluten-Free") use a subtle Mustard Yellow tint (`#F3CD7A` at 20% opacity) with `#1C432F` or `#AC612E` label typography.
- **Menu Item Cards**:
  - Two primary variants:
    1. *Detailed Hero Card*: High-res imagery, serif title (`Newsreader`), detailed cut and wood provenance description, price aligned right in bold sans-serif, and subtle "+" trigger.
    2. *Compact List Item*: Minimal single-row entry for beverages and sides, utilizing a dotted leader or right-aligned price layout.
- **Sticky Course Bar**:
  - Horizontal chip navigation pegged below the header, allowing one-tap scrolling between "From the Hearth", "Sides & Greens", and "Cellar & Cocktails".
- **Inputs & Modifiers**:
  - Meat temperature selectors (Rare, Med-Rare, etc.) presented as horizontal segment selectors with Forest Green active states.
  - Checkboxes and radio controls feature customized terracotta tick marks and rounded contours.
- **Price Displays**:
  - Always presented cleanly without detached currency signs; clear visual weight ensuring diners can scan value instantly.