# 📊 Diagrama Detalhado - Infinity Solar Website

## 🏗️ Estrutura de Arquivos

```
sun-weave-site-main/
├── 📁 .trae/                          # Configurações do IDE Trae
│   └── rules/
│       └── project_rules.md           # Regras do projeto MCP
├── 📁 public/                         # Arquivos estáticos
│   ├── favicon.ico                    # Ícone do site
│   ├── robots.txt                     # SEO - Configuração para crawlers
│   ├── placeholder.svg                # Imagem placeholder
│   └── fonts/
│       └── DARKLINOS.ttf             # Fonte customizada
├── 📁 src/                           # Código fonte principal
│   ├── 📄 main.tsx                   # 🚀 PONTO DE ENTRADA da aplicação
│   ├── 📄 App.tsx                    # 🎯 Componente raiz com roteamento
│   ├── 📄 index.css                  # 🎨 Estilos globais e design system
│   ├── 📄 vite-env.d.ts             # Tipos TypeScript para Vite
│   ├── 📁 pages/                     # 📄 Páginas da aplicação
│   │   ├── Index.tsx                 # 🏠 Página inicial (landing page)
│   │   ├── Projetos.tsx              # 📋 Página de projetos
│   │   ├── Contatos.tsx              # 📞 Página de contato
│   │   ├── Blog.tsx                  # 📝 Página do blog
│   │   ├── Login.tsx                 # 🔐 Página de login
│   │   └── NotFound.tsx              # ❌ Página 404
│   ├── 📁 components/                # 🧩 Componentes reutilizáveis
│   │   ├── Header.tsx                # 🔝 Cabeçalho com navegação
│   │   ├── Hero.tsx                  # 🌟 Seção hero principal
│   │   ├── Footer.tsx                # 🔻 Rodapé
│   │   ├── WhatsAppButton.tsx        # 💬 Botão flutuante WhatsApp
│   │   ├── Contact.tsx               # 📧 Formulário de contato
│   │   ├── Services.tsx              # ⚡ Seção de serviços
│   │   ├── Projects.tsx              # 🏗️ Galeria de projetos
│   │   ├── FAQ.tsx                   # ❓ Perguntas frequentes
│   │   ├── Testimonials.tsx          # 💬 Depoimentos
│   │   ├── Stats.tsx                 # 📊 Estatísticas
│   │   ├── Brands.tsx                # 🏢 Marcas parceiras
│   │   ├── Map.tsx                   # 🗺️ Mapa de localização
│   │   ├── WhyChooseUs.tsx           # ✅ Por que nos escolher
│   │   ├── HowItWorks.tsx            # ⚙️ Como funciona
│   │   └── SystemGuarantee.tsx       # 🛡️ Garantias do sistema
│   │   └── 📁 ui/                    # 🎨 Componentes UI (shadcn/ui)
│   │       ├── button.tsx            # 🔘 Botões
│   │       ├── card.tsx              # 📇 Cards
│   │       ├── input.tsx             # ⌨️ Inputs
│   │       ├── dialog.tsx            # 🪟 Modais
│   │       └── ... (50+ componentes) # 🧰 Biblioteca completa UI
│   ├── 📁 hooks/                     # 🪝 Custom hooks
│   │   ├── use-mobile.tsx            # 📱 Hook para detectar mobile
│   │   └── use-toast.ts              # 🍞 Hook para notificações
│   ├── 📁 lib/                       # 🛠️ Utilitários
│   │   └── utils.ts                  # 🔧 Funções auxiliares
│   └── 📁 assets/                    # 🖼️ Imagens e recursos
│       ├── hero-solar.jpg            # 🌞 Imagem principal hero
│       ├── service-*.jpg             # ⚡ Imagens dos serviços
│       ├── project-*.jpg             # 🏗️ Imagens dos projetos
│       └── ... (10+ imagens)         # 📸 Galeria completa
├── 📄 package.json                   # 📦 Dependências e scripts
├── 📄 vite.config.ts                 # ⚡ Configuração Vite
├── 📄 tailwind.config.ts             # 🎨 Configuração Tailwind CSS
├── 📄 tsconfig.json                  # 📝 Configuração TypeScript
├── 📄 components.json                # 🧩 Configuração shadcn/ui
├── 📄 eslint.config.js               # 🔍 Configuração ESLint
└── 📄 README.md                      # 📖 Documentação do projeto
```

