# LeadForge AI

AI-powered lead generation agency platform — B2B/B2C multi-tenant SaaS.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     FRONTEND                            │
│  Next.js 15 (App Router) + Tailwind CSS + shadcn/ui    │
│  i18n: next-intl (fr/en)                               │
│  Hosting: Vercel                                        │
├─────────────────────────────────────────────────────────┤
│                      AUTH                               │
│  Supabase Auth (Magic Link + Google + LinkedIn OAuth)   │
├─────────────────────────────────────────────────────────┤
│                   BUSINESS DATA                          │
│  Airtable (Leads, Campaigns, Contacts, Newsletter)      │
├─────────────────────────────────────────────────────────┤
│                  ORCHESTRATION                           │
│  Make.com (formerly Integromat)                         │
│  Webhooks ──► Lead enrichment ──► Outreach sequences    │
├─────────────────────────────────────────────────────────┤
│                  INTEGRATIONS                            │
│  Apollo.io │ Instantly.ai │ Claude API │ HubSpot Free   │
├─────────────────────────────────────────────────────────┤
│                     CMS                                  │
│  Notion API (headless blog)                             │
├─────────────────────────────────────────────────────────┤
│                   ANALYTICS                              │
│  PostHog / Plausible                                    │
└─────────────────────────────────────────────────────────┘
```

## Getting Started

### Prerequisites

- Node.js 20 LTS (see `.nvmrc`)
- npm 10+
- Supabase project (auth only)
- Airtable base (business data)
- Make.com account (workflow automation)
- Notion API key (blog CMS)

### Setup

```bash
# Clone the repository
git clone git@github.com:mfoxbe-cs50/fox-berens-site.git
cd fox-berens-site

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Fill in your environment variables

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Scripts

| Command              | Description                     |
| -------------------- | ------------------------------- |
| `npm run dev`        | Start dev server (Turbopack)    |
| `npm run build`      | Production build                |
| `npm run start`      | Start production server         |
| `npm run lint`       | Run ESLint                      |
| `npm run type-check` | Run TypeScript type checking    |
| `npm run format`     | Format code with Prettier       |

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # i18n routing (fr/en)
│   │   ├── layout.tsx      # Root layout with providers
│   │   ├── page.tsx        # Landing page (7 sections)
│   │   ├── pricing/        # Pricing page (4 tiers + FAQ)
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog (Notion CMS)
│   │   ├── contact/        # Contact page (form > Make webhook)
│   │   └── dashboard/      # Auth-protected client area
│   ├── api/                # API routes
│   └── globals.css         # Design system tokens
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, Footer, Sidebar
│   ├── landing/            # Landing page sections
│   ├── dashboard/          # Dashboard widgets
│   └── blog/               # Blog components
├── lib/
│   ├── supabase/           # Supabase client (auth only)
│   ├── airtable/           # Airtable CRUD client
│   ├── make/               # Make.com webhook triggers
│   ├── notion/             # Notion CMS client
│   ├── i18n/               # Internationalization config
│   ├── seo.ts              # JSON-LD structured data
│   └── utils.ts            # Shared utilities
├── messages/               # i18n translation files
│   ├── fr.json
│   └── en.json
├── types/                  # TypeScript type definitions
└── middleware.ts            # i18n + auth middleware
```

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Auth:** Supabase Auth
- **Database:** Airtable
- **Orchestration:** Make.com
- **i18n:** next-intl (French + English)
- **CMS:** Notion API
- **Hosting:** Vercel
