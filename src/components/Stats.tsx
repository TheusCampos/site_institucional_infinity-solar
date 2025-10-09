const Stats = () => {
  const stats = [
    {
      value: "500+",
      label: "Projetos Instalados"
    },
    {
      value: "10+",
      label: "Anos de Experiência"
    },
    {
      value: "98%",
      label: "Clientes Satisfeitos"
    }
  ];

  return (
    <section className="py-12 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Frase Chamativa */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Transformando energia solar em{" "}
              <span className="text-primary">resultados reais</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Números que comprovam nossa excelência e compromisso com cada projeto
            </p>
          </div>

          {/* Stats à Direita */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
