import { Zap, Shield, TrendingDown, Award, Users, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Instalação Rápida",
      description: "Projetos executados em tempo recorde sem comprometer a qualidade.",
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "25 anos de garantia nos painéis e 10 anos nos inversores.",
    },
    {
      icon: TrendingDown,
      title: "Economia Garantida",
      description: "Reduza até 95% da sua conta de energia desde o primeiro mês.",
    },
    {
      icon: Award,
      title: "Equipamentos Premium",
      description: "Trabalhamos apenas com as melhores marcas do mercado.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e com anos de experiência.",
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description: "Suporte técnico e manutenção para máxima performance.",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-[30px_1fr_30px]">
          <div className="col-start-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Nos <span className="text-primary">Escolher?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiência, qualidade e compromisso com resultados que fazem a diferença no seu investimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary hover:shadow-medium transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
