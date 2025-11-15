import { Target, Eye } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section
  id="quienes-somos"
  className="w-full py-16 bg-gradient-to-b from-[#f6faff] to-[#e6f0ff] flex flex-col items-center"
>
  <div className="container px-4 py-12">
    <div className="max-w-4xl mx-auto">
      <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-12 text-center">
        Quiénes Somos
      </h1>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <Card className="rounded-xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-lg p-8 flex flex-col items-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-violet-200 via-violet-100 to-white flex items-center justify-center shadow-md">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-4">
              Misión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cambiar el juego de impactar, diseñando productos y experiencias que conquisten la mente del consumidor e impulsen el crecimiento de cada marca.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border border-white/30 shadow-xl backdrop-blur-lg rounded-2xl p-8 flex flex-col items-center">
          <CardContent className="pt-8 pb-6">
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-violet-200 via-violet-100 to-white flex items-center justify-center shadow-md">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-primary mb-4">
              Visión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              En los próximos años cada cliente con la que tengamos contacto, tendrá la oportunidad de impactar y ser elegida por la claridad en el CONCEPTO y la CREATIVIDAD al mostrar y vender sus beneficios.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-2xl bg-white/10 border border-white/25 shadow-xl backdrop-blur-lg p-8 flex flex-col items-start mt-10 max-w-3xl mx-auto">
  <h2 className="font-heading font-bold text-2xl text-primary mb-4">
    Nuestra Historia
  </h2>
  <p className="text-gray-700 leading-relaxed mb-4">
    Concepto Creativo nace como el resultado de la fusión de talentos jóvenes y la experiencia y el conocimiento de muchos años de su creadora, con el propósito de hablar en un idioma que los consumidores de todas las edades logren entender y preferir.
  </p>
  <p className="text-gray-700 leading-relaxed">
    Trabajamos con empresas de todos los tamaños en Colombia, desde startups hasta grandes corporaciones, entregando desde 50 hasta 50,000 unidades con la misma dedicación y atención al detalle.
  </p>
</div>

    </div>
  </div>
</section>

  );
};

export default About;






