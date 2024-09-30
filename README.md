# ✨ Img to Text ✨

Este projeto surgiu de uma necessidade muito especial: minha mãe, que é professora, estava desenvolvendo um projeto incrível para incentivar a escrita e a criatividade dos alunos. Cada um deles escreveu seu próprio livro à mão, entregando suas histórias em folhas de papel.

Ela precisava digitar todas essas histórias para enviar ao sistema, o que seria uma tarefa imensa — cerca de 20 a 30 livros, que levariam de 3 a 4 dias para serem digitados manualmente! 📝

Foi aí que eu pensei: **"Por que não deixar essa tarefa para a inteligência artificial?"** Em apenas **2 horas**, desenvolvi este site para transcrever automaticamente o texto das fotos usando a **API Gemini da Google**.

O que parecia um trabalho de dias foi concluído em apenas 1 dia com a ajuda desse sistema! 🚀

---

## 🔧 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **API Gemini (Google)**

---

## 💡 Funcionalidades

- Upload de imagens 📸
- Transcrição automática do texto presente nas imagens 📝
- Layout simples e funcional 💻
- **Botão** para copiar o texto transcrito diretamente para a área de transferência 📋

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Ter o **Node.js** instalado.
- Obter uma chave de API da **Gemini API (Google)**. Você pode gerar a sua seguindo este tutorial: [Google Gemini API - Tutorial](https://ai.google.dev/gemini-api/docs/get-started/tutorial?hl=pt-br&lang=node).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Kaduh15/img-to-text.git
   cd img-to-text
   ```

2. **Instale as dependências:**

   Eu usei **pnpm**, mas você também pode utilizar **npm** ou **yarn**:

   ```bash
   pnpm install
   ```

   ou

   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`:**

   Dentro da pasta do projeto, crie um arquivo `.env` e adicione a sua chave da API Gemini:

   ```bash
   GEMINI_API_KEY=sua_chave_da_api_gemini
   ```

4. **Rodar o projeto em modo desenvolvimento:**

   Para rodar o projeto localmente, use o comando:

   ```bash
   pnpm dev
   ```

   ou

   ```bash
   npm run dev
   ```

5. **Acesse o site:**

   Abra o navegador e acesse:

   ```bash
   http://localhost:3000
   ```

6. **Fazer o Build:**

   Caso queira fazer o build para produção, rode:

   ```bash
   pnpm build
   ```

   ou o equivalente com **npm** ou **yarn**.

---

## 🎉 Conclusão

Esse projeto foi uma solução rápida e prática que me economizou **horas** de trabalho manual. Ele facilitou a tarefa de transcrição para minha mãe e acredito que pode ajudar muitas outras pessoas com uma necessidade semelhante.

Se você precisa de algo rápido e funcional para transcrever imagens em texto, este projeto pode ser exatamente o que você está procurando! 😊

---

### 🤝 Contribuições

Se você quiser colaborar com melhorias ou sugestões, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**. Toda ajuda é bem-vinda!
