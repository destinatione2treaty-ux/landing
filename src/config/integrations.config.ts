// src/config/integrations.config.ts
// Configuración de integraciones - Destino E-2

export const integrationsConfig = {
  // Hotmart
  hotmart: {
    checkoutUrl: 'https://pay.hotmart.com/C100720841G?checkoutMode=10',
    productCode: 'dr28lsor',
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
