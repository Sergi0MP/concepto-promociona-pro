import cartuchera1 from "@/assets/escolar/cartuchera1.png";
import cartuchera2 from "@/assets/escolar/cartuchera2.jpg";
import lonchera1 from "@/assets/escolar/lonchera1.png";
import lonchera2 from "@/assets/escolar/lonchera2.jpg";
import crayolas1 from "@/assets/escolar/crayolas1.png";
import crayolas2 from "@/assets/escolar/crayolas2.jpg";
import tablero1 from "@/assets/escolar/tablero1.png";
import tablero2 from "@/assets/escolar/tablero2.png";
import lunch1 from "@/assets/escolar/lunch1.png";
import lunch2 from "@/assets/escolar/lunch2.png";
import libretas1 from "@/assets/escolar/libretas1.png";
import libreta2 from "@/assets/escolar/libreta2.png";
import kitlunch1 from "@/assets/escolar/kitlunch1.png";
import kitlunch2 from "@/assets/escolar/kitlunch2.png";
import termoo1 from "@/assets/escolar/termoo1.png";
import termo2 from "@/assets/escolar/termo2.jpg";
import kitarte from "@/assets/escolar/kitarte.png";
import marcadores from "@/assets/escolar/marcadores.png";

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
    images: [cartuchera1, cartuchera2],
  },
  {
    id: "lonchera1",
    name: "Lonchera",
    description:
      "Lonchera con interior metalizado, que le permite mantener alimentos frescos y protegidos...",
    images: [lonchera1, lonchera2],
  },
  {
    id: "crayolas1",
    name: "Caja De Crayolas",
    description:
      "Caja de cartón con 5 crayones de varios colores. Medida: 4.3 x 9.2 cm.",
    images: [crayolas1, crayolas2],
  },
  {
    id: "tablero1",
    name: "Pizarrón Planeador Magnético Semanal",
    description:
      "Pintarrón con planeador semanal, ideal para organizar tareas, actividades y recordatorios...",
    images: [tablero1, tablero2],
  },
  {
    id: "lunch1",
    name: "Kit Lunch Práctico",
    description:
      "Kit ideal para llevar tus comidas de forma cómoda y organizada...",
    images: [lunch1, lunch2],
  },
  {
    id: "libreta1",
    name: "Libreta Escolar Pasteles",
    description:
      "Libreta escolar con 80 hojas a rayas y cubierta plástica resistente...",
    images: [libretas1, libreta2],
  },
  {
    id: "kitlunch1",
    name: "Kit Lunch & Drink",
    description:
      "Kit práctico para el día a día que incluye un termo metálico de doble pared...",
    images: [kitlunch1, kitlunch2],
  },
  {
    id: "termo1",
    name: "Termo Plastico Flowy 100ml",
    description:
      "TERMO PLÁSTICO FLOWY 1000 ML. Tapa de plástico con cierre de rosca...",
    images: [termoo1, termo2],
  },
  {
    id: "kitarte1",
    name: "Kit De Arte",
    description:
      "Mini caballete con block de 20 hojas blancas + 6 témperas pequeñas...",
    images: [kitarte],
  },
  {
    id: "marcadores1",
    name: "Set Marcadores Delgados",
    description:
      "Set cartuchera + 12 marcadores delgados. Medidas cartuchera: 24,6 x 10,8 cm. Material PVC.",
    images: [marcadores],
  },
];



