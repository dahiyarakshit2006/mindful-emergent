# Mindful Prints — Awwwards-style Single-Page Site

## Original Problem Statement
Build a single-page, production-ready website for **Mindful Prints**, a label, packaging, and protective materials manufacturer based in Sector 63, Noida, India. Awwwards Site-of-the-Day level: kinetic hero with masked line-by-line reveal, CMYK offset-dot background, numbered manifesto chapters, editorial marquee, real product photography, framer-motion + lenis, subtle parallax. B2B lead-gen + brand credibility.

## User Choices
- Accent color: creative (chose CMYK — cyan + magenta + yellow accents, black base)
- Form backend: FastAPI + MongoDB (POST /api/quote)
- Deployment target: React SPA (single-page, motion-first) — trade-off vs. static index.html to satisfy framer-motion + lenis requirement
- Hero background: CMYK offset-dot pattern (animated)

## Architecture
- **Frontend**: React 19 + Tailwind + framer-motion + lenis (via `lenis/react`) + shadcn Select/Sonner. Fonts: Space Grotesk (display), Manrope (body), Space Mono (labels/specs).
- **Backend**: FastAPI + Motor + MongoDB. Endpoints: GET/POST /api/quote, GET /api/, GET/POST /api/status.
- **File map**:
  - `/app/frontend/src/App.js` — ReactLenis root
  - `/app/frontend/src/pages/Home.jsx` — composes sections
  - `/app/frontend/src/components/site/*.jsx` — Logo, Header, Hero, TrustStrip, Manifesto, Capabilities, ProductDeepDives, IndustriesMarquee, WhyChooseUs, About, EnquiryForm, Footer
  - `/app/backend/server.py` — Quote model + endpoints
  - `/app/frontend/public/{robots.txt,sitemap.xml}` — SEO stubs

## Implemented (2026-07-14)
- Kinetic hero: masked line-by-line reveal (framer-motion) + CMYK dot field parallax + editorial figure image
- Sticky glass header + smooth-scroll nav via lenis
- Numbered manifesto (3 chapters, editorial)
- Bento capabilities grid (6 tiles) → click scrolls to product deep-dive
- 6 product deep-dives (dark section) with spec tables: Labels, TT Ribbons, Rigid Boxes, Protective Film, Phone Packaging, Barcoding/Die-Cutting
- Editorial industries marquee + 8-industry grid
- Why Choose Us (4 pillars + 6 values row)
- About with parallax facility image + credibility narrative
- Enquiry form: name/company/email/phone/product-interest/message → POST /api/quote → success state + sonner toast; Google Maps iframe of Sector 63, Noida; contact details
- Footer: massive display type, nav, socials, back-to-top
- SEO meta, OG, sitemap.xml, robots.txt
- Custom CMYK registration-mark SVG logo (mix-blend multiply)

## Personas
- Procurement managers at pharma/FMCG/liquor/electronics brands
- Brand owners launching new SKUs needing rigid boxes + label + tamper film
- Phone OEMs / wholesalers / refurb sellers needing IMEI-compliant packaging
- QA teams at regulated industries evaluating ISO 9000 vendors

## Backlog
### P1
- Add case studies / client logo strip
- Add downloadable spec sheet PDFs per product line
- Admin dashboard to view/manage enquiries
- Email notification on new enquiry (Resend integration)

### P2
- Multi-language (Hindi/Japanese) toggle
- Blog / insights section for SEO long-tail
- Live production capacity indicator
- Interactive ROI/quote calculator
