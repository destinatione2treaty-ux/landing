import { useEffect } from 'react';
import { integrationsConfig } from '@/config/integrations.config';

const GoogleAnalytics = () => {
  const { enabled, measurementId } = integrationsConfig.googleAnalytics;

  useEffect(() => {
    if (!enabled || !measurementId) return;

    // Inyectar script de GA4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Inicializar gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;
