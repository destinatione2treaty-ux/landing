import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 leading-tight">
          <span className="gradient-text text-glow">
            LA LANDING PAGE QUE SÍ VENDE
          </span>
          <br />
          <span className="text-foreground">
            LISTA PARA TI EN 48 HORAS
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Deja de pelear con la tecnología. Te entregamos una página de venta profesional, ultra-rápida y diseñada para convertir, para que solo te preocupes por vender tu producto.
        </p>

        <a 
          href="https://pay.hotmart.com/M102318829D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-8 py-4 md:py-6 rounded-lg font-bold uppercase tracking-wider hover-lift shadow-glow-primary transition-colors"
        >
          <span className="md:hidden">SÍ, ¡QUIERO MI LANDING YA!</span>
          <span className="hidden md:inline">SÍ, ¡QUIERO MI LANDING PAGE AHORA!</span>
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          ⭐⭐⭐⭐⭐ Más de 2,847 clientes satisfechos
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </section>
  );
};

export default HeroSection;
