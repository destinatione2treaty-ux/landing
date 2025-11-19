import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Calendar, FileText } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6">
            <Check className="w-12 h-12 text-primary" />
          </div>
          
          {/* Main Message */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ¡Compra Exitosa!
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Gracias por confiar en ZenithWebCraft
          </p>
          <p className="text-lg text-gray-400">
            Tu landing page profesional está en camino
          </p>
        </div>

        {/* What Happens Next */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-gray-800 border-2 border-primary/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                ¿Qué Sigue Ahora?
              </h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      1. Revisa tu Email (Siguiente 5 minutos)
                    </h3>
                    <p className="text-gray-300">
                      Recibirás un email de confirmación de Hotmart con los detalles de tu compra 
                      y el recibo.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      2. Completa el Formulario de Información (Hoy)
                    </h3>
                    <p className="text-gray-300 mb-3">
                      Te enviaremos un formulario para recopilar la información necesaria para tu landing:
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Tu información de negocio</li>
                      <li>• Colores de marca preferidos</li>
                      <li>• Textos y contenido principal</li>
                      <li>• Logo e imágenes (si tienes)</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      3. Recibe tu Landing Page (Máximo 48 horas)
                    </h3>
                    <p className="text-gray-300">
                      Crearemos tu landing page profesional y te la entregaremos completamente 
                      funcional, instalada en tu dominio y lista para empezar a vender.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Lo Que Recibirás
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Landing Page Profesional de Alta Conversión",
              "Guía de Copywriting en PDF",
              "Paleta de Colores Personalizada",
              "Instalación en tu Dominio",
              "30 Días de Soporte por Email"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <Card className="inline-block bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                ¿Tienes Preguntas?
              </h3>
              <p className="text-gray-300 mb-4">
                Estamos aquí para ayudarte
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:soporte@zenithwebcraft.com'}
                className="bg-primary hover:bg-primary/90 text-gray-900 font-bold"
              >
                Contactar Soporte
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            🎉 Te uniste a más de 50 emprendedores que ya tienen su landing page profesional
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;