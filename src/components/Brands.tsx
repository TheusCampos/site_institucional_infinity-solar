import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  const brands = [
    { name: "Canadian Solar", logo: "CS" },
    { name: "Jinko Solar", logo: "JS" },
    { name: "Trina Solar", logo: "TS" },
    { name: "GoodWe", logo: "GW" },
    { name: "Growatt", logo: "GT" },
    { name: "Fronius", logo: "FR" },
  ];

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marcas que <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipamentos premium das melhores marcas do mercado mundial
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="flex items-center justify-center p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-all duration-300 group">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {brand.logo}
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {brand.name}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
