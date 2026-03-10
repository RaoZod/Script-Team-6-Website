# Script Team 6 — Brand Entertainment Studio Website

This repository hosts the static marketing site for Script Team 6.

## Included files

- `index.html` — page structure and copy
- `styles.css` — visual design, layout, and responsive styles
- `script.js` — interactions (menu toggle, carousel, form submit UX, reveal animations)
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow

## Form behavior

The contact form submits via AJAX to FormSubmit and uses a Calendly fallback link for direct booking.

## Local preview

Open `index.html` directly in your browser, or run:

```bash
python3 -m http.server 4173
