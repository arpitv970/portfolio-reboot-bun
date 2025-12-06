# Contributing to Portfolio Reboot

First off, thank you for considering contributing to Portfolio Reboot! This project is an open-source learning experiment, and contributions from the community are welcome.

## About This Project

This is my **personal learning journey built in public**. I'm experimenting with modern web technologies (Astro, GraphQL, NestJS, TypeORM) and sharing everything openly.

### Why I Built This in Public

- **Learning Together** - We all learn better when we share our journey
- **Transparency** - Real projects have bugs, iterations, and mistakes - that's okay!
- **Community Growth** - Your contributions help both of us learn

### Feel Free to Fork and Build Your Own

This project is **completely open**. You can:
- Fork it and build your own portfolio
- Use parts of it in your projects
- Learn from the code and implementation
- Modify it however you want

If you do use this project, a small credit or shoutout would be amazing (but not required). It motivates me to keep building in public!

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Submitting Issues](#submitting-issues)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Code Review Process](#code-review-process)

## Code of Conduct

This project follows a simple code of conduct:

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help others learn and grow

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 10.13.1
- PostgreSQL (for local development)
- Git

### Tools Used

This project uses **Biome** for linting, formatting, and code quality:
- Fast, all-in-one toolchain (replaces ESLint + Prettier)
- Automatic code formatting
- Import organization
- Lint rule enforcement

### Initial Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-reboot-bun.git
   cd portfolio-reboot-bun
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/arpitv970/portfolio-reboot-bun.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Set up environment variables**
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   # Edit the .env files with your local configuration
   ```

6. **Run database migrations**
   ```bash
   pnpm --filter api migration:run
   ```

7. **Start development servers**
   ```bash
   pnpm dev
   ```

## Development Workflow

### Important: Never Push Directly to Main

**⚠️ IMPORTANT**: Contributors should **NEVER** push directly to the `main` branch. All changes must go through Pull Requests to maintain code quality and prevent pollution.

- Direct pushes to `main` are disabled for contributors
- All changes must be reviewed before merging
- This ensures code quality, testing, and proper documentation

### Branch Strategy

- `main` - Production-ready code (protected branch)
- `develop` - Development branch (if used)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates

### Creating a New Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### Making Changes

1. Make your changes in the appropriate app/package
2. Test your changes locally
3. Write or update tests as needed
4. Update documentation if required

### Code Quality

Before committing, ensure your code passes formatting and linting:

```bash
# Format all code with Biome
pnpm format:all

# Lint and auto-fix issues
pnpm lint:all

# Run both format, lint, and organize imports
pnpm biome:all
```

**Pro tip**: Run `pnpm biome:all` before committing to ensure code quality.

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific app
pnpm --filter web test
pnpm --filter api test

# Run tests in watch mode
pnpm test:watch
```

### Building

```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter web build
pnpm --filter api build
```

## Project Structure

```
portfolio-reboot-bun/
├── apps/
│   ├── web/          # Astro.build frontend
│   │   ├── src/
│   │   └── package.json
│   └── api/          # NestJS GraphQL API
│       ├── src/
│       └── package.json
├── infra/            # Infrastructure configs
├── .github/          # GitHub templates
└── docs/             # Additional documentation
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types - use proper typing
- Use interfaces for object shapes
- Use type aliases for unions/intersections

### Formatting

**We use Biome for formatting** - don't worry about manual formatting rules! Just run:

```bash
pnpm format:all
```

Biome configuration is set at the root level and enforces:
- Consistent indentation (2 spaces)
- Quote style
- Trailing commas
- Line length limits
- Import organization

### Naming Conventions

- **Files**: `kebab-case.ts`
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Interfaces**: `PascalCase` (use `I` prefix)
- **Types**: `PascalCase`

### Code Quality

- Write self-documenting code
- Add comments for complex logic
- Keep functions small and focused
- Follow DRY (Don't Repeat Yourself)
- Write tests for new features

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semicolons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes

### Scope

- `web` - Changes to apps/web
- `api` - Changes to apps/api
- `cms` - CMS-related changes
- `auth` - Authentication/authorization
- `db` - Database changes
- `infra` - Infrastructure changes

### Examples

```bash
feat(api): add GraphQL mutation for creating blog posts

fix(web): resolve navigation menu not closing on mobile

docs(readme): update installation instructions

refactor(api): extract user service logic into separate module

test(web): add unit tests for blog post component
```

## Submitting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the appropriate template**:
   - Bug Report
   - Feature Request
   - Question

### Writing Good Issues

- **Use a clear, descriptive title**
- **Provide detailed information**
- **Include steps to reproduce** (for bugs)
- **Add screenshots/videos** if applicable
- **Specify your environment** (OS, Node version, etc.)

## Submitting Pull Requests

### Before Submitting

- [ ] Code follows the project's coding standards
- [ ] **Ran `pnpm biome:all` to format and lint code**
- [ ] All tests pass locally
- [ ] New tests added for new features
- [ ] Documentation updated (if needed)
- [ ] Commit messages follow conventions
- [ ] Branch is up to date with main

### PR Process

1. **Push your changes to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - **Base repository**: `arpitv970/portfolio-reboot-bun` (upstream)
   - **Base branch**: `main`
   - **Compare branch**: Your feature branch
   - Fill out the PR template completely

3. **Link related issue**
   ```markdown
   Fixes #123
   ```

4. **Wait for review**
   - Address any feedback from reviewers
   - Keep the PR updated with main branch
   - Be responsive to comments
   - **Do NOT merge your own PR** - wait for maintainer approval and merge

### PR Title Format

```
<type>(<scope>): <description>
```

Example:
```
feat(cms): add rich text editor for blog posts
```

## Code Review Process

### For Contributors

- Be patient - reviews take time
- Be open to feedback
- Respond to comments promptly
- Make requested changes in new commits
- Ask questions if unclear

### Review Criteria

Reviewers will check for:

- Code quality and readability
- Test coverage
- Documentation
- Performance implications
- Security considerations
- Adherence to project standards

### After Approval

Once your PR is approved and all checks pass:
- **A maintainer will merge your PR** (do NOT merge it yourself)
- Your changes will be included in the next release
- You'll be added to the contributors list!

**Note**: Only project maintainers have permission to merge PRs to maintain code quality and prevent accidental pollution of the main branch.

## Questions?

If you have questions that aren't covered in this guide:

- Open a [Question issue](https://github.com/arpitv970/portfolio-reboot-bun/issues/new?template=question.md)
- Check existing documentation
- Reach out to the maintainer

## Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!

---

**Happy Coding!** 🚀
