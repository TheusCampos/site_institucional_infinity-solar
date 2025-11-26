import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import headerLogo from "@/assets/logo-infinity-png.png";

const NAV_LINKS = Object.freeze([
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
  { name: "Blog", path: "/blog" },
  { name: "Contato", path: "/contatos" },
]);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      data-role="site-header"
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-medium" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="Início" translate="no">
            <img src={headerLogo} alt="Infinity Solar" className="h-[90px] w-auto" loading="eager" decoding="async" fetchPriority="high" />
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" translate="no" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-label={link.name}
                translate="no"
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                <span className="link-text">{link.name}</span>
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild>
              <Link to="/contatos">Solicitar Orçamento</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav role="navigation" translate="no" className="md:hidden pb-4 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={link.name}
                translate="no"
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                <span className="link-text">{link.name}</span>
              </Link>
            ))}
            <Button variant="hero" size="sm" className="w-full mt-2" asChild>
              <Link to="/contatos" onClick={() => setIsMobileMenuOpen(false)}>
                Solicitar Orçamento
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
