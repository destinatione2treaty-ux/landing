import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué necesitan de mí para empezar?",
    answer: "Solo necesitamos los textos e imágenes de tu producto. Si no los tienes, ¡nuestros bonos te ayudarán a crearlos!"
  },
  {
    question: "¿En cuánto tiempo entregan la landing page?",
    answer: "Una vez que nos entregas todo el material, tu landing estará lista en 48 horas hábiles."
  },
  {
    question: "¿Puedo pedir cambios después de la entrega?",
    answer: "Sí, tu compra incluye una ronda de ajustes menores para asegurar que todo quede perfecto."
  },
  {
    question: "¿El servicio incluye el hosting?",
    answer: "El hosting no está incluido, pero te entregamos los archivos listos para subir a cualquier hosting o te la dejamos instalada en plataformas de alto rendimiento como Vercel."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-16">
          Preguntas Frecuentes (FAQ)
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
