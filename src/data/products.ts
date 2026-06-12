// src/data/products.ts
import { christmasProducts } from "@/data/christmasProducts"; // ajusta la ruta si es distinta
// Imágenes en /public/assets — sin imports estáticos
const jaderoller1 = "/assets/productos1/jaderoller1.webp";
const jaderoller2 = "/assets/productos1/jaderoller2.webp";


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
   {
    id: "setherramientas1",
    sku: "CC-Herra-001",
    name: "Set de Herramientas Multifuncional",
    description:
      "Set práctico y compacto que incluye desarmador con 10 puntas intercambiables, 5 llaves hexagonales, extensión, 4 dados y pinzas de punta. Viene en estuche resistente, ideal para trabajos técnicos y uso diario en campo. Material: Metal / Plástico Tamaño: 16.5 x 9 cm",
    minUnits: 10,
    colors: ["#000000"],
    category: "Herramientas",
   

  },
  {
    id: "setlinterna1",
    sku: "CC-Herra-002",
    name: "Linterna Con Set De Herramientas",
    description:
      "Linterna multifuncional con set de herramientas integrado, ideal para uso técnico, industrial y de campo. Cuenta con batería de litio recargable, linterna desmontable y base imantada para mayor practicidad durante el trabajo. Medidas: 24 x 10 x 7,8 cm Materiales: ABS y acero al carbono Capacidad de batería: 800 mAh",
    minUnits: 10,
    colors: ["#000000"],
    category: "Herramientas",
   

  },
  {
    id: "navaja1",
    sku: "CC-Herra-003",
    name: "Navaja Multifuncional 12 EN 1",
    description:
      "Navaja metálica multifuncional con 12 herramientas integradas, ideal para uso diario, actividades técnicas y trabajo en campo. Su diseño compacto la hace práctica y fácil de transportar. Incluye caja individual, perfecta para presentación corporativa o promocional. Material: Metal.  Tamaño: 2.6 x 9.8 x 1.7 cm",
    minUnits: 10,
    colors: ["#000000"],
    category: "Herramientas",
   

  },
  {
    id: "metro1",
    sku: "CC-Herra-004",
    name: "Cinta Métrica 3 Metros",
    description:
      "Cinta métrica de 3 m con cinta de acero inoxidable, traba de seguridad y clip metálico. Estructura en ABS con detalle circular en bambú y correa de poliéster.Medidas: 6 x 6 x 3,4 cm Materiales: ABS, acero inoxidable, poliéster y bambú. Longitud: 3 m",
    minUnits: 10,
    colors: ["#000000"],
    category: "Herramientas",
   

  },
   {
    id: "calibrador1",
    sku: "CC-Herra-005",
    name: "Calibrador De Aire Para LLantas",
    description:
      "Medidor de aire para llantas fabricado en aluminio, compacto y fácil de usar. Soporta una presión máxima de 50 PSI, ideal para uso automotriz y técnico. Material: Aluminio  Medidas: 8.2 x 1.6 cm  Presión máxima: 50 PSI",
    minUnits: 10,
    colors: ["#000000"],
    category: "Herramientas",
   

  },
  {
    id: "mochilahielera1",
    sku: "CC-Maletas-003",
    name: "Mochila Hielera",
    description:
      "Hielera tipo mochila con interior impermeable, compartimento principal con cierre, bolsillo superior y bolsillos laterales de red. Incluye elástico frontal, asas ajustables, espalda acolchada y banda para trolley. Ideal para playa, pesca o actividades al aire libre. Capacidad para 24 latas.  Material: Poliuretano / Acetato de Vinilo de Polietileno / Poliéster  Tamaño: 28.5 x 45 x 19 cm",
    minUnits: 10,
    colors: ["#6b6b6b"],
    category: "Maletas",
   

  },
  {
    id: "hielera1",
    sku: "CC-Hieleras-001",
    name: "Lonchera Térmica",
    description:
      "Lonchera térmica con interior totalmente recubierto de aluminio, ideal para conservar la temperatura de alimentos y bebidas. Cuenta con bolsillo frontal, correa extensible y cierres metálicos con tiradores de cordón para mayor resistencia y comodidad. :Medidas: 34 x 25 x 19 cm  Capacidad: 16 litros (volumen)  Material: Poliéster 600D",
    minUnits: 10,
    colors: ["#ad1919"],
    category: "Hieleras y Loncheras",
   

  },
   {
    id: "setrecipiente1",
    sku: "CC-Hieleras-002",
    name: "Set de Recipiente + Botella Termica",
    description:
      "Set que incluye recipiente con cierre hermético y botella térmica vacuum de doble pared. Ideal para llevar alimentos y bebidas durante la jornada. La botella mantiene bebidas calientes hasta 6 h y frías hasta 12 h. Recipiente: 17,8 x 17,8 x 7,6 cm · Capacidad 1 L · Polipropileno. Botella: Ø 7,2 x 21,5 cm · Capacidad 480 ml.  Materiales botella: Acero inoxidable, polipropileno y silicona.",
    minUnits: 10,
    colors: ["#0e073f"],
    category: "Hieleras y Loncheras",
   
  },
  {
    id: "loncheratermica1",
    sku: "CC-Hieleras-003",
    name: "Lonchera Térmica FRESHGO",
    description:
      "Lonchera térmica con interior metalizado que ayuda a conservar los alimentos frescos por más tiempo. Su diseño compacto y liviano incluye bolsillo frontal de fácil acceso para utensilios o snacks y asas reforzadas que brindan mayor comodidad al transportarla. Capacidad para 6 latas. Material: Poliéster.  Tamaño: 23 x 19 x 12 cm",
    minUnits: 10,
    colors: ["#3d3380", "#000000", "#848381", "#d41010","#2a6038"],
    category: "Hieleras y Loncheras",
   
  },
  {
    id: "sanduchera1",
    sku: "CC-Hieleras-004",
    name: "Sanduchera",
    description:
      "Recipiente plástico en forma de rebanada de pan, con cierre a presión que mantiene el contenido protegido. Ideal para llevar sándwiches de forma práctica y compacta. Material: Plástico.  Medidas: 3,8 x 13,1 x 14,1 cm",
    minUnits: 10,
    colors: ["#3d3380", "#d41010","#2a6038"],
    category: "Hieleras y Loncheras",
   
  },
  {
    id: "portaviendas1",
    sku: "CC-Hieleras-005",
    name: "Portaviendas",
    description:
      "Contenedor para alimentos con división interna para separar comidas y tapa con cierre hermético que evita derrames. Incluye cuchara y tenedor de plástico y caja individual para presentación. Material: Plástico.  Tamaño: 21.5 x 8 x 12.5 cm.  Capacidad: 1.1 litros",
    minUnits: 10,
    colors: ["#3d3380", "#d41010","#2a6038"],
    category: "Hieleras y Loncheras",
  },

  // ── TEMPORADA ESCOLAR ──────────────────────────────────────────────
  {
    id: "escolar-cartuchera1",
    sku: "CC-ESC-001",
    name: "Set Cartuchera Ecológica con Libreta",
    description: "Tapas de cartón ecológico gruesas, 80 hojas rayadas. Cartuchera en cambrel con cremallera. Bolígrafo de cartón. De 14.5 x 18 cm. Impresión en tampografía. Tamaño área impresa: 7 x 7 cm.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/cartuchera1.webp", "/assets/escolar/cartuchera2.webp"],
  },
  {
    id: "escolar-lonchera1",
    sku: "CC-ESC-002",
    name: "Lonchera",
    description: "Lonchera con interior metalizado que mantiene alimentos frescos y protegidos. Diseño compacto y ligero con bolsa frontal de rápido acceso y asas reforzadas. Capacidad para 6 latas. Tamaño: 23 x 19 x 12 cm.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/lonchera1.webp", "/assets/escolar/lonchera2.webp"],
  },
  {
    id: "escolar-crayolas1",
    sku: "CC-ESC-003",
    name: "Caja De Crayolas",
    description: "Caja de cartón con 5 crayones de varios colores. Medida: 4.3 x 9.2 cm.",
    minUnits: 10,
    colors: ["#F59E0B"],
    category: "Escolar",
    images: ["/assets/escolar/crayolas1.webp", "/assets/escolar/crayolas2.webp"],
  },
  {
    id: "escolar-tablero1",
    sku: "CC-ESC-004",
    name: "Pizarrón Planeador Magnético Semanal",
    description: "Pizarrón con planeador semanal, superficie magnética, marcador con borrador y sección de corcho. Incluye gancho y dos imanes adhesivos. Material: Melamina / Corcho / Aluminio. Tamaño: 21.6 × 43.2 × 1.1 cm.",
    minUnits: 10,
    colors: ["#FFFFFF"],
    category: "Escolar",
    images: ["/assets/escolar/tablero1.webp", "/assets/escolar/tablero2.webp"],
  },
  {
    id: "escolar-lunch1",
    sku: "CC-ESC-005",
    name: "Kit Lunch Práctico",
    description: "Incluye portaviandas con división interna y cubiertos, cilindro plástico con tapa de bambú y lonchera con forro plastificado. Fabricado en plástico, bambú y poliéster. Portaviandas: 1.1 L / 21.5 × 8 × 12.5 cm.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/lunch1.webp", "/assets/escolar/lunch2.webp"],
  },
  {
    id: "escolar-libreta1",
    sku: "CC-ESC-006",
    name: "Libreta Escolar Pasteles",
    description: "Libreta escolar con 80 hojas a rayas, cubierta plástica resistente y 8 aros plásticos tipo espiral. Ideal para apuntes, tareas y bocetos. Tamaño: 14.6 × 21.5 cm.",
    minUnits: 10,
    colors: ["#F9A8D4"],
    category: "Escolar",
    images: ["/assets/escolar/libretas1.webp", "/assets/escolar/libreta2.webp"],
  },
  {
    id: "escolar-kitlunch1",
    sku: "CC-ESC-007",
    name: "Kit Lunch & Drink",
    description: "Termo metálico de doble pared (700 ml), lonchera térmica y portaviandas triple compartimento 1.6 L con cubierto. Mantiene bebidas calientes 6h y frías 8h. Fabricado en acero inoxidable, poliéster y plástico.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/kitlunch1.webp", "/assets/escolar/kitlunch2.webp"],
  },
  {
    id: "escolar-termo1",
    sku: "CC-ESC-008",
    name: "Termo Plástico Flowy 100ml",
    description: "Tapa de plástico con cierre de rosca, boquilla con sobretapa y asa plegable. Incluye caja individual. Tamaño: 8.8 x 26 cm. Colores: Azul, amarillo, morado y rojo.",
    minUnits: 10,
    colors: ["#3B82F6", "#F59E0B", "#8B5CF6", "#EF4444"],
    category: "Escolar",
    images: ["/assets/escolar/termoo1.webp", "/assets/escolar/termo2.webp"],
  },
  {
    id: "escolar-kitarte1",
    sku: "CC-ESC-009",
    name: "Kit De Arte",
    description: "Mini caballete con block de 20 hojas blancas + 6 temperas pequeñas. Tamaño block: 15 x 15 cm.",
    minUnits: 10,
    colors: ["#F59E0B"],
    category: "Escolar",
    images: ["/assets/escolar/kitarte.webp"],
  },
  {
    id: "escolar-marcadores1",
    sku: "CC-ESC-010",
    name: "Set Marcadores Delgados",
    description: "Set cartuchera + 12 marcadores delgados. Medidas cartuchera: 24.6 x 10.8 cm. Material PVC.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/marcadores.webp"],
  },
  {
    id: "escolar-kitescolar1",
    sku: "CC-ESC-011",
    name: "Kit Escolar",
    description: "Mochila escolar con compartimento para laptop 14\", cuaderno argollado 100 hojas con banderillas y estuche multifuncional con 12 colores, tajalápiz y borrador. Fabricado en poliéster, cartón y plástico.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/kitescolar.webp", "/assets/escolar/kitescolar2.webp"],
  },
  {
    id: "escolar-kittodoenuno1",
    sku: "CC-ESC-012",
    name: "Kit Escolar Todo en Uno",
    description: "Mochila con compartimento para laptop y lonchera térmica, cilindro plástico 800 ml con asa de silicona y portaviandas ecológico de fibra de trigo 1 L. Material Oxford, plástico y fibra de trigo.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/todoenuno.webp", "/assets/escolar/todoenuno2.webp"],
  },
  {
    id: "escolar-escritura1",
    sku: "CC-ESC-013",
    name: "Kit Escolar De Escritura Básica",
    description: "Esfero, lápiz, regla, escuadra, borrador y tajalápiz en cartuchera transparente con cremallera tipo ziploc. Fabricado en plástico. Tamaño: 10.4 × 20.4 cm.",
    minUnits: 10,
    colors: ["#6B7280"],
    category: "Escolar",
    images: ["/assets/escolar/escritura1.webp", "/assets/escolar/escritura2.webp"],
  },
  {
    id: "escolar-post1",
    sku: "CC-ESC-014",
    name: "Set Post-it",
    description: "Estuche de cartón con taco de papel, bolígrafo, clips de colores, banderitas adhesivas y regla. Fabricado en cartón, papel y plástico. Dimensiones: 16.7 × 10.1 × 2.2 cm.",
    minUnits: 10,
    colors: ["#F59E0B"],
    category: "Escolar",
    images: ["/assets/escolar/post1.webp", "/assets/escolar/post2.webp"],
  },
  {
    id: "escolar-organizador1",
    sku: "CC-ESC-015",
    name: "Organizador Escolar Colgante",
    description: "Organizador colgante con múltiples bolsillos en fieltro, ideal para lápices, colores y útiles. Tamaño: 80 × 30 cm. Presentación multicolor.",
    minUnits: 10,
    colors: ["#F9A8D4", "#86EFAC", "#93C5FD"],
    category: "Escolar",
    images: ["/assets/escolar/organizador1.webp", "/assets/escolar/organizador2.webp"],
  },
  {
    id: "escolar-cartucheraacolchada1",
    sku: "CC-ESC-016",
    name: "Cartuchera Escolar Acolchada",
    description: "Cartuchera con diseño acolchado tipo quilt, cierre resistente y tamaño práctico para mochila. Fabricada en poliéster acolchado. Medidas: 20 × 8 × 6 cm. Colores surtidos.",
    minUnits: 10,
    colors: ["#F9A8D4", "#86EFAC", "#93C5FD"],
    category: "Escolar",
    images: ["/assets/escolar/cartucheraacolchada1.webp", "/assets/escolar/cartucheraacolchada2.webp"],
  },
];

