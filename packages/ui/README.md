# 🎨 @workspace/ui

> Shared UI component library for the **DTM** monorepo — built on [Base UI](https://base-ui.com/), [shadcn/ui](https://ui.shadcn.com/), and [Tailwind CSS v4](https://tailwindcss.com/).

[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-4-000000?style=flat-square)](https://ui.shadcn.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

_A curated collection of reusable, accessible, and themeable UI components shared across every app in the DTM workspace._

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Package Exports](#-package-exports)
- [Installation](#-installation)
- [Usage](#-usage)
- [Component Catalog](#-component-catalog)
  - [Base Components](#-base-components)
  - [Form & Data Components](#-form--data-components)
  - [Layout Components](#-layout-components)
  - [Auth Components](#-auth-components)
  - [Profile Components](#-profile-components)
  - [CRUD Components](#-crud-components)
  - [Hooks](#-hooks)
  - [Utilities](#-utilities)
- [Adding New Components](#-adding-new-components)
- [Theming & Styling](#-theming--styling)
- [Scripts](#-scripts)
- [Conventions](#-conventions)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 🔎 Overview

`@workspace/ui` is the **shared design system** for the DTM monorepo. It provides:

- 🧱 A complete set of **shadcn/ui components** built on top of **Base UI** primitives
- 📋 Reusable **form & data components** (inputs, selects, data tables)
- 🖼️ **Layout components** (app shell, sidebar, header, navigation)
- 🔐 **Auth components** (login, forgot password, OTP, new password)
- 👤 **Profile components** (account, billing, general sections)
- 🪝 Shared **React hooks** and **utility functions**
- 🎨 Centralized **Tailwind CSS v4 theme** with CSS variables

Every app in the workspace imports from this package, ensuring a **single source of truth** for UI and a consistent look & feel across the product.

---

## ✨ Key Features

- ⚛️ **Built on Base UI** — Accessible, unstyled primitives (`@base-ui/react`)
- 🎨 **shadcn/ui style `base-mira`** — Modern, elegant component aesthetic
- 🌗 **Dark Mode Ready** — Powered by `next-themes` with CSS variables
- 📊 **Data Tables** — Built on `@tanstack/react-table` v9
- 📝 **Type-Safe Forms** — Validated with `zod` v4
- 🔔 **Toast Notifications** — Integrated with `sonner`
- 🔢 **OTP Input** — Dedicated `input-otp` integration
- 📱 **Responsive** — `use-mobile` hook for adaptive layouts
- 🧩 **Tree-Shakeable Exports** — Import only what you need
- 🔒 **Fully Typed** — Strict TypeScript across the board
- 🩹 **Custom Registry** — Extend with `@7ovr` (`https://7ovr.com/r/{name}.json`)

---

## 🛠️ Tech Stack

| Category               | Technology                                                                                      |
| :--------------------- | :---------------------------------------------------------------------------------------------- |
| **UI Primitives**      | [Base UI](https://base-ui.com/) (`@base-ui/react`)                                              |
| **Component System**   | [shadcn/ui](https://ui.shadcn.com/) v4 (`base-mira` style)                                      |
| **Styling**            | [Tailwind CSS v4](https://tailwindcss.com/) + `tw-animate-css`                                  |
| **Variants**           | [class-variance-authority](https://cva.style/)                                                  |
| **Class Merging**      | `cn` + `clsx` + `tailwind-merge`                                                                |
| **Data Tables**        | [TanStack Table v9](https://tanstack.com/table)                                                 |
| **Forms & Validation** | [Zod v4](https://zod.dev/)                                                                      |
| **Icons**              | [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) |
| **Toasts**             | [Sonner](https://sonner.emilkowal.ski/)                                                         |
| **Theming**            | [next-themes](https://github.com/pacocoursey/next-themes)                                       |
| **OTP Input**          | [input-otp](https://github.com/guilhermerodz/input-otp)                                         |
| **Framework**          | [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)                              |
| **Language**           | [TypeScript 5](https://www.typescriptlang.org/)                                                 |
| **Runtime**            | Node.js `>= 18.x`                                                                               |

---

## 📁 Project Structure

```text
packages/ui/
├── src/
│   ├── auth/                     # Authentication UI
│   │   ├── forgot-password.tsx
│   │   ├── login-form.tsx
│   │   ├── new-password.tsx
│   │   └── otp-code.tsx
│   │
│   ├── components/               # Base shadcn/ui components
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── combobox.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── field.tsx
│   │   ├── input.tsx
│   │   ├── input-group.tsx
│   │   ├── input-otp.tsx
│   │   ├── label.tsx
│   │   ├── scroll-area.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   └── tooltip.tsx
│   │
│   ├── crud/                     # CRUD helpers
│   │   └── data-table.tsx
│   │
│   ├── data/                     # Form & data components
│   │   ├── form-input.tsx
│   │   ├── form-layout.tsx
│   │   ├── form-select.tsx
│   │   └── form-textarea.tsx
│   │
│   ├── hooks/                    # Shared React hooks
│   │   └── use-mobile.ts
│   │
│   ├── layout/                   # App layout components
│   │   ├── app-header.tsx
│   │   ├── app-layout.tsx
│   │   ├── app-logo.tsx
│   │   ├── app-notifications.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── nav-collaps.tsx
│   │   ├── nav-menus.tsx
│   │   ├── nav-user.tsx
│   │   └── page-header.tsx
│   │
│   ├── lib/                      # Utilities
│   │   └── utils.ts
│   │
│   ├── profiles/                 # Profile page sections
│   │   ├── account-section.tsx
│   │   ├── billing-section.tsx
│   │   ├── general-section.tsx
│   │   ├── profile-page.tsx
│   │   └── profile-section.tsx
│   │
│   └── styles/
│       └── globals.css           # Global theme & Tailwind entry
│
├── components.json               # shadcn/ui CLI configuration
├── eslint.config.js
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── tsconfig.lint.json
└── README.md
```

---

## 📦 Package Exports

The package exposes **8 export paths** via `package.json`:

| Export Path                  | Maps To                  | Purpose                |
| :--------------------------- | :----------------------- | :--------------------- |
| `@workspace/ui/components/*` | `src/components/*.tsx`   | Base UI components     |
| `@workspace/ui/data/*`       | `src/data/*.tsx`         | Form & data components |
| `@workspace/ui/layout/*`     | `src/layout/*.tsx`       | Layout components      |
| `@workspace/ui/auth/*`       | `src/auth/*.tsx`         | Auth screens           |
| `@workspace/ui/profiles/*`   | `src/profiles/*.tsx`     | Profile sections       |
| `@workspace/ui/hooks/*`      | `src/hooks/*.ts`         | React hooks            |
| `@workspace/ui/lib/*`        | `src/lib/*.ts`           | Utility functions      |
| `@workspace/ui/globals.css`  | `src/styles/globals.css` | Global theme CSS       |

---

## 📥 Installation

This package is part of the **pnpm workspace** — it is **not published to npm**. It is automatically linked when you run from the monorepo root:

```bash
pnpm install
```

To use it inside another workspace app, add it to that app's `package.json`:

```json
{
  "dependencies": {
    "@workspace/ui": "workspace:*"
  }
}
```

---

## 🚀 Usage

### Import a base component

```tsx
import { Button } from "@workspace/ui/components/button";
import { Card } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";

export function MyCard() {
  return (
    <Card>
      <Input placeholder="Your name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Import a form component

```tsx
import { FormInput } from "@workspace/ui/data/form-input";
import { FormSelect } from "@workspace/ui/data/form-select";
import { FormTextarea } from "@workspace/ui/data/form-textarea";

export function MyForm() {
  return (
    <form>
      <FormInput name="email" label="Email" />
      <FormSelect name="role" label="Role" options={["Admin", "User"]} />
      <FormTextarea name="bio" label="Bio" />
    </form>
  );
}
```

### Import a layout

```tsx
import { AppLayout } from "@workspace/ui/layout/app-layout";
import { PageHeader } from "@workspace/ui/layout/page-header";

export default function DashboardPage() {
  return (
    <AppLayout>
      <PageHeader title="Dashboard" />
      {/* page content */}
    </AppLayout>
  );
}
```

### Import auth components

```tsx
import { LoginForm } from "@workspace/ui/auth/login-form";
import { OtpCode } from "@workspace/ui/auth/otp-code";

export function LoginPage() {
  return <LoginForm />;
}
```

### Import a hook

```tsx
import { useIsMobile } from "@workspace/ui/hooks/use-mobile";

export function ResponsiveNav() {
  const isMobile = useIsMobile();
  return <nav>{isMobile ? "📱 Mobile" : "🖥️ Desktop"}</nav>;
}
```

### Import utilities

```tsx
import { cn } from "@workspace/ui/lib/utils";

<div className={cn("rounded-lg p-4", isActive && "bg-primary text-white")} />
```

### Import global styles

In your app's root layout:

```tsx
import "@workspace/ui/globals.css";
```

---

## 🧱 Component Catalog

### Base Components

Located in `src/components/`.

| Component        | Import                                   |
| :--------------- | :--------------------------------------- |
| Avatar           | `@workspace/ui/components/avatar`        |
| Badge            | `@workspace/ui/components/badge`         |
| Breadcrumb       | `@workspace/ui/components/breadcrumb`    |
| Button           | `@workspace/ui/components/button`        |
| Card             | `@workspace/ui/components/card`          |
| Checkbox         | `@workspace/ui/components/checkbox`      |
| Collapsible      | `@workspace/ui/components/collapsible`   |
| Combobox         | `@workspace/ui/components/combobox`      |
| Dropdown Menu    | `@workspace/ui/components/dropdown-menu` |
| Field            | `@workspace/ui/components/field`         |
| Input            | `@workspace/ui/components/input`         |
| Input Group      | `@workspace/ui/components/input-group`   |
| Input OTP        | `@workspace/ui/components/input-otp`     |
| Label            | `@workspace/ui/components/label`         |
| Scroll Area      | `@workspace/ui/components/scroll-area`   |
| Separator        | `@workspace/ui/components/separator`     |
| Sheet            | `@workspace/ui/components/sheet`         |
| Sidebar          | `@workspace/ui/components/sidebar`       |
| Skeleton         | `@workspace/ui/components/skeleton`      |
| Sonner (Toaster) | `@workspace/ui/components/sonner`        |
| Switch           | `@workspace/ui/components/switch`        |
| Table            | `@workspace/ui/components/table`         |
| Tabs             | `@workspace/ui/components/tabs`          |
| Textarea         | `@workspace/ui/components/textarea`      |
| Tooltip          | `@workspace/ui/components/tooltip`       |

### Form & Data Components

Located in `src/data/`. High-level form abstractions with labels, validation & layout.

| Component     | Import                             |
| :------------ | :--------------------------------- |
| Form Input    | `@workspace/ui/data/form-input`    |
| Form Layout   | `@workspace/ui/data/form-layout`   |
| Form Select   | `@workspace/ui/data/form-select`   |
| Form Textarea | `@workspace/ui/data/form-textarea` |

### Layout Components

Located in `src/layout/`. Ready-made app shell components.

| Component         | Import                                   |
| :---------------- | :--------------------------------------- |
| App Header        | `@workspace/ui/layout/app-header`        |
| App Layout        | `@workspace/ui/layout/app-layout`        |
| App Logo          | `@workspace/ui/layout/app-logo`          |
| App Notifications | `@workspace/ui/layout/app-notifications` |
| App Sidebar       | `@workspace/ui/layout/app-sidebar`       |
| Nav Collapsible   | `@workspace/ui/layout/nav-collaps`       |
| Nav Menus         | `@workspace/ui/layout/nav-menus`         |
| Nav User          | `@workspace/ui/layout/nav-user`          |
| Page Header       | `@workspace/ui/layout/page-header`       |

### Auth Components

Located in `src/auth/`. Full authentication flows.

| Component       | Import                               |
| :-------------- | :----------------------------------- |
| Forgot Password | `@workspace/ui/auth/forgot-password` |
| Login Form      | `@workspace/ui/auth/login-form`      |
| New Password    | `@workspace/ui/auth/new-password`    |
| OTP Code        | `@workspace/ui/auth/otp-code`        |

### Profile Components

Located in `src/profiles/`. User profile sections.

| Component       | Import                                   |
| :-------------- | :--------------------------------------- |
| Account Section | `@workspace/ui/profiles/account-section` |
| Billing Section | `@workspace/ui/profiles/billing-section` |
| General Section | `@workspace/ui/profiles/general-section` |
| Profile Page    | `@workspace/ui/profiles/profile-page`    |
| Profile Section | `@workspace/ui/profiles/profile-section` |

### CRUD Components

Located in `src/crud/`.

| Component  | Import                          |
| :--------- | :------------------------------ |
| Data Table | `@workspace/ui/crud/data-table` |

### Hooks

Located in `src/hooks/`.

| Hook          | Import                           |
| :------------ | :------------------------------- |
| `useIsMobile` | `@workspace/ui/hooks/use-mobile` |

### Utilities

Located in `src/lib/`.

| Utility | Import                    |
| :------ | :------------------------ |
| `cn`    | `@workspace/ui/lib/utils` |

---

## ➕ Adding New Components

This package uses the **shadcn/ui CLI** with a custom `base-mira` style and a **`@7ovr` registry**.

### From the monorepo root

```bash
pnpm dlx shadcn@latest add <component-name> -c apps/web
```

Example:

```bash
pnpm dlx shadcn@latest add dialog -c apps/web
```

### From the custom registry

```bash
pnpm dlx shadcn@latest add @7ovr/<component-name> -c apps/web
```

The CLI will:

1. Resolve the component from the registry
2. Place it in `src/components/`
3. Install required dependencies

> 💡 **Tip:** After adding, update the [Component Catalog](#-component-catalog) section above.

---

## 🎨 Theming & Styling

Theming is centralized in `src/styles/globals.css` using **Tailwind CSS v4** with CSS variables.

### Import in your app

```tsx
// apps/web/app/layout.tsx
import "@workspace/ui/globals.css";
```

### shadcn/ui configuration (`components.json`)

```json
{
  "style": "base-mira",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/dummy",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  },
  "registries": {
    "@7ovr": "https://7ovr.com/r/{name}.json"
  }
}
```

### Dark mode

Powered by `next-themes`. Wrap your app with the `ThemeProvider` from `@workspace/ui/components/sonner` (or your own provider) and use the theme CSS variables.

### Class merging

Always use `cn()` for conditional classes:

```tsx
import { cn } from "@workspace/ui/lib/utils";

<Button className={cn("w-full", isLoading && "opacity-50")} />
```

---

## 📜 Scripts

Run from `packages/ui`:

| Command          | Description                                   |
| :--------------- | :-------------------------------------------- |
| `pnpm lint`      | Lint the package with ESLint                  |
| `pnpm format`    | Format `.ts` / `.tsx` files with Prettier     |
| `pnpm typecheck` | Run TypeScript type checking (`tsc --noEmit`) |

Or from the monorepo root with a filter:

```bash
pnpm --filter @workspace/ui lint
pnpm --filter @workspace/ui typecheck
pnpm --filter @workspace/ui format
```

---

## 📐 Conventions

### File naming

- **Components**: `kebab-case.tsx` (e.g., `dropdown-menu.tsx`)
- **Hooks**: `use-*.ts` (e.g., `use-mobile.ts`)
- **Utils**: `kebab-case.ts` (e.g., `utils.ts`)

### Component authoring

- ✅ Use **named exports** with `PascalCase` (`export function Button()`)
- ✅ Extend native element props + add variants via `cva`
- ✅ Always merge classes with `cn()`
- ✅ Preserve `aria-*` props from Base UI primitives
- ✅ Keep components **presentational** — no data fetching inside
- ✅ Co-locate types with the component

### Adding a new category

If you introduce a new folder (e.g., `src/dashboard/`), remember to:

1. Add an `exports` entry in `package.json`
2. Document it in [Package Exports](#-package-exports) & [Component Catalog](#-component-catalog)

---

## 🐛 Troubleshooting

### `Cannot find module '@workspace/ui/...'`

- Ensure `@workspace/ui` is listed in the consuming app's `package.json` as `"workspace:*"`
- Run `pnpm install` from the root
- Restart your dev server

### Styles not applied

- Verify `@workspace/ui/globals.css` is imported in your app's root layout
- Ensure `postcss.config.mjs` is correctly referenced by the app

### shadcn CLI can't find the component

- Make sure the component exists in `src/components/`
- Check the `aliases.ui` value in `components.json`
- Clear the shadcn cache and re-run the add command

### Type errors across packages

- Run `pnpm --filter @workspace/ui typecheck`
- Ensure `@workspace/typescript-config` is up to date

---

## 📄 License

MIT © [heinricov](https://github.com/heinricov)

---

<div align="center">

**Part of the [DTM](../../) monorepo**

Made with ❤️ by [heinricov](https://github.com/heinricov)

</div>
