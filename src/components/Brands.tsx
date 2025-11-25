import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Brands = () => {
  const logos = import.meta.glob("@/assets/logos/*.{png,webp,svg,jpg,jpeg}", { eager: true });
  const logoItems = Object.entries(logos)
    .map(([path, mod]) => {
      const src = (mod as { default: string }).default;
      const file = (path.split("/").pop() || "").replace(/\.[^.]+$/, "");
      const name = file.replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
      return { name, src };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

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
            {logoItems.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                <div className="flex items-center justify-center p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-all duration-300 group reveal">
                  <div className="text-center">
                    <img src={item.src} alt={item.name} className="h-[80px] w-auto object-contain mx-auto" loading="lazy" decoding="async" />
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
