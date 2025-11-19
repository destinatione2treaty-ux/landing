import { CheckCircle2, CreditCard, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta-section" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-12">
            TU ACCESO INSTANTÁNEO A TODO ESTO:
          </h2>

          <div className="bg-card p-8 md:p-12 rounded-2xl border-2 border-primary/50 mb-12">
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">Landing Page Profesional de Alta Conversión (Valor $297)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">Guía de Copywriting en PDF (Bono - Valor $67)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">Paleta de Colores Personalizada (Bono - Valor $97)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground text-lg">Instalación en tu Dominio (Bono - Valor $183)</p>
              </div>
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground line-through text-xl">Valor Total: $644</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-heading text-foreground">Precio Especial Hoy:</span>
                <span className="text-4xl md:text-5xl font-heading text-primary">$49.99</span>
              </div>
            </div>

            <a 
              href="https://pay.hotmart.com/M102318829D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-xl py-6 md:py-8 rounded-xl font-bold uppercase tracking-wider hover-lift shadow-glow-primary transition-colors"
            >
              <span className="md:hidden">¡OBTENER OFERTA AHORA!</span>
              <span className="hidden md:inline">SÍ, ¡QUIERO MI LANDING PAGE POR SÓLO $49.99!</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm">Visa • Mastercard • PayPal</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">Garantía de 7 Días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
