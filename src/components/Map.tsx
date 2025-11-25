const Map = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-muted/30"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visite nosso escritório e conheça de perto nossos projetos
          </p>
        </div>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-border">
          <iframe
            src="https://www.google.com/maps?q=Av.%20Ulisses%20Pompeu%20de%20Campos%2C%203241%20-%20Centro%20Norte%2C%20V%C3%A1rzea%20Grande%20%E2%80%93%20MT&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Infinity Solar"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
