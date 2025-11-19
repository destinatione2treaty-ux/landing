import { Card, CardContent } from "@/components/ui/card";
import { FileText, Palette, Globe, Mail, Gift } from "lucide-react";

const BonusesSection = () => {
  const bonuses = [
    {
      icon: FileText,
      title: "Guía de Copywriting para Landing Pages",
      description: "Aprende a escribir textos que venden. Incluye plantillas, ejemplos reales y fórmulas probadas para aumentar conversiones.",
      value: "$97"
    },
    {
      icon: Palette,
      title: "Kit de Diseño: Paleta + Psicología del Color",
      description: "Elige los colores perfectos que generen confianza y acción. Incluye paletas pre-diseñadas y guía de implementación.",
      value: "$67"
    },
    {
      icon: Globe,
      title: "Setup Completo de Dominio y Hosting",
      description: "Te ayudamos a configurar tu dominio y hosting para que tu landing esté en línea. Soporte paso a paso incluido.",
      value: "$97"
    },
    {
      icon: Mail,
      title: "30 Días de Soporte por Email",
      description: "Cualquier duda, ajuste menor o consulta técnica. Estamos aquí para asegurar tu éxito durante el primer mes.",
      value: "$36"
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('$', ''));
  }, 0);

  return (
    <section className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Gift className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">BONOS EXCLUSIVOS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ADEMÁS, RECIBE ESTOS BONOS
          </h2>
          <h3 className="text-3xl font-bold text-primary mb-4">
            TOTALMENTE GRATIS
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Todo lo que necesitas para que tu nueva landing page convierta desde el primer día
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-white text-lg leading-tight">
                          {bonus.title}
                        </h3>
                        <span className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                          {bonus.value}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Total Value */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">Valor Total de los Bonos:</p>
            <p className="text-5xl font-bold text-primary">${totalValue}</p>
            <p className="text-primary text-xl font-bold mt-2">100% GRATIS</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl text-white font-bold mb-2">
            Tu inversión: <span className="text-primary">Solo $49.99</span>
          </p>
          <p className="text-gray-400">
            Obtienes ${totalValue + 49.99} en valor por solo $49.99
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;