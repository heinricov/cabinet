import path from "node:path"
import dotenv from "dotenv"
import { z } from "zod"

const envPath = path.resolve(process.cwd(), ".env")

dotenv.config({
  path: envPath,
})

const envSchema = z.object({
  BACKEND_PORT: z.coerce.number().int().positive(),
  WEB_PORT: z.coerce.number().int().positive(),
})

export const env = envSchema.parse(process.env)
