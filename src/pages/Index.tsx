import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import SystemGuarantee from "@/components/SystemGuarantee";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Stats from "@/components/Stats";
import teamInstall from "@/assets/team-install.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Leaf } from "lucide-react";

const Index = () => {
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

            {/* Image */}
            <div className="relative animate-scale-in lg:order-last">
              <div className="rounded-2xl overflow-hidden shadow-strong hover:shadow-elegant transition-shadow duration-300">
                <img
                  src={teamInstall}
                  alt="Equipe Infinity Solar instalando painéis solares"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <SystemGuarantee />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Projects />
      <Brands />
      <Testimonials />
      <FAQ />
      <Contact />
      <Map />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
