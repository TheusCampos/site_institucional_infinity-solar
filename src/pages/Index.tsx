import Header from "@/components/Header";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
const SystemGuarantee = lazy(() => import("@/components/SystemGuarantee"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Brands = lazy(() => import("@/components/Brands"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Map = lazy(() => import("@/components/Map"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
import Stats from "@/components/Stats";
import teamInstall from "@/assets/team-install.jpg";
import commercialImg from "@/assets/galeria-01.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Leaf } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Infinity Solar — Energia Solar Residencial e Comercial",
    description: "Projetos personalizados, garantia e instalação profissional. Solicite seu orçamento.",
    url: typeof window !== "undefined" ? window.location.href : undefined,
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Infinity Solar",
      url: typeof window !== "undefined" ? window.location.origin : undefined,
      logo: "/src/assets/logo-infinity-png.png",
    },
  });
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="relative">
        <Stats />
      </section>
      
      {/* Who We Are Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in space-y-8">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Nossa História
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Quem <span className="text-primary">Somos</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Infinity Solar nasceu com o propósito de democratizar o acesso à energia limpa e sustentável. 
                  Somos especialistas em sistemas de energia solar fotovoltaica, oferecendo soluções completas 
                  e personalizadas para cada cliente.
                </p>
              </div>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Excelência Técnica</h3>
                    <p className="text-muted-foreground">
                      Equipe altamente qualificada com certificações reconhecidas no mercado de energia solar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Garantia Total</h3>
                    <p className="text-muted-foreground">
                      Garantia estendida em todos os equipamentos e serviços, assegurando sua tranquilidade.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Leaf className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Compromisso Ambiental</h3>
                    <p className="text-muted-foreground">
                      Cada projeto contribui para um futuro mais sustentável e reduz a pegada de carbono.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="heroPrimary" size="lg" asChild className="group">
                <Link to="/projetos">
                  Conheça Nossa Missão
                  <CheckCircle2 className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image collage */}
            <div className="relative lg:order-last animate-scale-in">
              <div className="absolute -left-6 top-8 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-primary/10 rounded-2xl"></div>
              <div className="relative z-10 w-[85%] sm:w-[75%] md:w-[70%] rounded-2xl overflow-hidden shadow-strong hover:shadow-elegant transition-shadow duration-300 -translate-y-[40px]">
                <img
                  src={teamInstall}
                  alt="Equipe Infinity Solar instalando painéis solares"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="absolute right-0 bottom-0 w-[70%] sm:w-[65%] md:w-[60%] rounded-2xl overflow-hidden shadow-strong translate-y-[40px]">
              <img
                src={commercialImg}
                alt="Galeria 01 – Projeto Solar Comercial"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-24" />}><SystemGuarantee /></Suspense>
      <Suspense fallback={<div className="h-24" />}><WhyChooseUs /></Suspense>
      <Suspense fallback={<div className="h-24" />}><HowItWorks /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Services /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Projects /></Suspense>

      
      <Suspense fallback={<div className="h-24" />}><Brands /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Testimonials /></Suspense>
      <Suspense fallback={<div className="h-24" />}><FAQ /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Contact /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Map /></Suspense>
      <Suspense fallback={<div className="h-24" />}><Footer /></Suspense>
      <Suspense fallback={<div className="h-12" />}><WhatsAppButton /></Suspense>
    </div>
  );
};

export default Index;
