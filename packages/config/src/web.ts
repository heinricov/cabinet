import { env } from "./env"

export const webConfig = {
  port: env.WEB_PORT,
} as const
