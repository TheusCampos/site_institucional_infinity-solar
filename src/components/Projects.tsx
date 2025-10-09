import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Residência Solar - Zona Sul",
      category: "residencial",
      image: residentialImg,
      power: "8.5 kWp",
      savings: "R$ 850/mês",
      location: "São Paulo, SP",
    },
    {
      id: 2,
      title: "Indústria Têxtil - Jundiaí",
      category: "comercial",
      image: commercialImg,
      power: "75 kWp",
      savings: "R$ 12.000/mês",
      location: "Jundiaí, SP",
    },
    {
      id: 3,
      title: "Condomínio Residencial",
      category: "residencial",
      image: residentialImg,
      power: "45 kWp",
      savings: "R$ 4.500/mês",
      location: "Campinas, SP",
    },
    {
      id: 4,
      title: "Supermercado Regional",
      category: "comercial",
      image: commercialImg,
      power: "120 kWp",
      savings: "R$ 18.000/mês",
      location: "Sorocaba, SP",
    },
  ];

  const filteredProjects =
    filter === "todos"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos <span className="text-primary">Realizados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Conheça alguns dos sistemas solares que projetamos e instalamos com excelência.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {["todos", "residencial", "comercial"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="capitalize"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden border-2 hover:border-primary hover:shadow-strong transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-[28px] bg-background shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Potência</div>
                    <div className="text-lg font-semibold text-primary">
                      {project.power}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Economia</div>
                    <div className="text-lg font-semibold text-primary">
                      {project.savings}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  📍 {project.location}
                </div>
                <Button variant="outline" className="w-full group" asChild>
                  <Link to="/projetos">
                    Ver Detalhes
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroPrimary" size="lg" asChild>
            <Link to="/projetos">Ver Todos os Projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
