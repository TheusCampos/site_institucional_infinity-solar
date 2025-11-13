/**
 * Módulo de integração com a API de Blog
 * - Constrói URLs com variáveis de ambiente
 * - Utilitários HTTP com tratamento de erro
 * - Tipos fortes para posts e paginação
 * - Funções para buscar lista e detalhe de posts
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || "";
export const BLOG_STORE_ID = String(import.meta.env.VITE_BLOG_STORE_ID || 1);

type QueryParams = Record<string, string | number | boolean | undefined>;

const buildUrl = (path: string) => {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`.replace(/([^:])\/\/+/, "$1/");
};

const withParams = (url: string, params?: QueryParams) => {
  if (!params) return url;
  const search = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    search.set(k, String(v));
  });
  const qs = search.toString();
  return qs ? `${url}?${qs}` : url;
};

/** GET tipado com query params */
export async function httpGet<T>(path: string, params?: QueryParams): Promise<T> {
  const start = performance.now();
  const url = withParams(buildUrl(path), params);
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  const duration = performance.now() - start;
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`GET ${path} failed: ${res.status} ${text}`);
    throw Object.assign(err, { status: res.status, duration });
  }
  return res.json();
}

/** POST tipado com corpo JSON */
export async function httpPost<T>(path: string, body: unknown): Promise<T> {
  const start = performance.now();
  const res = await fetch(buildUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const duration = performance.now() - start;
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    const err = new Error(`POST ${path} failed: ${res.status} ${text}`);
    throw Object.assign(err, { status: res.status, duration });
  }
  return res.json();
}

/** Estrutura base de um post na listagem */
export type BlogPostListItem = {
  id: number;
  cod_loja: number;
  titulo: string | null;
  resumo: string;
  autor: string | null;
  imagem_capa: string | null;
  data_postagem: string | null;
  updated_at: string | null;
  ativo: boolean | string | null;
  tags?: string[] | null;
};

/** Estrutura de detalhe de post (inclui conteúdo HTML) */
export type BlogPostDetail = BlogPostListItem & {
  contexto: string | null;
};

/** Resposta paginada genérica */
export type PaginatedResponse<T> = {
  items: T[];
  page: number;
  limit: number;
  total: number;
  has_next: boolean;
};

/** Busca lista paginada de posts */
export function fetchPosts(params: { page?: number; limit?: number; search?: string; ativo?: boolean; sort?: string } = {}) {
  const { page = 1, limit = 10, search = "", ativo, sort = "-data_postagem" } = params;
  const query: Record<string, string | number | boolean> = { page, limit, sort };
  if (search) query.search = search;
  if (typeof ativo !== "undefined") query.ativo = ativo;
  return httpGet<PaginatedResponse<BlogPostListItem>>(`/api/blog/${BLOG_STORE_ID}/posts`, query);
}

/** Busca detalhe de um post */
export function fetchPostById(id: number) {
  return httpGet<BlogPostDetail>(`/api/blog/${BLOG_STORE_ID}/posts/${id}`);
}

/** Chaves de cache do React Query */
export const queryKeys = {
  posts: (p: { page: number; limit: number; search: string; ativo?: boolean; sort?: string }) => ["blog", "posts", p],
  post: (id: number) => ["blog", "post", id],
  comments: (id: number) => ["blog", "comments", id],
};