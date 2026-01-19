// src/data/productosEscolares.ts

export interface ProductoEscolar {
  id: string;
  name: string;
  description: string;
  
  images: string[];
}

export const productosEscolares: ProductoEscolar[] = [
  {
    id: "cartucuaderno1",
    name: "Set Cartuchera Ecológica con Libreta",
    description:
      "Tapas de cartón ecológico gruesas, 80 hojas rayadas. Cartuchera en cambrel con cremallera. Bolígrafo de cartón. De 14.5 x 18 cm. Impresión en tampografía. Tamaño área impresa: 7 x 7 cm.",
    images: [
      "/src/assets/escolar/cartuchera1.png",
      "/src/assets/escolar/cartuchera2.jpg",
    ],
  },
  {
    id: "lonchera1",
    name: "Lonchera ",
    description:
      "Lonchera con interior metalizado, que le permite mantener alimentos frescos y protegidos, diseno compacto y ligero. Cuenta con una bolsa frontal de rapido acceso, que facilita el almacenamiento de utensilios pequenos o snacks adicionales. Cuenta con asas reforzadas, para sostenerla con mayor comodidad. Capacidad para 6 latas.Tamaño: 23 x 19 x 12 cm",
    images: [
      "/src/assets/escolar/lonchera1.png",
      "/src/assets/escolar/lonchera2.jpg",
    ],
  },
   {
    id: "crayolas1",
    name: "Caja De Crayolas",
    description:
      "Caja de carton con 5 crayones de varios colores.Medida: 4.3 x 9.2 cm",
    images: [
      "/src/assets/escolar/crayolas1.png",
      "/src/assets/escolar/crayolas2.jpg",
    ],
  },
  {
    id: "tablero1",
    name: "Pizarrón Planeador Magnético Semanal",
    description:
      "Pintarrón con planeador semanal, ideal para organizar tareas, actividades y recordatorios importantes. Cuenta con superficie magnética que permite sujetar notas fácilmente, e incluye marcador negro con borrador para mayor practicidad. En la parte inferior incorpora una sección de corcho, perfecta para fijar papeles o documentos. Gracias a su gancho superior, es fácil de colgar, y además incluye dos imanes adhesivos para fijarlo a la pared. Un organizador funcional para oficina, estudio o espacio de trabajo en casa. Material: Melamina / Corcho / Aluminio / Cartón Tamaño: 21.6 × 43.2 × 1.1 cm Color: Blanco",
    images: [
      "/src/assets/escolar/tablero1.png",
      "/src/assets/escolar/tablero2.png",
    ],
  },
  {
    id: "lunch1",
    name: "Kit Lunch Práctico",
    description:
      "Kit ideal para llevar tus comidas de forma cómoda y organizada, que incluye un portaviandas con división interna, cierre hermético y cubiertos, un cilindro plástico para bebidas frías con tapa de bambú y una lonchera resistente con forro plastificado, bolsillo frontal y asas superiores. Está fabricado en plástico, bambú y poliéster, y es perfecto para la oficina, el estudio o el uso diario. El portaviandas tiene una capacidad de 1.1 L y mide 21.5 × 8 × 12.5 cm, el cilindro tiene 600 ml de capacidad y un tamaño de 7 × 18.9 cm, y la lonchera cuenta con capacidad para 9 latas y dimensiones de 21 × 23 × 20 cm.",
      
    images: [
      "/src/assets/escolar/lunch1.png",
      "/src/assets/escolar/lunch2.png",
    ],
  },
  {
    id: "libreta1",
    name: "Libreta Escolar Pasteles",
    description:
      "Libreta escolar con 80 hojas a rayas y cubierta plástica resistente, ideal para el uso diario en el colegio. Cuenta con 8 aros plásticos tipo espiral que permiten agregar, retirar o reorganizar las hojas fácilmente, ayudando a mantener los apuntes ordenados por materias. Fabricada en plástico y papel, es perfecta para clases, tareas, notas y bocetos, combinando funcionalidad, durabilidad y un diseño práctico pensado para estudiantes. Tiene un tamaño de 14.6 × 21.5 cm.",
      
    images: [
      "/src/assets/escolar/libretas1.png",
      "/src/assets/escolar/libreta2.png",
    ],
  },
  {
    id: "kitlunch1",
    name: "Kit Lunch & Drink",
    description:
      "Kit práctico para el día a día que incluye un termo metálico de doble pared con aislamiento al vacío, capaz de mantener las bebidas calientes hasta por 6 horas y frías hasta por 8 horas, con acabado rubber y base antiderrapante. Se complementa con una lonchera térmica y un portaviandas con triple compartimento de 1.6 L, que incluye cubierto y recipiente para aderezos, ideal para llevar comidas de forma organizada. Está fabricado en acero inoxidable, poliéster, aluminio y plástico, y es perfecto para la oficina, el estudio o actividades al aire libre. El termo tiene una capacidad de 700 ml (24 oz) y un tamaño de 9.5 × 20.5 cm, mientras que la lonchera mide 24 × 16 × 14 cm.",
      
    images: [
      "/src/assets/escolar/kitlunch1.png",
      "/src/assets/escolar/kitlunch2.png",
    ],
  },
   {
    id: "termo1",
    name: "Termo Plastico Flowy 100ml",
    description:
      "TERMO PLASTICO FLOWY 1000 MLTapa de plastico con cierre de rosca   boquilla con sobretapa y asa plegable . Incluye caja individual. Tamaño8.8 x 26 cm Colores: Azul, amarillo, morado y rojo",
      
    images: [
      "/src/assets/escolar/termo1.png",
      "/src/assets/escolar/termo2.jpg",
    ],
  },
   {
    id: "kitarte1",
    name: "Kit De Arte",
    description:
      " Mini Caballete  con block de 20 Hojas blancas  +  6 temperas pequeñas.  Tamaño block: 15*15 cm ",
      
    images: [
      "/src/assets/escolar/kitarte.png",
    ],
  },
  {
    id: "marcadores1",
    name: "Set Marcadores Delgados",
    description:
      " Set cartuchera + 12 marcadores delgados Medidas  cartuchera : 24,6 X 10,8 cm. Material PVC ",
      
    images: [
      "/src/assets/escolar/marcadores.png",
    ],
  },
];


