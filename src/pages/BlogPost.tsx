import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPostById, queryKeys } from "@/api/blog";
// comentários removidos do render
import { sanitizeHTMLBasic } from "@/utils/sanitize";
import { useMemo } from "react";
import { useSEO } from "@/hooks/useSEO";
import "@/styles/blog.css";

// Página de detalhe do Post: SEO, sanitização e render seguro de conteúdo
export default function BlogPost() {
  const { id } = useParams();
  const postId = Number(id);
  

  const { data: post, isLoading, isError } = useQuery({
    queryKey: queryKeys.post(postId),
    queryFn: () => fetchPostById(postId),
    enabled: Number.isFinite(postId),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  // comentários removidos do render

  

  // Sanitiza HTML e anexa marcação de publicação
  const safeHTML = useMemo(() => sanitizeHTMLBasic(post?.contexto || ""), [post?.contexto]);
  const publishedLabel = useMemo(() => {
    const d = post?.data_postagem ? new Date(post.data_postagem) : new Date();
    const date = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const time = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false });
    return `Publicado em: ${date} às ${time}`;
  }, [post?.data_postagem]);
  const contentWithPublished = useMemo(() => `${safeHTML}<p class="mt-4 text-muted-foreground text-sm">${publishedLabel}</p>`, [safeHTML, publishedLabel]);

  // Metadados SEO e JSON-LD para o post
  useSEO({
    title: post?.titulo ? `${post.titulo} | Infinity Solar` : "Post do Blog | Infinity Solar",
    description: post?.resumo || "",
    image: post?.imagem_capa || undefined,
    url: typeof window !== "undefined" ? window.location.href : undefined,
    type: "article",
    schema: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.titulo || '',
          description: post.resumo,
          image: post.imagem_capa || undefined,
          author: { '@type': 'Person', name: post.autor || 'Autor' },
          datePublished: post.data_postagem || undefined,
        }
      : undefined,
  });

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          {isError && <div className="text-center text-red-600">Post não encontrado.</div>}
          {isLoading && <div className="text-center">Carregando...</div>}
          {!isLoading && post && (
            <article>
              <div className="mb-6 flex items-center gap-3">
                {post.tags?.map((t) => (
                  <Badge key={t} className="capitalize">{t}</Badge>
                ))}
              </div>
              {post.imagem_capa && (
                <img src={post.imagem_capa} alt={post.titulo || 'Imagem de capa'} className="blog-cover rounded-lg mb-6" loading="lazy" />
              )}
              <h1 className="text-4xl font-bold mb-4">{post.titulo}</h1>
              <div className="text-muted-foreground mb-6">{post.autor ? `Por ${post.autor}` : ''}</div>
              <Card className="border">
                <CardContent className="p-6">
                  <div className="blog-content prose max-w-none" dangerouslySetInnerHTML={{ __html: contentWithPublished }} />
                </CardContent>
              </Card>

              <div className="mt-10 border-t pt-6">
                <Link to="/blog" className="text-primary">← Voltar para o blog</Link>
              </div>

              {/* seção de comentários removida */}
            </article>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}