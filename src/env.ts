import z from 'zod'

import 'dotenv/config'

const envSchema = z.object({
  GEMINI_API_KEY: z.string(),
  PORT: z.coerce.number().default(3000),
})

export type Env = z.infer<typeof envSchema>

const { success, error, data } = envSchema.safeParse(process.env)

if (!success && !data) {
  for (const issue of error.issues) {
    console.error(`❌ ${issue.path[0]}: ${issue.message}`)
  }
  process.exit(1)
}

export const env = data
