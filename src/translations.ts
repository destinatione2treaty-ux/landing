// src/translations.ts
// Sistema de traducciones - Destino E-2

import { variablesConfig } from './config/variables.config';
import { brandConfig } from './config/brand.config';

export type Language = 'es' | 'en';

// Desestructurar variables para fácil acceso
const {
  product,
  pricing,
  metrics,
  hero: heroConfig,
  benefits: benefitsConfig,
  testimonials: testimonialsConfig,
  additionalContent,
} = variablesConfig;

// Separar packageItems y bonuses por idioma
const packageItemsEs = variablesConfig.packageItems.es;
const packageItemsEn = variablesConfig.packageItems.en;
const bonusesEs = variablesConfig.bonuses.es;
const bonusesEn = variablesConfig.bonuses.en;

const brandName = brandConfig.name;

export const translations = {

  // ==================== ESPAÑOL ====================
  es: {
    announcement: additionalContent.es.urgencyBar,

    // Hero Section
    hero: {
      brand: brandName,
      title1: heroConfig.es.title[0],
      title2: heroConfig.es.title[1],
      title3: heroConfig.es.title[2],
      subtitle: heroConfig.es.subtitle,
      description: heroConfig.es.description,
      originalPrice: pricing.originalPrice,
      currentPrice: pricing.currentPrice,
      paymentNote: "Pago único • Sin mensualidades",
      ctaButton: `QUIERO MI "${product.name.toUpperCase()}" POR ${pricing.currentPrice}`,
      socialProof: `Más de ${metrics.totalDelivered} ${product.namePlural.toLowerCase()} ${product.actionCompleted}`,
      badge1: "✓",
      badge1Text: heroConfig.es.badge1Text,
      badge2: "✓",
      badge2Text: heroConfig.es.badge2Text,
      badge3: `${metrics.guaranteeDays} días`,
      badge3Text: heroConfig.es.badge3Text,
    },

    // Content Section
    content: {
      title1: "¿QUÉ RECIBIRÁS EXACTAMENTE EN",
      title2: `"${product.name.toUpperCase()}"?`,
      title3: "",
      subtitle: "Todo el contenido que necesitas para empezar tu proceso E-2 con claridad",
      features: [
        `${packageItemsEs.item1.name} - Valor: ${packageItemsEs.item1.value}`,
        `${bonusesEs.bonus1.name} - Valor: ${bonusesEs.bonus1.value}`,
        `${bonusesEs.bonus2.name} - Valor: ${bonusesEs.bonus2.value}`,
        `Acceso inmediato al contenido completo`,
        `Formato PDF descargable`,
        `Actualizaciones gratuitas`,
      ],
      additionalFeatures: [
        '¿Qué es realmente la Visa E-2 y cómo funciona?',
        '¿Quién puede aplicar y quién no?',
        'Tipos de inversión aceptados',
        'Franquicia vs negocio existente',
        'Requisitos clave del negocio',
        'Proceso paso a paso completo',
        '¿Cómo mantener tu estatus activo?',
        'Errores comunes que debes evitar',
      ],
      packageValue: "Valor Total del Paquete:",
      specialPrice: "Precio Especial Hoy:",
      paymentNote: "Pago único • Sin cargos ocultos • Sin mensualidades",
      ctaButton: `SÍ, QUIERO ACCESO INMEDIATO POR ${pricing.currentPrice}`,
      securePayment: "💳 Pago 100% seguro a través de Hotmart",
      guarantee: `Garantía de ${metrics.guaranteeDays} días o te devolvemos tu dinero`,
    },

    // CTA Section
    cta: {
      urgencyBadge: "Oferta de Lanzamiento",
      headline1: "TRANSFORMA TU FUTURO EN",
      headline2: "ESTADOS UNIDOS HOY MISMO",
      items: [
        { text: packageItemsEs.item1.name, value: packageItemsEs.item1.value },
        { text: bonusesEs.bonus1.name, value: bonusesEs.bonus1.value },
        { text: bonusesEs.bonus2.name, value: bonusesEs.bonus2.value },
        { text: 'Acceso inmediato', value: 'Incluido' },
        { text: 'Actualizaciones gratuitas', value: 'Incluido' },
        { text: 'Formato PDF descargable', value: 'Incluido' },
      ],
      normalValue: "Valor Total:",
      specialPrice: "Precio Especial de Lanzamiento:",
      ctaButton: `SÍ, QUIERO ACCESO INMEDIATO POR ${pricing.currentPrice}`,
      paymentNote: `💳 Pago 100% seguro • Garantía de ${metrics.guaranteeDays} días`,
      trust1: "Pago Seguro con Hotmart",
      trust2: "Acceso Inmediato",
      limitedSpots: "Precio especial por tiempo limitado",
      priceIncrease: `Después de la oferta, el precio sube a ${pricing.priceAfterLimit}`,
      spotsOccupied: "",
      guarantee: `Garantía de Satisfacción de ${metrics.guaranteeDays} Días o devolvemos tu dinero.`,
    },

    // Checkout Section
    checkout: {
      title: "Completa Tu Compra",
      subtitle: `Tu ${product.name.toLowerCase()} está a solo un paso. Acceso inmediato después del pago.`,
      trust1: "Pago 100% Seguro",
      trust2: "Acceso Inmediato",
      trust3: "Múltiples Métodos de Pago",
      guaranteeTitle: "Garantía de Satisfacción",
      guaranteeText: "Si no estás 100% satisfecho, te devolvemos tu dinero",
      paymentMethod: "Método de Pago:",
      embeddedCheckout: "💳 Pagar Aquí (Tarjeta/PayPal)",
      hotmartCheckout: "🏦 Pagar en Hotmart",
      switchTo: "¿Prefieres pagar en",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "aquí",
      complementosTitle: "En el CHECKOUT tendrás disponible estos COMPLEMENTOS que no encontrarás en otra parte.",
      redirectTitle: "Finalizar compra de forma segura",
      redirectText: "Serás redirigido a Hotmart para completar tu pago con métodos locales (Efectivo, PSE, Cuotas, etc).",
      redirectButton: "Ir a Pagar Ahora ➔",
      secure: "🛡️ 100% Seguro",
      instant: "⚡ Entrega Inmediata",
      complementos: [
        {
          title: "Plan de Negocios en 10 pasos para la visa E-2",
          price: "$14",
          description: "Una guía estructurada de 42 páginas que te muestra exactamente qué debe incluir tu plan de negocios, cómo organizarlo correctamente y qué esperan ver las autoridades migratorias antes de aprobar tu visa de inversión.",
        },
        {
          title: "Franquicia o Negocio Existente — ¿Qué Elegir y Qué Evaluar?",
          price: "$8",
          description: "Una guía práctica que te ayuda a tomar una decisión inteligente antes de invertir, evaluando riesgos, ventajas y puntos clave para que tu inversión sea sólida y alineada con la Visa E-2.",
        },
      ],
    },

    // Thank You Page
    thankYou: {
      title: "¡Compra Exitosa!",
      subtitle: `Gracias por confiar en ${brandName}`,
      message: `Tu ${product.name.toLowerCase()} está lista`,
      whatNext: "¿Qué Sigue Ahora?",
      step1Title: "1. Revisa tu Email (IMPORTANTE)",
      step1Text: "En los próximos minutos recibirás un email de Hotmart con tu acceso a la guía. Revisa también tu carpeta de spam.",
      step2Title: "2. Descarga tu Guía",
      step2Text: "Descarga el PDF de la guía y los checklists incluidos. Guárdalos en un lugar seguro para futuras consultas.",
      step3Title: "3. Comienza tu Proceso",
      step3Text: "Lee la guía completa para entender el panorama. Luego usa el checklist para evaluar tu preparación.",
      whatYouGet: "Tu Paquete Incluye:",
      items: [
        'Guía Principal: Destino E-2 (PDF)',
        'Bono 1: Checklist Paso a Paso del Proceso E-2',
        'Bono 2: Checklist del Plan de Negocios E-2',
        'Acceso inmediato',
        'Actualizaciones gratuitas',
      ],
      questionsTitle: "¿Tienes Preguntas?",
      questionsText: "Estamos aquí para ayudarte",
      contactButton: "Contactar Soporte",
      formNote: "*Revisa tu email para acceder al contenido",
      socialProof: `🎉 Te uniste a los ${metrics.totalDelivered} ${product.clientType} que ya tienen su hoja de ruta clara`,
    },

    // Benefits Section
    benefits: {
      title: benefitsConfig.es.title,
      titleBreak: benefitsConfig.es.subtitle,
      subtitle: "La mayoría de las personas interesadas en la Visa E-2 empiezan sin un plan claro. Esta guía fue creada para cambiar eso.",
      items: [
        {
          title: benefitsConfig.es.benefit1.title,
          description: benefitsConfig.es.benefit1.description,
          highlight: benefitsConfig.es.benefit1.highlight,
        },
        {
          title: benefitsConfig.es.benefit2.title,
          description: benefitsConfig.es.benefit2.description,
          highlight: benefitsConfig.es.benefit2.highlight,
        },
        {
          title: benefitsConfig.es.benefit3.title,
          description: benefitsConfig.es.benefit3.description,
          highlight: benefitsConfig.es.benefit3.highlight,
        },
      ],
      quote: additionalContent.es.painPoint,
      cta: "No dejes que eso te pase a ti.",
    },

    // Testimonials Section
    testimonials: {
      title: "PERSONAS REALES, MISMO PUNTO DE PARTIDA QUE TÚ",
      subtitle: `Personas que comenzaron interesadas en la Visa E-2, pero sin claridad, y hoy tienen un plan`,
      items: testimonialsConfig.es,
      trust: `✨ Únete a los ${metrics.totalDelivered} ${product.clientType} que ya dieron el primer paso`,
    },

    // Bonuses Section
    bonuses: {
      badge: "BONO INCLUIDO",
      title: "¡ADEMÁS, RECIBES ESTOS BONOS",
      titleHighlight: "TOTALMENTE GRATIS!",
      subtitle: "Todo lo que necesitas para empezar tu proceso E-2 con el pie derecho",
      items: [
        {
          title: bonusesEs.bonus1.name,
          description: bonusesEs.bonus1.description,
          value: bonusesEs.bonus1.value,
        },
        {
          title: bonusesEs.bonus2.name,
          description: bonusesEs.bonus2.description,
          value: bonusesEs.bonus2.value,
        },
      ],
      totalValue: "Valor de ambos Bonos:",
      free: "INCLUIDO GRATIS",
      investment: "Tu inversión:",
      only: `Solo ${pricing.currentPrice}`,
      valueStatement: `Obtienes ${pricing.normalValue} en valor por solo ${pricing.currentPrice}`,
    },

    // FAQ Section
    faq: {
      title: "PREGUNTAS FRECUENTES (FAQ)",
      subtitle: "Resolvemos todas tus dudas antes de que des el paso",
      items: [
        {
          question: "¿Cuánto demora realmente el proceso?",
          answer: "La guía explica los tiempos promedio actuales (generalmente 3-6 meses desde la aplicación) y qué factores pueden influir en tu caso específico. El tiempo total depende de varios factores como la preparación de documentos, tipo de negocio, y país de origen.",
        },
        {
          question: "¿Puedo incluir a mi familia?",
          answer: "Sí. La Visa E-2 permite incluir a tu cónyuge e hijos menores de 21 años. Tu cónyuge también puede solicitar permiso de trabajo en Estados Unidos. La guía explica en detalle los requisitos y el proceso para incluir dependientes.",
        },
        {
          question: "¿Qué pasa si mi negocio no tiene éxito o quiero cambiar de rubro?",
          answer: "La guía aborda estos escenarios comunes y las consideraciones importantes. Explica las opciones disponibles si necesitas hacer cambios en tu negocio, cómo mantener tu estatus, y qué pasos seguir en diferentes situaciones.",
        },
        {
          question: "¿Puedo pasar de la E-2 a una residencia permanente?",
          answer: "La E-2 no es un camino directo a la Green Card, pero existen opciones. La guía explica las diferentes rutas posibles (como EB-5, EB-1, o ajuste a través de empleador) y qué debes tener en cuenta si ese es tu objetivo a largo plazo.",
        },
        {
          question: "¿Es esta guía para mí si aún no he hablado con ningún abogado?",
          answer: "Sí. De hecho, es el mejor momento para usarla. La guía te preparará para tener conversaciones más productivas con profesionales, hacer las preguntas correctas y evitar errores costosos desde el inicio. Llegarás a tu primera consulta con abogados mucho mejor preparado.",
        },
        {
          question: "¿La guía incluye plantillas o documentos legales?",
          answer: "La guía incluye un checklist práctico y estructura de plan de negocios, pero no incluye documentos legales específicos (eso debe ser preparado con tu abogado). El enfoque es educativo: que entiendas el proceso y llegues preparado a contratar profesionales.",
        },
        {
          question: "¿Qué pasa después de comprar la guía?",
          answer: `Recibes acceso inmediato por email. Descargas el PDF de la guía y los checklists incluidos. Puedes leerlos a tu ritmo y consultarlos cuantas veces necesites. Además, recibes actualizaciones gratuitas. Tienes ${metrics.guaranteeDays} días de garantía para solicitar reembolso si no cumple tus expectativas.`,
        },
        {
          question: "¿Necesito saber inglés para la Visa E-2?",
          answer: "No es un requisito obligatorio hablar inglés para obtener la Visa E-2, aunque es altamente recomendable para manejar tu negocio. La guía está en español y explica todo el proceso de manera clara, incluyendo qué documentos pueden necesitar traducción.",
        },
        {
          question: "¿Qué pasa si mi país está en una lista reciente con pausas o restricciones en procesos migratorios?",
          answer: "La Visa E-2 es una visa de no inmigrante, por lo que en muchos casos este tipo de pausas no la afectan directamente. Aun así, siempre es recomendable verificar la información actualizada según tu país antes de iniciar el proceso.",
        },
      ],
      stillQuestions: "¿Tienes otra pregunta?",
      contact: `Contáctanos directamente a ${brandConfig.contact.email}`,
    },
  },

  // ==================== ENGLISH ====================
  en: {
    announcement: additionalContent.en.urgencyBar,

    // Hero Section
    hero: {
      brand: brandName,
      title1: heroConfig.en.title[0],
      title2: heroConfig.en.title[1],
      title3: heroConfig.en.title[2],
      subtitle: heroConfig.en.subtitle,
      description: heroConfig.en.description,
      originalPrice: pricing.originalPrice,
      currentPrice: pricing.currentPrice,
      paymentNote: "One-time payment • No monthly fees",
      ctaButton: `I WANT MY "${product.name.toUpperCase()}" FOR ${pricing.currentPrice}`,
      socialProof: `Over ${metrics.totalDelivered} guides sold`,
      badge1: "✓",
      badge1Text: heroConfig.en.badge1Text,
      badge2: "✓",
      badge2Text: heroConfig.en.badge2Text,
      badge3: `${metrics.guaranteeDays} days`,
      badge3Text: heroConfig.en.badge3Text,
    },

    // Content Section
    content: {
      title1: "WHAT YOU'LL RECEIVE EXACTLY IN",
      title2: `"${product.name.toUpperCase()}"?`,
      title3: "",
      subtitle: "All the content you need to start your E-2 process with clarity",
      features: [
        `${packageItemsEn.item1.name} - Value: ${packageItemsEn.item1.value}`,
        `${bonusesEn.bonus1.name} - Value: ${bonusesEn.bonus1.value}`,
        `${bonusesEn.bonus2.name} - Value: ${bonusesEn.bonus2.value}`,
        `Immediate access to complete content`,
        `Downloadable PDF format`,
        `Free updates`,
      ],
      additionalFeatures: [
        'What the E-2 Visa really is and how it works?',
        'Who can apply and who cannot?',
        'Accepted investment types',
        'Franchise vs existing business',
        'Key business requirements',
        'Complete step-by-step process',
        'How to maintain your active status?',
        'Common mistakes to avoid',
      ],
      packageValue: "Total Package Value:",
      specialPrice: "Special Price Today:",
      paymentNote: "One-time payment • No hidden fees • No monthly charges",
      ctaButton: `YES, I WANT IMMEDIATE ACCESS FOR ${pricing.currentPrice}`,
      securePayment: "💳 100% secure payment through Hotmart",
      guarantee: `${metrics.guaranteeDays}-day guarantee or your money back`,
    },

    // CTA Section
    cta: {
      urgencyBadge: "Launch Offer",
      headline1: "TRANSFORM YOUR FUTURE IN",
      headline2: "THE UNITED STATES TODAY",
      items: [
        { text: packageItemsEn.item1.name, value: packageItemsEn.item1.value },
        { text: bonusesEn.bonus1.name, value: bonusesEn.bonus1.value },
        { text: bonusesEn.bonus2.name, value: bonusesEn.bonus2.value },
        { text: 'Immediate access', value: 'Included' },
        { text: 'Free updates', value: 'Included' },
        { text: 'Downloadable PDF format', value: 'Included' },
      ],
      normalValue: "Total Value:",
      specialPrice: "Special Launch Price:",
      ctaButton: `YES, I WANT IMMEDIATE ACCESS FOR ${pricing.currentPrice}`,
      paymentNote: `💳 100% secure payment • ${metrics.guaranteeDays}-day guarantee`,
      trust1: "Secure Payment with Hotmart",
      trust2: "Immediate Access",
      limitedSpots: "Special price for limited time",
      priceIncrease: `After the offer, price increases to ${pricing.priceAfterLimit}`,
      spotsOccupied: "",
      guarantee: `${metrics.guaranteeDays}-Day Satisfaction Guarantee or we refund your money.`,
    },

    // Checkout Section
    checkout: {
      title: "Complete Your Purchase",
      subtitle: `Your ${product.name.toLowerCase()} is just one step away. Immediate access after payment.`,
      trust1: "100% Secure Payment",
      trust2: "Immediate Access",
      trust3: "Multiple Payment Methods",
      guaranteeTitle: "Satisfaction Guarantee",
      guaranteeText: "If you're not 100% satisfied, we'll refund your money",
      paymentMethod: "Payment Method:",
      embeddedCheckout: "💳 Pay Here (Card/PayPal)",
      hotmartCheckout: "🏦 Pay on Hotmart",
      switchTo: "Prefer to pay on",
      switchToHotmart: "Hotmart",
      switchToEmbedded: "here",
      redirectTitle: "Complete your purchase securely",
      redirectText: "You'll be redirected to Hotmart to complete your payment with card, PayPal and other available methods.",
      redirectButton: "Pay Now ➔",
      secure: "🛡️ 100% Secure",
      instant: "⚡ Instant Delivery",
      complementosTitle: "In the CHECKOUT you will have access to these COMPLEMENTS you won't find anywhere else.",
      complementos: [
        {
          title: "Business Plan in 10 Steps for the E-2 Visa",
          price: "$14",
          description: "A structured 42-page guide that shows you exactly what your business plan must include, how to organize it correctly, and what immigration authorities expect to see before approving your investor visa.",
        },
        {
          title: "Franchise or Existing Business — What to Choose and What to Evaluate?",
          price: "$8",
          description: "A practical guide that helps you make an intelligent decision before investing, evaluating risks, advantages, and key points so your investment is solid and aligned with the E-2 Visa.",
        },
      ],
    },

    // Thank You Page
    thankYou: {
      title: "Purchase Successful!",
      subtitle: `Thank you for trusting ${brandName}`,
      message: `Your ${product.name.toLowerCase()} is ready`,
      whatNext: "What's Next?",
      step1Title: "1. Check Your Email (IMPORTANT)",
      step1Text: "In the next few minutes you'll receive an email from Hotmart with your access to the guide. Also check your spam folder.",
      step2Title: "2. Download Your Guide",
      step2Text: "Download the PDF guide and included checklists. Save them in a safe place for future reference.",
      step3Title: "3. Start Your Process",
      step3Text: "Read the complete guide to understand the full picture. Then use the checklist to evaluate your preparation.",
      whatYouGet: "Your Package Includes:",
      items: [
        'Main Guide: Destino E-2 (PDF)',
        'Bonus 1: Step-by-Step E-2 Process Checklist',
        'Bonus 2: E-2 Business Plan Checklist',
        'Immediate access',
        'Free updates',
      ],
      questionsTitle: "Have Questions?",
      questionsText: "We're here to help",
      contactButton: "Contact Support",
      formNote: "*Check your email to access the content",
      socialProof: `🎉 You joined the ${metrics.totalDelivered} ${product.clientType} who already have their clear roadmap`,
    },

    // Benefits Section
    benefits: {
      title: benefitsConfig.en.title,
      titleBreak: benefitsConfig.en.subtitle,
      subtitle: "Most people interested in the E-2 Visa start without a clear plan. This guide was created to change that.",
      items: [
        {
          title: benefitsConfig.en.benefit1.title,
          description: benefitsConfig.en.benefit1.description,
          highlight: benefitsConfig.en.benefit1.highlight,
        },
        {
          title: benefitsConfig.en.benefit2.title,
          description: benefitsConfig.en.benefit2.description,
          highlight: benefitsConfig.en.benefit2.highlight,
        },
        {
          title: benefitsConfig.en.benefit3.title,
          description: benefitsConfig.en.benefit3.description,
          highlight: benefitsConfig.en.benefit3.highlight,
        },
      ],
      quote: additionalContent.en.painPoint,
      cta: "Don't let that happen to you.",
    },

    // Testimonials Section
    testimonials: {
      title: "REAL PEOPLE, SAME STARTING POINT AS YOU",
      subtitle: `People who started interested in the E-2 Visa but without clarity, and today have a plan`,
      items: testimonialsConfig.en,
      trust: `✨ Join the ${metrics.totalDelivered} ${product.clientType} who already took the first step`,
    },

    // Bonuses Section
    bonuses: {
      badge: "BONUS INCLUDED",
      title: "PLUS, YOU RECEIVE THESE BONUSES",
      titleHighlight: "COMPLETELY FREE!",
      subtitle: "Everything you need to start your E-2 process on the right foot",
      items: [
        {
          title: bonusesEn.bonus1.name,
          description: bonusesEn.bonus1.description,
          value: bonusesEn.bonus1.value,
        },
        {
          title: bonusesEn.bonus2.name,
          description: bonusesEn.bonus2.description,
          value: bonusesEn.bonus2.value,
        },
      ],
      totalValue: "Value of Both Bonuses:",
      free: "INCLUDED FREE",
      investment: "Your investment:",
      only: `Only ${pricing.currentPrice}`,
      valueStatement: `You get ${pricing.normalValue} in value for only ${pricing.currentPrice}`,
    },

    // FAQ Section
    faq: {
      title: "FREQUENTLY ASKED QUESTIONS (FAQ)",
      subtitle: "We answer all your questions before you take the step",
      items: [
        {
          question: "How long does the process really take?",
          answer: "The guide explains current average times (generally 3-6 months from application) and what factors can influence your specific case. Total time depends on various factors like document preparation, business type, and country of origin.",
        },
        {
          question: "Can I include my family?",
          answer: "Yes. The E-2 Visa allows you to include your spouse and children under 21 years old. Your spouse can also apply for work permission in the United States. The guide explains in detail the requirements and process for including dependents.",
        },
        {
          question: "What if my business is not successful or I want to change industries?",
          answer: "The guide addresses these common scenarios and important considerations. It explains available options if you need to make changes to your business, how to maintain your status, and what steps to follow in different situations.",
        },
        {
          question: "Can I go from E-2 to permanent residence?",
          answer: "The E-2 is not a direct path to a Green Card, but options exist. The guide explains different possible routes (such as EB-5, EB-1, or adjustment through employer) and what you should consider if that's your long-term goal.",
        },
        {
          question: "Is this guide for me if I haven't talked to any lawyer yet?",
          answer: "Yes. In fact, it's the best time to use it. The guide will prepare you to have more productive conversations with professionals, ask the right questions, and avoid costly mistakes from the start. You'll arrive at your first lawyer consultation much better prepared.",
        },
        {
          question: "Does the guide include templates or legal documents?",
          answer: "The guide includes a practical checklist and business plan structure, but doesn't include specific legal documents (that must be prepared with your lawyer). The focus is educational: for you to understand the process and arrive prepared to hire professionals.",
        },
        {
          question: "What happens after buying the guide?",
          answer: `You receive immediate access by email. Download the PDF guide and included checklists. You can read them at your own pace and consult them as many times as needed. Plus, you receive free updates. You have ${metrics.guaranteeDays} days guarantee to request a refund if it doesn't meet your expectations.`,
        },
        {
          question: "Do I need to know English for the E-2 Visa?",
          answer: "Speaking English is not a mandatory requirement to obtain the E-2 Visa, although it's highly recommended for managing your business. The guide is in Spanish and explains the entire process clearly, including what documents may need translation.",
        },
        {
          question: "What happens if my country is on a recent list with pauses or restrictions on immigration processes?",
          answer: "The E-2 Visa is a non-immigrant visa, so in many cases these types of pauses do not directly affect it. Even so, it is always advisable to verify updated information according to your country before starting the process.",
        },
      ],
      stillQuestions: "Have another question?",
      contact: `Contact us directly at ${brandConfig.contact.email}`,
    },
  },

};

// Hook para usar las traducciones
export const useTranslation = () => {
  const detectLanguage = (): Language => {
    // A. Revisar si hay un idioma forzado via ENV
    const forcedLang = import.meta.env.VITE_FORCE_LANG;
    if (forcedLang === 'es' || forcedLang === 'en') {
      return forcedLang;
    }
    // B. Detectar del navegador
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('es') ? 'es' : 'en';
  };

  const language = detectLanguage();
  const t = translations[language];

  return { t, language };
};
