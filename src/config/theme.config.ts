// src/config/theme.config.ts
// Configuración visual de la plantilla - Destino E-2

export const themeConfig = {
  // Colores principales (extraídos de su landing actual)
  colors: {
    primary: {
      DEFAULT: '#E84855',  // Rojo/Coral para CTAs
      foreground: '#FFFFFF', // Blanco para texto sobre rojo
    },
    accent: {
      DEFAULT: '#F2A307',  // Amarillo/Naranja para highlights
      foreground: '#1E2F47', // Azul oscuro para texto sobre amarillo
    },
    background: {
      DEFAULT: '#1E2F47',  // Azul oscuro principal
      secondary: '#243447', // Azul más oscuro para cards
    },
  },

  // Fuentes
  fonts: {
    heading: 'Montserrat', // Fuente para títulos
    body: 'Lato',          // Fuente para textos
  },

  // Radio de bordes
  borderRadius: {
    default: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
};

export default themeConfig;
