import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceWind from "@/assets/service-wind.jpg";
import serviceCharge from "@/assets/service-charge.jpg";

const Services = () => {
  const services = [
    {
      title: "Serviços De Painéis Solares",
      description: "Instalação completa de sistemas fotovoltaicos residenciais e comerciais com equipamentos de última geração.",
      image: serviceSolar,
    },
    {
      title: "Serviços De Turbinas Eólicas",
      description: "Soluções integradas de energia eólica para complementar seu sistema de geração renovável.",
      image: serviceWind,
    },
    {
      title: "Controladores De Carga",
      description: "Gestão inteligente de energia com sistemas de armazenamento e controle de carga avançados.",
      image: serviceCharge,
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
              <div className="relative overflow-hidden h-64 rounded-[28px] bg-background shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button variant="default" className="group/btn">
                  Saber Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
