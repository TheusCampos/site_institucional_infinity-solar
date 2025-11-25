import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import headerLogo from "@/assets/logo-infinity-png.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={headerLogo} alt="Infinity Solar" className="h-[80px] w-auto" loading="lazy" decoding="async" />
            </div>
            <p className="text-background/80 text-sm mb-4">
              Energia limpa. Economia real. Transformando o futuro com sustentabilidade.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578164110435&locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/infinitysolar_energy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-background/80 hover:text-primary transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contatos" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Energia Solar Residencial</li>
              <li>Energia Solar Comercial</li>
              <li>Manutenção Preventiva</li>
              <li>Consultoria Técnica</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-background/80">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Av. Ulisses Pompeu de Campos, 3241<br />Centro Norte, Várzea Grande – MT</span>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+5565996961418" className="hover:text-primary transition-colors">
                  (65) 99696-1418
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+556530294171" className="hover:text-primary transition-colors">
                  (65) 3029-4171
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:infinitysolarvg@gmail.com" className="hover:text-primary transition-colors">
                  infinitysolarvg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="container mx-auto px-4 flex items-center justify-between text-sm text-background/60">
            <p className="text-left">&copy; {new Date().getFullYear()} Infinity Solar. Todos os direitos reservados.</p>
            <p className="text-right">
              Desenvolvido por
              {" "}
              <a href="https://matheusdev.site/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">
                Matheus Campos
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
