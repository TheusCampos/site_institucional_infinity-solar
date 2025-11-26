import { Button } from "./ui/button";
import { memo } from "react";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Link } from "react-router-dom";
import { resolvePicture } from "@/lib/imageRegistry";

const Projects = () => {
  const galleryAssets = import.meta.glob("/src/assets/galeria-*.jpeg", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
  const galleryPaths = Object.keys(galleryAssets)
    .sort((a, b) => {
      const na = Number(a.match(/galeria-(\d+)/)?.[1] || 0);
      const nb = Number(b.match(/galeria-(\d+)/)?.[1] || 0);
      return na - nb;
    });
  const projects = galleryPaths.slice(0, 12).map((p, idx) => {
    const n = Number(p.match(/galeria-(\d+)/)?.[1] || idx + 1);
    return {
      id: idx + 1,
      title: `Projeto Galeria ${String(n).padStart(2, "0")}`,
      image: p,
    } as { id: number; title: string; image: string };
  });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Galeria de projetos com foco visual e navegação simples.
          </p>
        </div>

        <div className="mb-12">
          <Carousel opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden border hover:shadow-medium transition-all duration-300 group">
                    <div className="relative aspect-[4/3]">
                      {(() => {
                        const pic = resolvePicture(project.image);
                        return (
                        <picture className="block h-full w-full">
                          {pic.webp && <source srcSet={pic.webp} type="image/webp" />}
                          <img
                            src={pic.img}
                            alt={project.title}
                            className="block w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            decoding="async"
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                          />
                        </picture>
                        );
                      })()}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/80 backdrop-blur-sm border" />
            <CarouselNext className="bg-background/80 backdrop-blur-sm border" />
          </Carousel>
        </div>

        <div className="text-center">
          <Button variant="heroPrimary" size="lg" asChild>
            <Link to="/projetos">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
