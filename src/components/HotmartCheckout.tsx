import { useEffect, useRef } from 'react';
import { integrationsConfig } from '@/config/integrations.config';
import { useTranslation } from '@/translations';

const HotmartCheckout = () => {
  const checkoutRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<any>(null);
  const { language } = useTranslation();
  const offer = integrationsConfig.hotmart.productCode[language as 'es' | 'en'];
  
  useEffect(() => {
    if (!offer) return;

    const loadHotmartScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (window.checkoutElements) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Hotmart script'));
        document.head.appendChild(script);
      });
    };

    const initializeCheckout = async () => {
      try {
        await loadHotmartScript();
        await new Promise<void>(resolve => setTimeout(resolve, 100));

        if (window.checkoutElements && checkoutRef.current) {
          elementsRef.current = window.checkoutElements.init('inlineCheckout', { offer });
          elementsRef.current.mount('#hotmart-inline-checkout');
        }
      } catch (error) {
        console.error('Error initializing Hotmart checkout:', error);
      }
    };

    initializeCheckout();

    return () => {
      if (elementsRef.current && elementsRef.current.unmount) {
        try {
          elementsRef.current.unmount();
        } catch (error) {
          console.error('Error unmounting checkout:', error);
        }
      }
    };
  }, [offer]);

  return (
    <div className="hotmart-checkout-container">
      <div id="hotmart-inline-checkout" ref={checkoutRef} className="hotmart-checkout-wrapper" />
    </div>
  );
};

export default HotmartCheckout;