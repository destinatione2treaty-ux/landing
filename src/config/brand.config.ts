// src/config/brand.config.ts
// Configuración de marca - Destino E-2

export const brandConfig = {
  // Información básica de la marca
  name: 'Destino E-2',
  tagline: 'Tu hoja de ruta para la Visa E-2',
  
  // Logo (por ahora sin logo, solo texto)
  logo: {
    path: '', // Sin logo por ahora
    alt: 'Destino E-2',
    width: 180,
    height: 40,
  },

  // Hero background image
  heroBackground: {
    path: '/hero-background.jpg', // o .png
    alt: 'Mapa de Estados Unidos',
  },

  // Favicon
  favicon: '/favicon.ico',

  // URLs y enlaces
  urls: {
    website: 'https://yournewfutureusa.com',
    landing: 'https://destino-e2.yournewfutureusa.com', // Subdomain
    contactForm: 'https://forms.gle/tu-formulario-aqui', // Cambiar después
    whatsapp: '', // No tiene por ahora
  },

  // Redes sociales (vacías por ahora)
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  },

  // Metadatos SEO
  seo: {
    title: 'Destino E-2 - Guía Completa para tu Visa E-2 | $27',
    description: 'Descubre la hoja de ruta clara para preparar tu Visa E-2 antes de hablar con abogados. Guía práctica en español desde $27. Acceso inmediato.',
    keywords: 'visa e-2, invertir en estados unidos, vivir en usa, guía visa e-2, inmigración usa, visa inversionista',
    ogImage: '/og-image-destino-e2.jpg',
  },

  // Información de contacto
  contact: {
    email: 'destination.e2treaty@gmail.com',
    phone: '',
    location: 'Estados Unidos',
  },
};

export default brandConfig;
