# Integração Frontend - Listagem de Posts do Blog

Este documento descreve como integrar o frontend com o backend para exibir a listagem de posts do blog.

## Visão Geral

O backend expõe endpoints RESTful para buscar posts do blog com suporte a paginação e filtros. O frontend deve consumir esses endpoints e exibir os dados de forma amigável.

## Endpoints Disponíveis

### 1. Listar Posts do Blog (Paginado)

**Método:** `GET`  
**Rota:** `/api/v1/blog/posts`  
**Query Params:**

- `page` (opcional, padrão=1): Número da página
- `limit` (opcional, padrão=10): Itens por página
- `search` (opcional): Termo para busca nos campos título e resumo
- `ativo` (opcional, padrão=true): Filtrar apenas posts ativos

**Exemplo de Requisição:**

```http
GET /api/v1/blog/posts?page=1&limit=10&search=energia
```

**Resposta de Sucesso (200 OK):**

```json
{
  "items": [
    {
      "id": 1,
      "cod_loja": 1,
      "titulo": "Energia Solar: Guia Completo",
      "resumo": "Tudo o que você precisa saber sobre energia solar...",
      "autor": "João Silva",
      "imagem_capa": "https://exemplo.com/imagens/blog/energia-solar.jpg",
      "data_postagem": "2025-11-10T10:00:00",
      "updated_at": "2025-11-10T10:05:00",
      "ativo": true
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 15,
  "has_next": true
}
```

### 2. Buscar Detalhes de um Post

**Método:** `GET`  
**Rota:** `/api/v1/blog/posts/{id}`

**Exemplo de Requisição:**

```http
GET /api/v1/blog/posts/1
```

**Resposta de Sucesso (200 OK):**

```json
{
  "id": 1,
  "cod_loja": 1,
  "titulo": "Energia Solar: Guia Completo",
  "resumo": "Tudo o que você precisa saber sobre energia solar...",
  "contexto": "<p>Conteúdo completo do post em HTML...</p>",
  "autor": "João Silva",
  "imagem_capa": "https://exemplo.com/imagens/blog/energia-solar.jpg",
  "data_postagem": "2025-11-10T10:00:00",
  "updated_at": "2025-11-10T10:05:00",
  "ativo": true
}
```

## Implementação no Frontend

### 1. Criar Serviço de API

```typescript
// services/blogService.ts
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface BlogPostListItem {
  id: number;
  cod_loja: number;
  titulo: string | null;
  resumo: string;
  autor: string | null;
  imagem_capa: string | null;
  data_postagem: string | null;
  updated_at: string | null;
  ativo: boolean | null;
}

interface BlogPostDetail extends BlogPostListItem {
  contexto: string;
}

interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  has_next: boolean;
}

export const blogService = {
  async getPosts(
    page = 1,
    limit = 10,
    search = ""
  ): Promise<PaginatedResponse<BlogPostListItem>> {
    const response = await axios.get(`${API_BASE_URL}/api/v1/blog/posts`, {
      params: { page, limit, search, ativo: true },
    });
    return response.data;
  },

  async getPostById(id: number): Promise<BlogPostDetail> {
    const response = await axios.get(`${API_BASE_URL}/api/v1/blog/posts/${id}`);
    return response.data;
  },
};
```

### 2. Componente de Listagem de Posts

```tsx
// components/Blog/PostList.tsx
import { useEffect, useState } from "react";
import { blogService, BlogPostListItem } from "@/services/blogService";

export default function PostList() {
  const [posts, setPosts] = useState<BlogPostListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const loadPosts = async (currentPage = 1, search = "") => {
    try {
      setLoading(true);
      const data = await blogService.getPosts(currentPage, 10, search);
      setPosts(data.items);
      setTotalPages(Math.ceil(data.total / data.limit));
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts(page, searchTerm);
  }, [page, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    loadPosts(1, searchTerm);
  };

  if (loading && posts.length === 0) {
    return <div>Carregando posts...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar posts..."
            className="flex-1 p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {post.imagem_capa && (
              <img
                src={post.imagem_capa}
                alt={post.titulo || "Imagem do post"}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {post.titulo || "Sem título"}
              </h2>
              <p className="text-gray-600 mb-4">{post.resumo}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Por {post.autor || "Autor desconhecido"}</span>
                <span>
                  {post.data_postagem
                    ? new Date(post.data_postagem).toLocaleDateString("pt-BR")
                    : ""}
                </span>
              </div>
              <div className="mt-4">
                <a
                  href={`/blog/${post.id}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Ler mais →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-4 py-2 rounded ${
                  page === pageNum
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {pageNum}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
```

### 3. Página de Detalhes do Post

```tsx
// pages/blog/[id].tsx
import { GetServerSideProps } from "next";
import { blogService, BlogPostDetail } from "@/services/blogService";
import Head from "next/head";

interface PostDetailProps {
  post: BlogPostDetail;
}

export default function PostDetail({ post }: PostDetailProps) {
  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Head>
        <title>{post.titulo || "Post do Blog"} | Nome da Empresa</title>
        <meta name="description" content={post.resumo} />
        {post.imagem_capa && (
          <meta property="og:image" content={post.imagem_capa} />
        )}
      </Head>

      <article>
        <header className="mb-8">
          {post.imagem_capa && (
            <img
              src={post.imagem_capa}
              alt={post.titulo || "Imagem de capa"}
              className="w-full h-96 object-cover rounded-lg mb-6"
            />
          )}
          <h1 className="text-4xl font-bold mb-4">{post.titulo}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <span>Por {post.autor || "Autor desconhecido"}</span>
            <span>•</span>
            <time dateTime={post.data_postagem || ""}>
              {post.data_postagem
                ? new Date(post.data_postagem).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </time>
          </div>
        </header>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contexto }}
        />

        <div className="mt-12 pt-6 border-t">
          <a
            href="/blog"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            ← Voltar para o blog
          </a>
        </div>
      </article>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as { id: string };
    const post = await blogService.getPostById(parseInt(id));

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return {
      notFound: true,
    };
  }
};
```

## Estilização

Adicione o seguinte ao seu arquivo `tailwind.config.js` para estilizar o conteúdo HTML gerado pelo CMS:

```javascript
// tailwind.config.js
module.exports = {
  // ... outras configurações
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: { fontSize: "2.25rem", fontWeight: "bold" },
            h2: { fontSize: "1.875rem", fontWeight: "bold" },
            h3: { fontSize: "1.5rem", fontWeight: "bold" },
            img: {
              borderRadius: "0.5rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // outros plugins...
  ],
};
```

## Tratamento de Erros

Adicione um componente de tratamento de erros global:

```tsx
// components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 bg-red-50 text-red-700 rounded">
            <h2 className="font-bold">Algo deu errado</h2>
            <p className="mt-2">
              {this.state.error?.message || "Ocorreu um erro inesperado."}
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

