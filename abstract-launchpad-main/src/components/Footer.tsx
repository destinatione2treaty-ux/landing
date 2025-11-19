const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground text-sm">
          <p className="mb-2">
            © {currentYear} Plantilla Landing Page Digital. Todos los derechos reservados.
          </p>
          <p>
            <a 
              href="#disclaimer" 
              className="hover:text-primary transition-colors underline"
            >
              Descargo de Responsabilidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
