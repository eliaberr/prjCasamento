# 💍 prjCasamento — Site de Casamento

Site de casamento desenvolvido para apresentar a história do casal, informações do evento e facilitar a confirmação de presença e a escolha de presentes.

> **Status:** em desenvolvimento/uso pessoal

## ✨ Principais funcionalidades

- **Landing page** com a história do casal e highlights do evento
- **Localização** com links para Google Maps e Waze
- **Confirmação de presença (RSVP)** via WhatsApp com mensagem pre-preenchida (nome, acompanhantes, etc.)
- **Lista de presentes** com três opções:
  - Entrega no dia do evento
  - **Pix** (QR Code, chave e valor gerados automaticamente)
  - **Loja parceira** (link direto)
- **Foco em UX**: navegação simples, texto objetivo e feedbacks visuais

## 🧰 Stack & bibliotecas

- **Frontend:** JavaScript + (React ou JS vanilla — ajustar conforme o projeto)
- **Estilos:** CSS (pode incluir Tailwind CSS, caso esteja instalado)
- **APIs/Integrações:** Links profundos para WhatsApp, Google Maps e Waze; geração de QR Code para Pix
- **Pastas presentes no repo:** `public/` e `src/` :contentReference[oaicite:1]{index=1}

> **Dica:** se o projeto for React, adicione aqui: `React`, `React Router`, `Vite` ou `Create React App`, etc.  
> Se usar Tailwind, inclua a seção de configuração.

## 🎨 Identidade visual

Paleta de cores (já usada no projeto):
- Creme: `#F5E8D0`
- Dourado: `#D4A373`
- Verde Musgo: `#6B8E23`
- Marrom Terra: `#8B4513`
- Branco: `#FFFFFF`

## ⚙️ Requisitos

- **Node.js** 18+ (recomendado)
- **npm** ou **pnpm** ou **yarn**

## 🚀 Como rodar localmente

> Os nomes dos scripts podem variar. Verifique em `package.json` e ajuste estes comandos se necessário.

```bash
# 1) clonar
git clone https://github.com/eliaberr/prjCasamento.git
cd prjCasamento

# 2) instalar deps
npm install
# ou: pnpm install / yarn

# 3) rodar em desenvolvimento
npm run dev
# ou: npm start (dependendo do setup)

# 4) build de produção
npm run build

# 5) (opcional) servir build
npm run preview
