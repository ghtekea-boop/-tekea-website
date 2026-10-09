TEKEA DESIGN STUDIO — V2.8

Portfolio integration stage.

Selected Works on home:
01 APEX
02 HERITAGE
04 ECLYA
06 VIOLENCE

All Projects:
01 APEX
02 HERITAGE
03 NORME
04 ECLYA
05 AERUM
06 VIOLENCE

Each project now opens on its own case-study page.
Real covers and full case boards are stored in assets/cases/.


V2.9 updates:
- WHAT I DO thumbnails replaced with cinematic monochrome mountain/rock visuals matching merch + manifesto mood.
- Image rendering tightened to reduce softness on project cards, archive cards and case boards.
- Case boards constrained to prevent oversized upscaling and blur.


V3.1 updates:
- Contact area simplified: no long rules/frames, email removed.
- Contact cluster now anchors to the right edge with text immediately left of each icon.
- Telegram uses the supplied logo asset.
- Case pages received subtle editorial spacing and sharper board presentation.


V3.3 updates:
- Contact rows now form one compact right-edge cluster: meta -> label -> icon.
- Removed the wide empty middle gap between Behance/Dprofile labels and their icons.
- Tighter spacing, better optical alignment, and matching mobile behavior.

V3.5: fixed contact alignment by overriding legacy nth-child grid that stretched Behance/Dprofile. All rows now use one compact right-aligned 3-column grid.

V3.6 — Case Pages + Max Quality Pass
- All six case pages rebuilt into an editorial case-study structure.
- Added selected-detail crops before the full project board.
- Added previous / all works / next navigation.
- Covers use 2560px HQ versions.
- Project boards received non-generative 2x Lanczos upscaling with light sharpening; typography/content are preserved rather than regenerated.
- Full boards are displayed at controlled widths to avoid browser stretching and softness.
- Main/archive thumbnails use HQ covers and lighter CSS filtering to retain clarity.

V3.8 — Modular case rebuild
- Replaced the old long project boards with the user-provided project blocks.
- Project modules are displayed at native width and are never enlarged beyond their source pixels.
- Every module can be clicked to inspect the original file in the full-resolution viewer.
- Removed obsolete board/detail assets that are no longer used.
- Updated all six case studies: APEX, HERITAGE, NORME, ECLYA, AERUM, VIOLENCE.

V3.9 — PRE-PUBLISH / BILINGUAL
- RU / EN language switch added to main and inner headers.
- Language selection persists via localStorage.
- Russian copy is editorially adapted, not literal machine translation.
- Telegram: https://t.me/icetds
- Behance: https://www.behance.net/tekeadesign
- Dprofile: https://dprofile.ru/tekea
- Title / meta description / Open Graph title-description change with language.
- Final absolute Open Graph image URL should be added after the production domain is chosen.


V3.10 — Living Hero
- Hero subject is fully static (mouse parallax removed).
- Added two ultra-slow fog layers restricted to the open right-side background.
- Added subtle moving water shimmer in the lower-right background.
- Motion respects prefers-reduced-motion and is lighter on mobile.


V3.10.3: removed experimental fog/water/subject layers. Hero now uses only the original image with a subtle pointer parallax (desktop fine-pointer devices), matching the earlier clean behavior.


V3.12 — polish pass
- Burger menu background now uses a low-contrast monochrome mountain image consistent with the manifesto.
- Removed punctuation from large hero/manifesto/contact display phrases for cleaner typography in RU/EN.
- Added restrained microinteractions: line draw, section reveal refinement, button sweep, arrow movement, card/service polish.
- Kept hero pointer parallax only; no fog/water overlays or extra shapes.

V3.12.2
- Fixed burger-menu hover arrow clipping.
- Reserved a dedicated right gutter for arrows.
- Hover now moves only the label and pulls the arrow inward, keeping the editorial row clean.

V3.13 — Heading Alignment + Translation Audit
- Normalized major heading line-height, tracking and left-edge alignment across Home, Works, About, Merch and case pages.
- Added Russian-specific heading sizing/tracking so long Cyrillic headings keep the same visual rhythm as English.
- Removed punctuation from selected editorial display headings for a cleaner system.
- Re-audited and rewrote RU translations across navigation, services, About, Merch and all six case pages.
- Filled missing translations for case metadata, tags, formats and module captions.
- Improved case-study editorial copy and bilingual SEO descriptions.

V3.15 — SERVICES & PRICING
- Added standalone services.html page to keep pricing off the premium homepage.
- Main SERVICES navigation now opens the dedicated page.
- WHAT I DO CTA now opens Services & Pricing.
- Added five service categories, starting prices, timelines, workflow, FAQ and Telegram CTA.
- Added RU/EN translations and SEO metadata for the new page.
- Starting prices are editable estimates and should be reviewed before publication.


V3.16 — full language polish
- Completed missing RU translations on Services & Pricing, including the split hero heading and CTA links.
- Re-audited Russian copy across the full site for natural wording and terminology consistency.
- Refined service, FAQ, About and footer microcopy without changing the approved visual system.

V3.17 — Mobile / Tablet UX QA
- One responsive codebase for desktop, tablet and phone (no separate mobile site).
- Added 360–430px phone polish, 761–1024px tablet polish, safe-area support and dynamic viewport handling.
- Improved touch targets, menu ergonomics, mobile case navigation, pricing layout and lightbox controls.
- Disabled sticky desktop hover behavior on touch devices while preserving desktop interactions.

V3.18 — iPhone-first mobile rebuild: mobile header/navigation isolation, hero rhythm, manifesto/contact reflow, iOS text arrows, services/case responsive polish.

V3.21 — RESPONSIVE STRESS-TEST HARDENING
Target viewport matrix used for responsive rules:
Portrait phones: 320, 360, 375, 390/393, 412, 430, 480 px.
Tablets: 768, 834, 1024 px.
Phone landscape: up to 932 px wide with viewport height <= 500 px.
The approved 393 px iPhone composition from V3.20 is preserved as the reference state.
