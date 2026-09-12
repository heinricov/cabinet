import path from "node:path"
import { fileURLToPath } from "node:url"
import dotenv from "dotenv"
import { z } from "zod"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.resolve(__dirname, "../../../.env")

dotenv.config({
  path: envPath,
})

const envSchema = z.object({
  BACKEND_PORT: z.coerce.number().int().positive(),
  WEB_PORT: z.coerce.number().int().positive(),
})

export const env = envSchema.parse(process.env)
