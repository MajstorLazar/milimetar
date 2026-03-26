<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-03-26 — Remove service item 05 (Integracija Pametnog Doma)
- Removed the 5th ServiceItem from `src/sections/Services/index.tsx`

## 2026-03-26 — Update "Pozovite" navbar button to tel link
- Changed href on desktop "Pozovite" button from `#contact` to `tel:+381607120698` in `Navbar/index.tsx`

## 2026-03-26 — Remove "Više Detalja" button from services accordion
- Removed the "Više Detalja" anchor button from each service&#39;s expandable content in `Hero/index.tsx`

## 2026-03-26 — Remove Blog nav link
- Removed "Blog" anchor from `NavbarLinks.tsx`

## 2026-03-26 — Remove Blog section
- Removed the entire "BLOG I ČLANCI / Naš Najnoviji Blog" block from `Hero/index.tsx`

## 2026-03-26 — Remove Testimonials section
- Removed the entire "UTISCI KLIJENATA / Povereni Utisci" testimonials block from `Hero/index.tsx`
- Cleaned up unused `testimonials` array, `activeTestimonial`, `isAnimating` state, and carousel handlers

## 2026-03-26 — Remove "Otkrijte Više" button from Luxury Banner
- Removed the "Otkrijte Više" anchor button from the Luxury Banner section in `Hero/index.tsx`

## 2026-03-26 — Remove "Sve Usluge" button from Services section
- Removed the entire `<a href="/services">` button block from `Services/index.tsx`

## 2026-03-26 — Remove "Svi Projekti" button from Projects section
- Removed the entire `<a href="/projects">` button block from `Projects/index.tsx`

## 2026-03-26 — Update 1st project card title
- Changed 1st ProjectCard title from "Studio Apartman Serenity" to "Moćni Mali Sto za Studio Apartman"
- File: src/sections/Projects/index.tsx

## 2026-03-26 — Rename "O HOMIRI" to "O NAMA", remove button in About section
- Updated label text in About/index.tsx and Hero/index.tsx
- Removed the "O Nama" button from both About section instances

## 2026-03-26 — Update hero tagline
- Changed tagline in HeroContent.tsx to new copy about merenje/dizajn/materijali/izrada

## 2026-03-26 — Trim hero heading
- Removed "sa Milimetar Craft" from HeroContent.tsx h1

## 2026-03-26 — NavbarLogo forced single-line all-white
- Replaced `block` with `flex items-center gap-1` on the anchor tag
- Both "Milimetar" and "Craft" spans now share `text-white`

## 2026-03-26 — Serbian footer + inline navbar branding
- Translated all footer text to Serbian (links, contact, CTA headline, buttons, description)
- Location changed to "Beograd, Srbija"
- NavbarLogo: "Milimetar" white + "Craft" yellow-500, both inline

## 2026-03-26 — Remove category labels from project cards
- Removed `categoryHref` and `categoryLabel` props from `ProjectCard.tsx` type and render
- Removed those props from all 4 `<ProjectCard>` usages in `Projects/index.tsx`
- Cards now show only the title in the frosted glass overlay

## 2026-03-26 — Animate & Interactivity Pass
- Added scroll-reveal (IntersectionObserver) in App.tsx; CSS classes in tailwind.css
- Navbar (index.tsx): sticky + scroll-blur, functional hamburger with animated bars, smooth anchor nav, hover underline animations
- Hero (index.tsx): functional testimonial carousel with prev/next + dots; FAQ accordion; services accordion; process cards with hover lift; scroll-reveal on all sections
- HeroContent.tsx: CSS entrance animation on mount
- CTA/FooterLinks: converted all external webflow.io hrefs to internal anchors; added hover color transitions
- tailwind.config.js: added fade-in-up, fade-in, slide-down keyframes
- Design: luxury/elegant interior design studio — warm amber/gold + black, gen. whitespace, clean sans-serif
</changelog>
