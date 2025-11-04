import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si ya estamos en la página principal
    if (window.location.pathname === '/') {
      const section = document.getElementById('catalogo-productos');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Si estamos en otra página, navega primero al inicio
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('catalogo-productos');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
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
            Catálogo
          </a>
          <Link to="/nosotros" className="text-sm font-medium text-white hover:text-white/80 transition-colors">
            Quiénes Somos
          </Link>
          {/* ❌ ELIMINADO: Link de Contacto */}
        </nav>

        <div className="flex items-center">
          {/* ✅ CAMBIADO: Botón ahora va a /contacto */}
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

