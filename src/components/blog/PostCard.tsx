import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPostListItem } from "@/api/blog";

// Card de post com suporte a destaque visual (primeiro resultado)
type Props = { post: BlogPostListItem; highlight?: boolean };

export default function PostCard({ post, highlight = false }: Props) {
  const dateLabel = post.data_postagem ? new Date(post.data_postagem).toLocaleDateString("pt-BR") : "";
  return (
    <Card className={`overflow-hidden border-2 transition-all duration-300 group ${highlight ? "border-primary ring-2 ring-primary shadow-glow" : "hover:border-primary hover:shadow-medium"}`}>
      <div className="relative h-48 overflow-hidden">
        {post.imagem_capa && (
          <img src={post.imagem_capa} alt={post.titulo || "Imagem do post"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
        )}
        {post.tags?.[0] && <Badge className="absolute top-3 left-3 capitalize">{post.tags[0]}</Badge>}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.titulo || "Sem título"}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.resumo}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {dateLabel}
          </span>
          {post.autor && <span>Por {post.autor}</span>}
        </div>
        <Link to={`/blog/${post.id}`} className="w-full">
          <Button variant="ghost" className={`w-full ${highlight ? "bg-primary text-primary-foreground" : "group-hover:bg-primary group-hover:text-primary-foreground"}`}>Ler mais</Button>
        </Link>
      </CardContent>
    </Card>
  );
}