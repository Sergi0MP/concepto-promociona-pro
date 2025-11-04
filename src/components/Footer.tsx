import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t-4 border-accent">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Navigation Links */}
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className="text-sm hover:text-accent transition-colors duration-300 font-[Inter]"
            >
              Inicio
            </Link>
            <Link 
              to="/catalog" 
              className="text-sm hover:text-accent transition-colors duration-300 font-[Inter]"
            >
              Catálogo
            </Link>
            <Link 
              to="/contact" 
              className="text-sm hover:text-accent transition-colors duration-300 font-[Inter]"
            >
              Contacto
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm font-[Inter] opacity-90">
            © {currentYear} Concepto Creativo — Diseño, producción y promoción con propósito.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
