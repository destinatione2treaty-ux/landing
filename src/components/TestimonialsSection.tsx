import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María P.",
    text: "Este producto superó todas mis expectativas. En solo 2 semanas vi resultados reales. ¡Lo recomiendo al 100%!",
    rating: 5
  },
  {
    name: "Carlos R.",
    text: "Finalmente algo que funciona de verdad. Claro, directo y sin rodeos. Exactamente lo que necesitaba.",
    rating: 5
  },
  {
    name: "Ana G.",
    text: "La mejor inversión que he hecho este año. El contenido es oro puro y el soporte excepcional.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-heading text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
