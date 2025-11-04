import { Target, Eye } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-8 text-center">
            Quiénes Somos
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary mb-4">
                  Misión
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  Cambiar el juego de impactar, diseñando productos y experiencias que conquisten la mente del consumidor e impulsen el crecimiento  de cada marca.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary mb-4">
                  Visión
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  En los proximos años cada cliente con la que tengamos contacto, tendrá la oportunidad de impactar y s er elegida por la claridad en el CONCEPTO y la CREATIVIDAD al mostrar y vender  sus beneficios. 
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/30 rounded-lg p-8">
            <h2 className="font-heading font-bold text-2xl text-primary mb-4">
              Nuestra Historia
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Concepto Creativo nace como el resultado  de la fusión de talentos jovenes y la experiencia y el conocimiento de muchos años  de su creadora, con el propósito de hablar en un idioma que los consumidores de todas las edades logren entender y preferir.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Trabajamos con empresas de todos los tamaños en Colombia, desde startups hasta grandes 
              corporaciones, entregando desde 50 hasta 50,000 unidades con la misma dedicación y atención al detalle.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
