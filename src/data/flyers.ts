import flyerCancerMama from "@/assets/flyers/flyer-cancer-mama.png";
import flyerBienestar from "@/assets/flyers/flyer-bienestar.png";

export interface Flyer {
  id: string;
  title: string;
  sku: string;
  campaign: string;
  image: string;
  colors: string[];
  featured: boolean;
  notes?: string;
}

export const flyers: Flyer[] = [
  {
    id: "1",
    title: "Campaña Prevención Cáncer de Mama",
    sku: "CC-FLY-001",
    campaign: "Salud",
    image: flyerCancerMama,
    colors: ["#FF69B4", "#FFB6C1", "#FFC0CB"],
    featured: true,
    notes: "Productos promocionales para campaña de concientización sobre el cáncer de mama"
  },
  {
    id: "2",
    title: "Campaña Bienestar — Flyer 01",
    sku: "CC-FLY-002",
    campaign: "Bienestar",
    image: flyerBienestar,
    colors: ["#7CB342", "#FF9800", "#2196F3"],
    featured: true,
    notes: "Promocionales saludables y prácticos que reflejan la esencia de Tosh"
  }
];
