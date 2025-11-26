import { Zap, Shield, Award, Wrench } from "lucide-react";
import { Card } from "./ui/card";
import placasSolar from "@/assets/placas-solar-png.png";

const SystemGuarantee = () => {
  const guarantees = [
    {
      icon: Wrench,
      title: "Instalação",
      years: "1 ano",
      description: "Suporte técnico e assessoria completa",
    },
    {
      icon: Shield,
      title: "Placas Fotovoltaicas",
      years: "10-15 anos",
      description: "Garantia de fábrica com durabilidade",
    },
    {
      icon: Zap,
      title: "Inversor",
      years: "7 anos",
      description: "Proteção para o coração do sistema",
    },
    {
      icon: Award,
      title: "Performance",
      years: "25 anos",
      description: "Eficiência garantida por décadas",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Garantias do Seu <span className="text-primary">Sistema</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tranquilidade e segurança em cada etapa do seu investimento
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto min-h-[600px] flex items-center justify-center">
          {/* Central Image (desktop only) */}
          <div className="hidden lg:block relative z-20 w-full max-w-md lg:max-w-lg isolate bg-transparent-important">
            <img
              src={placasSolar}
              alt="Placas solares — Sistema de garantias"
              className="w-full rounded-2xl shadow-strong img-remove-white"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Guarantee Items Around Image */}
          <div className="hidden lg:block">
            {guarantees.map((item, index) => {
              const Icon = item.icon;
              const positions = [
                { top: '10%', left: '5%' },
                { top: '10%', right: '5%' },
                { bottom: '10%', left: '5%' },
                { bottom: '10%', right: '5%' },
              ];
              
              return (
                <Card
                  key={index}
                  className="absolute p-6 border-2 hover:border-primary hover:shadow-strong transition-all duration-300 animate-scale-in w-64 bg-background/95 backdrop-blur-sm"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    ...positions[index]
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-1">{item.years}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  {/* Connection Line */}
                  <div 
                    className="absolute w-12 h-0.5 bg-primary/30" 
                    style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-3rem',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  />
                  {/* Connection Dot */}
                  <div 
                    className="absolute w-3 h-3 rounded-full bg-primary border-2 border-background" 
                    style={{
                      [index % 2 === 0 ? 'right' : 'left']: '-3.75rem',
                      top: '50%',
                      transform: 'translateY(-50%)'
                    }}
                  />
                </Card>
              );
            })}
          </div>

          {/* Mobile View — top-left cards, centered image, bottom-right cards */}
          <div className="lg:hidden w-full px-4">
            <div className="flex flex-col gap-8">
              <div>
                <div className="mr-auto w-[85%] max-w-[420px] space-y-4">
                  {guarantees.slice(0, 2).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={`top-${index}`} className="p-6 border-2 hover:border-primary transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-strong rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                            <p className="text-2xl font-bold text-primary mb-1">{item.years}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="mx-auto w-[85%] max-w-[420px]">
                  <img
                    src={placasSolar}
                    alt="Placas solares — Sistema de garantias"
                    className="w-full rounded-2xl shadow-strong img-remove-white"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div>
                <div className="ml-auto w-[85%] max-w-[420px] space-y-4">
                  {guarantees.slice(2).map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={`bottom-${index}`} className="p-6 border-2 hover:border-primary transition-all duration-300 bg-background/95 backdrop-blur-sm shadow-strong rounded-lg">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                            <p className="text-2xl font-bold text-primary mb-1">{item.years}</p>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
          {/* Mobile spacing now controlled by section layout */}
      </div>
    </section>
  );
};

export default SystemGuarantee;