## Cache e Performance

### 1. Cache no Navegador

```typescript
// services/blogService.ts
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

const cache: Record<string, { data: any; timestamp: number }> = {};

const getCacheKey = (url: string, params: any) => {
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
};

export const blogService = {
  async getPosts(page = 1, limit = 10, search = "") {
    const url = `${API_BASE_URL}/api/v1/blog/posts`;
    const params = { page, limit, search, ativo: true };
    const cacheKey = getCacheKey(url, params);

    // Verifica se há cache válido
    const cached = cache[cacheKey];
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }

    const response = await axios.get(url, { params });

    // Atualiza o cache
    cache[cacheKey] = {
      data: response.data,
      timestamp: Date.now(),
    };

    return response.data;
  },
  // ... outros métodos
};
```

### 2. Pré-carregamento de Dados (Next.js)

```typescript
// pages/blog/index.tsx
export default function BlogPage() {
  return <PostList />;
}

export async function getStaticProps() {
  // Pré-carrega a primeira página de posts no build
  const initialData = await blogService.getPosts(1, 10, "");

  return {
    props: {
      initialData,
    },
    revalidate: 60, // Revalida a cada 60 segundos
  };
}
```

## Testes

### 1. Teste do Serviço

```typescript
// __tests__/services/blogService.test.ts
import { blogService } from "@/services/blogService";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("BlogService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getPosts", () => {
    it("deve retornar posts com sucesso", async () => {
      const mockPosts = {
        items: [{ id: 1, titulo: "Teste", resumo: "Resumo" }],
        page: 1,
        limit: 10,
        total: 1,
        has_next: false,
      };

      mockedAxios.get.mockResolvedValue({ data: mockPosts });

      const result = await blogService.getPosts();

      expect(result).toEqual(mockPosts);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        expect.stringContaining("/api/v1/blog/posts"),
        { params: { page: 1, limit: 10, ativo: true } }
      );
    });
  });
});
```

### 2. Teste do Componente

```typescript
// __tests__/components/Blog/PostList.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import PostList from "@/components/Blog/PostList";
import { blogService } from "@/services/blogService";

jest.mock("@/services/blogService");

const mockPosts = {
  items: [
    {
      id: 1,
      titulo: "Teste Post",
      resumo: "Este é um post de teste",
      autor: "Teste Autor",
      data_postagem: "2025-11-12T10:00:00Z",
    },
  ],
  page: 1,
  limit: 10,
  total: 1,
  has_next: false,
};

describe("PostList", () => {
  beforeEach(() => {
    (blogService.getPosts as jest.Mock).mockResolvedValue(mockPosts);
  });

  it("deve carregar e exibir posts", async () => {
    render(<PostList />);

    // Verifica se o loading é exibido inicialmente
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();

    // Aguarda o carregamento dos posts
    await waitFor(() => {
      expect(screen.getByText("Teste Post")).toBeInTheDocument();
      expect(screen.getByText("Este é um post de teste")).toBeInTheDocument();
      expect(screen.getByText("Por Teste Autor")).toBeInTheDocument();
    });
  });
});
```

## Considerações de Segurança

1. **Sanitização de HTML**: O conteúdo do post (campo `contexto`) é renderizado usando `dangerouslySetInnerHTML`. Certifique-se de que:

   - O backend está sanitizando o conteúdo antes de salvá-lo
   - Considere usar uma biblioteca como DOMPurify no frontend

2. **Proteção contra XSS**:

   ```typescript
   // utils/sanitize.ts
   import DOMPurify from "dompurify";

   export function sanitizeHTML(html: string): string {
     return DOMPurify.sanitize(html, {
       ALLOWED_TAGS: [
         "p",
         "h1",
         "h2",
         "h3",
         "h4",
         "h5",
         "h6",
         "strong",
         "em",
         "a",
         "ul",
         "ol",
         "li",
         "img",
       ],
       ALLOWED_ATTR: ["href", "src", "alt", "class", "style"],
     });
   }
   ```

3. **Rate Limiting**: O backend deve implementar rate limiting para evitar abuso das APIs.

## Conclusão

Este documento fornece um guia completo para integrar o frontend com o backend para a listagem de posts do blog. A implementação inclui:

- Listagem paginada de posts com busca
- Página de detalhes do post
- Tratamento de erros
- Cache no navegador
- Testes automatizados
- Considerações de segurança

Siga estas diretrizes para garantir uma experiência de usuário consistente e segura no blog da sua aplicação.
