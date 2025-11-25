import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import processDiagram from "@/assets/process-diagram.png";

const Projetos = () => {
  useSEO({
    title: "Projetos | Infinity Solar",
    description: "Detalhe do processo, cases e benefícios dos projetos de energia solar.",
    url: typeof window !== "undefined" ? window.location.href : undefined,
    type: "website",
  });
  const timeline = [
    {
      phase: "Análise e Viabilidade",
      duration: "1-2 dias",
      description: "Avaliação do local, análise de consumo energético e estudo de viabilidade técnica e financeira.",
      details: ["Vistoria técnica in loco", "Análise de faturas de energia", "Dimensionamento preliminar", "Proposta comercial"],
    },
    {
      phase: "Projeto Executivo",
      duration: "5-7 dias",
      description: "Desenvolvimento completo do projeto elétrico e estrutural conforme normas técnicas.",
      details: ["Memorial descritivo", "Projeto elétrico", "Projeto estrutural", "ART/TRT dos responsáveis técnicos"],
    },
    {
      phase: "Aprovação e Homologação",
      duration: "15-30 dias",
      description: "Processo de aprovação junto à concessionária de energia e órgãos competentes.",
      details: ["Solicitação de acesso", "Aprovação da concessionária", "Vistoria prévia", "Parecer de acesso"],
    },
    {
      phase: "Instalação",
      duration: "3-5 dias",
      description: "Execução da instalação com equipe técnica especializada e certificada.",
      details: ["Montagem das estruturas", "Instalação dos módulos", "Instalação do inversor", "Cabeamento e proteções", "Testes e comissionamento"],
    },
    {
      phase: "Conexão e Ativação",
      duration: "5-10 dias",
      description: "Vistoria final da concessionária e ativação do sistema de compensação de energia.",
      details: ["Vistoria da concessionária", "Troca do medidor", "Ativação do sistema", "Treinamento do cliente"],
    },
  ];

  const caseStudies = [
    {
      title: "Residência Alto Padrão - Alphaville",
      image: residentialImg,
      power: "12 kWp",
      panels: "30 módulos de 400W",
      savings: "R$ 1.200/mês",
      roi: "4-5 anos",
      description: "Sistema completo com monitoramento inteligente e backup de energia para residência de luxo.",
    },
    {
      title: "Indústria Metalúrgica - Jundiaí",
      image: commercialImg,
      power: "150 kWp",
      panels: "375 módulos de 400W",
      savings: "R$ 25.000/mês",
      roi: "3-4 anos",
      description: "Instalação em grande escala com estruturas especiais para telhado industrial.",
    },
    {
      title: "Condomínio Residencial - Campinas",
      image: residentialImg,
      power: "65 kWp",
      panels: "160 módulos de 405W",
      savings: "R$ 8.500/mês",
      roi: "3-4 anos",
      description: "Projeto sustentável para condomínio com redução significativa nas despesas comuns.",
    },
    {
      title: "Centro Comercial - Sorocaba",
      image: commercialImg,
      power: "200 kWp",
      panels: "500 módulos de 400W",
      savings: "R$ 35.000/mês",
      roi: "3 anos",
      description: "Maior projeto comercial da região com economia expressiva em energia.",
    },
    {
      title: "Propriedade Rural - Interior SP",
      image: residentialImg,
      power: "25 kWp",
      panels: "62 módulos de 405W",
      savings: "R$ 3.200/mês",
      roi: "4 anos",
      description: "Solução completa para propriedade rural com autonomia energética.",
    },
    {
      title: "Hospital Regional",
      image: commercialImg,
      power: "180 kWp",
      panels: "450 módulos de 400W",
      savings: "R$ 28.000/mês",
      roi: "3-4 anos",
      description: "Sistema crítico com backup para garantir funcionamento ininterrupto.",
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo dura um sistema de energia solar?",
      answer: "Os painéis solares têm garantia de 25 anos de eficiência mínima de 80%, mas podem durar mais de 30 anos. Os inversores têm vida útil de 10-15 anos.",
    },
    {
      question: "O sistema funciona à noite ou em dias nublados?",
      answer: "À noite não há geração, mas os créditos gerados durante o dia compensam o consumo. Em dias nublados a geração é reduzida mas não cessa completamente.",
    },
    {
      question: "É necessário fazer manutenção?",
      answer: "A manutenção é mínima. Recomenda-se limpeza dos painéis 2-3 vezes ao ano e inspeção anual do sistema elétrico.",
    },
    {
      question: "Qual o retorno do investimento?",
      answer: "Em média, o retorno do investimento (payback) ocorre entre 3 a 6 anos, dependendo do consumo e tamanho do sistema. Após isso, toda economia é lucro.",
    },
    {
      question: "Posso vender o excedente de energia?",
      answer: "No Brasil funciona através do sistema de compensação de créditos. O excedente gerado vira créditos para uso posterior, válidos por 60 meses.",
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
          <Breadcrumbs currentTitle="Projetos" />
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Nossos <span className="text-primary">Projetos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conheça em detalhes como desenvolvemos e executamos projetos de energia solar com excelência técnica.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contatos">
                Solicitar Orçamento
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/30"></path>
          </svg>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/30"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Processo do <span className="text-primary">Projeto</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do primeiro contato até a ativação do sistema, acompanhe cada etapa do nosso processo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Map-style Path */}
            <svg className="absolute left-4 top-0 w-1 h-full" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#pathGradient)" strokeWidth="3" strokeDasharray="8,8" />
            </svg>

            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-12 pb-16 last:pb-0 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Map Pin Icon */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-4 border-background shadow-glow flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                
                {/* Connecting Line Segment */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/10"></div>
                )}
                
                <Card className="ml-8 border-2 hover:border-primary hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold text-foreground">
                        {item.phase}
                      </h3>
                      <Badge className="bg-secondary text-secondary-foreground">
                        {item.duration}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cases de <span className="text-primary">Sucesso</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Projetos reais com resultados comprovados e clientes satisfeitos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary hover:shadow-strong transition-all duration-500 animate-scale-in hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Potência</div>
                      <div className="text-xl font-bold text-primary">{study.power}</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Economia Mensal</div>
                      <div className="text-xl font-bold text-primary">{study.savings}</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Painéis</div>
                      <div className="text-sm font-semibold text-foreground">{study.panels}</div>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">ROI Estimado</div>
                      <div className="text-sm font-semibold text-foreground">{study.roi}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${processDiagram})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vantagens da <span className="text-primary">Energia Solar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra todos os benefícios de investir em energia limpa e sustentável.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Economia Imediata", desc: "Reduza até 95% da sua conta de energia logo nos primeiros meses." },
              { title: "Valorização do Imóvel", desc: "Imóveis com energia solar valorizam até 30% no mercado." },
              { title: "Energia Limpa", desc: "Contribua para um planeta mais sustentável com energia 100% renovável." },
              { title: "Baixa Manutenção", desc: "Manutenção mínima com vida útil superior a 25 anos." },
              { title: "Independência Energética", desc: "Proteja-se contra aumentos nas tarifas de energia." },
              { title: "Retorno Garantido", desc: "Payback entre 3-6 anos com economia garantida por décadas." },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 border-2 hover:border-primary transition-all duration-300 backdrop-blur-sm bg-background/80 hover:bg-background/95 hover:shadow-strong hover:-translate-y-1 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-1 w-12 bg-primary/50 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Solar Works */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Funciona a <span className="text-primary">Energia Solar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda o processo de geração de energia solar fotovoltaica.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                step: "01",
                title: "Captação Solar",
                desc: "Os painéis fotovoltaicos captam a luz do sol e a convertem em energia elétrica em corrente contínua (CC).",
              },
              {
                step: "02",
                title: "Conversão de Energia",
                desc: "O inversor solar transforma a corrente contínua em corrente alternada (CA), compatível com sua rede elétrica.",
              },
              {
                step: "03",
                title: "Distribuição",
                desc: "A energia é distribuída para todos os equipamentos da sua casa ou empresa através do quadro de distribuição.",
              },
              {
                step: "04",
                title: "Medição Bidirecional",
                desc: "O excedente de energia volta para a rede da concessionária, gerando créditos que reduzem sua conta.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start animate-fade-in-up group" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="h-1 w-12 bg-primary/30 rounded-full mb-3 group-hover:w-20 transition-all duration-300"></div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projetos;
