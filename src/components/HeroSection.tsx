import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "@/translations";
import { trackViewContent } from "@/components/MetaPixel";
import { useEffect } from "react";
import { brandConfig } from "@/config/brand.config";

const HeroSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackViewContent('Hero Section');
  }, []);

  const handleCTAClick = () => {
    const checkoutSection = document.getElementById('checkout-section');
    
    if (checkoutSection) {
      const offset = 80;
      const elementPosition = checkoutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      checkoutSection.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        checkoutSection.style.animation = '';
      }, 500);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#1E2F47]">
      {/* Imagen de fondo del mapa */}
      <div 
        className="absolute inset-0 bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('${brandConfig.heroBackground?.path || '/hero-background.jpg'}')`,
          backgroundSize: '110%',
          backgroundPosition: 'center 45%',
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2F47]/75 via-[#1E2F47]/60 to-[#1E2F47]/75"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 text-center max-w-5xl">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-primary font-bold text-xs uppercase tracking-wider">
            {t.hero.brand}
          </span>
        </div>

        {/* Título - MÁS GRANDE y SIN ROJO en tercera línea */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] font-headline tracking-tight">
          <span className="text-white block">{t.hero.title1}</span>
          <span className="text-white block">{t.hero.title2}</span>
          <span className="text-white block">{t.hero.title3}</span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-snug font-medium">
          {t.hero.subtitle}
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-7 max-w-2xl mx-auto font-medium">
          {t.hero.description}
        </p>

        <div className="mb-7">
          <div className="inline-flex items-baseline gap-2">
            <span className="text-gray-400 text-2xl line-through font-bold">{t.hero.originalPrice}</span>
            <span className="text-6xl md:text-7xl font-black text-primary">{t.hero.currentPrice}</span>
          </div>
          <p className="text-sm text-gray-300 mt-2 font-medium">{t.hero.paymentNote}</p>
        </div>

        <Button 
          onClick={handleCTAClick}
          size="lg"
          className="w-full sm:w-auto h-auto py-4 px-8 text-base sm:text-lg font-black uppercase tracking-wide whitespace-normal text-center bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 rounded-lg"
        >
          <span className="text-center leading-tight">
            {t.hero.ctaButton}
          </span>
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </Button>

        {/* Microcopy debajo del botón */}
        <p className="text-sm text-gray-300 mt-3 font-medium">
          ✔ Acceso inmediato • ✔ Pago único • ✔ Guía educativa • ✔ Sin riesgo
        </p>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-[#F2A307] text-[#F2A307]" />
            ))}
          </div>
          <span className="text-gray-200 text-sm ml-2 font-medium">
            {t.hero.socialProof}
          </span>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-1.5 p-3 bg-gray-800/60 rounded-lg border border-primary/30 backdrop-blur-sm">
            <span className="text-3xl font-black text-primary">{t.hero.badge1}</span>
            <span className="text-sm text-gray-200 text-center font-semibold">{t.hero.badge1Text}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 bg-gray-800/60 rounded-lg border border-primary/30 backdrop-blur-sm">
            <span className="text-3xl font-black text-primary">{t.hero.badge2}</span>
            <span className="text-sm text-gray-200 text-center font-semibold">{t.hero.badge2Text}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-3 bg-gray-800/60 rounded-lg border border-primary/30 backdrop-blur-sm">
            <span className="text-3xl font-black text-primary">{t.hero.badge3}</span>
            <span className="text-sm text-gray-200 text-center font-semibold">{t.hero.badge3Text}</span>
          </div>
        </div>
      </div>

      {/* Efectos de luz decorativos */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#F2A307]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
