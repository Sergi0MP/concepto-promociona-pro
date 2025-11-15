import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  className?: string;
};

const Header = ({ className = "" }: HeaderProps) => {
  const navigate = useNavigate();

  // Scroll animado para Productos Destacados
  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const section = document.getElementById('catalogo-productos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('catalogo-productos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Scroll animado para Catálogos de Temporada
  const scrollToCatalogosTemporada = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const section = document.getElementById('catalogos-temporada');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('catalogos-temporada');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  // Scroll animado para Quiénes Somos
  const scrollToQuienesSomos = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const section = document.getElementById('quienes-somos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('quienes-somos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className={`absolute top-0 z-50 w-full bg-transparent ${className}`}>
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">Concepto Creativo</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Inicio
          </Link>
          <a
            href="#catalogo-productos"
            onClick={scrollToCatalog}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            Productos Destacados
          </a>
          <a
            href="#catalogos-temporada"
            onClick={scrollToCatalogosTemporada}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            Catálogos de Temporada
          </a>
          <a
            href="#quienes-somos"
            onClick={scrollToQuienesSomos}
            className="text-sm font-medium text-white hover:text-white/80 transition-colors cursor-pointer"
          >
            Quiénes Somos
          </a>
        </nav>
        <div className="flex items-center">
          <Link to="/contacto">
            <Button className="bg-white/20 text-white border border-white/40 hover:bg-white/30 font-semibold backdrop-blur-sm">
              Solicitar Cotización
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;



