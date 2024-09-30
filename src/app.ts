import express from 'express'
import { analyzeImage } from './lib/gemini'

import 'express-async-errors'

const app = express()

app.use(
  express.json({
    limit: '100mb',
  })
)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/api/transcription', async (req, res) => {
  const data = req.body
  if (!data) {
    res.status(400).json({ error: 'No data provided' })
    return
  }

  const context: string[] = []

  for (let i = 0; i < data.images.length; i++) {
    const image = data.images[i]
    const result = await analyzeImage(image, data.context)
    await new Promise(resolve => setTimeout(resolve, 2000))
    context.push(result)
  }

  res.status(200).json({ success: true, data: context })
})

app.get('*', (req, res) => {
  res.redirect('/')
})

export { app }
