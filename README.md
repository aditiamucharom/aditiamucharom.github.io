# aditiamucharom.github.io

Personal portfolio of **Aditia Mucharom** — built with Next.js 15, TypeScript, Tailwind CSS, and deployed as a static site to GitHub Pages.

## Features

- Bold hero section with gradient headline and animated background
- Responsive project gallery
- About section with highlights
- Contact form (powered by Formspree — no backend needed)
- Dark mode toggle (system-aware via `next-themes`)
- Fully responsive design (mobile, tablet, desktop)
- Social media links in the footer
- Auto-deploy to GitHub Pages via GitHub Actions

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [lucide-react](https://lucide.dev) for icons

## Getting started (local dev)

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build & preview static export

```bash
npm run build
# Output is written to ./out — serve it with any static server:
npx serve out
```

## Customize your content

All your personal info lives in **`lib/site-config.ts`**. Edit these values:

| Field | What it does |
| --- | --- |
| `name`, `title`, `role`, `description` | Site metadata + hero text |
| `email` | The "Email directly" button + footer mail link |
| `formspreeEndpoint` | Enables the contact form (see below) |
| `cvUrl` | Path to your CV file (default `/cv.pdf` — drop your file into `public/cv.pdf`) |
| `social.{github,linkedin,twitter,instagram}` | Footer social links |

Projects live in **`lib/projects-data.ts`** — add/remove entries as you like.

### Enabling the contact form

The contact form posts to [Formspree](https://formspree.io) (free tier, no backend required).

1. Sign up at <https://formspree.io>.
2. Create a new form and copy the endpoint (looks like `https://formspree.io/f/xxxxxxx`).
3. Paste it into `lib/site-config.ts` → `formspreeEndpoint`.
4. Commit & push — your form is live.

If you leave the endpoint empty, the form shows a warning and the Send button is disabled. Visitors can still reach you via the "Email directly" button.

## Deploying to GitHub Pages

### One-time repo setup

1. Create a **new repository** on GitHub named exactly **`aditiamucharom.github.io`** (same as your username — this makes it a GitHub user site).
2. Push this project to that repo's `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.

### After that

Every push to `main` triggers `.github/workflows/deploy.yml`, which:

1. Installs dependencies
2. Runs `next build` (produces static export in `./out`)
3. Uploads the artifact and publishes it to GitHub Pages

Your site will be live at **<https://aditiamucharom.github.io>** within ~1–2 minutes.

## Project structure

```
.
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home page (Hero + About + Projects + Contact)
│   ├── providers.tsx     # next-themes provider
│   └── globals.css       # Tailwind + CSS vars (light/dark)
├── components/
│   ├── navbar.tsx
│   ├── theme-toggle.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   ├── contact.tsx
│   └── footer.tsx
├── lib/
│   ├── site-config.ts    # Edit your name / email / socials here
│   └── projects-data.ts  # Edit your project list here
├── public/               # Static assets (drop cv.pdf, favicon, etc. here)
├── .github/workflows/
│   └── deploy.yml        # GitHub Pages auto-deploy
├── next.config.mjs       # output: "export"
├── tailwind.config.ts
└── tsconfig.json
```

## License

MIT — feel free to fork and make it your own.
