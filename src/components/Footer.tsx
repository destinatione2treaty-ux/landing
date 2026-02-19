import { brandConfig } from '@/config/brand.config';
import { useTranslation } from '@/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useTranslation();
  const isEs = language === 'es';

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {brandConfig.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              {brandConfig.tagline}
            </p>
            {brandConfig.contact.email && (
              <p className="text-gray-400 text-sm">
                Email:{' '}
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {brandConfig.contact.email}
                </a>
              </p>
            )}
          </div>

          {/* Info & Trust */}
          <div className="md:text-right">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">
              {isEs ? 'Información' : 'Information'}
            </h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">
                💳 {isEs ? 'Pagos procesados por Hotmart' : 'Payments processed by Hotmart'}
              </p>
              <p className="text-gray-400 text-sm">
                🔒 {isEs ? 'Compra 100% segura' : '100% secure purchase'}
              </p>
              <p className="text-gray-400 text-sm">
                ↩️ {isEs
                  ? `Garantía de ${brandConfig.guarantee || '7'} días`
                  : `${brandConfig.guarantee || '7'}-day money back guarantee`}
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <p className="text-gray-600 text-xs text-center leading-relaxed max-w-2xl mx-auto">
            {isEs
              ? `Este producto no garantiza la aprobación de una visa. "${brandConfig.name}" es una guía informativa y educativa. No constituye asesoría legal o migratoria personalizada.`
              : `This product does not guarantee visa approval. "${brandConfig.name}" is an informative and educational guide. It does not constitute personalized legal or immigration advice.`}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center space-y-2">
          <p className="text-gray-500 text-sm">
            © {currentYear} {brandConfig.name}.{' '}
            {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>

          {/* ZenithWebCraft Credit */}
          <p className="text-gray-600 text-xs">
            {isEs ? 'Desarrollado con ♥ por' : 'Developed with ♥ by'}{' '}
            <a
              href="https://zenithwebcraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary transition-colors font-medium"
            >
              ZenithWebCraft
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