## 🔄 Fluxo de Execução da Aplicação

### 1. 🚀 Inicialização (main.tsx)
```typescript
// Ponto de entrada da aplicação
createRoot(document.getElementById("root")!).render(<App />);
```

### 2. 🎯 Configuração Principal (App.tsx)
```typescript
// Configuração de providers e roteamento
QueryClientProvider → TooltipProvider → BrowserRouter → Routes
```

### 3. 🛣️ Sistema de Roteamento
```
/ (raiz)           → Index.tsx (Página principal)
/projetos          → Projetos.tsx
/contatos          → Contatos.tsx  
/blog              → Blog.tsx
/login             → Login.tsx
/* (catch-all)     → NotFound.tsx
```

### 4. 🏠 Estrutura da Página Principal (Index.tsx)

```
Index.tsx
├── Header (Navegação fixa)
├── Hero (Seção principal com CTA)
├── Stats (Estatísticas com ondas decorativas)
├── Quem Somos (Seção institucional)
├── SystemGuarantee (Garantias)
├── WhyChooseUs (Diferenciais)
├── HowItWorks (Processo)
├── Services (Serviços oferecidos)
├── Projects (Galeria de projetos)
├── Brands (Marcas parceiras)
├── Testimonials (Depoimentos)
├── FAQ (Perguntas frequentes)
├── Contact (Formulário de contato)
├── Map (Localização)
├── Footer (Rodapé)
└── WhatsAppButton (Botão flutuante)
```

## 🎨 Design System

### Cores Principais (HSL)
- **Primary**: `88 29% 53%` - Verde solar (#8AAB64)
- **Secondary**: `49 85% 59%` - Amarelo vibrante (#F1D53D)
- **Background**: `80 20% 98%` - Branco off-white (#FBFCFA)
- **Foreground**: `0 0% 2%` - Preto profundo (#050505)
- **Accent**: `207 86% 45%` - Azul confiável (#1378D2)

### Tipografia
- **Principal**: Inter (sans-serif)
- **Customizada**: Darklinos (fonte especial)

### Animações
- `fade-in`, `fade-in-up`, `scale-in`
- `slide-in-right`, `float`, `pulse-soft`
- `shimmer` para efeitos de carregamento

## 🛠️ Stack Tecnológica

### Frontend
- **React 18.3.1** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite 5.4.19** - Build tool e dev server
- **React Router DOM 6.30.1** - Roteamento SPA

### UI/UX
- **Tailwind CSS 3.4.17** - Framework CSS
- **shadcn/ui** - Biblioteca de componentes
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones

### Funcionalidades
- **React Hook Form** - Gerenciamento de formulários
- **TanStack Query** - Gerenciamento de estado servidor
- **Sonner** - Sistema de notificações toast
- **Zod** - Validação de schemas

### Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 📱 Funcionalidades Principais

### 🏠 Landing Page
- Hero section com CTA principal
- Estatísticas da empresa
- Seção "Quem Somos" com missão
- Garantias do sistema
- Por que escolher a empresa

### ⚡ Serviços
- Painéis solares residenciais/comerciais
- Turbinas eólicas
- Controladores de carga
- Sistemas de armazenamento

### 🏗️ Projetos
- Galeria de projetos realizados
- Casos de sucesso
- Antes/depois das instalações

### 📞 Contato
- Formulário de contato completo
- Integração WhatsApp
- Mapa de localização
- Informações de contato

### 📱 Responsividade
- Design mobile-first
- Breakpoints otimizados
- Navegação adaptativa
- Imagens responsivas

## 🚀 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (porta 8080)
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Verificação de código
```

## 🔧 Configurações Importantes

### Vite (vite.config.ts)
- Servidor na porta 8080
- Alias `@` para `./src`
- Plugin React SWC
- Component tagger para desenvolvimento

### Tailwind (tailwind.config.ts)
- Design system customizado
- Animações personalizadas
- Gradientes e sombras
- Breakpoints responsivos

### TypeScript
- Configuração strict
- Paths mapeados
- Tipos para Vite e React