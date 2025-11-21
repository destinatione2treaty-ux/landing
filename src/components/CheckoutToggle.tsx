import { useState } from 'react';
import HotmartCheckout from './HotmartCheckout';
import { useTranslation } from '@/translations';
import { trackInitiateCheckout } from './MetaPixel';

type CheckoutMode = 'embedded' | 'hotmart';

interface CheckoutToggleProps {
  defaultMode: CheckoutMode; // 'embedded' para Landing A, 'hotmart' para Landing B
}

const CheckoutToggle = ({ defaultMode }: CheckoutToggleProps) => {
  const [selectedMode, setSelectedMode] = useState<CheckoutMode>(defaultMode);
  const { t } = useTranslation();

  const handleModeChange = (mode: CheckoutMode) => {
    setSelectedMode(mode);
    trackInitiateCheckout();
  };

  const hotmartUrl = 'https://pay.hotmart.com/M102318829D?off=43vz0ocq';

  return (
    <div className="checkout-toggle-container">
      {/* Payment Method Selector */}
      <div className="payment-method-selector">
        <h3 className="selector-title">{t.checkout.paymentMethod}</h3>
        
        <div className="radio-buttons">
          {/* Opción 1: Checkout Embebido */}
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

          {/* Opción 2: Hotmart */}
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
              <span className="radio-icon">🏦</span>
              <span className="radio-text">{t.checkout.hotmartCheckout}</span>
            </div>
          </label>
        </div>
      </div>

      {/* Checkout Display */}
      <div className="checkout-display">
        {selectedMode === 'embedded' ? (
          <div className="embedded-checkout-wrapper">
            <HotmartCheckout />
            {/* Link alternativo */}
            <div className="alternative-link">
              <p>
                {t.checkout.switchTo}{' '}
                <button 
                  onClick={() => handleModeChange('hotmart')}
                  className="switch-link"
                >
                  {t.checkout.switchToHotmart}
                </button>
                ?
              </p>
            </div>
          </div>
        ) : (
          <div className="hotmart-redirect-wrapper">
            <iframe 
              src={hotmartUrl}
              className="hotmart-iframe"
              title="Hotmart Checkout"
            />
            {/* Link alternativo */}
            <div className="alternative-link">
              <p>
                {t.checkout.switchTo}{' '}
                <button 
                  onClick={() => handleModeChange('embedded')}
                  className="switch-link"
                >
                  {t.checkout.switchToEmbedded}
                </button>
                ?
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .checkout-toggle-container {
          width: 100%;
        }

        .payment-method-selector {
          margin-bottom: 32px;
        }

        .selector-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 20px;
          text-align: center;
        }

        .radio-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .radio-option {
          position: relative;
          padding: 20px;
          border: 3px solid #e9ecef;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }

        .radio-option:hover {
          border-color: #D4AF37;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }

        .radio-option.selected {
          border-color: #D4AF37;
          background: linear-gradient(135deg, #fff9e6 0%, #ffffff 100%);
          box-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
        }

        .radio-option input[type="radio"] {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .radio-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .radio-icon {
          font-size: 2rem;
        }

        .radio-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: #495057;
          text-align: center;
          line-height: 1.3;
        }

        .radio-option.selected .radio-text {
          color: #1a1a1a;
        }

        .checkout-display {
          width: 100%;
        }

        .embedded-checkout-wrapper,
        .hotmart-redirect-wrapper {
          width: 100%;
        }

        .hotmart-iframe {
          width: 100%;
          min-height: 800px;
          border: none;
          border-radius: 8px;
        }

        .alternative-link {
          text-align: center;
          margin-top: 16px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .alternative-link p {
          font-size: 0.9rem;
          color: #6c757d;
          margin: 0;
        }

        .switch-link {
          background: none;
          border: none;
          color: #D4AF37;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          padding: 0;
          font-size: inherit;
        }

        .switch-link:hover {
          color: #b8941f;
        }

        @media (max-width: 768px) {
          .radio-buttons {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .radio-option {
            padding: 16px;
          }

          .radio-content {
            flex-direction: row;
            justify-content: center;
          }

          .radio-icon {
            font-size: 1.5rem;
          }

          .radio-text {
            font-size: 0.85rem;
          }

          .hotmart-iframe {
            min-height: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckoutToggle;