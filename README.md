# 🚀 Site Institucional + Blog — Guia do Projeto

Site institucional moderno com blog, desenvolvido com foco em performance, SEO, acessibilidade e manutenção a longo prazo.

---

## 📦 Tecnologias
- React `^18.3.1` + React DOM `^18.3.1`
- Vite `^5.4.19` (dev server e build)
- TypeScript `^5.8.3`
- Tailwind CSS `^3.4.17` + `@tailwindcss/typography`
- Radix UI (Select, Popover, Tooltip)
- TanStack Query `^5.x` (cache de dados)
- React Router DOM `^6.x`
- Lucide React (ícones)
- React Day Picker (seleção de datas)

---

## 🧰 Requisitos
- Node.js 18+ (recomendado: 20+)
- npm 9+

---

## ▶️ Instalação e Execução
```bash
npm install
npm run dev
```

### Build e Preview
```bash
npm run build
npm run preview
```

### Lint
```bash
npm run lint
```

---

## 🏗️ Estrutura de Pastas
- `src/components/` — componentes de UI (card, button, input, select, etc.) e seções institucionais
- `src/pages/` — páginas (Home, Projetos, Contatos, Blog, Post)
- `src/hooks/` — hooks utilitários (ex.: `useSEO`)
- `src/lib/` — utilitários globais (ex.: animação de scroll `scrollReveal.ts`)
- `src/api/` — clientes e tipos para consumo de conteúdo (sem credenciais)
- `src/styles/` — estilos complementares (ex.: `blog.css`)

---

## ✨ Funcionalidades de Interface
- Animação suave ao rolar (fade-in, 300ms `ease-out`, threshold 20%)
- Carrossel de marcas com logos responsivas (`h-80px`, `object-contain`)
- Imagens otimizadas com `loading="lazy"` e `decoding="async"`
- Acessibilidade: ARIA, foco, navegação por teclado

---

## 🔎 SEO
- Metatags dinâmicas (title, description, OG) com `useSEO`
- Canonical automático
- JSON-LD (Blog e Post)
- Alt text em imagens de conteúdo

---

## ⚙️ Performance
- Build otimizada com Vite
- Lazy loading para imagens e seções
- TanStack Query com cache
- Transições usando `transform` e `opacity` para melhor FPS

---

## 🧩 Padrões de Código
- TypeScript com tipagem estrita
- ESLint ativo (`npm run lint`)
- Tailwind com utilitários de layout e responsividade

---

## 📚 Referências Internas
- Guia de animações: `src/docs/STYLE_GUIDE_ANIMATIONS.md`

---

## 📜 Licença
Uso interno. Sem divulgação de dados de cliente ou credenciais.
