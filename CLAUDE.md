# Website Intake Framework — Claude Code Project Guide

## What This Is

A monorepo of AI-built demo sites proving the Website Intake Framework template system. Each subfolder is a self-contained Astro 4 static site targeting a specific vertical. CoolBreeze HVAC and Apex Auto are the first two verticals.

**Live demos:** `https://zingcontrol.github.io/Website-Intake-Framework/`

---

## Repo Structure

```
Website-Intake-Framework/
├── CLAUDE.md                          ← you are here
├── .gitignore
├── .github/workflows/
│   └── deploy-all.yml                 ← builds both sites into combined _site/
├── coolbreeze-hvac/                   ← Vertical 1: HVAC lead gen
│   ├── astro.config.mjs
│   ├── package.json
│   ├── tailwind.config.mjs
│   └── src/
│       ├── components/                ← 13 shared components
│       ├── data/                      ← services.ts, locations.ts, testimonials.ts, faqs.ts
│       ├── layouts/                   ← Layout, ServiceLayout, LocationLayout
│       ├── pages/                     ← index, contact, coolbreeze-club, services/*, locations/*
│       └── styles/global.css
└── apex-auto/                         ← Vertical 2: Auto service
    └── (same structure as coolbreeze-hvac)
```

---

## Running Locally

```bash
# CoolBreeze HVAC
cd coolbreeze-hvac
npm install
npm run dev        # http://localhost:4321/Website-Intake-Framework/coolbreeze-hvac/

# Apex Auto
cd apex-auto
npm install
npm run dev        # http://localhost:4321/Website-Intake-Framework/apex-auto/

# Build for production
npm run build      # outputs to dist/
```

**No additional tooling required.** Zero npm dependencies beyond Astro + Tailwind.

---

## Template System — How It Works

Every vertical uses the same component library. Only these change per vertical:

| What changes | Where |
|---|---|
| Brand tokens (colors, fonts) | `tailwind.config.mjs` |
| Service/location/testimonial data | `src/data/*.ts` |
| Business copy, phone, address | Hardcoded in `Layout.astro`, `Header.astro`, `Hero.astro`, `Footer.astro` |
| Page-specific content | `src/pages/*.astro` (most are 5-7 lines importing from data) |
| Schema markup type | `index.astro` (e.g., `AutoRepair` vs `HVACBusiness`) |

Components are **vertical-agnostic** — swap data and tokens, components rebuild correctly.

---

## Adding a New Vertical

1. Copy an existing vertical folder: `cp -r apex-auto new-client`
2. Update `new-client/astro.config.mjs` — set `base: '/Website-Intake-Framework/new-client'`
3. Update `new-client/public/robots.txt` — fix sitemap URL
4. Edit `tailwind.config.mjs` — swap brand colors
5. Replace all data in `src/data/` — services, locations, testimonials, faqs
6. Update copy in `Header.astro`, `Hero.astro`, `Footer.astro`, `TrustBar.astro`
7. Update `index.astro` — adjust service cards, schema type, stats
8. Add build step to `.github/workflows/deploy-all.yml`
9. Add entry to root `_site/index.html` in the workflow

**Estimated time for second+ vertical: 2–3 hours** (vs. ~8 hours first build).

---

## Design System

### CoolBreeze HVAC (navy/blue/orange)
```
brand-navy:     #1B2A4A   (charcoal/dark)
brand-blue:     #1E6CB8   (primary)
brand-orange:   #F5A623   (CTA accent)
brand-light:    #F0F4FA   (light bg)
```

### Apex Auto (charcoal/red/orange)
```
brand-charcoal: #1C2526   (dark)
brand-red:      #C0392B   (primary)
brand-orange:   #E67E22   (CTA accent)
brand-light:    #FDF2F0   (light bg)
```

---

## Component Reference

| Component | Purpose |
|---|---|
| `AnnouncementBar` | Dismissible top bar (sessionStorage dismiss) |
| `BreadcrumbNav` | Breadcrumb + BreadcrumbList JSON-LD |
| `FAQAccordion` | `<details>` accordion + FAQPage JSON-LD |
| `Footer` | Pre-footer CTA strip + 4-column footer |
| `Header` | Scroll-aware fixed header, dropdown nav, mobile overlay |
| `Hero` | Full-viewport bg image, stat counters, dual CTA |
| `LocationBlock` | Location card with city, response time, description |
| `PricingBlock` | Tier comparison cards with ribbon |
| `ProcessSteps` | 4-step how-it-works with connecting line |
| `ScrollAnimator` | IntersectionObserver engine for `[data-animate]` |
| `SectionDivider` | SVG wave/angle/curve section transitions |
| `ServiceCard` | Service card with image, hover lift |
| `StatCounter` | Animated number counter (requestAnimationFrame) |
| `StickyCTABar` | Mobile-only fixed bottom CTA (call + schedule) |
| `Testimonial` | Single review card |
| `TestimonialCarousel` | CSS scroll-snap carousel with auto-advance |
| `TrustBar` | Certification badges row |

---

## Data Architecture

Each vertical has four data files:

- **`services.ts`** — `Record<string, Service>` — each service has slug, title, shortTitle, headline, description, heroImage, features[], faqs[], relatedServices[]
- **`locations.ts`** — `Record<string, Location>` — each location has slug, city, state, zip, isHQ, responseTime, description, heroImage, faqs[]
- **`testimonials.ts`** — `Testimonial[]` — each has name, location, rating, text, service (matched against `service.shortTitle`)
- **`faqs.ts`** — `generalFaqs: FAQ[]` — homepage FAQ accordion

Layouts (`ServiceLayout`, `LocationLayout`) pull from these files. Page files are 5-7 lines.

---

## Deployment

**Trigger:** Push to `main` with changes in `coolbreeze-hvac/**` or `apex-auto/**`

**Workflow:** `.github/workflows/deploy-all.yml`
- Builds both sites
- Combines into `_site/Website-Intake-Framework/[vertical]/`
- Creates root landing page at `_site/index.html`
- Deploys to GitHub Pages

**Pages settings:** Source → GitHub Actions (set in repo Settings → Pages)

---

## Key URLs

- **Landing page:** `https://zingcontrol.github.io/Website-Intake-Framework/`
- **CoolBreeze:** `https://zingcontrol.github.io/Website-Intake-Framework/coolbreeze-hvac/`
- **Apex Auto:** `https://zingcontrol.github.io/Website-Intake-Framework/apex-auto/`
- **GitHub repo:** `https://github.com/Zingcontrol/Website-Intake-Framework`

---

## Vault Integration

The Obsidian vault at `/home/user/matt-vault/` (VM) or `~/matt-vault/` (local Mac) contains the full Website Intake Framework knowledge base:

- `Website Intake Framework/00 - Overview.md` — system map and how to start
- `Website Intake Framework/Prospecting Runs/` — per-client intake data
- `Website Intake Framework/Draft Emails/` — outreach templates

When onboarding a new client, start with the intake template in `Website Intake Framework/Templates/`.

---

## Network Notes

VM (`/home/user`) runs in an Anthropic sandbox. Outbound network is restricted:
- `images.unsplash.com` — allowlisted (hero images load)
- `fonts.googleapis.com` — allowlisted (Barlow/Inter fonts load)
- Client domains (zinggrow.com, prebuiltrans.com) — require client-side WAF config to allow crawler access
- GitHub push — requires PAT (no stored credentials on VM)

Local Mac (M1 or M4) has full network access — preferred environment for live site crawls.
