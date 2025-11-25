import { CheckCircle2 } from "lucide-react";
import processDiagram from "@/assets/process-diagram.png";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Energético",
      description: "Análise completa do seu consumo e viabilidade técnica do local.",
    },
    {
      number: "02",
      title: "Projeto Personalizado",
      description: "Desenvolvimento do projeto sob medida para suas necessidades.",
    },
    {
      number: "03",
      title: "Instalação Profissional",
      description: "Equipe certificada executa a instalação com segurança e qualidade.",
    },
    {
      number: "04",
      title: "Comissionamento",
      description: "Ativação do sistema e conexão com a concessionária de energia.",
    },
    {
      number: "05",
      title: "Manutenção Contínua",
      description: "Suporte técnico e monitoramento para garantir máxima eficiência.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do projeto à instalação, cuidamos de cada detalhe para garantir seu sistema perfeito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg hover:bg-background transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    {step.title}
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagram Image sem container de fundo */}
          <div className="relative bg-transparent-important">
            <img
              src={processDiagram}
              alt="Diagrama do processo de instalação"
              className="w-full h-full object-contain bg-transparent-important"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
