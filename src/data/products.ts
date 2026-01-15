// src/data/products.ts
import { christmasProducts } from "@/data/christmasProducts"; // ajusta la ruta si es distinta
import jaderoller1 from "@/assets/productos1/jaderoller1.png";
import jaderoller2 from "@/assets/productos1/jaderoller2.jpeg";


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
    sku: "CC-Hogar-001",
    name: "Kit Esencial para Café de Prensa Francesa",
    description:
      "Prensa francesa:  Medida 8 x 18 cm. Capacidad 600ml. Vidrio de Borosilicato + Tapa de bambú. con filtro de aluminio +  2 tazas de vidrio con asa, Medida 8 diametro x 10 cm , Capacidad 225 ml cada una , material vidrio . Incluye caja .",
    minUnits: 10,
    colors: ["#484F9D"],
    category: "Hogar",
  },
  {
    id: "taza2",
    sku: "CC-Beb-002",
    name: "Taza de Cerámica Personalizada",
    description:
      "Este producto es una taza con un diseño moderno y un mensaje inspirador, presentada en una caja única que simula la forma de una casa, ideal para regalo.",
    minUnits: 10,
    colors: ["#C0C0C0"],
    category: "Bebidas",
  },
  {
    id: "maquillaje1",
    sku: "CC-MA-001",
    name: "Set de Empaques Motivacionales",
    description:
      "Este es un set de dos bolsas versátiles, combinando un neceser o cosmetiquera con una bolsa de cordón, ambas con un enfoque en la practicidad y la inspiración.",
    minUnits: 10,
    colors: ["#6e4a4aff"],
    category: "Cosmetiqueras y Organizadores",
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

  {
    id: "rollerdeluxe1",
    sku: "CC-cu-001",
    name: "Roller Deluxe",
    description:
      "Roller facial con mango de madera y doble piedra jade natural de dos tamaños. Medida :  5.8 x 14.3 cm.",
    minUnits: 10,
    colors: ["#595959"],
    category: "Belleza y Cuidado Personal",
  },
  {
    id: "jaderoller1",
    sku: "CC-cu-002",
    name: "Jade Roller Sencillo",
    description:
      "Roller facial con mango de madera y piedra jade natural. Medida 5.8 x 12.8 cm.",
    minUnits: 10,
    colors: ["#595959"],
    category: "Belleza y Cuidado Personal",
    image: jaderoller1,
  images: [jaderoller1, jaderoller2], // ahora sí

  },
   {
    id: "peine1",
    sku: "CC-cu-003",
    name: "Peine Bambu Essencial",
    description:
      "Elaborado en bambú natural. Medida 14 x 5.5 cm.",
    minUnits: 10,
    colors: ["#d9d484"],
    category: "Belleza y Cuidado Personal",
   

  },
  {
    id: "brochas1",
    sku: "CC-cu-004",
    name: "Set Gloss",
    description:
      "Set de 8 pinceles ultra suaves para maquillaje en estuche de cuerina. Medida  15 x 8,5 cm.",
    minUnits: 10,
    colors: ["#91cbf0", "#f091e0"],
    category: "Belleza y Cuidado Personal",
   

  },
  {
    id: "cosmetiquera1",
    sku: "CC-MA-002",
    name: "Cosmetiquera Vanity",
    description:
      "Necessaire de algodón reciclado.  Con Borla Medidas: 23,5 x 17 x 6,5 cm. Materiales: Algodón reciclado de 175 g/m² colores , Natural y Rosado ",
    minUnits: 10,
    colors: ["#f7ebc3", "#f091e0"],
    category: "Cosmetiqueras y Organizadores",
   

  },
  {
    id: "essence1",
    sku: "CC-cu-005",
    name: "Essence Box",
    description:
      "El kit  contiene caja  kraf + set de descanso con 3 accesorios + Vela envase vidrio (el set  de descanso Incluye bolsa antifaz , balaca y scrunchie para el cabello) Materiales : Poliester / Fibra de Bambu / ElasticoTamaño productos : Bolsa 15 x 24 cm  / Antifaz 20.8 x 9.5 cm /Balaca  48 cm / Scrunchie  11 x 11 cm Colores disponibles Beige y rosado  ",
    minUnits: 10,
    colors: ["#f7ebc3", "#f1caea"],
    category: "Belleza y Cuidado Personal",
   

  },
  {
    id: "joyero1",
    sku: "CC-MA-003",
    name: "Joyero Zenit",
    description:
      "compartimento principal con cierre. Interior tipo terciopelo, 3 ganchos para collares, 6 ranuras para anillos, 1 bolsillo interior con elastico y 4 divisiones.Elaborado en  PU/ Poliester, Tamaño 9.3*9.3 cm , colores disponibles: Negro.  Incluye caja Kraft, color cinta a solicitud del cliente ( colores de linea) ",
    minUnits: 10,
    colors: ["#f7ebc3", "#f1caea"],
    category: "Cosmetiqueras y Organizadores",
   

  },
  {
    id: "agendas1",
    sku: "CC-AG-001",
    name: "Agenda Semanal",
    description:
      "Agenda semanal con 100 hojas. Contiene datos personales, calendarios 2025-2026-2027, planeador 2026, presupuesto de gastos, seguimiento de nuevos habitos, organizador de tareas y planeador de proyecto. Incluye caja individual del mismo color a la agenda, separador con placa metalica y boligrafo. Medida: 16 x 21.4 cm Agenda / 1 x 13.5 cm Bolígrafo",
    minUnits: 10,
    colors: ["#000000", "#6895e9", "#f7eabf"],
    category: "Agendas",
   

  },
  {
    id: "pelota1",
    sku: "CC-AN-001",
    name: "Pelota Antiestres",
    description:
      "Antiestres multicolor.  Medidas: 6.3 cm Diámetro",
    minUnits: 10,
    colors: ["#000000", "#6895e9", "#f70808","#ffd343"],
    category: "Antiestres",
   

  },
  {
    id: "asado1",
    sku: "CC-Hogar-002",
    name: "Set BBQ Snazzy",
    description:
      "Set de BBQ, Incluye pinzas, espatula, tenedor y estuche metalico. Medidas: 37 x 10 cm Material: Acero Inoxidable Utensilios / Aluminio y PVC Estuche",
    minUnits: 10,
    colors: ["#363b3f"],
    category: "Hogar",
   

  },
  {
    id: "maletas1",
    sku: "CC-Maletas-001",
    name: "Maleta Deportiva",
    description:
      "Maleta deportiva. El compartimento principal cuenta con cierre y un amplio espacio para organizar tus articulos deportivos. Tambien cuenta con un bolsillo frontal para los articulos esenciales y una practica zapatera para transportar el calzado. La base esta equipada con un material antideslizante y resistente. Incluye una asa ajustable, removible y ergonomica para un comodo agarre en el hombro. Medidas: 50 x 30 x 28 cm",
    minUnits: 10,
    colors: ["#4f8abb", "#eee4ab"],
    category: "Maletas",
   

  },
  {
    id: "mochila1",
    sku: "CC-Maletas-002",
    name: "Maleta Tipo Roll Top",
    description:
      "Tipo roll top en poliéster con manijas doble función.  Bolsillo principal XL para laptop. Bolsillo frontal con cremallera y lateral para bebidas. Capacidad 27-30 litros / 12 kilos.Medidas: 30 x 14 x 41 cm",
    minUnits: 10,
    colors: ["#000000"],
    category: "Maletas",
   

  },
];


