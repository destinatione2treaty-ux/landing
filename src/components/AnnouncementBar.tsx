import { Megaphone } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <Megaphone className="w-4 h-4 md:w-5 md:h-5" />
        <span className="uppercase tracking-wide">
          Anuncio Importante: ¡Oferta disponible por tiempo limitado!
        </span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
