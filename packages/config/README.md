# ⚙️ @workspace/config

> Centralized, type-safe **environment & runtime configuration** for the **DTM** monorepo — validated with [Zod](https://zod.dev/) and loaded from a single root `.env` file.

[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zod](https://img.shields.io/badge/Zod-4-3E67B1?style=flat-square&logo=zod&logoColor=white)](https://zod.dev/)
[![tsup](https://img.shields.io/badge/tsup-8-FF6B6B?style=flat-square)](https://tsup.egoist.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](../../LICENSE)

_Single source of truth for environment variables and runtime ports across every app in the workspace._

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Installation](#-installation)
- [Usage](#-usage)
- [Environment Variables](#-environment-variables)
- [Exports Reference](#-exports-reference)
- [Adding a New Variable](#-adding-a-new-variable)
- [Adding a New App Config](#-adding-a-new-app-config)
- [Build](#-build)
- [Scripts](#-scripts)
- [Conventions](#-conventions)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## 🔎 Overview

`@workspace/config` is the **single source of truth** for environment variables and runtime configuration in the DTM monorepo.

Instead of scattering `process.env.X` calls across apps (and hoping the variable exists), this package:

1. **Loads** the root `.env` file via `dotenv`
2. **Validates** every variable with a **Zod schema**
3. **Exposes** typed, frozen config objects (`env`, `backendConfig`, `webConfig`)

If a required variable is missing or invalid, the app **fails fast at startup** with a clear Zod error — instead of crashing mysteriously later.

---

## ✨ Key Features

- 🔒 **Type-Safe** — All env vars are validated and typed via Zod
- 🎯 **Fail-Fast** — Invalid config throws immediately at import time
- 🧩 **Centralized** — One `.env` file at the monorepo root, shared by every app
- 📦 **Built with tsup** — Ships ESM + `.d.ts` types
- 🔢 **Coercion Built-in** — String env vars are auto-converted (e.g., `z.coerce.number()`)
- 🧊 **Immutable** — Config objects are declared `as const`
- 🪶 **Zero Runtime Bloat** — Only `dotenv` + `zod` as dependencies
- 📂 **App-Scoped Configs** — `backendConfig` & `webConfig` for per-app settings

---

## 🛠️ Tech Stack

| Category            | Technology                                       |
| :------------------ | :----------------------------------------------- |
| **Language**        | [TypeScript 5](https://www.typescriptlang.org/)  |
| **Validation**      | [Zod v4](https://zod.dev/)                       |
| **Env Loading**     | [dotenv v17](https://github.com/motdotla/dotenv) |
| **Bundler**         | [tsup v8](https://tsup.egoist.dev/) (ESM + DTS)  |
| **Package Manager** | [pnpm workspace](https://pnpm.io/workspaces)     |
| **Runtime**         | Node.js `>= 18.x` (ESM only)                     |

---

## 📁 Project Structure

```text
packages/config/
├── src/
│   ├── backend.ts       # Backend runtime config (port, etc.)
│   ├── env.ts           # dotenv + Zod schema + parsed env
│   ├── index.ts         # Public entry point (re-exports)
│   └── web.ts           # Web app runtime config (port, etc.)
│
├── .gitignore           # Ignores the dist/ folder
├── package.json         # Package manifest & exports
├── tsconfig.json        # Extends root tsconfig
└── README.md
```

The compiled output goes to `dist/` (ignored by git, produced by `pnpm build`).

---

## 🔄 How It Works

```text
┌──────────────────────────────────────┐
│  .env  (monorepo root)               │
│  ────────────────────────────────    │
│  BACKEND_PORT=4000                   │
│  WEB_PORT=3000                       │
└────────────────┬─────────────────────┘
                 │  dotenv.config()
                 ▼
┌──────────────────────────────────────┐
│  src/env.ts                          │
│  ────────────────────────────────    │
│  const envSchema = z.object({ ... }) │
│  export const env =                  │
│    envSchema.parse(process.env)      │
└────────────────┬─────────────────────┘
                 │  typed & validated
                 ▼
┌──────────────────────────────────────┐
│  src/backend.ts   src/web.ts         │
│  ────────────────────────────────    │
│  backendConfig    webConfig          │
│    .port            .port            │
└────────────────┬─────────────────────┘
                 │  re-exported
                 ▼
┌──────────────────────────────────────┐
│  src/index.ts  →  @workspace/config  │
└──────────────────────────────────────┘
```

**Key behavior:** `env.ts` resolves the root `.env` path **relative to its own compiled location** using `import.meta.url`, so it works regardless of the caller's CWD.

---

## 📥 Installation

This package is part of the pnpm workspace — **not published to npm**. It is automatically linked when you run from the monorepo root:

```bash
pnpm install
```

Add it to a consuming app/package:

```json
{
  "dependencies": {
    "@workspace/config": "workspace:*"
  }
}
```

> 💡 **Reminder:** Before importing, ensure a `.env` file exists at the monorepo root. Copy it from `.env.example`:
>
> ```bash
> cp .env.example .env
> ```

---

## 🚀 Usage

### Import the validated env

```ts
import { env } from "@workspace/config";

console.log(env.BACKEND_PORT); // number, type-safe ✅
console.log(env.WEB_PORT);     // number, type-safe ✅
```

### Import app-scoped configs

```ts
import { backendConfig, webConfig } from "@workspace/config";

const server = createServer({
  port: backendConfig.port,
});

const web = createWebApp({
  port: webConfig.port,
});
```

### Use with Next.js (web app)

```ts
// apps/web/next.config.ts
import { webConfig } from "@workspace/config";

export default {
  // ...
  env: {
    WEB_PORT: String(webConfig.port),
  },
};
```

### Use with a backend server

```ts
// apps/api/src/index.ts
import { backendConfig } from "@workspace/config";

app.listen(backendConfig.port, () => {
  console.log(`🚀 Backend running on :${backendConfig.port}`);
});
```

---

## 🔐 Environment Variables

All variables are read from a **single `.env` file at the monorepo root** (not per-app).

| Variable       | Type                    | Required | Description                     |
| :------------- | :---------------------- | :------: | :------------------------------ |
| `BACKEND_PORT` | `number` (positive int) |    ✅    | Port used by the backend server |
| `WEB_PORT`     | `number` (positive int) |    ✅    | Port used by the web app        |

> ⚠️ **Both variables are required.** The app will **throw at startup** if either is missing or not a positive integer.

### Example `.env`

```dotenv
BACKEND_PORT=4000
WEB_PORT=3000
```

### Validation rules

```ts
const envSchema = z.object({
  BACKEND_PORT: z.coerce.number().int().positive(),
  WEB_PORT: z.coerce.number().int().positive(),
});
```

- `z.coerce.number()` → converts the string from `process.env` into a number
- `.int()` → must be an integer
- `.positive()` → must be `> 0`

---

## 📦 Exports Reference

The package has a **single public entry point**:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "default": "./dist/index.js"
    }
  }
}
```

Everything is re-exported from `src/index.ts`:

| Export          | Type               | Source           | Description                          |
| :-------------- | :----------------- | :--------------- | :----------------------------------- |
| `env`           | `object`           | `src/env.ts`     | Fully parsed & validated environment |
| `backendConfig` | `{ port: number }` | `src/backend.ts` | Backend runtime config               |
| `webConfig`     | `{ port: number }` | `src/web.ts`     | Web runtime config                   |

```ts
// src/index.ts
export { env } from "./env";
export { backendConfig } from "./backend";
export { webConfig } from "./web";
```

---

## ➕ Adding a New Variable

1. **Add it to the root `.env` and `.env.example`:**

   ```dotenv
   DATABASE_URL=postgres://localhost:5432/dtm
   ```

2. **Add it to the Zod schema in `src/env.ts`:**

   ```ts
   const envSchema = z.object({
     BACKEND_PORT: z.coerce.number().int().positive(),
     WEB_PORT: z.coerce.number().int().positive(),
     DATABASE_URL: z.string().url(), // 👈 new
   });
   ```

3. **(Optional) Expose it in a config object** (`backend.ts` / `web.ts`) if it belongs to a specific app.

4. **Rebuild the package:**

   ```bash
   pnpm --filter @workspace/config build
   ```

5. **Update this README's [Environment Variables](#-environment-variables) table.**

---

## ➕ Adding a New App Config

Say you add a new app called `worker`. Follow this pattern:

1. **Create `src/worker.ts`:**

   ```ts
   import { env } from "./env";

   export const workerConfig = {
     port: env.WORKER_PORT,
     concurrency: env.WORKER_CONCURRENCY,
   } as const;
   ```

2. **Add the new variables to the schema in `src/env.ts`.**

3. **Re-export from `src/index.ts`:**

   ```ts
   export { workerConfig } from "./worker";
   ```

4. **Rebuild:**

   ```bash
   pnpm --filter @workspace/config build
   ```

---

## 🏗️ Build

This package is **built with [tsup](https://tsup.egoist.dev/)** to produce ESM output and type declarations:

```bash
pnpm --filter @workspace/config build
```

Equivalent to:

```bash
tsup src/index.ts --format esm --dts --clean
```

Output:

```text
dist/
├── index.js      # ESM bundle
└── index.d.ts    # Type declarations
```

> 💡 **Note:** Because the package uses `tsup` with `--dts`, source maps are not generated by default. Add `--sourcemap` if you need them.

---

## 📜 Scripts

Run from `packages/config`:

| Command          | Description                                    |
| :--------------- | :--------------------------------------------- |
| `pnpm build`     | Build ESM bundle + type declarations with tsup |
| `pnpm lint`      | Lint the package with ESLint                   |
| `pnpm typecheck` | Run TypeScript type checking (`tsc --noEmit`)  |

Or from the root with a filter:

```bash
pnpm --filter @workspace/config build
pnpm --filter @workspace/config lint
pnpm --filter @workspace/config typecheck
```

---

## 📐 Conventions

- ✅ **All env vars must be validated** — never read `process.env.X` directly in apps
- ✅ **One `.env` file** — located at the monorepo root, shared by all workspaces
- ✅ **Use `z.coerce.*`** for numbers, booleans, etc. (env values are always strings)
- ✅ **Name variables in `SCREAMING_SNAKE_CASE`**
- ✅ **Group config objects by app** (`backendConfig`, `webConfig`, ...)
- ✅ **Always `as const`** for runtime config objects
- ✅ **Rebuild after schema changes** — consumers import from `dist/`

---

## 🐛 Troubleshooting

### `ZodError: Invalid input` at startup

One or more required variables are missing or invalid in your `.env`.

- Ensure `.env` exists at the **monorepo root**
- Check that `BACKEND_PORT` and `WEB_PORT` are set to **positive integers**
- Compare your file with `.env.example`

### `Cannot find module '@workspace/config'`

- Ensure `@workspace/config` is in the consuming package's `package.json` as `"workspace:*"`
- Run `pnpm install` from the root
- Make sure the package is **built**: `pnpm --filter @workspace/config build`

### Env not loading in production

`dotenv.config()` looks for the root `.env` path relative to the **compiled** file (`dist/env.js` → `../../../.env`). In production:

- Either **bundle** the env vars via your platform (Docker, Vercel, etc.)
- Or ensure the root `.env` is present at the expected relative location

### Type errors after adding a variable

- Rebuild the package: `pnpm --filter @workspace/config build`
- Restart your dev server / TS server

---

## 📄 License

MIT © [heinricov](https://github.com/heinricov)

---

**Part of the [DTM](../../) monorepo**

Made with ❤️ by [heinricov](https://github.com/heinricov)
