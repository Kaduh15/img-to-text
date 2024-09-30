# Img to Text

Este projeto foi criado em um momento em que minha mãe, que é professora, estava trabalhando em um projeto incrível para incentivar a escrita e a criatividade dos alunos dela. Ela ajudou cada aluno a escrever o próprio livro à mão, e no final, todos eles entregaram suas histórias em folhas de papel. 

Minha mãe precisava então digitar cada um desses livros para enviar ao sistema, o que seria um trabalho imenso, já que seriam cerca de 20 a 30 livros, e ela levaria de 3 a 4 dias digitando manualmente.

Foi nesse momento que eu pensei: "Por que não usar uma inteligência artificial para transcrever o que está escrito nas folhas?" Assim, decidi assumir essa tarefa, mas de uma forma mais eficiente. Em cerca de 2 horas, desenvolvi este site que transcreve automaticamente o texto das fotos usando a API Gemini da Google.

O que teria sido um trabalho de dias, foi feito em apenas 1 dia com a ajuda desse sistema!

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **API Gemini (Google)**

## Funcionalidades

- Upload de imagens para o site.
- Transcrição automática do texto presente nas imagens.
- Simplicidade no uso, com um layout limpo.
- Botão para copiar o texto transcrito diretamente para a área de transferência.

## Como Rodar o Projeto

### Pré-requisitos

Você precisará ter o **Node.js** instalado e uma chave de API da **Gemini API (Google)**. Para gerar essa chave, siga este tutorial oficial: [Google Gemini API - Tutorial](https://ai.google.dev/gemini-api/docs/get-started/tutorial?hl=pt-br&lang=node).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone <URL-do-repositório>
   cd <nome-do-repositório>
   ```

2. **Instale as dependências:**

   Eu usei **pnpm**, mas você pode usar **npm** ou **yarn** sem problemas.

   ```bash
   pnpm install
   ```

   ou

   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`:**

   Dentro da pasta do projeto, crie um arquivo `.env` com a sua chave de API da Google Gemini:

   ```
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

   Agora, basta abrir o navegador e acessar o seguinte endereço:

   ```
   http://localhost:3000
   ```

6. **Fazendo o Build:**

   Se quiser fazer o build para produção, rode:

   ```bash
   pnpm build
   ```

   ou o comando correspondente ao gerenciador de pacotes que estiver usando.

---

Esse projeto foi uma solução rápida que me poupou horas de trabalho e tornou a tarefa de transcrição muito mais fácil e eficiente para minha mãe. Agora, espero que ele possa ajudar outras pessoas também!

