import { env } from "./env"

export const backendConfig = {
  port: env.BACKEND_PORT,
} as const
