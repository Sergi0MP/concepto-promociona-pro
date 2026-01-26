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
import kitescolar from "@/assets/escolar/kitescolar.png";
import kitescolar2 from "@/assets/escolar/kitescolar2.png";
import todoenuno from "@/assets/escolar/todoenuno.png";
import todoenuno2 from "@/assets/escolar/todoenuno2.png";
import escritura1 from "@/assets/escolar/escritura1.png";
import escritura2 from "@/assets/escolar/escritura2.png";
import post1 from "@/assets/escolar/post1.png";
import post2 from "@/assets/escolar/post2.png";
import organizador1 from "@/assets/escolar/organizador1.png";
import organizador2 from "@/assets/escolar/organizador2.png";
import cartucheraacolchada1 from "@/assets/escolar/cartucheraacolchada1.png";
import cartucheraacolchada2 from "@/assets/escolar/cartucheraacolchada2.png";

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
      "Lonchera con interior metalizado, que le permite mantener alimentos frescos y protegidos, diseno compacto y ligero. Cuenta con una bolsa frontal de rapido acceso, que facilita el almacenamiento de utensilios pequenos o snacks adicionales. Cuenta con asas reforzadas, para sostenerla con mayor comodidad. Capacidad para 6 latas.Tamaño: 23 x 19 x 12 cm",
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
      "Pizarrón con planeador semanal, ideal para organizar tareas, actividades y recordatorios importantes. Cuenta con superficie magnética que permite sujetar notas fácilmente, e incluye marcador negro con borrador para mayor practicidad. En la parte inferior incorpora una sección de corcho, perfecta para fijar papeles o documentos. Gracias a su gancho superior, es fácil de colgar, y además incluye dos imanes adhesivos para fijarlo a la pared. Un organizador funcional para oficina, estudio o espacio de trabajo en casa. Material: Melamina / Corcho / Aluminio / Cartón Tamaño: 21.6 × 43.2 × 1.1 cm Color: Blanco",
    images: [tablero1, tablero2],
  },
  {
    id: "lunch1",
    name: "Kit Lunch Práctico",
    description:
      "Kit ideal para llevar tus comidas de forma cómoda y organizada, que incluye un portaviandas con división interna, cierre hermético y cubiertos, un cilindro plástico para bebidas frías con tapa de bambú y una lonchera resistente con forro plastificado, bolsillo frontal y asas superiores. Está fabricado en plástico, bambú y poliéster, y es perfecto para la oficina, el estudio o el uso diario. El portaviandas tiene una capacidad de 1.1 L y mide 21.5 × 8 × 12.5 cm, el cilindro tiene 600 ml de capacidad y un tamaño de 7 × 18.9 cm, y la lonchera cuenta con capacidad para 9 latas y dimensiones de 21 × 23 × 20 cm.",
    images: [lunch1, lunch2],
  },
  {
    id: "libreta1",
    name: "Libreta Escolar Pasteles",
    description:
      "Libreta escolar con 80 hojas a rayas y cubierta plástica resistente, ideal para el uso diario en el colegio. Cuenta con 8 aros plásticos tipo espiral que permiten agregar, retirar o reorganizar las hojas fácilmente, ayudando a mantener los apuntes ordenados por materias. Fabricada en plástico y papel, es perfecta para clases, tareas, notas y bocetos, combinando funcionalidad, durabilidad y un diseño práctico pensado para estudiantes. Tiene un tamaño de 14.6 × 21.5 cm.",
    images: [libretas1, libreta2],
  },
  {
    id: "kitlunch1",
    name: "Kit Lunch & Drink",
    description:
      "Kit práctico para el día a día que incluye un termo metálico de doble pared con aislamiento al vacío, capaz de mantener las bebidas calientes hasta por 6 horas y frías hasta por 8 horas, con acabado rubber y base antiderrapante. Se complementa con una lonchera térmica y un portaviandas con triple compartimento de 1.6 L, que incluye cubierto y recipiente para aderezos, ideal para llevar comidas de forma organizada. Está fabricado en acero inoxidable, poliéster, aluminio y plástico, y es perfecto para la oficina, el estudio o actividades al aire libre. El termo tiene una capacidad de 700 ml (24 oz) y un tamaño de 9.5 × 20.5 cm, mientras que la lonchera mide 24 × 16 × 14 cm.",
    images: [kitlunch1, kitlunch2],
  },
  {
    id: "termo1",
    name: "Termo Plastico Flowy 100ml",
    description:
      "Tapa de plastico con cierre de rosca   boquilla con sobretapa y asa plegable . Incluye caja individual. Tamaño8.8 x 26 cm Colores: Azul, amarillo, morado y rojo",
    images: [termoo1, termo2],
  },
  {
    id: "kitarte1",
    name: "Kit De Arte",
    description:
      "Mini Caballete  con block de 20 Hojas blancas  +  6 temperas pequeñas.  Tamaño block: 15*15 cm ",
    images: [kitarte],
  },
  {
    id: "marcadores1",
    name: "Set Marcadores Delgados",
    description:
      "Set cartuchera + 12 marcadores delgados Medidas  cartuchera : 24,6 X 10,8 cm. Material PVC",
    images: [marcadores],
  },
  {
    id: "kitescolar",
    name: "Kit Escolar",
    description:
      "Kit escolar práctico y funcional diseñado para el día a día en el colegio, que incluye una mochila escolar con compartimento principal, separador para laptop de hasta 14”, bolsillo frontal con cierre y dos bolsillos laterales para botellas u otros accesorios. Se complementa con un cuaderno argollado de 100 hojas (rayas o cuadriculado) con banderillas adheribles de colores y un estuche escolar multifuncional cuya tapa funciona como regla e incluye 12 colores, tajalápiz y borrador. Fabricado en poliéster, cartón, papel y plástico, es un set completo que combina organización, comodidad y practicidad para estudiantes.",
    images: [kitescolar, kitescolar2],
  },
   {
    id: "kittodoenuno",
    name: "Kit Escolar Todo en Uno",
    description:
      "Set ideal para el regreso a clases, pensado para acompañar la rutina diaria del estudiante, que incluye una mochila con compartimento acolchado para laptop y lonchera térmica, un cilindro plástico de 800 ml con asa de silicona e indicador de medida, y un portaviandas ecológico de fibra de trigo con cierre seguro y asa plegable. Está fabricado en material Oxford, plástico y fibra de trigo, y es un kit práctico que integra clases, hidratación y alimentación en un solo set, con una capacidad de 1 L en el portaviandas.",
    images: [todoenuno, todoenuno2],
  },
  {
    id: "escritura1",
    name: "Kit Escolar De Escritura Basica",
    description:
      "Set escolar práctico para el día a día en clases que incluye esfero, lápiz, regla, escuadra, borrador y tajalápiz, organizados en una cartuchera transparente con cremallera tipo ziploc, ideal para mantener los útiles visibles y ordenados. Fabricado en plástico, es perfecto para el uso diario en el colegio o como complemento en kits escolares, y cuenta con un tamaño de 10.4 × 20.4 cm.",
    images: [escritura1, escritura2],
  },
  {
    id: "post1",
    name: "Set Post-it",
    description:
      "Set escolar práctico para clases y estudio, presentado en un estuche de cartón compacto que incluye un taco de papel para notas, bolígrafo, clips de colores, banderitas adhesivas y regla, ideales para tomar apuntes, marcar tareas y organizar cuadernos. Fabricado en cartón, papel y plástico, su tamaño compacto lo hace perfecto para llevar en la mochila y usarlo a diario en el colegio o la universidad, con dimensiones de 16.7 × 10.1 × 2.2 cm.",
    images: [post1, post2],
  },
  {
    id: "organizador1",
    name: "Organizador Escolar Colgante",
    description:
      "Organizador escolar colgante con múltiples bolsillos, ideal para guardar y clasificar útiles como lápices, colores y otros accesorios, ayudando a mantener el área de estudio ordenada y a aprovechar mejor los espacios en paredes o puertas. Está fabricado en fieltro, tiene un tamaño de 80 × 30 cm y viene en presentación multicolor.",
    images: [organizador1, organizador2],
  },
  {
    id: "cartucheraacolcahda1",
    name: "Cartuchera Escolar Acolchada",
    description:
      "Cartuchera escolar con diseño acolchado tipo quilt, ideal para organizar lápices, colores, marcadores y útiles de uso diario. Cuenta con cierre resistente que mantiene el contenido seguro y un tamaño práctico para llevar en la mochila sin ocupar mucho espacio. Está fabricada en poliéster acolchado, mide 20 × 8 × 6 cm y se ofrece en colores surtidos.",
    images: [cartucheraacolchada1, cartucheraacolchada2],
  },
];



