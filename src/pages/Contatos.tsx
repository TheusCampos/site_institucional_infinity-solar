import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Contatos = () => {
  useSEO({
    title: "Contatos | Infinity Solar",
    description: "Fale conosco por telefone, e-mail ou WhatsApp. Veja nossa localização e horários.",
    url: typeof window !== "undefined" ? window.location.href : undefined,
    type: "website",
  });
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["(65) 99696-1418", "(65) 3029-4171"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["infinitysolarvg@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Av. Ulisses Pompeu de Campos, 3241", "Centro Norte, Várzea Grande – MT"],
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 17h"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Contatos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos prontos para transformar sua energia. Fale conosco e descubra como podemos ajudar você.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" aria-hidden="true">
          <svg data-testid="contact-cards-top-wave" className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-secondary/5"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-medium animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <Contact />

      {/* Map */}
      <Map />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contatos;
