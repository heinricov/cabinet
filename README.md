<div align="center">

# 🚀 DTM

**A modern, scalable monorepo template powered by Next.js, Turborepo & shadcn/ui**

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-latest-EF4444?style=flat-square&logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

_A production-ready starter for building modern web applications with shared UI components, type-safe tooling, and blazing-fast builds._

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Available Scripts](#-available-scripts)
- [Working with shadcn/ui](#-working-with-shadcnui)
  - [Adding a Component](#adding-a-component)
  - [Using a Component](#using-a-component)
- [Environment Variables](#-environment-variables)
- [Development Workflow](#-development-workflow)
- [Commit Convention](#-commit-convention)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🔎 Overview

**DTM** is a production-ready monorepo template designed to streamline the development of modern, full-stack web applications. It combines the power of the **Next.js App Router**, **Turborepo** for high-performance builds, and **shadcn/ui** for a consistent and customizable design system.

This template is ideal for teams and solo developers who want:

- A **single repository** for multiple apps and shared packages
- **Reusable UI components** that stay in sync across apps
- **Fast CI/CD** thanks to Turborepo's intelligent caching
- A **type-safe** foundation from day one

---

## ✨ Key Features

- ⚡ **Turborepo** — High-performance build system with remote caching support
- 🧩 **Shared UI Package** — Reusable shadcn/ui components across all apps
- 🎨 **shadcn/ui + Tailwind CSS** — Beautiful, accessible, and customizable components
- 🔒 **End-to-End Type Safety** — Strict TypeScript configuration shared across packages
- 📦 **pnpm Workspaces** — Fast, disk-efficient dependency management
- 🧹 **Linting & Formatting** — ESLint + Prettier pre-configured and shared
- 🔧 **Shared Configs** — Centralized ESLint, TypeScript, and Tailwind presets
- 🩹 **Patches Support** — `pnpm` patches folder for dependency tweaks
- 🤖 **AI Agent Ready** — Includes `AGENTS.md` for AI-assisted development

---

## 🛠️ Tech Stack

| Category            | Technology                                    |
| :------------------ | :-------------------------------------------- |
| **Framework**       | [Next.js](https://nextjs.org/) (App Router)   |
| **Language**        | [TypeScript](https://www.typescriptlang.org/) |
| **Monorepo Tool**   | [Turborepo](https://turbo.build/)             |
| **Package Manager** | [pnpm Workspaces](https://pnpm.io/workspaces) |
| **UI Library**      | [shadcn/ui](https://ui.shadcn.com/)           |
| **Styling**         | [Tailwind CSS](https://tailwindcss.com/)      |
| **Icons**           | [Lucide Icons](https://lucide.dev/)           |
| **Linting**         | [ESLint](https://eslint.org/)                 |
| **Formatting**      | [Prettier](https://prettier.io/)              |
| **Runtime**         | Node.js `>= 18.x`                             |

---

## 📁 Project Structure

```text
dtm/
├── apps/                          # Application workspace
│   └── web/                       # Main Next.js application
│       ├── app/                   # App Router pages & layouts
│       ├── components/            # App-specific components
│       ├── public/                # Static assets
│       └── package.json
│
├── packages/                      # Shared workspace packages
│   ├── ui/                        # Shared shadcn/ui component library
│   │   └── src/
│   │       ├── components/        # Reusable UI components
│   │       ├── hooks/             # Shared React hooks
│   │       ├── lib/               # Utility functions (cn, etc.)
│   │       └── styles/            # Global styles & Tailwind config
│   │
│   ├── eslint-config/             # Shared ESLint configuration
│   └── typescript-config/         # Shared TypeScript configuration
│
├── patches/                       # pnpm patches for dependencies
├── .env.example                   # Example environment variables
├── .eslintrc.js                   # Root ESLint configuration
├── .gitignore                     # Git ignore rules
├── .npmrc                         # pnpm/npm configuration
├── .prettierignore                # Prettier ignore rules
├── .prettierrc                    # Prettier configuration
├── AGENTS.md                      # AI agent instructions
├── package.json                   # Root package manifest
├── pnpm-lock.yaml                 # Locked dependency tree
├── pnpm-workspace.yaml            # Workspace definition
├── tsconfig.json                  # Root TypeScript config
└── turbo.json                     # Turborepo pipeline config
```

> 💡 **Tip:** Update this tree whenever you add new apps or packages.

---

## 🚀 Getting Started

### Prerequisites

Ensure the following tools are installed on your machine:

- **Node.js** `>= 18.x` — [Download](https://nodejs.org/)
- **pnpm** `>= 9.x` — Install globally:
  ```bash
  npm install -g pnpm
  ```

Verify installation:

```bash
node -v
pnpm -v
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/heinricov/dtm.git
   cd dtm
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` and fill in the required values.

### Running the App

Start all apps in development mode:

```bash
pnpm dev
```

The web app will be available at [http://localhost:3000](http://localhost:3000) 🎉

To run a specific app:

```bash
pnpm --filter web dev
```

---

## 📜 Available Scripts

Run these commands **from the root** of the repository:

| Command            | Description                                       |
| :----------------- | :------------------------------------------------ |
| `pnpm dev`         | Start all apps in development mode                |
| `pnpm build`       | Build all apps and packages for production        |
| `pnpm lint`        | Lint all packages using ESLint                    |
| `pnpm format`      | Format all files using Prettier                   |
| `pnpm check-types` | Run TypeScript type checking across the workspace |

### Filtering by workspace

Turborepo + pnpm allow scoped commands:

```bash
pnpm --filter web dev          # run dev for the web app
pnpm --filter ui build         # build only the ui package
pnpm --filter "./apps/*" build # build all apps
```

---

## 🧩 Working with shadcn/ui

This template keeps all shadcn/ui components inside the shared `packages/ui` package so they can be reused across every app.

### Adding a Component

Run the following command **from the repo root**:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will:

1. Fetch the component definition
2. Place the file in `packages/ui/src/components`
3. Update any required dependencies

### Using a Component

Import components directly from the `@workspace/ui` package:

```tsx
import { Button } from "@workspace/ui/components/button";

export function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  );
}
```

> 💡 **Note:** The `-c apps/web` flag tells the shadcn CLI which app context to use (for Tailwind config resolution). Adjust it if you have multiple apps.

---

## 🔐 Environment Variables

Create your local `.env` file by copying the example:

```bash
cp .env.example .env
```

| Variable              | Description                                     | Required |
| :-------------------- | :---------------------------------------------- | :------: |
| `NEXT_PUBLIC_APP_URL` | Public base URL of the web app                  |    ✅    |
| `DATABASE_URL`        | Database connection string                      |    ⬜    |
| `NODE_ENV`            | Environment mode (`development` / `production`) |    ⬜    |

> ⚠️ **Never commit your `.env` file.** It is already ignored by `.gitignore`.
> Always update `.env.example` when you add new required variables.

---

## 🔄 Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feat/your-feature
   ```

2. **Make your changes** in the relevant app or package.

3. **Run checks before committing**

   ```bash
   pnpm lint && pnpm check-types
   ```

4. **Commit your changes** following [Conventional Commits](#-commit-convention):

   ```bash
   git commit -m "feat(web): add new dashboard page"
   ```

5. **Push and open a Pull Request**

   ```bash
   git push origin feat/your-feature
   ```

---

## 📝 Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>
```

| Type       | Description                                      |
| :--------- | :----------------------------------------------- |
| `feat`     | A new feature                                    |
| `fix`      | A bug fix                                        |
| `docs`     | Documentation changes                            |
| `style`    | Code style changes (formatting, no logic change) |
| `refactor` | Code refactoring without behavior change         |
| `perf`     | Performance improvements                         |
| `test`     | Adding or updating tests                         |
| `chore`    | Build process, tooling, or dependency changes    |

**Examples:**

```bash
git commit -m "feat(ui): add avatar component"
git commit -m "fix(web): resolve hydration mismatch on layout"
git commit -m "docs: update README with new scripts"
```

---

## 🐛 Troubleshooting

### `pnpm install` fails

- Make sure you're using **pnpm**, not npm or yarn.
- Delete `node_modules` and `pnpm-lock.yaml`, then reinstall:
  ```bash
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```

### Build errors in Turborepo

- Clear the Turborepo cache:
  ```bash
  rm -rf .turbo node_modules/.cache
  ```
- Then rebuild:
  ```bash
  pnpm build
  ```

### shadcn/ui component not found

- Ensure the component is added to `packages/ui/src/components`
- Verify your import path uses `@workspace/ui/components/...`
- Restart the dev server after adding new components

### TypeScript errors across packages

- Run `pnpm check-types` from the root
- Ensure the package is listed in `pnpm-workspace.yaml`

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the project
2. **Create** your feature branch
   ```bash
   git checkout -b feat/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "feat: add amazing feature"
   ```
4. **Push** to the branch
   ```bash
   git push origin feat/amazing-feature
   ```
5. **Open** a Pull Request

Please make sure to:

- Follow the commit convention
- Update documentation when needed
- Keep PRs focused and small
- Add tests if applicable

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) — The React framework for the web
- [Turborepo](https://turbo.build/) — High-performance monorepo build system
- [shadcn/ui](https://ui.shadcn.com/) — Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [pnpm](https://pnpm.io/) — Fast, disk-efficient package manager

---

<div align="center">

**Made with ❤️ by [heinricov](https://github.com/heinricov)**

⭐ If you find this template useful, please consider giving it a star!

</div>
