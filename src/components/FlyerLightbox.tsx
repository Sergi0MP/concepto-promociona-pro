import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Copy, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Flyer } from "@/data/flyers";
import { useToast } from "@/hooks/use-toast";

interface FlyerLightboxProps {
  flyers: Flyer[];
  selectedFlyerId: string | null;
  onClose: () => void;
}

export const FlyerLightbox = ({ flyers, selectedFlyerId, onClose }: FlyerLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    if (selectedFlyerId) {
      const index = flyers.findIndex(f => f.id === selectedFlyerId);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [selectedFlyerId, flyers]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedFlyerId) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedFlyerId, currentIndex]);

  const currentFlyer = flyers[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? flyers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === flyers.length - 1 ? 0 : prev + 1));
  };

  const handleCopySKU = () => {
    navigator.clipboard.writeText(currentFlyer.sku);
    toast({
      title: "SKU copiado",
      description: `Código ${currentFlyer.sku} copiado al portapapeles`,
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentFlyer.image;
    link.download = `${currentFlyer.title.replace(/\s+/g, '-').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Descarga iniciada",
      description: "El flyer se está descargando",
    });
  };

  if (!selectedFlyerId) return null;

  return (
    <Dialog open={!!selectedFlyerId} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[90vh] p-0 gap-0 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Image section */}
          <div className="lg:col-span-2 relative bg-muted flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur hover:bg-background"
              onClick={onClose}
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background"
              onClick={handlePrevious}
              aria-label="Flyer anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background"
              onClick={handleNext}
              aria-label="Flyer siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <img
              src={currentFlyer.image}
              alt={`Flyer ${currentFlyer.campaign} — ${currentFlyer.title} — Concepto Creativo`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-3 py-1.5 rounded-full text-sm font-medium">
              {currentIndex + 1} / {flyers.length}
            </div>
          </div>

          {/* Metadata section */}
          <div className="flex flex-col p-6 overflow-y-auto bg-background">
            <div className="flex-1">
              <h2 className="font-heading font-bold text-2xl text-primary mb-2">
                {currentFlyer.title}
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">SKU</label>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="flex-1 px-3 py-2 bg-muted rounded font-mono text-sm">
                      {currentFlyer.sku}
                    </code>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={handleCopySKU}
                      aria-label="Copiar SKU"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Campaña</label>
                  <div className="mt-1">
                    <span className="inline-flex px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {currentFlyer.campaign}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Colores predominantes</label>
                  <div className="flex gap-2 mt-2">
                    {currentFlyer.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-lg border-2 border-muted shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {currentFlyer.notes && (
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Notas</label>
                    <p className="mt-1 text-sm text-foreground leading-relaxed">
                      {currentFlyer.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Solicitar muestra de este flyer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
              >
                Crear producto desde este flyer
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar imagen
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
