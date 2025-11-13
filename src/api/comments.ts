/**
 * Módulo de comentários do Blog
 * - Define tipos para comentário e payload de criação
 * - Expõe funções para listar e criar comentários por post
 */
import { httpGet, httpPost, BLOG_STORE_ID } from "./blog";

export type Comment = {
  id: number;
  post_id: number;
  author: string;
  content: string;
  email?: string | null;
  created_at: string;
};

export type CreateCommentPayload = {
  author: string;
  content: string;
  email?: string;
};

/** Lista comentários de um post */
export function fetchComments(postId: number) {
  return httpGet<Comment[]>(`/api/blog/${BLOG_STORE_ID}/posts/${postId}/comments`);
}

/** Cria um comentário associado a um post */
export function createComment(postId: number, payload: CreateCommentPayload) {
  return httpPost<Comment>(`/api/blog/${BLOG_STORE_ID}/posts/${postId}/comments`, payload);
}