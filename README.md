# ResumeBuilder Pro

**Live site:** [resumebuilders.utilix.site](https://resumebuilders.utilix.site)

Modern, ATS-friendly resume builder — build an executive-level resume in minutes with a live real-time preview and instant PDF export.

## Features

- Live real-time resume preview
- Multiple professional, ATS-optimized templates
- Instant 300 DPI vector PDF export
- 100% client-side and private
- Blog for resume/career SEO content

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React + TypeScript
- Tailwind CSS
- Auto-generated `sitemap.xml` and `robots.txt`

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
bun run build
bun start
```

## Project Structure

```
app/            Routes (builder, blog, about, contact, privacy, terms)
components/     Shared UI components (Header, Footer, etc.)
lib/            Blog data
```

## License

All rights reserved.
