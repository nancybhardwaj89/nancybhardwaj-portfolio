# Nancy Bhardwaj — Portfolio

Personal portfolio site. Next.js App Router, Tailwind v4, statically exported
and hosted on Vercel.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## How it's put together

All copy lives in `src/content/` as typed data, not inside components. To
change what the site says, edit these — nothing in `src/components/` should
need touching:

| File | Contents |
| --- | --- |
| `content/site.ts` | Name, role, tagline, email, socials, portrait path, stats band |
| `content/projects.ts` | The four featured projects and their detail pages, plus secondary repos |
| `content/skills.ts` | Skill groups shown in the Skills section |
| `content/experience.ts` | Employment history |
| `content/credentials.ts` | Certifications, awards, education, community |

Project detail pages at `/projects/<slug>` are generated from `projects.ts` via
`generateStaticParams()`, so adding a project to that array creates its page
automatically.

### Design system

Colours and fonts are CSS custom properties in `src/app/globals.css`, exposed
to Tailwind through `@theme inline`. Changing the accent colour is a one-line
edit to `--accent` (and its dark-mode counterpart) — no find-and-replace.

Dark mode is class-based (`.dark` on `<html>`), set before first paint by a
blocking inline script in `src/lib/theme-script.ts` so there's no theme flash
on load.

### Portrait

Drop an image at `public/nancy.jpg` and it appears in the hero and header. If
the file is missing or fails to load, `components/ui/Avatar.tsx` falls back to
an initials monogram rather than a broken image.

## Deployment

Pushing to `main` triggers a production deploy on Vercel. Any other branch gets
its own preview URL, so changes can be reviewed before going live.

The site is a static export (`output: "export"` in `next.config.ts`) — there's
no server runtime, and no `vercel.json` is needed. Vercel detects Next.js and
configures the build itself.

After the first deploy, update `site.url` in `content/site.ts` to the real
domain so canonical URLs, the sitemap and Open Graph tags are correct.
