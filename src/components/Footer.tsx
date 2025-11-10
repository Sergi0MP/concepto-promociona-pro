const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t-4 border-accent">
      <div className="container px-4">
        {/* Copyright ÚNICAMENTE */}
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
