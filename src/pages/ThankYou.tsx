import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Mail, Calendar, FileText } from "lucide-react";
import { useTranslation } from "@/translations";
import { useEffect } from "react";
import { trackPurchase } from "@/components/MetaPixel";

const ThankYouPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    trackPurchase(49.99);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6">
            <Check className="w-12 h-12 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t.thankYou.title}
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            {t.thankYou.subtitle}
          </p>
          <p className="text-lg text-gray-400">
            {t.thankYou.message}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Card className="bg-gray-800 border-2 border-primary/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {t.thankYou.whatNext}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.thankYou.step1Title}
                    </h3>
                    <p className="text-gray-300">
                      {t.thankYou.step1Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.thankYou.step2Title}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {t.thankYou.step2Text}
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      {t.thankYou.step2Items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {t.thankYou.step3Title}
                    </h3>
                    <p className="text-gray-300">
                      {t.thankYou.step3Text}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {t.thankYou.whatYouGet}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.thankYou.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-white mb-3">
                {t.thankYou.questionsTitle}
              </h3>
              <p className="text-gray-300 mb-4">
                {t.thankYou.questionsText}
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:soporte@zenithwebcraft.com'}
                className="bg-primary hover:bg-primary/90 text-gray-900 font-bold"
              >
                {t.thankYou.contactButton}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            {t.thankYou.socialProof}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;