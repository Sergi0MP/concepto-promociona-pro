import { Target, Eye, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(to top, #e1eeff 0%, #f8fbff 80%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Header className="header-quienes-somos" />

        <a
          href="/"
          className="
            fixed top-8 left-8 z-30 bg-white/90 hover:bg-white text-primary rounded-full
            p-4 shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center
            w-14 h-14
          "
          style={{ boxSizing: "content-box" }}
          aria-label="Volver al inicio"
        >
          <ArrowLeft className="h-8 w-8" style={{ pointerEvents: "none" }} />
        </a>

        <main className="container px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-8 text-center">
              Quiénes Somos
            </h1>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="about-card border-2 border-primary/20 rounded-2xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.03]">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-primary mb-4">
                    Misión
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Cambiar el juego de impactar, diseñando productos y experiencias que conquisten la mente del consumidor e impulsen el crecimiento de cada marca.
                  </p>
                </CardContent>
              </Card>
              <Card className="about-card border-2 border-secondary rounded-2xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.03]">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl text-primary mb-4">
                    Visión
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    En los próximos años cada cliente con la que tengamos contacto, tendrá la oportunidad de impactar y ser elegida por la claridad en el CONCEPTO y la CREATIVIDAD al mostrar y vender sus beneficios.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-secondary/30 rounded-lg p-8">
              <h2 className="font-heading font-bold text-2xl text-primary mb-4">
                Nuestra Historia
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Concepto Creativo nace como el resultado de la fusión de talentos jóvenes y la experiencia y el conocimiento de muchos años de su creadora, con el propósito de hablar en un idioma que los consumidores de todas las edades logren entender y preferir.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Trabajamos con empresas de todos los tamaños en Colombia, desde startups hasta grandes corporaciones, entregando desde 50 hasta 50,000 unidades con la misma dedicación y atención al detalle.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;





