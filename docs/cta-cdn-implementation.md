# CTA and CDN Implementation Notes

## What was added

- Direct buyer resource pages at `public/resources/buyer-deck.html` and `public/resources/tea-spec-sheet.html`
- Stronger CTA paths on home, products, contact, and footer
- Guided sample request flow in `src/components/SampleRequestForm.jsx`
- Trust signals and buyer testimonials on the company page
- Traceability map on the export services page
- Page-level meta descriptions for the multi-page entry HTML files

## CTA pattern now in the site

- Primary conversion CTA: `Request Samples` / `Start Sample Request`
- Secondary browse CTA: `View Product Slate` / `Open Spec Sheet`
- Resource CTA: `Download Buyer Deck`
- Direct-contact CTA: `Email the export desk` / WhatsApp support

## CDN and deployment checklist

- Serve the Vite build behind HTTPS
- Cache hashed assets from `dist/assets` aggressively with long max-age and immutable headers
- Compress HTML, CSS, JS, and SVG with Brotli or Gzip
- Keep the downloaded tea images optimized and use modern dimensions before upload
- Add redirect rules so `/company/`, `/products/`, `/export-services/`, and `/contact/` resolve cleanly in production
- Set `Cache-Control: no-cache` or a short TTL on HTML documents so copy and CTA changes propagate quickly
- If a CDN is used, enable image optimization and edge caching for `/assets/*` and `/favicon.svg`

## Remaining production decisions

- Replace placeholder contact numbers with the final business WhatsApp number
- Add a real downloadable PDF buyer deck if the business wants a print-ready asset
- Configure analytics or event tracking for CTA clicks and sample request completions
