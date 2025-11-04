import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Download, Copy, ExternalLink } from "lucide-react";
import { flyers } from "@/data/flyers";
import { FlyerLightbox } from "./FlyerLightbox";
import Autoplay from "embla-carousel-autoplay";
import { useToast } from "@/hooks/use-toast";

const FlyersCarousel = () => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCopySKU = (sku: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(sku);
    toast({
      title: "SKU copiado",
      description: `Código ${sku} copiado al portapapeles`,
    });
  };

  const handleDownload = (image: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Descarga iniciada",
      description: "El flyer se está descargando",
    });
  };

  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Campañas Destacadas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Inspiración y ejemplos de nuestras campañas promocionales más exitosas
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {flyers.map((flyer) => (
                <CarouselItem key={flyer.id} className="md:basis-1/2 lg:basis-1/2">
                  <div 
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedFlyer(flyer.id)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                      <img
                        src={flyer.image}
                        alt={`Flyer ${flyer.campaign} — ${flyer.title} — Concepto Creativo`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Action icons - top right */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-9 w-9 bg-background/95 backdrop-blur hover:bg-background shadow-lg"
                          onClick={(e) => handleDownload(flyer.image, flyer.title, e)}
                          aria-label="Descargar flyer"
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="h-9 w-9 bg-background/95 backdrop-blur hover:bg-background shadow-lg"
                          onClick={(e) => handleCopySKU(flyer.sku, e)}
                          aria-label="Copiar código del flyer"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Overlay with info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-semibold text-primary-foreground text-sm mb-1 truncate">
                              {flyer.title}
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-primary-foreground/80">
                              <span className="font-mono">{flyer.sku}</span>
                              <span className="px-2 py-0.5 bg-accent rounded-full text-accent-foreground font-medium">
                                {flyer.campaign}
                              </span>
                            </div>
                          </div>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-8 w-8 shrink-0 bg-accent hover:bg-accent/90 text-accent-foreground"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedFlyer(flyer.id);
                            }}
                            aria-label="Ver ficha completa"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Solicitar muestra
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Agregar al catálogo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary text-primary-foreground hover:bg-primary/90" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary text-primary-foreground hover:bg-primary/90" />
          </Carousel>

          {/* Thumbnails indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {flyers.map((flyer, index) => (
              <button
                key={flyer.id}
                className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => setSelectedFlyer(flyer.id)}
                aria-label={`Ver ${flyer.title}`}
              >
                <img
                  src={flyer.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <FlyerLightbox
        flyers={flyers}
        selectedFlyerId={selectedFlyer}
        onClose={() => setSelectedFlyer(null)}
      />
    </>
  );
};

export default FlyersCarousel;
