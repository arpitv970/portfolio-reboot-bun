> [!NOTE]  
> Built with [Bun](https://bun.sh) for speed. No Node.js, no pnpm—just fast builds.

# Portfolio Reboot Bun

> An open-source portfolio template—simple, fast, and boring (in the best way).

**Previous Portfolio**: [Live](https://portfolio-arpitv970s-projects.vercel.app/) | [Source](https://github.com/arpitv970/portfolio)

## Approach

Don't over-engineer simple problems. A portfolio needs:

- **Astro.build** - Content-focused, minimal JavaScript
- **Bun** - 3x faster than Node.js
- **Markdown** - Version-controlled content, no CMS headache

**Right tool for the job.** Simple projects get boring, reliable tech.

## Stack

| Frontend | Tooling |
|----------|---------|
| Astro.build | Bun (runtime + package manager) |
| Tailwind CSS + shadcn/ui | TypeScript |
| Static generation | Biome (lint/format) |
| Content collections | |

## Quick Start

**Full project:**
1. Fork this repo (click "Fork" button ↑)
2. Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-reboot-bun.git
cd portfolio-reboot-bun
bun install
```

**Boilerplate (mock branch):**
1. Fork this repo
2. Add upstream and fetch mock branch:
```bash
git remote add upstream https://github.com/arpitv970/portfolio-reboot-bun.git
git fetch upstream mock:mock
git checkout mock
```

## Development

```bash
bun web:dev          # Dev server
bun web:dev --host   # Network expose
bun web:build        # Production build
bunx serve ./apps/web/dist -p 3000  # Preview
```

## Philosophy

**Boring, reliable technology** that just works.

- No GraphQL
- No CMS
- No auth
- No over-engineering

Just fast builds and simple Markdown content.

## License

MIT - completely free to use, modify, and distribute.

---

⭐ Star if this helps you out!
