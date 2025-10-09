import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import processDiagram from "@/assets/process-diagram.jpg";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = ["todos", "economia", "instalação", "manutenção", "legislação"];

  const articles = [
    {
      id: 1,
      title: "Como Calcular o ROI de um Sistema de Energia Solar",
      excerpt: "Aprenda a calcular o retorno sobre investimento do seu sistema fotovoltaico e entenda quando você começará a economizar de verdade.",
      category: "economia",
      image: residentialImg,
      date: "2025-01-15",
      readTime: "5 min",
      author: "João Silva",
    },
    {
      id: 2,
      title: "Passo a Passo: Instalação de Painéis Solares Residenciais",
      excerpt: "Conheça todas as etapas da instalação de um sistema solar residencial, desde o projeto até a ativação pela concessionária.",
      category: "instalação",
      image: processDiagram,
      date: "2025-01-10",
      readTime: "8 min",
      author: "Maria Santos",
    },
    {
      id: 3,
      title: "Manutenção Preventiva: Mantenha Seu Sistema Solar em Alta Performance",
      excerpt: "Dicas essenciais de manutenção para garantir a máxima eficiência dos seus painéis solares ao longo dos anos.",
      category: "manutenção",
      image: commercialImg,
      date: "2025-01-05",
      readTime: "6 min",
      author: "Carlos Oliveira",
    },
    {
      id: 4,
      title: "Lei 14.300/2022: O Marco Legal da Energia Solar no Brasil",
      excerpt: "Entenda as mudanças trazidas pelo novo marco legal e como isso impacta quem deseja instalar energia solar.",
      category: "legislação",
      image: residentialImg,
      date: "2024-12-28",
      readTime: "7 min",
      author: "Ana Costa",
    },
    {
      id: 5,
      title: "5 Formas de Maximizar a Economia com Energia Solar",
      excerpt: "Estratégias práticas para otimizar seu consumo e aproveitar ao máximo o sistema de compensação de créditos.",
      category: "economia",
      image: commercialImg,
      date: "2024-12-20",
      readTime: "5 min",
      author: "Pedro Almeida",
    },
    {
      id: 6,
      title: "Energia Solar em Indústrias: Benefícios e Desafios",
      excerpt: "Como sistemas solares de grande porte estão transformando o setor industrial e reduzindo custos operacionais.",
      category: "economia",
      image: processDiagram,
      date: "2024-12-15",
      readTime: "10 min",
      author: "Roberto Lima",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "todos" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Blog <span className="text-primary">Infinity Solar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdos exclusivos sobre energia solar, economia, tecnologia e sustentabilidade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-2 hover:border-primary hover:shadow-strong transition-all duration-300 max-w-5xl mx-auto animate-scale-in">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  Destaque
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 capitalize">{featuredArticle.category}</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredArticle.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button variant="heroPrimary">
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar artigos..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    className="capitalize"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.slice(1).map((article, index) => (
                <Card
                  key={article.id}
                  className="overflow-hidden border-2 hover:border-primary hover:shadow-medium transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 left-3 capitalize">{article.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      Ler mais
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum artigo encontrado. Tente outra busca ou categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
