import { CheckCircle2, Clock, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "LANZA EN TIEMPO RÉCORD",
    description: "Olvídate de semanas de frustración. Tu landing page profesional estará en línea y lista para recibir tráfico en 48 horas o menos."
  },
  {
    icon: TrendingUp,
    title: "CONVIERTE VISITANTES EN CLIENTES",
    description: "Usamos una estructura probada que guía a tus prospectos paso a paso, eliminando dudas y llevándolos directamente al botón de compra."
  },
  {
    icon: Shield,
    title: "PROYECTA MÁXIMA CONFIANZA",
    description: "Con un diseño premium y una velocidad de carga instantánea, tu marca se verá profesional y confiable desde el primer segundo."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-16">
          LA TRANSFORMACIÓN PARA TU NEGOCIO
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-heading mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
