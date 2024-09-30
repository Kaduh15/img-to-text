import { GoogleGenerativeAI } from '@google/generative-ai'

import { env } from '../env'

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY)

export const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
})

export async function analyzeImage(image: string, context?: string) {
  try {
    const prompt = context || `Analise o seguinte imagem e me diga o que está escrito nela.
    Ignore qualquer imagem ou figura que não seja uma palavra.

    quero que me retorne apenas o texto exatamente como está escrito escrito na imagem!
    `
    console.log("🚀 ~ analyzeImage ~ prompt:", prompt)
    const regex = /^data:(.*?);base64/
    const mimeType = image.match(regex)?.toString().split(',').at(-1)

    if (!mimeType) {
      throw new Error('Could not find mime type')
    }

    const data = image.replace(/^data:image\/[^;]+;base64,/, '')

    const { response } = await model.generateContent([
      prompt,
      {
        inlineData: {
          data,
          mimeType,
        },
      },
    ])

    return response.text()
  } catch (error) {
    console.error('🚀 ~ error:', error)
    throw error
  }
}
