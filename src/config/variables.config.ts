// src/config/variables.config.ts
// Configuración de contenido - Destino E-2

export const variablesConfig = {
  // ===== INFORMACIÓN DEL PRODUCTO/SERVICIO =====
  product: {
    name: 'Guía Destino E-2',
    namePlural: 'Guías Destino E-2',
    actionCompleted: 'vendidas', // "28 guías vendidas"
    clientType: 'inversionistas', // "nuestros inversionistas"
  },

  // ===== PRECIOS =====
  pricing: {
    originalPrice: '$47',
    currentPrice: '$27',
    normalValue: '$144', // Valor del paquete según su contenido
    bonusValue: '$117', // Calculado: $144 - $27
    priceAfterLimit: '$47', // Precio después de la oferta
    currency: 'USD',
  },

  // ===== TIEMPOS Y MÉTRICAS =====
  metrics: {
    deliveryTime: 'Inmediato', // Producto digital
    deliveryUnit: 'acceso', // "Acceso inmediato"
    guaranteeDays: '7',
    supportDays: '0', // No menciona soporte
    totalDelivered: '28', // Guías vendidas
    limitedSpots: '0', // No aplica para productos digitales
    spotsOccupied: '0',
  },

  // ===== ITEMS DEL PAQUETE PRINCIPAL =====
  packageItems: {
    item1: {
      name: 'Guía Principal: Destino E-2',
      value: '$97',
    },
    item2: {
      name: 'Qué es la Visa E-2 y cómo funciona',
      value: '$0', // Incluido
    },
    item3: {
      name: 'Tipos de inversión aceptados',
      value: '$0', // Incluido
    },
    item4: {
      name: 'Proceso paso a paso completo',
      value: '$0', // Incluido
    },
    item5: {
      name: 'Checklist del Proceso E-2',
      value: '$47', // Bono incluido
    },
  },

  // ===== BONOS ADICIONALES =====
  bonuses: {
    bonus1: {
      name: 'Checklist del Proceso E-2',
      description: 'Un checklist práctico para evaluar si estás listo para comenzar, detectar vacíos en tu plan y organizarte antes de invertir dinero.',
      value: '$47',
    },
    bonus2: {
      name: 'Checklist Premium: Franquicia o Negocio Existente',
      description: 'Guía completa para decidir qué elegir y qué evaluar al seleccionar entre franquicia o negocio existente.',
      value: '$37', // Order bump
    },
    bonus3: {
      name: 'Plantilla Profesional del Plan de Negocios E-2',
      description: 'Entiende qué espera ver inmigración y cómo estructurar tu idea correctamente.',
      value: '$47', // Order bump
    },
    bonus4: {
      name: 'Actualizaciones gratuitas',
      description: 'Recibe actualizaciones de la guía sin costo adicional cuando haya cambios en el proceso.',
      value: '$0',
    },
  },

  // ===== HERO SECTION =====
  hero: {
    es: {
      title: [
        '¿SUEÑAS CON INVERTIR Y VIVIR',
        'LEGALMENTE EN ESTADOS UNIDOS',
        'SIN COMETER ERRORES COSTOSOS?'
      ],
      subtitle: 'Descubre la hoja de ruta clara para preparar tu Visa E-2 antes de hablar con abogados, contadores o asesores.',
      description: 'Una guía práctica, en español, creada para personas que quieren empezar su proceso E-2 con orden, claridad y seguridad desde el día uno.',
      badge1Text: 'Acceso Inmediato',
      badge2Text: 'Contenido Práctico',
      badge3Text: '7 Días de Garantía',
    },
    en: {
      title: [
        'DREAM OF INVESTING AND LIVING',
        'LEGALLY IN THE UNITED STATES',
        'WITHOUT COSTLY MISTAKES?'
      ],
      subtitle: 'Discover the clear roadmap to prepare your E-2 Visa before talking to lawyers, accountants or advisors.',
      description: 'A practical guide, in Spanish, created for people who want to start their E-2 process with order, clarity and security from day one.',
      badge1Text: 'Immediate Access',
      badge2Text: 'Practical Content',
      badge3Text: '7-Day Guarantee',
    },
  },

  // ===== BENEFICIOS (3 beneficios) =====
  benefits: {
    es: {
      title: 'NO ES SOLO UNA GUÍA',
      subtitle: 'Es tu primer paso estratégico hacia Estados Unidos',
      benefit1: {
        title: 'EVITA ERRORES COSTOSOS DESDE EL INICIO',
        description: 'Comprende qué califica realmente para la Visa E-2 y qué no, antes de invertir dinero o tiempo. Ahorra miles de dólares en correcciones.',
        highlight: 'Ahorra tiempo y dinero',
      },
      benefit2: {
        title: 'AHORRA MESES DE CONFUSIÓN',
        description: 'Deja atrás información contradictoria y entiende el proceso con una estructura clara y lógica. Todo en un solo lugar.',
        highlight: 'Claridad total',
      },
      benefit3: {
        title: 'TOMA DECISIONES CON SEGURIDAD',
        description: 'Llega preparado a conversaciones con abogados, contadores o asesores de negocio. Haz las preguntas correctas desde el inicio.',
        highlight: 'Toma el control',
      },
    },
    en: {
      title: "IT'S NOT JUST A GUIDE",
      subtitle: "It's your first strategic step towards the United States",
      benefit1: {
        title: 'AVOID COSTLY MISTAKES FROM THE START',
        description: 'Understand what truly qualifies for the E-2 Visa and what doesn\'t, before investing money or time. Save thousands in corrections.',
        highlight: 'Save time and money',
      },
      benefit2: {
        title: 'SAVE MONTHS OF CONFUSION',
        description: 'Leave behind contradictory information and understand the process with a clear and logical structure. Everything in one place.',
        highlight: 'Total clarity',
      },
      benefit3: {
        title: 'MAKE DECISIONS WITH CONFIDENCE',
        description: 'Come prepared to conversations with lawyers, accountants or business advisors. Ask the right questions from the start.',
        highlight: 'Take control',
      },
    },
  },

  // ===== TESTIMONIOS (2 testimonios + 1 placeholder) =====
  testimonials: {
    es: [
      {
        name: 'Joan P.',
        business: 'Futuro Inversionista E-2',
        role: 'Emprendedor',
        text: 'Me ayudó a tener claridad sobre el proceso. Ahora sé qué debo hacer antes de hablar con abogados y puedo tomar decisiones con más seguridad.',
      },
      {
        name: 'Maria G.',
        business: 'Proceso E-2 en curso',
        role: 'Inversionista',
        text: 'Excelente guía para empezar. Evité cometer errores comunes gracias a la información clara y estructurada. La recomiendo totalmente.',
      },
      {
        name: 'Carlos M.',
        business: 'Inversor Internacional',
        role: 'Empresario',
        text: 'La mejor inversión que pude hacer antes de empezar mi proceso E-2. Me ahorró meses de investigación y me dio un plan claro.',
      },
    ],
    en: [
      {
        name: 'Joan P.',
        business: 'Future E-2 Investor',
        role: 'Entrepreneur',
        text: 'It helped me gain clarity about the process. Now I know what I need to do before talking to lawyers and I can make decisions with more confidence.',
      },
      {
        name: 'Maria G.',
        business: 'E-2 Process in Progress',
        role: 'Investor',
        text: 'Excellent guide to start. I avoided making common mistakes thanks to the clear and structured information. I totally recommend it.',
      },
      {
        name: 'Carlos M.',
        business: 'International Investor',
        role: 'Businessman',
        text: 'The best investment I could make before starting my E-2 process. It saved me months of research and gave me a clear plan.',
      },
    ],
  },

  // ===== TEXTOS ADICIONALES =====
  additionalContent: {
    es: {
      urgencyBar: '¡Oferta de Lanzamiento! Últimos días con el precio especial de $27',
      painPoint: 'El mayor error no es que te nieguen la visa. El mayor error es empezar sin información clara y corregir sobre la marcha.',
      trustBadges: [
        'Contenido claro y estructurado',
        'Ideal para quienes aún no han comenzado',
        'Diseñada para evitar errores comunes',
        'Útil incluso antes de contratar profesionales',
      ],
      ctaMicrocopy: 'Acceso inmediato • Pago único • Guía educativa • Sin riesgo',
      disclaimer: 'Este producto no garantiza la aprobación de una visa. "Destino E-2" es una guía informativa y educativa. No constituye asesoría legal o migratoria personalizada.',
    },
    en: {
      urgencyBar: 'Launch Offer! Last days with the special price of $27',
      painPoint: 'The biggest mistake is not having your visa denied. The biggest mistake is starting without clear information and correcting as you go.',
      trustBadges: [
        'Clear and structured content',
        'Ideal for those who haven\'t started yet',
        'Designed to avoid common mistakes',
        'Useful even before hiring professionals',
      ],
      ctaMicrocopy: 'Immediate access • One-time payment • Educational guide • Risk-free',
      disclaimer: 'This product does not guarantee visa approval. "Destino E-2" is an informative and educational guide. It does not constitute personalized legal or immigration advice.',
    },
  },
};

export default variablesConfig;
