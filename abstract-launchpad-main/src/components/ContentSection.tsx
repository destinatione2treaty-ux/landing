import { Filter, Smartphone, Rocket } from "lucide-react";

const modules = [
  {
    icon: Filter,
    title: "ESTRUCTURA DE CONVERSIÓN PROBADA",
    description: "Implementamos la fórmula psicológica de ventas (Portada, Beneficios, Testimonios, Bonos, etc.) que ha generado millones en Hotmart."
  },
  {
    icon: Smartphone,
    title: "DISEÑO ADAPTABLE Y PROFESIONAL",
    description: "Tu página se verá y funcionará a la perfección en cualquier teléfono, tablet u ordenador, proyectando una imagen de máxima confianza."
  },
  {
    icon: Rocket,
    title: "TECNOLOGÍA DE CARGA INSTANTÁNEA",
    description: "Construida con código de última generación para que cargue al instante, mejorando la experiencia de usuario y tu posicionamiento en Google."
  }
];

const ContentSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-heading text-center mb-6">
          ¿QUÉ INCLUYE TU LANDING PAGE DE ALTA CONVERSIÓN?
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Los 3 pilares sobre los que construimos tu nueva máquina de ventas.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover-lift flex gap-6 items-start"
            >
              <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                <module.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-heading mb-3 text-foreground">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
