import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Qué necesito para empezar?",
      answer: "Solo necesitas tener claro qué quieres vender o promocionar. Nosotros nos encargamos de todo lo demás: diseño, estructura, copywriting y puesta en línea. Si ya tienes un dominio, perfecto. Si no, te ayudamos a conseguir uno."
    },
    {
      question: "¿Qué pasa si no sé nada de tecnología?",
      answer: "¡No hay problema! Ese es exactamente el punto. Nosotros manejamos toda la parte técnica. Tú solo necesitas decirnos qué quieres comunicar y nosotros lo hacemos realidad. Además, incluimos 30 días de soporte para cualquier duda."
    },
    {
      question: "¿Puedo hacer cambios después de la entrega?",
      answer: "Sí. Incluimos 1 semana de ajustes post-entrega sin costo adicional. Después de ese período, puedes contratar ajustes menores o aprender a editarla tú mismo con la guía que te entregamos."
    },
    {
      question: "¿Está optimizada para móviles?",
      answer: "¡Absolutamente! Más del 70% de las visitas vienen de móviles. Tu landing page se verá perfecta en celulares, tablets y computadoras. Probamos en todos los dispositivos antes de entregarte."
    },
    {
      question: "¿Incluye formulario de contacto?",
      answer: "Sí, incluye un formulario de contacto completamente funcional. Los mensajes llegan directo a tu email. También podemos integrarlo con herramientas como Mailchimp, ActiveCampaign o WhatsApp si lo prefieres."
    },
    {
      question: "¿Qué pasa si no me gusta el diseño?",
      answer: "Trabajamos contigo para asegurarnos de que el diseño refleje tu marca. Hacemos una propuesta inicial basada en tus necesidades y luego refinamos hasta que estés 100% satisfecho. Si definitivamente no te convence, tenemos garantía de 7 días."
    },
    {
      question: "¿Cómo funciona el proceso de entrega?",
      answer: "1) Haces tu compra. 2) Te contactamos para conocer tu negocio. 3) En 24-48 horas te enviamos la primera versión. 4) Hacemos ajustes según tu feedback. 5) Entregamos la landing completa funcionando en tu dominio."
    },
    {
      question: "¿Puedo conectarla con Hotmart/Stripe/PayPal?",
      answer: "¡Claro! Podemos integrar botones de pago de cualquier plataforma: Hotmart, Stripe, PayPal, Mercado Pago, etc. Solo necesitas tus links de pago y nosotros los configuramos."
    },
    {
      question: "¿Incluye hosting?",
      answer: "La landing está lista para subir a cualquier hosting. Si ya tienes uno, perfecto. Si no, te recomendamos opciones gratuitas como Vercel o Netlify, y te ayudamos a configurarlo (incluido en el bonus de setup)."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Sí. Tienes 7 días para evaluar tu landing page. Si por cualquier razón no estás satisfecho, te devolvemos tu dinero completo, sin preguntas. Queremos que estés 100% feliz con tu inversión."
    },
    {
      question: "¿Cuánto tiempo tengo acceso a los bonos?",
      answer: "Los bonos (guías, paletas de colores, soporte) son tuyos para siempre. Los recibes por email inmediatamente después de tu compra y puedes usarlos cuando quieras, sin límite de tiempo."
    },
    {
      question: "¿El precio incluye el dominio?",
      answer: "El precio de $49.99 incluye el diseño y desarrollo de la landing page. El dominio se compra aparte (cuesta $10-15 al año). Sin embargo, te ayudamos con todo el proceso de compra y configuración como parte del bonus de setup."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PREGUNTAS FRECUENTES (FAQ)
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Resolvemos todas tus dudas antes de que des el paso
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900 border border-gray-700 rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-2">¿Tienes otra pregunta?</p>
          <a 
            href="https://zenithwebcraft.com#contact" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-bold transition-colors"
          >
            Contáctanos directamente →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;