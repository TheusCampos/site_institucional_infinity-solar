import { Card, CardContent } from "./ui/card";
import { Star, Play } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment:
        "Excelente atendimento e instalação impecável. Minha conta de luz reduziu 92% já no primeiro mês. Recomendo!",
      type: "text",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Marina Santos",
      location: "Campinas, SP",
      rating: 5,
      comment:
        "Investimento que valeu cada centavo. A equipe é profissional e o sistema funciona perfeitamente há 2 anos.",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1508243529287-e21914733111?w=400&h=300&fit=crop",
    },
    {
      name: "Roberto Oliveira",
      location: "Jundiaí, SP",
      rating: 5,
      comment:
        "Processo muito transparente, desde o orçamento até a instalação. O retorno do investimento está sendo melhor que o esperado.",
      type: "text",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Ana Paula Costa",
      location: "Sorocaba, SP",
      rating: 5,
      comment:
        "Melhor decisão para minha empresa. Reduzi drasticamente os custos operacionais e ainda contribuo com o meio ambiente.",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=300&fit=crop",
    },
    {
      name: "José Fernando",
      location: "Barueri, SP",
      rating: 5,
      comment:
        "Sistema superou minhas expectativas. O monitoramento online é ótimo e o suporte pós-venda é excelente.",
      type: "text",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      name: "Luciana Ferreira",
      location: "São Bernardo, SP",
      rating: 5,
      comment:
        "Instalação rápida e limpa. A economia na conta é real e fiquei impressionada com a qualidade dos equipamentos.",
      type: "text",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/30"></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/30"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossos <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de quem já economiza com energia solar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {testimonial.type === "video" ? (
                  <div className="relative mb-4 rounded-lg overflow-hidden group cursor-pointer">
                    <img
                      src={testimonial.thumbnail}
                      alt={`Depoimento de ${testimonial.name}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>

                {testimonial.type === "video" && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
