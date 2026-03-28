# Hooked on LA

A beginner-friendly fishing website focused on Los Angeles, the LA River, and nearby easy fishing spots.

## What is inside

- `index.html`: home page with the bass hero image, beginner overview, and LA fish list
- `learn.html`: simple step-by-step fishing lessons written in plain language
- `la-river.html`: LA River access notes, local fishing spots, species notes, and safety reminders
- `hotspots.html`: interactive Frutiger Aero hotspot map with current-status cards and official live-guide links
- `gear.html`: beginner rod recommendations and a first tackle-box guide
- `sources.html`: official rules, advisory, park, and gear links checked on March 27, 2026
- `styles.css`: full visual system and responsive layout
- `app.js`: mobile navigation and spot filtering
- `hotspots.js`: map filters, marker popups, and hotspot list rendering
- `assets/bass-hero.jpg`: public-domain largemouth bass image used across the site

## Design goals

- Make the site feel like a real fishing brand, not a generic template
- Keep the copy easy enough for a child to follow
- Put a bass image at the front of every page
- Focus on Los Angeles freshwater fishing, especially the LA River and nearby public waters
- Add a clickable hotspot map with current notes and direct links to live official sources
- Shift the visual language into a Frutiger Aero style with glossy blue-green UI

## Local run

From this folder:

```bash
npm run start
```

Then open:

- `http://127.0.0.1:4173/`

## Quick check

```bash
npm run check
```

## Research note

The site content uses current official references for:

- California fishing regulations and license fees
- LA River recreation-zone access
- Los Angeles area health and fish-eating advisories
- official rod and combo product pages

Rules, advisories, prices, and park conditions can change, so the `sources.html` page is included for direct verification before trips.
