> [!WARNING]  
> This is me trying [bun](https://bun.sh) for managing `workspaces`

# Portfolio Reboot Bun

> An open-source, modern, full-stack portfolio monorepo showcasing services, projects, resume, and a custom content management system with blog functionality.

**Previous Portfolio**: [Live Site](https://portfolio-arpitv970s-projects.vercel.app/) | [Source Code](https://github.com/arpitv970/portfolio)

## Motivation

This project is a complete reboot of my [previous portfolio](https://portfolio-arpitv970s-projects.vercel.app/) built with Next.js 14 + shadcn. While the old portfolio served its purpose, it had limitations:

- Purely static with no dynamic content management
- No blog functionality
- No server-managed content or CMS integration
- Limited learning opportunities with the tech stack

This reboot is not just a migration but an **experimental learning project** to master modern web technologies:

- **Astro.build** - Modern, performance-focused web framework
- **GraphQL** - Type-safe, efficient API design
- **NestJS** - Scalable, enterprise-grade Node.js framework
- **TypeORM** - Database abstraction and migrations
- **Custom CMS** - Building authentication, authorization, and RBAC from scratch

**Why no Sanity or Strapi?** Using pre-built CMS solutions would defeat the learning purpose. Building a custom CMS teaches:
- Role-based access control (RBAC)
- Authentication & Authorization flows
- GraphQL schema design
- Database modeling with TypeORM
- Security best practices

## Learning in Public

This project is my personal journey of **learning by building in public**. I believe in:

- **Transparency** - Sharing the learning process, including mistakes and iterations
- **Community** - Learning together and helping others on similar journeys
- **Open Knowledge** - Making this work freely available for everyone

### Use This Project Freely

You are **completely free** to:
- ✅ Use this code for your own portfolio
- ✅ Modify and adapt it to your needs
- ✅ Learn from the implementation
- ✅ Build upon these ideas
- ✅ Use it commercially or personally

**No legal complications, no restrictions!** This is open-source in the truest sense.

### A Simple Request

If you find this project helpful, I'd deeply appreciate:
- 🌟 A star on this repository
- 🙏 A mention or credit somewhere in your project
- 📣 A shoutout on social media or your blog
- 🔗 A link back to this repo

**This is NOT required** - just a humble request. Your success and learning are what matter most. But credits and shoutouts help me grow and motivate me to build more in public!

## Architecture

### Monorepo Structure

```
portfolio-reboot-bun/
├── apps/
│   ├── web/          # Astro.build frontend
│   └── api/          # NestJS GraphQL API
├── infra/            # Infrastructure and deployment configs
└── docs/             # Additional documentation (if needed)
```

### Tech Stack

#### Frontend (`apps/web`)
- **Framework**: Astro.build
- **Styling**: TBD (migrating from shadcn)
- **Features**: Server-side rendering, static generation, islands architecture

#### Backend (`apps/api`)
- **Framework**: NestJS
- **API**: GraphQL (with Apollo Server)
- **ORM**: TypeORM
- **Database**: PostgreSQL (recommended)
- **Authentication**: JWT + RBAC

#### Tooling
- **Package Manager**: pnpm
- **Monorepo**: pnpm workspaces
- **TypeScript**: End-to-end type safety
- **Linting & Formatting**: Biome (fast, all-in-one toolchain)

### Data Flow

```
User Browser
    ↓
Astro.build (SSR/SSG)
    ↓
GraphQL API (NestJS)
    ↓
TypeORM
    ↓
PostgreSQL Database
```

## Features

### Core Portfolio Features
- [ ] Services showcase
- [ ] Projects gallery with filtering
- [ ] Resume/CV display
- [ ] Contact form
- [ ] Responsive design (mobile-first)
- [ ] UI migration from old Next.js portfolio

### Blog System
- [ ] Blog post listing and pagination
- [ ] Individual blog post pages
- [ ] Markdown/MDX support
- [ ] Code syntax highlighting
- [ ] Tags and categories
- [ ] Search functionality
- [ ] RSS feed

### Custom CMS
- [ ] Content management interface
- [ ] Rich text editor for blog posts
- [ ] Media upload and management
- [ ] Draft and publish workflow
- [ ] Content preview

### Authentication & Authorization
- [ ] User authentication (JWT)
- [ ] Role-based access control (RBAC)
- [ ] Admin dashboard
- [ ] Secure API endpoints
- [ ] Session management
- [ ] Password hashing and security

### GraphQL API
- [ ] Type-safe schema design
- [ ] Query resolvers (content fetching)
- [ ] Mutation resolvers (content management)
- [ ] Authentication guards
- [ ] Role-based authorization
- [ ] Error handling and validation

### Database & ORM
- [ ] TypeORM entity models
- [ ] Database migrations
- [ ] Seed data for development
- [ ] Relationships (User, Post, Media, etc.)

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 10.13.1
- PostgreSQL (for local development)

### Installation

```bash
# Clone the repository
git clone https://github.com/arpitv970/portfolio-reboot-bun.git
cd portfolio-reboot-bun

# Install dependencies
pnpm install

# Set up environment variables
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# Run database migrations
pnpm --filter api migration:run

# Start development servers
pnpm dev
```

### Development

```bash
# Start all apps
pnpm dev

# Start specific app
pnpm --filter web dev
pnpm --filter api dev

# Build for production
pnpm build

# Run tests
pnpm test

# Code quality
pnpm format:all      # Format code with Biome
pnpm lint:all        # Lint and fix issues with Biome
pnpm biome:all       # Run format, lint, and organize imports
```

## Learning Goals

This project is designed to learn and master:

1. **Astro.build** - Modern SSG/SSR patterns, islands architecture
2. **GraphQL** - Schema design, resolvers, type safety
3. **NestJS** - Dependency injection, modules, guards, interceptors
4. **TypeORM** - Entity relationships, migrations, query building
5. **RBAC** - Role-based access control implementation
6. **Authentication** - JWT, session management, security
7. **Monorepo Management** - pnpm workspaces, shared configurations

## Contributing

This is an open-source project! Contributions, issues, and feature requests are welcome.

Feel free to check the [issues page](https://github.com/arpitv970/portfolio-reboot-bun/issues) if you want to contribute.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## License

**MIT License** - This project is completely free to use, modify, and distribute!

You can do whatever you want with this code - no strings attached. Build your portfolio, learn from it, modify it, even use it commercially. That's the spirit of open-source!

If you use this project and find it helpful, a credit or shoutout would mean the world to me (but it's not legally required). It helps me continue building in public and sharing knowledge.

See [LICENSE](./LICENSE) for full details.

## Author

**Arpit Verma**

- GitHub: [@arpitv970](https://github.com/arpitv970)
- Portfolio: [https://portfolio-arpitv970s-projects.vercel.app/](https://portfolio-arpitv970s-projects.vercel.app/)

---

**Star this repo if you find it helpful!** ⭐
