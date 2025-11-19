import HotmartCheckout from './HotmartCheckout';

/**
 * Sección de Checkout - Incluye título, descripción y checkout embebido
 * Esta sección se coloca en la parte inferior de tu landing
 */
const CheckoutSection = () => {
  return (
    <section 
      id="checkout-section" 
      className="checkout-section"
    >
      <div className="checkout-container">
        {/* Header de la sección */}
        <div className="checkout-header">
          <h2 className="checkout-title">
            Completa Tu Orden
          </h2>
          <p className="checkout-subtitle">
            Tu landing page profesional está a solo un paso. Completa tu información de pago de forma segura.
          </p>
          
          {/* Trust badges */}
          <div className="trust-badges">
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Pago 100% Seguro</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Entrega en 48 Horas</span>
            </div>
            <div className="trust-badge">
              <svg className="trust-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span>Múltiples Métodos de Pago</span>
            </div>
          </div>
        </div>

        {/* Checkout embebido de Hotmart */}
        <div className="checkout-content">
          <HotmartCheckout />
        </div>

        {/* Garantía y Soporte */}
        <div className="checkout-footer">
          <div className="guarantee-badge">
            <svg className="guarantee-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h4>Garantía de Satisfacción</h4>
              <p>Si no estás 100% satisfecho, te devolvemos tu dinero</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .checkout-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
        }

        .checkout-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .checkout-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .checkout-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 16px;
          font-family: 'Archivo Black', sans-serif;
        }

        .checkout-subtitle {
          font-size: 1.125rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #495057;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .trust-icon {
          width: 24px;
          height: 24px;
          color: #D4AF37;
        }

        .checkout-content {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          padding: 40px;
          margin-bottom: 40px;
        }

        .checkout-footer {
          text-align: center;
        }

        .guarantee-badge {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 24px 32px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          text-align: left;
        }

        .guarantee-icon {
          width: 48px;
          height: 48px;
          color: #D4AF37;
          flex-shrink: 0;
        }

        .guarantee-badge h4 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 4px 0;
        }

        .guarantee-badge p {
          font-size: 0.875rem;
          color: #6c757d;
          margin: 0;
        }

        @media (max-width: 768px) {
          .checkout-section {
            padding: 60px 16px;
          }

          .checkout-title {
            font-size: 2rem;
          }

          .checkout-subtitle {
            font-size: 1rem;
          }

          .trust-badges {
            gap: 24px;
          }

          .trust-badge {
            font-size: 0.85rem;
          }

          .checkout-content {
            padding: 24px 16px;
          }

          .guarantee-badge {
            flex-direction: column;
            text-align: center;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default CheckoutSection;