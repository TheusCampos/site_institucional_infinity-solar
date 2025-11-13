# 🚀 Sun Weave — Site Institucional + Blog

Site institucional moderno focado em energia renovável, com integração de Blog e experiência responsiva. Estruturado para performance, SEO, acessibilidade e manutenibilidade.

---

## 📦 Tecnologias (versões)
- React `^18.3.1` + React DOM `^18.3.1`
- Vite `^5.4.19` (build e dev server)
- TypeScript `^5.8.3`
- Tailwind CSS `^3.4.17` + `@tailwindcss/typography`
- Radix UI (`@radix-ui/react-select`, `@radix-ui/react-popover`, `@radix-ui/react-tooltip`)
- TanStack Query `^5.83.0` (cache e fetching)
- React Router DOM `^6.30.1`
- Lucide React `^0.462.0` (ícones)
- React Day Picker `^8.10.1` (intervalo de datas)

---

## 🧰 Requisitos do Sistema
- Node.js 18+ (recomendado: 20+)
- npm 9+

---

## ⚙️ Configuração de Ambiente
Crie um arquivo `.env` na raiz com:

```
VITE_API_URL=http://gotecnologia.com:9003
VITE_BLOG_STORE_ID=1
```

`VITE_API_URL` é opcional; quando ausente, as chamadas usam caminhos relativos.

---

## 🏗️ Arquitetura
- `src/api/`
  - `blog.ts`: cliente HTTP e tipos de posts, paginação e fetch por ID
  - `comments.ts`: tipos e operações de comentários por post
- `src/components/`
  - `blog/PostCard.tsx`: card de post com realce do primeiro resultado
  - `ui/*`: componentes utilitários (card, button, input, select, popover, tooltip, pagination, toaster)
  - seções institucionais (Hero, Serviços, Projetos, etc.)
- `src/pages/`
  - `Blog.tsx`: busca com ranking por relevância, filtro por data (select + calendário), barra “sticky”, tooltips e paginação
  - `BlogPost.tsx`: detalhe do post com sanitização de HTML, SEO e JSON-LD
- `src/hooks/`
  - `useSEO.ts`: metatags, canonical e JSON-LD
- `src/utils/`
  - `sanitize.ts`: remoção de tags e atributos inseguros
- `src/styles/blog.css`: ajustes de UI (ex.: remoção do botão nativo “X” do input)

---

## 🧠 Funcionalidades
- Busca em tempo real com debounce e ranking por relevância
- Primeiro resultado em destaque visual
- Filtro de data com três modos: recentes, antigos, personalizado (intervalo)
- Barra de filtros “sticky” durante rolagem com blur
- Tooltips, responsividade e acessibilidade (teclado e ARIA)
- SEO: title/description/OG/canonical e JSON-LD

---

## ▶️ Instalação e Execução
```bash
npm install
npm run dev
```

Build e preview:
```bash
npm run build
npm run preview
```

Lint:
```bash
npm run lint
```

---

## 📝 Guia de Uso
- Blog
  - Use a barra de busca para filtrar por relevância
  - Alterne o seletor de data para ordenar ou filtrar intervalo
  - Utilize tags para refinar resultados
- Post
  - Conteúdo sanitizado para segurança
  - Metadados SEO automáticos

---

## 🔒 Acessibilidade, SEO e Performance
- Acessibilidade: ARIA, foco e navegação por teclado
- SEO: metatags e JSON-LD com `useSEO`
- Performance: debounce de busca e cache com TanStack Query

---

## 🤝 Dependências e Créditos
- Tailwind CSS, Radix UI, TanStack Query, Lucide React, React Day Picker
- shadcn/ui (base de componentes estilizados)

---

## 📜 Licença
Projeto privado, licenciado para uso exclusivo do cliente. Todos os direitos reservados.