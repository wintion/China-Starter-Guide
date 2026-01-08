# ChinaStarterGuide.com — SPEC (Astro + MDX)

## Goals (MVP)
- A fast, SEO-friendly static guide site for first-time foreigners visiting China.
- Content-first: no auth, no database, no external services in MVP.
- Strictly structured content to enable category pages, FAQs, related guides.

## Tech Stack
- Astro (static output)
- MDX for guides
- Astro Content Collections for schema validation
- Deployed on Vercel or Cloudflare Pages

## URL Structure
- Guide detail: /guides/<category>/<slug>
- Category page: /category/<category>
- (Optional later) Question hub: /questions/<id-or-slug>

## Categories (enum)
- prepare
- payment
- transport
- life
- cities
- tips

## Content Model (Content Collections)
Collection: `guides`

Required frontmatter:
- title: string
- description: string (1-2 lines)
- category: one of the Categories enum
- questions: string[]  (e.g. ["q31", "q34"] or ["pay-without-cash"])
- lastUpdated: date (YYYY-MM-DD)
Optional:
- tags: string[]
- difficulty: "easy" | "medium" | "advanced"

Sorting:
- Default: lastUpdated desc

## Repo Structure
- src/content/guides/<category>/<slug>.mdx
- src/content/config.ts (collections schema)
- src/pages/
  - index.astro
  - guides/[...slug].astro  (renders guide detail)
  - category/[category].astro (lists guides in a category)
- src/components/ for shared UI

## Guide Page Requirements
- Title, description, last updated
- Table of contents (TOC) when headings exist
- "Related guides" section (same category, exclude current)
- "Next steps" links (at least 3 internal links)

## SEO Requirements
- Per-page <title> and meta description
- Canonical URL
- OpenGraph + Twitter meta
- sitemap.xml generation
- robots.txt present

## UX Requirements
- Clean, minimal layout
- Mobile friendly
- No popups
- Internal search is optional for MVP (can be added after core pages)

## Non-Goals (MVP)
- No user accounts
- No payments
- No comments
- No i18n
- No analytics required (can add later)

## Definition of Done (MVP)
- / loads
- /category/<category> loads for all categories
- /guides/<category>/<slug> loads for sample guides
- `npm run build` succeeds
- Lighthouse: good performance (focus on fast static output)
