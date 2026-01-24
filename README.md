# China Starter Guide

Practical, content-first guidance for first-time visitors to China.

- Live site: https://chinastarterguide.com
- Default language: English (other languages planned)

## What this site is

China Starter Guide is a free, public reference that answers the most common questions first-time visitors face before and during a trip to China. It focuses on clear, step-by-step guidance across:

- Entry preparation (visas, documents, safety)
- Payments (cards, wallets, cash)
- Transport (rail, metro, taxis, domestic flights)
- Daily life (SIM, apps, connectivity)
- Cities and itineraries
- Practical tips and etiquette

## Why it exists

The site is maintained by a native Chinese creator working in the internet industry who is deeply interested in building useful, practical content. The goal is to reduce uncertainty for first-time visitors and make information easier to verify and act on.

## Content sources & review

Content is compiled from public sources and personally reviewed by the maintainer. We update regularly, but cannot guarantee that every detail is always complete, accurate, or current.

## Disclaimer

This site is provided for general information only. It is not legal, policy, or professional advice. Always verify details through official sources and make independent decisions for your trip. If any loss or impact results from errors, omissions, or outdated information, the maintainer assumes no legal or non-legal responsibility. Visitors accept 100% of the risk and responsibility for their own actions.

## Contributing / feedback

If you find an issue or want to suggest an update, please open a GitHub Issue:

- https://github.com/wintion/China-Starter-Guide/issues/new

## Development

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
```

## Tech stack

- Astro
- MDX content collections
- Pagefind search

## Project structure

```text
public/         Static assets (logos, icons, OG images)
src/content/    Guides content (MDX)
src/pages/      Routes (home, categories, guides, search)
src/components/ UI components
```
