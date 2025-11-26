import { Card, CardContent } from "./ui/card";
import { CheckCircle2 } from "lucide-react";
import residentialImg from "@/assets/Energia Solar Residencial.jpeg";
import commercialImg from "@/assets/Energia Solar Comercial.jpeg";
import preventiveImg from "@/assets/manutencao-preventiva.jpeg";

const Services = () => {
  const services = [
    {
      title: "Energia Solar Residencial",
      description: "Soluções completas para casas com projeto sob medida e alta eficiência.",
      image: residentialImg,
      highlights: [
        "Redução imediata na conta de luz",
        "Projeto personalizado para seu consumo",
        "Instalação rápida e segura",
      ],
      objectPositionClass: "",
    },
    {
      title: "Energia Solar Comercial",
      description: "Projetos escaláveis para empresas visando economia e performance.",
      image: commercialImg,
      highlights: [
        "Economia operacional e previsibilidade",
        "Escalabilidade para crescimento",
        "Monitoramento de desempenho",
      ],
      objectPositionClass: "",
    },
    {
      title: "Manutenção Preventiva",
      description: "Serviços periódicos para manter máxima eficiência e longevidade do sistema.",
      image: preventiveImg,
      highlights: [
        "Inspeções técnicas regulares",
        "Limpeza e ajustes de componentes",
        "Otimização de geração",
      ],
      objectPositionClass: "object-[50%_0%]",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-primary mb-2">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comece Com Uma <span className="text-primary">Estratégia</span>
            <br />E Termine Com <span className="text-primary">Sucesso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary hover:shadow-strong transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64 rounded-b-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover ${service.objectPositionClass} group-hover:scale-110 transition-transform duration-500`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-[2px]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
