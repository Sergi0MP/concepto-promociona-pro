import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { flyers } from "@/data/flyers";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  return (
    <section className="relative py-12 bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      {/* 🎥 Video de fondo animado */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/fondonavidad.mp4" type="video/mp4" />
      </video>

      {/* 🌙 Capa oscura opcional para mejor contraste */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="container px-4">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {flyers.map((flyer) => (
              <CarouselItem key={flyer.id}>
                <div className="relative group cursor-default px-2 animate-zoom-fade">
                  <div className="relative overflow-hidden rounded-[12px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-4 border-white bg-white">
                    <img
                      src={flyer.image}
                      alt={`Flyer ${flyer.campaign} — ${flyer.title} — Concepto Creativo`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="left-2 md:left-4 h-12 w-12 bg-primary text-primary-foreground 
                       hover:bg-primary/90 border-0 shadow-lg transition-all duration-300 
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(72,79,157,0.6)]"
          />
          <CarouselNext
            className="right-2 md:right-4 h-12 w-12 bg-primary text-primary-foreground 
                       hover:bg-primary/90 border-0 shadow-lg transition-all duration-300 
                       hover:scale-110 hover:shadow-[0_0_20px_rgba(72,79,157,0.6)]"
          />
        </Carousel>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-6">
          {flyers.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-primary/30 hover:bg-primary transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

