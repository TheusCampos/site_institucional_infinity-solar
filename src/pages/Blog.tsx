import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight, Loader2, X, ArrowDownWideNarrow, ArrowUpWideNarrow, CalendarRange } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Calendar as DayCalendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, queryKeys, type BlogPostListItem } from "@/api/blog";
import PostCard from "@/components/blog/PostCard";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useSEO } from "@/hooks/useSEO";
import "@/styles/blog.css";

// Página de listagem do Blog: busca, filtros, ranking e paginação
const Blog = () => {
  // Estado de busca e filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [activeOnly, setActiveOnly] = useState(true);
  const [tag, setTag] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<"recentes" | "antigos" | "personalizado">("recentes");
  const [dateRange, setDateRange] = useState<DateRange | undefined>({ from: undefined, to: undefined });

  // Debounce para evitar chamadas excessivas durante digitação
  useEffect(() => {
    const t = setTimeout(() => {
      const trimmed = searchTerm.trim();
      setDebouncedSearchTerm(trimmed);
    }, 300);
    return () => clearTimeout(t);
  }, [searchTerm]);

  // Consulta de posts com React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.posts({ page, limit: 9, search: debouncedSearchTerm, ativo: activeOnly, sort: "-data_postagem" }),
    queryFn: () => fetchPosts({ page, limit: 9, search: debouncedSearchTerm, ativo: activeOnly, sort: "-data_postagem" }),
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const items = useMemo(() => data?.items ?? [], [data?.items]);
  const totalPages = data ? Math.max(1, Math.ceil(data.total / data.limit)) : 1;
  const tags = useMemo(() => {
    const all = items.flatMap((p) => p.tags ?? []);
    return Array.from(new Set(all)).slice(0, 10);
  }, [items]);
  const filteredByTag = useMemo(() => {
    if (!tag) return items;
    return items.filter((p) => (p.tags ?? []).includes(tag));
  }, [items, tag]);

  // Filtragem por intervalo de datas (modo personalizado)
  const filteredByDate = useMemo(() => {
    if (sortMode !== "personalizado" || !dateRange.from || !dateRange.to) return filteredByTag;
    const fromTs = dateRange.from.setHours(0, 0, 0, 0);
    const toTs = dateRange.to.setHours(23, 59, 59, 999);
    return filteredByTag.filter((p) => {
      if (!p.data_postagem) return false;
      const ts = new Date(p.data_postagem).getTime();
      return ts >= fromTs && ts <= toTs;
    });
  }, [filteredByTag, sortMode, dateRange.from, dateRange.to]);

  // Ordenação por relevância e desempate por data
  const ranked = useMemo(() => {
    const base = filteredByDate.slice();
    const term = debouncedSearchTerm.toLowerCase();
    if (!term) {
      // Apply date sort when no search term
      if (sortMode === "antigos") base.sort((a, b) => (new Date(a.data_postagem || 0).getTime() - new Date(b.data_postagem || 0).getTime()));
      else base.sort((a, b) => (new Date(b.data_postagem || 0).getTime() - new Date(a.data_postagem || 0).getTime()));
      return base;
    }
    const tokens = term.split(/\s+/).filter(Boolean);
    const score = (p: BlogPostListItem) => {
      const title = (p.titulo || "").toLowerCase();
      const resumo = (p.resumo || "").toLowerCase();
      const autor = (p.autor || "").toLowerCase();
      const tags = (p.tags || []).map((t) => t.toLowerCase());
      let s = 0;
      for (const tk of tokens) {
        if (title.includes(tk)) s += 5;
        if (resumo.includes(tk)) s += 3;
        if (autor.includes(tk)) s += 2;
        if (tags.some((t) => t.includes(tk))) s += 2;
      }
      return s;
    };
    base.sort((a, b) => {
      const sa = score(a);
      const sb = score(b);
      if (sa !== sb) return sb - sa;
      // tie-breaker by date according to sortMode
      const da = new Date(a.data_postagem || 0).getTime();
      const db = new Date(b.data_postagem || 0).getTime();
      return sortMode === "antigos" ? da - db : db - da;
    });
    return base;
  }, [filteredByDate, debouncedSearchTerm, sortMode]);

  // Metadados de SEO da página
  useSEO({
    title: "Blog | Infinity Solar",
    description: "Conteúdos sobre energia solar, economia e sustentabilidade.",
    url: typeof window !== "undefined" ? window.location.href : undefined,
    image: undefined,
    type: "website",
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nosso <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdos exclusivos sobre energia solar, economia, tecnologia e sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" aria-hidden="true">
          <svg data-testid="blog-content-top-wave" className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-secondary/5"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {isError && (
            <div className="max-w-3xl mx-auto text-center text-red-600">
              Erro ao carregar posts. Tente novamente.
            </div>
          )}
          {!isError && (
            <div className="max-w-5xl mx-auto">
              <div className="relative z-0 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b shadow-medium flex flex-col md:flex-row gap-4 mb-10 px-2 py-3">
                <form
                  role="search"
                  className="relative flex-1 blog-search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const trimmed = searchTerm.trim();
                    if (!trimmed) {
                      setSearchError("Digite um termo para buscar");
                      return;
                    }
                    setSearchError(null);
                    setDebouncedSearchTerm(trimmed);
                    setPage(1);
                  }}
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  <Input
                    id="blog-search"
                    type="search"
                    inputMode="search"
                    placeholder="Buscar artigos..."
                    className="pl-10 pr-10"
                    aria-label="Buscar artigos"
                    aria-busy={isLoading ? "true" : "false"}
                    aria-invalid={isError || !!searchError ? "true" : "false"}
                    aria-describedby="search-status"
                    value={searchTerm}
                    onChange={(e) => {
                      setPage(1);
                      setSearchError(null);
                      setSearchTerm(e.target.value);
                    }}
                  />
                  {searchTerm && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            onClick={() => { setSearchTerm(""); setDebouncedSearchTerm(""); setPage(1); setSearchError(null); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            aria-label="Limpar busca"
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Limpar campo de busca</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {isLoading && (
                    <Loader2 className="absolute right-9 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin" aria-hidden="true" />
                  )}
                  <div id="search-status" className="sr-only" aria-live="polite">
                    {isLoading ? "Buscando..." : isError ? "Erro ao buscar" : searchError ? searchError : ""}
                  </div>
                </form>
                <div className="flex gap-2 flex-wrap items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="min-w-56">
                          <Select value={sortMode} onValueChange={(v) => { setSortMode(v as "recentes" | "antigos" | "personalizado"); setPage(1); }}>
                            <SelectTrigger aria-label="Filtro por data" className="border-2">
                              <SelectValue placeholder="Filtrar por data" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="recentes"><span className="inline-flex items-center gap-2"><ArrowDownWideNarrow className="h-4 w-4" />Mais recentes primeiro</span></SelectItem>
                              <SelectItem value="antigos"><span className="inline-flex items-center gap-2"><ArrowUpWideNarrow className="h-4 w-4" />Mais antigos primeiro</span></SelectItem>
                              <SelectItem value="personalizado"><span className="inline-flex items-center gap-2"><CalendarRange className="h-4 w-4" />Personalizado</span></SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>Escolha a ordem de data dos resultados</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {sortMode === "personalizado" && (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="inline-flex items-center gap-2">
                          <CalendarRange className="h-4 w-4" /> Intervalo de datas
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <DayCalendar mode="range" selected={dateRange} onSelect={(v?: DateRange) => { setDateRange(v || { from: undefined, to: undefined }); setPage(1); }} numberOfMonths={2} />
                      </PopoverContent>
                    </Popover>
                  )}
                  {tags.map((t) => (
                    <TooltipProvider key={t}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant={tag === t ? "default" : "outline"} onClick={() => { setPage(1); setTag(tag === t ? null : t); }} className="capitalize">
                            {t}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Filtrar por tag: {t}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {isLoading && Array.from({ length: 9 }).map((_, i) => (
                  <Card key={i} className="h-72 animate-pulse" />
                ))}
                {!isLoading && ranked.map((post: BlogPostListItem, idx: number) => <PostCard key={post.id} post={post} highlight={idx === 0} />)}
              </div>

              {!isLoading && ranked.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">Nenhum artigo encontrado.</p>
                </div>
              )}

              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)); }} />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(0, page - 3), page + 2).map((p) => (
                      <PaginationItem key={p}>
                        <PaginationLink href="#" isActive={p === page} onClick={(e) => { e.preventDefault(); setPage(p); }}>
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(totalPages, p + 1)); }} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <Link to="/" className="text-muted-foreground hover:text-primary">Voltar para a página inicial</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
