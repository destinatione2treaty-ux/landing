// src/config/integrations.config.ts
// Configuración de integraciones - Destino E-2

export const integrationsConfig = {
  // Hotmart
  hotmart: {
    // URL del checkout (CAMBIAR CUANDO LA TENGAS)
    checkoutUrl: 'https://pay.hotmart.com/C100720841G',
    
    // Código de producto para checkout embebido
    productCode: 'dr28lsor',
    
    // Modo por defecto: 'hotmart' = botón directo (recomendado)
    defaultMode: 'hotmart' as 'embedded' | 'hotmart',
  },

  // Meta Pixel (Facebook Pixel) - Desactivado por ahora
  metaPixel: {
    enabled: false,
    pixelId: '',
  },

  // Google Analytics - Desactivado por ahora
  googleAnalytics: {
    enabled: false,
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
