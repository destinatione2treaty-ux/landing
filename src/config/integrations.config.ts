// src/config/integrations.config.ts
// Configuración de integraciones - Destino E-2

export const integrationsConfig = {
  // Hotmart
  hotmart: {
    checkoutUrl: {
      es: 'https://pay.hotmart.com/C100720841G?checkoutMode=10',
      en: 'https://pay.hotmart.com/P106899245B?checkoutMode=10&bid=1785123719558',
    },
    productCode: {
      es: 'dr28lsor',
      en: 'zx0xlc65', // o '' si no hay embebido en inglés
    },
    defaultMode: 'hotmart' as 'embedded' | 'hotmart',
  },

  // Meta Pixel (Facebook Pixel) - Desactivado por ahora
  metaPixel: {
    enabled: true,
    pixelId: '777723421695063',
  },

  // Google Analytics - Desactivado por ahora
  googleAnalytics: {
    enabled: true,
    measurementId: 'G-54E018RR76',
  },

  // Google Tag Manager - Desactivado por ahora
  googleTagManager: {
    enabled: false,
    containerId: '',
  },

  // Email marketing - No usa por ahora
  emailMarketing: {
    provider: '',
    apiKey: '',
    listId: '',
  },
};

export default integrationsConfig;
