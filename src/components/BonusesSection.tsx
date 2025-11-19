import { Gift, FileText, Palette, CheckCircle } from "lucide-react";

const bonuses = [
  {
    icon: FileText,
    title: "GUÍA DE COPYWRITING EN PDF",
    description: "Un manual sencillo con fórmulas para escribir textos persuasivos que conecten y vendan.",
    value: "$67"
  },
  {
    icon: Palette,
    title: "PALETA DE COLORES PERSONALIZADA",
    description: "Adaptamos los colores de la landing para que encajen perfectamente con la identidad de tu marca o producto.",
    value: "$97"
  },
  {
    icon: CheckCircle,
    title: "INSTALACIÓN EN TU DOMINIO",
    description: "Nos encargamos de todo el proceso técnico para que tu landing quede funcionando en tu propio dominio .com.",
    value: "$147"
  }
];

const BonusesSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4">
            ADEMÁS, RECIBE ESTOS BONOS TOTALMENTE GRATIS
          </h2>
          <p className="text-xl md:text-2xl text-accent font-bold">
            Todo lo que necesitas para que tu nueva landing page convierta desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-primary/30 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                {bonus.value}
              </div>

              <div className="bg-primary/10 p-4 rounded-lg inline-block mb-6">
                <bonus.icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-xl md:text-2xl font-heading mb-3 text-foreground">
                {bonus.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {bonus.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-accent font-semibold">
                <Gift className="w-5 h-5" />
                <span className="uppercase text-sm tracking-wide">Bono Gratis</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
