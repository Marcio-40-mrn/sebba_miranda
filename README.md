# Sebba & Miranda — Site institucional

Site institucional moderno (React + TypeScript + Vite) para o escritório de
recuperação de crédito e consultoria jurídica **Sebba & Miranda**. Reconstrução
do site original (ASP.NET) com mesma estrutura de conteúdo, estética moderna e
melhorias (formulário de contato e botão flutuante de WhatsApp).

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (incluído no Node)

Para conferir as versões instaladas:

```bash
node -v
npm -v
```

## Como rodar

```bash
npm install      # instala dependências (uma vez)
npm run dev      # ambiente de desenvolvimento → http://localhost:5173
npm run build    # gera a versão de produção em /dist
npm run preview  # pré-visualiza o build de produção
```

## Estrutura de pastas

```
src/
├── main.tsx              # ponto de entrada (React + Router)
├── App.tsx               # rotas + layout global
├── data/                 # CONTEÚDO EDITÁVEL (textos e dados da empresa)
│   ├── company.ts        # telefones, e-mail, WhatsApp, endereço
│   ├── services.ts       # serviços (B2B, B2C, consultoria, representação)
│   ├── content.ts        # textos institucionais, diferenciais, passos
│   └── navigation.ts     # itens do menu
├── pages/                # uma página por rota
│   ├── Home.tsx
│   ├── About.tsx         # /a-empresa
│   ├── Services.tsx      # /servicos
│   ├── HowToHire.tsx     # /como-contratar
│   └── Contact.tsx       # /contato
├── sections/             # seções da Home (Hero, Modelos, etc.)
├── components/
│   ├── layout/           # Header e Footer
│   ├── ui/               # Botão, ícones, cabeçalho de página
│   ├── ContactForm.tsx
│   ├── WhatsappButton.tsx
│   └── CookieBanner.tsx
├── hooks/                # useReveal (animação ao rolar)
└── styles/               # variables.css (cores/tokens) + global.css
```

## Onde editar o quê

- **Telefones, e-mail, WhatsApp, endereço/mapa:** `src/data/company.ts`
- **Serviços:** `src/data/services.ts`
- **Textos institucionais e passos de contratação:** `src/data/content.ts`
- **Cores e tipografia:** `src/styles/variables.css`

## Pendências / a confirmar

- **Número de WhatsApp:** definido em `company.ts` → campo `whatsapp`.
  Confirmar se é o número correto de atendimento.
- **Endereço e mapa:** o embed do Google Maps está com um local aproximado de SP.
  Atualizar `address.mapsEmbed` e `address.full` com o endereço real.
- **Formulário de contato:** hoje funciona sem servidor (abre o e-mail do
  cliente ou o WhatsApp com a mensagem pronta). Para receber as mensagens
  automaticamente, dá para integrar um serviço de e-mail (ex.: Formspree,
  EmailJS) ou um endpoint próprio.
- **Fórum:** o site original tinha a seção, mas está vazia — não foi incluída.
  A estrutura permite adicionar um blog depois.
- **Idiomas:** somente Português nesta versão.
