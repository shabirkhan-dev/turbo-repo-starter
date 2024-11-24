# 🚀 Turborepo Full-Stack Starter Kit

A high-performance, full-stack monorepo starter template powered by [Turborepo](https://turbo.build/repo) with Next.js and Express.js.

## ✨ Features



## Important Note

To run the backend server without using `ts-node` or `nodemon`, you need to install `bun` and run the server with `bun run start` in the `apps/api` directory.

### 📦 Apps and Packages
- `apps/web`: Next.js 14+ application with App Router
  - Tailwind CSS v4
  - shadcn/ui components
  - Modern styling and components out of the box
- `apps/api`: Express.js v5 REST API
- `packages/typescript-config`: Shared TypeScript configurations
- `packages/biome-config`: Shared Biome configurations

### 🛠 Development Tools
- **Biome.js**: Fast and reliable linter and formatter
- **Lefthook**: Git hooks manager for consistent code quality
- **TypeScript**: End-to-end type safety
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Re-usable components built with Radix UI and Tailwind

## 📋 Prerequisites

- Node.js 18+
- pnpm 8+ (recommended)

## 🚀 Getting Started

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/shabirkhan-dev/turbo-starter-kit.git

# Install dependencies
pnpm install
```

### Development

```bash
# Start all applications
pnpm dev

# Start specific app
pnpm dev --filter=web
pnpm dev --filter=api
```

### Build

```bash
# Build all applications
pnpm build

# Build specific app
pnpm build --filter=web
pnpm build --filter=api
```

## 📁 Project Structure

```
.
├── apps
│   ├── web                 # Next.js application
│   │   └── ...
│   └── api                 # Express.js API
│       └── ...
├── packages
│   ├── typescript-config   # Shared TypeScript configurations
│   │   └── ...
│   └── biome-config        # Shared Biome configurations
│       └── ...
├── .github                 # GitHub workflows
├── .vscode                 # VS Code settings
├── lefthook.yml           # Lefthook configuration
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## 🔧 Configuration

### Biome

The project uses Biome for linting and formatting. Configuration can be found in `packages/biome-config`:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.4.1/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  }
}
```

### Lefthook

Git hooks are managed through Lefthook. See `lefthook.yml`:

```yaml
pre-commit:
  parallel: true
  commands:
    lint:
      glob: "*.{js,ts,jsx,tsx}"
      run: pnpm biome check {staged_files}
    types:
      glob: "*.{js,ts,jsx,tsx}"
      run: pnpm type-check
```

## 🔄 Available Scripts

- `pnpm dev` - Start development servers
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all files
- `pnpm format` - Format all files
- `pnpm type-check` - Check types across all applications

## 📚 Documentation Links

- [Turborepo](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/docs)
- [Express.js](https://expressjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Biome](https://biomejs.dev/docs)
- [Lefthook](https://github.com/evilmartians/lefthook)

## 📝 License

MIT © [Shabir Khan](https://github.com/shabirkhan-dev)

---

<div align="center">

🌟 Found this useful? Please give it a star! 🌟

</div>