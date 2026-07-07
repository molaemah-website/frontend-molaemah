# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Marketing site for **ملائمة (Molaemah) لخدمات الأعمال**, an HR / government-platform services firm in Buraidah, Al-Qassim, Saudi Arabia. Four-page Next.js App Router site (home, about, services, contact). Arabic-only copy, RTL throughout.

## Commands

```bash
pnpm dev        # next dev
pnpm build      # next build
pnpm start      # next start
pnpm lint       # eslint .  (no eslint config is checked in — relies on Next's defaults)
```

No test runner is configured.

Per user preference: **do not run `pnpm build` for content-only changes** (edits to `content/site.ts`, copy tweaks, etc.). Only build when something requires compilation verification.

Both `pnpm-lock.yaml` and `bun.lock` are committed; `pnpm` is the working package manager — don't add packages with `bun` unless you also intend to remove `pnpm-lock.yaml`.

## Architecture — things you can't see from one file

### Content is centralized in `content/site.ts`
Every Arabic string the user sees (nav labels, hero copy, service bullets, contact details, validation success message, footer headings) lives in the exported `siteContent` object. The file header explicitly says *"Do not edit, translate, or rephrase this content"* — treat copy changes as content-owner decisions, not code refactors. Components import from `@/content/site` rather than hardcoding strings.

Phone number appears in two forms: `phone` (display, `+966 0502355888`) and `phoneClean` (for `tel:` and `wa.me` URLs).

### RTL is hardcoded at the root
`app/layout.tsx` sets `<html lang="ar" dir="rtl">`. There is no LTR mode. When writing layout classes:
- Use **logical** directional utilities (`start-*`/`end-*`, `ps-*`/`pe-*`, `ms-*`/`me-*`), not `left`/`right`. The codebase consistently does this (see `site-header.tsx`, `whatsapp-fab.tsx`).
- The partner marquee in `components/partner-marquee.tsx` reverses its CSS animation under `[dir="rtl"]` — keep that pattern if you add similar animations.
- Fields with LTR content (email, phone input) get `dir="ltr"` locally (see `components/contact-form.tsx`).

### Theming — Tailwind v4 with shadcn/ui (new-york, neutral base)
- All design tokens live in **`app/globals.css`** (the one imported by `layout.tsx`). `styles/globals.css` also exists but is not wired in — `app/globals.css` is the source of truth.
- Tokens use Tailwind v4's `@theme inline { ... }` block, not `tailwind.config.*`. There is no `tailwind.config.js`; `components.json` deliberately has `"config": ""`.
- Brand palette is exposed both as semantic tokens (`--primary`, `--accent`, `--background`, …) and raw brand utilities (`--color-brand-navy-700`, `--color-brand-orange-500`, …). In dark mode `--primary` flips to orange and `--accent` to navy — keep this inversion in mind when choosing tokens.
- Hero CTAs and a few brand-critical spots use **hardcoded hex** (e.g. `bg-[#F0A040] text-[#0E2E5C]` on the hero strapline/primary button) to lock the look regardless of theme. Don't "fix" those to semantic tokens without checking the design intent.
- WhatsApp FAB intentionally uses WhatsApp green (`#25D366`) — also hardcoded.
- shadcn components live in `components/ui/`. Add new ones with `pnpm dlx shadcn@latest add <name>`; the config (`components.json`) writes to `@/components/ui` and uses `lucide-react` for icons.

### Forms: react-hook-form + zod + sonner
- Schemas in `schemas/` (currently just `contact.ts`). Validation messages are Arabic and the phone regex enforces Saudi format `^(\+966|966|0)?5\d{8}$`.
- `components/contact-form.tsx` is the canonical pattern: `useForm` + `zodResolver`, error text in `text-red-300`, `aria-invalid` and `aria-describedby` wired on every field, success via `toast.success(...)` from `sonner`.
- The contact form's `onSubmit` currently **simulates submission with `setTimeout` and `console.log`** — there is no backend wired up. The comment `// v2: wire to form once email/notification flow is approved` marks where to hook in real delivery.

### Build configuration quirks
`next.config.mjs` sets:
- `typescript.ignoreBuildErrors: true` — TypeScript errors will not fail `next build`. Don't rely on the build to catch type regressions; check with the editor / `tsc --noEmit` if needed.
- `images.unoptimized: true` — `next/image` skips optimization, so `width`/`height` props are layout hints only and remote loaders aren't configured.

### Turbopack + styled-jsx: no multi-line `className` strings
Next 16 builds with Turbopack. In any file that uses `<style jsx>{...}` (currently only `components/partner-marquee.tsx`), styled-jsx rewrites JSX `className` values to prepend a scoped `jsx-XXXXXX` token via runtime string concat. Turbopack passes literal newlines from the source string straight into the generated JS, producing an unterminated string literal and a fatal "Expected ',', got 'ident'" panic. So in styled-jsx files, keep `className="..."` on a single line, or compose with `cn(...)`/an array — anything that's an expression instead of a multi-line literal. Plain JSX files (no `<style jsx>`) are unaffected.

### Path alias
`@/*` resolves to the repo root (`tsconfig.json`). Imports look like `@/components/...`, `@/content/site`, `@/lib/utils`, `@/schemas/contact`, `@/hooks/...`.

### Accessibility patterns already in place
- Skip link in `layout.tsx` jumps to `#main-content` — preserve the `id="main-content"` on the `<main>` of each page.
- Mobile nav button toggles `aria-expanded`; nav landmarks use Arabic `aria-label`s. Match that style for new interactive components.
- Partner marquee respects `prefers-reduced-motion` by pausing on mount.

## Conventions worth following

- Client components are marked `"use client"` only when needed (forms, theme toggle, mobile menu state, marquee). Pages stay server components and pass `siteContent` down.
- Use `cn(...)` from `@/lib/utils` for conditional class merging — it's `clsx` + `tailwind-merge`.
- New copy → add to `content/site.ts` and reference it; don't inline Arabic strings in components.
