import { Zap, Award, Paintbrush } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Tiempos de producción ágiles desde 50 unidades. Respuesta a cotizaciones en 24 horas."
  },
  {
    icon: Award,
    title: "Calidad",
    description: "Productos premium con materiales de primera calidad y acabados profesionales."
  },
  {
    icon: Paintbrush,
    title: "Personalización",
    description: "Múltiples opciones de impresión, grabado y diseño para destacar tu marca."
  }
];

const WhyChooseUs = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgba(102, 126, 234, 0.25) 0%, rgba(255, 255, 255, 0.05) 60%, transparent 100%)',
      }}
    >
      <div className="container px-4">
        <h2 className="font-[Poppins] font-bold text-3xl md:text-4xl text-center mb-12 text-primary">
          ¿Por qué elegirnos?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-md hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-white"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-[Poppins] font-semibold text-xl mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-[Inter]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
