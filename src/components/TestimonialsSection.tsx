import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carmen Cecilia",
      business: "People Sin Límites",
      role: "Coach & Tarot",
      text: "La landing page superó mis expectativas. El diseño es hermoso y profesional, y lo mejor es que empecé a recibir consultas desde el primer día. Totalmente recomendado.",
      rating: 5
    },
    {
      name: "Ernesto Márquez",
      business: "Proyecto Lumen",
      role: "Transformación Masculina",
      text: "Como desarrollador, aprecio la calidad del código y el diseño. Mi landing para Proyecto Lumen quedó perfecta y mis clientes potenciales me dicen que se ve muy profesional.",
      rating: 5
    },
    {
      name: "Alejandro Suárez",
      business: "Disuaferca",
      role: "Importación & Exportación",
      text: "Necesitaba una presencia web rápida para mi negocio de importación. En 48 horas tenía mi landing funcionando. La inversión se pagó sola con los primeros clientes.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Más de 50 emprendedores ya transformaron su negocio
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />

                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-700 pt-4">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.business}</p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            ✨ Únete a decenas de emprendedores que ya están convirtiendo visitantes en clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;