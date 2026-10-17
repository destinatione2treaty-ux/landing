import { useState, useEffect } from 'react';
import HotmartCheckout from './HotmartCheckout';
import { useTranslation } from '@/translations';
import { trackInitiateCheckout } from './MetaPixel';
import { integrationsConfig } from '@/config/integrations.config';
import './CheckoutToggle.css';

export type CheckoutMode = 'embedded' | 'hotmart';

interface CheckoutToggleProps {
  defaultMode: CheckoutMode;
}

const CheckoutToggle = ({ defaultMode }: CheckoutToggleProps) => {
  // Inicializamos el estado con el modo que venga desde la configuración
  const [selectedMode, setSelectedMode] = useState<CheckoutMode>(defaultMode);
  const { t, language } = useTranslation();

  const redirectButtonText =
    typeof t.checkout.redirectButton === 'string'
      ? t.checkout.redirectButton
      : (t.checkout.redirectButton as { es?: string; en?: string } | undefined)?.es ?? '';

  // Si la configuración cambia (raro, pero buena práctica), actualizamos
  useEffect(() => {
    setSelectedMode(defaultMode);
  }, [defaultMode]);

  const handleModeChange = (mode: CheckoutMode) => {
    setSelectedMode(mode);
    trackInitiateCheckout();
  };

  // Usar URL de configuración
  const hotmartUrl = integrationsConfig.hotmart.checkoutUrl[language];

  return (
    <div className="checkout-toggle-container">
      <div className="payment-method-selector">
        <h3 className="selector-title">{t.checkout.paymentMethod}</h3>
        
        <div className="radio-buttons">
          <label 
            className={`radio-option ${selectedMode === 'embedded' ? 'selected' : ''}`}
            onClick={() => handleModeChange('embedded')}
          >
            <input
              type="radio"
              name="checkout-mode"
              value="embedded"
              checked={selectedMode === 'embedded'}
              onChange={() => handleModeChange('embedded')}
            />
            <div className="radio-content">
              <span className="radio-icon">💳</span>
              <span className="radio-text">{t.checkout.embeddedCheckout}</span>
            </div>
          </label>

          <label 
            className={`radio-option ${selectedMode === 'hotmart' ? 'selected' : ''}`}
            onClick={() => handleModeChange('hotmart')}
          >
            <input
              type="radio"
              name="checkout-mode"
              value="hotmart"
              checked={selectedMode === 'hotmart'}
              onChange={() => handleModeChange('hotmart')}
            />
            <div className="radio-content">
              <span className="radio-icon">🔥</span>
              <span className="radio-text">{t.checkout.hotmartCheckout}</span>
            </div>
          </label>
        </div>
      </div>

      <div className="checkout-display">
        {selectedMode === 'embedded' ? (
          <div className="embedded-checkout-wrapper">
            <HotmartCheckout />
          </div>
        ) : (
          <div className="hotmart-redirect-wrapper">
            <div className="redirect-card">
              <div className="secure-icon">🔒</div>
                <h3>{t.checkout.redirectTitle}</h3>
                <p>{t.checkout.redirectText}</p>
              
                <a href={hotmartUrl} target="_blank" rel="noopener noreferrer" className="hotmart-button"> 
                  {t.checkout.redirectButton}
                </a>  
              
              <div className="security-badges">
                <span>{t.checkout.secure}</span>
                <span>{t.checkout.instant}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutToggle;
