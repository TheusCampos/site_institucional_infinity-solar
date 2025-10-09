import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import faqTechnician from "@/assets/faq-technician.jpg";

const FAQ = () => {
  const faqs = [
    {
      question: "Ao contrário da crença popular, Lorem Ipsum?",
      answer:
        "É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout. Esse ponto de uso é um fato estabelecido há muito tempo.",
    },
    {
      question: "Muitas páginas de pacotes de editoração eletrônica?",
      answer:
        "O Lorem Ipsum padrão usado desde 1500 é reproduzido abaixo para os interessados. As seções 1.10.32 e 1.10.33 do 'de Finibus Bonorum et Malorum' de Cícero também são reproduzidas em sua forma original exata.",
    },
    {
      question: "Lorem Ipsum é simplesmente dumm iandtype?",
      answer:
        "Existem muitas variações de passagens de Lorem Ipsum disponíveis, mas a maioria sofreu alterações de alguma forma, por humor injetado ou palavras aleatórias que não parecem nem um pouco críveis.",
    },
    {
      question: "Qual é o tempo de retorno do investimento?",
      answer:
        "O retorno sobre o investimento em energia solar varia entre 4 a 7 anos, dependendo do consumo e tarifa de energia local. Após este período, toda a energia gerada representa economia pura.",
    },
    {
      question: "Como funciona o sistema em dias nublados?",
      answer:
        "Os painéis solares continuam gerando energia mesmo em dias nublados, porém com eficiência reduzida. O sistema é dimensionado considerando estas variações climáticas para garantir a economia esperada.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* FAQ Content */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary mb-2">
              PERGUNTE ALGO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Você Tem Alguma <span className="text-primary">Pergunta</span>, Por Favor?
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-4 bg-background hover:border-primary transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-[36px] overflow-hidden shadow-lg md:shadow-xl animate-scale-in bg-background">
              <img
                src={faqTechnician}
                alt="Técnico especializado em energia solar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
