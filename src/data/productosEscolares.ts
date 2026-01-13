// src/data/productosEscolares.ts

export interface ProductoEscolar {
  id: string;
  name: string;
  description: string;
  images: string[];
}

export const productosEscolares: ProductoEscolar[] = [
  {
    id: "morral-escolar",
    name: "Morral Escolar Premium",
    description: "Morral ergonómico con múltiples compartimentos, ideal para el regreso a clases.",
    images: ["/images/placeholder-escolar.png"], // temporal
  },
  {
    id: "lonchera-termica",
    name: "Lonchera Térmica",
    description: "Lonchera con recubrimiento térmico para mantener los alimentos frescos.",
    images: ["/images/placeholder-escolar.png"],
  },
  // agrega más productos si quieres, usando el mismo placeholder
];

