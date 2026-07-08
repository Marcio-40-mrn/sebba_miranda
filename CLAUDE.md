# Sebba & Miranda — Site institucional

Site institucional (React + TypeScript + Vite) para o escritório de recuperação
de crédito e consultoria jurídica **Sebba & Miranda** (empresa do primo do
usuário). Reconstrução do site original (ASP.NET), mesma estrutura de
conteúdo, estética moderna.

## Stack

- React 18 + React Router 6 + TypeScript, build com Vite 5.
- Sem CSS framework: CSS puro por componente/seção (`Nome.css` ao lado de
  `Nome.tsx`), tokens globais em `src/styles/variables.css`.
- Sem backend. Formulário de contato abre e-mail/WhatsApp do cliente (não
  há endpoint próprio nem serviço tipo Formspree/EmailJS integrado ainda).

## Scripts

```bash
npm install      # instala dependências
npm run dev      # http://localhost:5173
npm run build    # tsc --noEmit + build de produção em /dist
npm run preview  # pré-visualiza o build de produção
```

## Estrutura de pastas

```
src/
├── main.tsx / App.tsx     # entrada + rotas
├── data/                  # CONTEÚDO EDITÁVEL (textos e dados da empresa)
│   ├── company.ts         # telefones, e-mail, whatsapp, endereço/mapa
│   ├── services.ts        # os 4 serviços (b2b, b2c, consultoria, representacao)
│   ├── content.ts         # textos institucionais, diferenciais, passos
│   └── navigation.ts      # itens do menu
├── pages/                 # Home, About(/a-empresa), Services(/servicos),
│                           # HowToHire(/como-contratar), Contact(/contato)
├── sections/               # Hero, ServicesPreview, Models, WhyChooseUs, CtaBanner
├── components/
│   ├── layout/             # Header.tsx / Footer.tsx (logo fica aqui)
│   ├── ui/                 # Button, Icon, PageHero, ServiceIcon
│   ├── ContactForm.tsx, WhatsappButton.tsx, CookieBanner.tsx
├── hooks/useReveal.ts       # animação ao rolar
└── styles/variables.css + global.css
```

## Onde editar o quê

- **Telefones, e-mail, WhatsApp, endereço/mapa:** `src/data/company.ts`
- **Serviços (título/descrição/highlights):** `src/data/services.ts`
- **Textos institucionais / passo a passo de contratação:** `src/data/content.ts`
- **Cores e tipografia:** `src/styles/variables.css`
- **Logo:** arquivo em `public/logo.jpg`, usado via `<img src="/logo.jpg">`
  em `Header.tsx` (marca no menu) e `Footer.tsx` (dentro de um card branco,
  porque o fundo do rodapé é navy e a imagem tem fundo branco).

## Estado atual (já resolvido, não re-perguntar)

- **Fonte do site:** `--font-body` e `--font-display` em `variables.css` usam
  `"Aptos", "Inter", system-ui, ...`. Aptos é fonte proprietária da Microsoft
  (sem licença web gratuita) — só aparece pra quem tem Office 365 recente
  instalado; o resto vê Inter/Segoe UI como fallback. Import do Google Fonts
  em `index.html` só carrega Inter (Fraunces foi removido, não é mais usado).
- **Endereço real:** R. Amaral Gama, 380 - Santana - São Paulo - SP, CEP
  02018-001. Já preenchido em `company.ts` (full, mapsEmbed, mapsLink).
- **Serviço "representacao"** (id mantido em `services.ts` para não quebrar
  o ícone em `ServiceIcon.tsx`) foi renomeado para "Consultoria
  Administrativa: Serasa e Protesto de Título Extrajudicial".
- **Logo nova aplicada** em Header e Footer (ver acima). O arquivo original
  "Novo logo.jpg.jpeg" na raiz é a fonte escolhida pelo usuário. Existe
  também um "Novo logo.svg" na raiz — **não usar**: é uma vetorização
  automática (VTracer) da própria JPEG, não um vetor de verdade (texto
  virou centenas de manchas de cor), mais pesado e sem ganho de qualidade.

## Ambiente / ferramentas já instaladas (não reinstalar)

- **ngrok já está instalado globalmente via npm** (`npm i -g ngrok`), mas o
  wrapper CLI padrão (`ngrok` / `ngrok.cmd`) é um script Node que exige TTY
  interativo e falha em execução não-interativa ("stdin is not a tty").
  Para automação, chamar o binário real direto:
  `C:\Users\Marcio\AppData\Roaming\npm\node_modules\ngrok\bin\ngrok.exe http 5173 --log=stdout`
  Se aparecer erro `ERR_NGROK_121` (versão do agente desatualizada), rodar
  `...\ngrok.exe update` primeiro (atualiza o binário existente, não reinstala).
- **`vite.config.ts`** tem `server: { host: true, allowedHosts: true }` —
  necessário para aceitar qualquer subdomínio de túnel (ngrok/Cloudflare)
  sem precisar editar o config a cada novo link gerado. Não reverter isso
  para uma lista fixa de hosts.
- Túneis geram URL nova a cada execução — não existe link fixo hoje. Se
  pedirem link pro primo/cliente ver o site, reabrir o túnel e avisar que o
  link muda.

## Quirks do preview tool nesta sessão (não é bug no código)

- `preview_screenshot` às vezes trava/dá timeout sem motivo aparente
  (aconteceu de forma intermitente); repetir a chamada costuma resolver.
- Renderização via `<canvas>`/`getContext` fica bloqueada no sandbox do
  preview (retorna `undefined`) — não dá pra rasterizar SVG assim nesta
  ferramenta; se precisar comparar SVG visualmente, abrir com
  `Start-Process` no visualizador padrão do Windows em vez de tentar
  capturar via preview.
- O iframe do Google Maps (embed do endereço) dá `net::ERR_ABORTED` no
  preview — não é erro real, é o sandbox bloqueando o iframe de terceiro.

## Pendências / a confirmar com o usuário

- **Número de WhatsApp** em `company.ts` (`whatsapp`, `whatsappMessage`):
  nunca foi confirmado como o número real de atendimento.
- **Formulário de contato:** sem backend — hoje só abre e-mail/WhatsApp do
  visitante com a mensagem pronta. Se quiser receber automaticamente,
  precisa integrar algo (Formspree, EmailJS, endpoint próprio).
- **Deploy:** projeto ainda não tem hospedagem definida (Vercel/Netlify
  cogitados mas não configurados). Hoje só roda local + túnel temporário.
- Site só em português.
