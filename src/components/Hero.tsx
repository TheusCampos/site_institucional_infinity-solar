import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-0 outline-none ring-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Instalação de painéis solares profissional"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          sizes="100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-20">
        <div className="mx-auto text-center max-w-4xl lg:max-w-none">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-in-up tracking-tight lg:tracking-tighter lg:whitespace-nowrap leading-tight">
            Energia Limpa.{" "}
            <span className="text-secondary">Economia Real.</span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 animate-fade-in max-w-2xl mx-auto">
            Instale hoje e reduza sua conta de luz. Projetos personalizados com garantia e instalação profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contatos">
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroPrimary" size="lg" asChild>
              <Link to="/projetos">
                Ver Projetos Realizados
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Dobras angulares nos cantos (como a imagem de referência) */}
      {/* Canto inferior esquerdo */}
      <div className="pointer-events-none select-none absolute bottom-0 left-0 z-20">
        <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          {/* Triângulo principal da dobra (usa a cor de background do tema) */}
          <polygon points="0,0 0,80 200,80" className="fill-background" />
        </svg>
      </div>

      {/* Canto inferior direito */}
      <div className="pointer-events-none select-none absolute bottom-0 right-0 z-20">
        <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
          {/* Triângulo principal da dobra (usa a cor de background do tema) */}
          <polygon points="200,0 200,80 0,80" className="fill-background" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;
