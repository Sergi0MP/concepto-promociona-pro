// src/data/products.ts
import { christmasProducts } from "@/data/christmasProducts"; // ajusta la ruta si es distinta

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  minUnits: number;
  colors: string[];
  category: string;
  price?: number;
  image?: string;      // thumbnail principal
  images?: string[];   // para productos que tengan varias imágenes (navidad)
}

export const products: Product[] = [
  {
    id: "prensa1",
    sku: "CC-Cafe-001",
    name: "Kit Esencial para Café de Prensa Francesa",
    description:
      "Este kit es perfecto para los amantes del café que buscan una preparación artesanal y momentos compartidos.",
    minUnits: 10,
    colors: ["#484F9D"],
    category: "Café",
  },
  {
    id: "taza2",
    sku: "CC-OFI-002",
    name: "Taza de Cerámica Personalizada",
    description:
      "Este producto es una taza con un diseño moderno y un mensaje inspirador, presentada en una caja única que simula la forma de una casa, ideal para regalo.",
    minUnits: 10,
    colors: ["#C0C0C0"],
    category: "Oficina",
  },
  {
    id: "maquillaje1",
    sku: "CC-MA-001",
    name: "Set de Empaques Motivacionales",
    description:
      "Este es un set de dos bolsas versátiles, combinando un neceser o cosmetiquera con una bolsa de cordón, ambas con un enfoque en la practicidad y la inspiración.",
    minUnits: 10,
    colors: ["#6e4a4aff"],
    category: "Maquillaje",
  },
  {
    id: "botella1",
    sku: "CC-DE-001",
    name: "Termo Motivador Con Estuche",
    description:
      "Este set está diseñado para promover la hidratación constante y la actividad física, combinando una botella de gran capacidad con una funda protectora y práctica para llevar.",
    minUnits: 10,
    colors: ["#595959"],
    category: "Deportes",
  },

  // 🔔 Productos navideños reutilizados como categoría "Navidad"
  ...christmasProducts.map((p) => ({
    id: p.id,
    sku: `NAV-${p.id.toUpperCase()}`,   // puedes cambiar este patrón si luego tienes SKUs reales
    name: p.name,
    description: p.description,
    minUnits: 20,                      // pon aquí el mínimo que uses para navidad
    colors: [],                        // si luego quieres colores, los agregas
    category: "Navidad",
    image: p.images[0],                // primera imagen como thumbnail
    images: p.images,                  // todas las imágenes para el modal/carrusel
  })),
];

