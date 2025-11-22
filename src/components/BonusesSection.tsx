import { Card, CardContent } from "@/components/ui/card";
import { FileText, Palette, Globe, Mail, Gift } from "lucide-react";
import { useTranslation } from "@/translations";

const BonusesSection = () => {
  const { t } = useTranslation();

  const icons = [FileText, Palette, Globe, Mail];

  const totalValue = t.bonuses.items.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('$', ''));
  }, 0);

  return (
    <section className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Gift className="h-5 w-5 text-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">{t.bonuses.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.bonuses.title}
          </h2>
          <h3 className="text-3xl font-bold text-primary mb-4">
            {t.bonuses.titleHighlight}
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.bonuses.subtitle}
          </p>
        </div>

        <div key={index} className="bg-[#1A1F2E] p-5 rounded-xl border border-gray-800 flex gap-4">
          
          {/* 1. COLUMNA IZQUIERDA: El Icono (Fijo) */}
          <div className="shrink-0 w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-2xl border border-white/10">
            {/* Mantén tu lógica de iconos aquí. Ejemplo: */}
            {index === 0 && "📄"}
            {index === 1 && "🎨"}
            {index === 2 && "🌐"}
            {index === 3 && "📧"}
          </div>

          {/* 2. COLUMNA DERECHA: Contenido (Flexible) */}
          <div className="flex-1 min-w-0"> {/* min-w-0 es EL TRUCO para evitar desbordes */}
            
            {/* Fila Superior: Título + Precio */}
            <div className="flex justify-between items-start gap-3 mb-2">
              <h3 className="text-lg font-bold text-white uppercase leading-tight">
                {item.title}
              </h3>
              <span className="text-lg font-bold text-[#FCD34D] shrink-0">
                {item.value}
              </span>
            </div>

            {/* Fila Inferior: Descripción */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

        </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-primary/10 border-2 border-primary rounded-2xl px-8 py-6">
            <p className="text-gray-300 text-lg mb-2">{t.bonuses.totalValue}</p>
            <p className="text-5xl font-bold text-primary">${totalValue}</p>
            <p className="text-primary text-xl font-bold mt-2">{t.bonuses.free}</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-white font-bold mb-2">
            {t.bonuses.investment} <span className="text-primary">{t.bonuses.only}</span>
          </p>
          <p className="text-gray-400">
            {t.bonuses.valueStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;