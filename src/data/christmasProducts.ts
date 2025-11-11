import kitBienestar1 from "@/assets/christmas/kit-bienestar-1.png";
import kitBienestar2 from "@/assets/christmas/kit-bienestar-2.png";
import kitSpa1 from "@/assets/christmas/kit-spa-1.png";
import kitSpa2 from "@/assets/christmas/kit-spa-2.png";
import kitAromaterapia1 from "@/assets/christmas/kit-aromaterapia-1.png";
import kitAromaterapia2 from "@/assets/christmas/kit-aromaterapia-2.png";
import kitDescanso1 from "@/assets/christmas/kit-descanso-1.png";
import kitDescanso2 from "@/assets/christmas/kit-descanso-2.png";
import kitCocteleria1 from "@/assets/christmas/Kit-bar.png";
import kitYogaBeige1 from "@/assets/christmas/Kit-yoga-beige.png";
import setCalma1 from "@/assets/christmas/Set-calma1.png";
import setCalma2 from "@/assets/christmas/Set-calma_2.png";
import nocheVelitas1 from "@/assets/christmas/Noche-velitas.png";
import vinoCaliente1 from "@/assets/christmas/Kit-Vino-Caliente_1.png";
import vinoCaliente2 from "@/assets/christmas/Kit-Vino-Caliente_2.png";
import tablaQuesos1 from "@/assets/christmas/Kit-Tabla-Quesos.png";
import kitGym1 from "@/assets/christmas/Kit-Gym.png";
import kitEntretenimiento1 from "@/assets/christmas/Kit-Entretenimiento.png";
import KitGalletas1 from "@/assets/christmas/Kit-Galletas.png";
import KitCuidadoPersonal1 from "@/assets/christmas/Kit-cuidado1.png";
import KitCuidadoPersonal2 from "@/assets/christmas/Kit-Cuidado2.png";
import KitCorporativo1 from "@/assets/christmas/Kit-Corporativo1.png";
import KitCorporativo2 from "@/assets/christmas/Kit-Corporativo2.png";
import KitAñoViejo1 from "@/assets/christmas/Kit-Año-Viejo.png";
import KitCorporativoPremium1 from "@/assets/christmas/Kit-Corporativo-Premium.png";
import KitBrindis1 from "@/assets/christmas/Kit-Brindis.png";
import KitCafe1 from "@/assets/christmas/Kit-Cafe.png";
import KitChocolate1 from "@/assets/christmas/Kit-Chocolate.png";


export interface ChristmasProduct {
  id: string;
  name: string;
  description: string;
  kitContents: string[];
  materials: string[];
  images: string[];
}

export const christmasProducts: ChristmasProduct[] = [
  {
    id: "kit-bienestar",
    name: "Kit de Bienestar Navideño",
    description: "Set elegante de cuidado personal con acabados premium, perfecto para regalar en esta temporada.",
    kitContents: [
      "Bolsa de manta con espejo",
      "Organizador de joyería portátil",
      "Estuche de belleza compacto",
      "Toalla facial premium",
      "Bolsa de regalo con moño decorativo"
    ],
    materials: [
      "Textiles de alta calidad",
      "Acabados en cuero sintético",
      "Espejo de cristal",
      "Moño satinado"
    ],
    images: [
      kitBienestar1,
      kitBienestar2
    ]
  },
  {
    id: "kit-spa",
    name: "Kit Spa Navideño",
    description: "Experiencia completa de spa en casa con productos naturales y accesorios de bambú.",
    kitContents: [
      "Cepillo de bambú con cerdas naturales",
      "Esponja vegetal exfoliante",
      "Espejo de mano con base de madera",
      "Toalla de spa con parche personalizable",
      "Piedra pómez natural",
      "Esponja de baño premium",
      "Caja de regalo decorativa"
    ],
    materials: [
      "Bambú sostenible",
      "Fibras naturales",
      "Toalla de algodón 100%",
      "Madera certificada"
    ],
    images: [
      kitSpa1,
      kitSpa2
    ]
  },
  {
    id: "kit-aromaterapia",
    name: "Kit de Aromaterapia Festivo",
    description: "Set de relajación con aromas navideños y accesorios de bienestar para momentos especiales.",
    kitContents: [
      "Cobija suave de felpa",
      "Infusor de té de acero inoxidable",
      "Adorno navideño artesanal",
      "Taza cerámica con tapa",
      "Té aromático especial navidad",
      "Tarjeta de felicitación personalizable",
      "Caja kraft ecológica"
    ],
    materials: [
      "Tela polar premium",
      "Cerámica de alta calidad",
      "Acero inoxidable",
      "Madera natural",
      "Empaque ecológico"
    ],
    images: [
      kitAromaterapia1,
      kitAromaterapia2
    ]
  },
  {
    id: "kit-descanso",
    name: "Kit de Descanso Premium",
    description: "Set de viaje y descanso con elegante presentación en caja personalizada, ideal para ejecutivos.",
    kitContents: [
      "Antifaz de descanso ergonómico",
      "Almohada de viaje memory foam",
      "Pantuflas plegables de hotel",
      "Kit de fragancias de viaje (3 piezas)",
      "Caja de presentación con grabado dorado",
      "Interior forrado en terciopelo"
    ],
    materials: [
      "Espuma viscoelástica",
      "Tela satinada premium",
      "Caja de cartón rígido",
      "Forro de terciopelo",
      "Grabado en hot stamping dorado"
    ],
    images: [
      kitDescanso1,
      kitDescanso2
    ]
  },
  {
    id: "kit-cocteleria",
    name: "Kit de Coctelería Navideño",
    description: "Set elegante de preparación de cócteles con acabados metálicos premium, ideal para regalar en esta temporada festiva.",
    kitContents: [
      "Coctelera de acero inoxidable con tapa hermética",
      "Medidor doble (jigger) para porciones precisas",
      "Cuchara mezcladora con mango trenzado",
      "Muddler para triturar frutas y hierbas",
      "Exprimidor metálico para cítricos",
      "Caja de madera con moño decorativo"
    ],
    materials: [
      "Acero inoxidable de alta resistencia",
      "Vidrio templado de calidad premium",
      "Madera natural con acabado pulido",
      "Moño satinado decorativo"
    ],
    images: [
      kitCocteleria1
    ]
  },
  {
    id: "kit-yoga-beige",
    name: "Kit de Bienestar y Relajación",
    description: "Set práctico y sofisticado diseñado para promover el equilibrio y el autocuidado durante la temporada festiva. Ideal para quienes disfrutan mantener su bienestar físico y mental.",
    kitContents: [
      "Bolsa deportiva multifuncional de diseño elegante",
      "Esterilla antideslizante para yoga o estiramientos",
      "Caja de regalo decorativa con presentación premium"
    ],
    materials: [],
    images: [
      kitYogaBeige1
    ]
  },
  {
    id: "Set-calma-lujo",
    name: "Set de Calma y Lujo",
    description: "Un detalle elegante y sofisticado que invita al bienestar y la armonía, ideal para regalar en esta Navidad. Su diseño minimalista y cálido crea una atmósfera acogedora, perfecta para decorar y relajar los sentidos.",
    kitContents: [
      "Vela aromática en recipiente de cerámica texturizada",
      "Florero de cerámica con decoración natural seca",
      "Bandeja decorativa a juego",
      "Caja transparente con base negra y moño dorado",
      "Tarjeta de felicitación “Feliz Navidad”"
    ],
    materials: [],
    images: [
      setCalma1,
      setCalma2
    ]
  },
  {
    id: "Noche-Velitas",
    name: "Set Noche de Velitas",
    description: "Un detalle luminoso y lleno de significado para celebrar la tradición más especial de diciembre. Su diseño sobrio y refinado transmite unión, gratitud y buenos deseos en esta mágica noche.",
    kitContents: [
      "Caja decorativa con mensaje dorado conmemorativo",
      "5 velitas aromáticas representando Amor, Familia, Abundancia, Salud y Gratitud",
      "Presentación premium en tonos negros y dorados",
      "Diseño ideal para regalo corporativo o detalle navideño especial"
    ],
    materials: [],
    images: [
      nocheVelitas1
    ]
  },
  {
    id: "Vino-caliente",
    name: "Kit de Vino Caliente Navideño",
    description: "Set gourmet con diseño festivo y presentación premium, ideal para regalar y disfrutar durante las celebraciones de fin de año.",
    kitContents: [
      "Botella de vino tinto",
      "Frasco con mezcla para vino caliente (rodajas de naranja, canela y especias)",
      "Copa de vidrio resistente al calor",
      "Sacacorchos metálico de alta calidad",
      "Caja decorativa en forma de árbol de Navidad con relleno natural y moño festivo"
    ],
    materials: [],
    images: [
      vinoCaliente1,
      vinoCaliente2
    ]
  },
  {
    id: "Tabla-quesos",
    name: "Kit Tabla de Quesos",
    description: "Set premium para amantes del buen vino y los quesos finos, perfecto para compartir y disfrutar durante las fiestas decembrinas.",
    kitContents: [
      "Botella de vino tinto Gato Negro Cabernet Sauvignon",
      "Selección de quesos gourmet (Gouda, Brie, Blue Cheese y Camembert)",
      "Jamón serrano en láminas",
      "Galletas saladas Ritz",
      "Tabla de madera con utensilios para queso",
      "Dos copas de vino",
      "Caja de madera con moño decorativo rojo y tarjeta personalizada de felicitación"
    ],
    materials: [],
    images: [
      tablaQuesos1
    ]
  },
  {
    id: "Kit-Gym",
    name: "Kit Gym",
    description: "Set práctico y moderno diseñado para promover el bienestar y la actividad física durante la temporada navideña. Ideal como regalo corporativo o personal.",
    kitContents: [
      "Maletín deportivo en lona resistente",
      "Toalla absorbente de microfibra",
      "Botella shaker para hidratación o batidos",
      "Juego de bandas de resistencia para entrenamiento",
      "Gorra deportiva ajustable"
    ],
    materials: [],
    images: [
      kitGym1
    ]
  },
  {
    id: "Kit-Entretenimiento",
    name: "Kit de Entretenimiento Navideño",
    description: "Set festivo y divertido para compartir buenos momentos en familia o con amigos durante las celebraciones de Navidad.",
    kitContents: [
      "Juego de cartas temáticas “Cartas para Navidad",
      "Botella de licor Aguardiente Amarillo",
      "Cuatro vasos tequileros de vidrio",
      "Caja rígida decorativa con diseño navideño dorado y compartimentos interiores"
    ],
    materials: [],
    images: [
      kitEntretenimiento1
    ]
  },
    {
    id: "Kit-Galletas",
    name: "Kit Galletas Navidad",
    description: "Un detalle cálido y perfecto para vivir la magia de la Navidad en familia. Este set está diseñado para inspirar momentos dulces, creativos y llenos de tradición en la cocina.",
    kitContents: [
      "Mezcla para galletas con chips de chocolate",
      "Molde cortador en forma de árbol",
      "Molde cortador en forma de estrella",
      "Molde cortador en forma de muñeco de jengibre",
      "Paño navideño decorativo",
      "Caja rígida premium en tono vino con moño dorado",
    ],
    materials: [],
    images: [
      KitGalletas1,
    ]
  },
  {
    id: "Kit-Cuidado-Personal",
    name: "Set de Cuidado Personal",
    description: "Un regalo pensado para consentir, relajar y renovar. Este set invita a crear un momento de bienestar en casa, perfecto para disfrutar durante la temporada navideña y comenzar el nuevo año con equilibrio y calma.",
    kitContents: [
      "Bata suave y cómoda para descanso",
      "Guantes exfoliantes para el cuidado de la piel",
      "Rodillo facial relajante",
      "Maderoterapia corporal manual",
      "Sales de baño aromáticas",
      "Aceite esencial para relajación",
      "Caja decorativa premium con mensaje navideño y moño dorado"
    ],
    materials: [],
    images: [
      KitCuidadoPersonal1,
      KitCuidadoPersonal2
    ]
  },
  {
    id: "Kit-Corporativo",
    name: "Set Corporativo",
    description: "Un detalle moderno y funcional, ideal para sorprender en esta temporada. Perfecto para colaboradores, clientes o aliados estratégicos, combinando utilidad, estilo y una presentación premium que transmite cuidado y profesionalismo.",
    kitContents: [
      "Termo minimalista de doble pared",
      "Libreta tipo planificador “Daily To Do’s",
      "Esfero metálico elegante",
      "Estuche portaesfero en acabado premium",
      "Caja rígida negra con mensaje dorado y cinta decorativa",
      
    ],
    materials: [],
    images: [
      KitCorporativo1,
      KitCorporativo2
    ]
  },
  {
    id: "Kit-Año-Viejo",
    name: "Kit Año Viejo",
    description: "Un detalle lleno de simbolismo y tradición para despedir el año con alegría. Este set celebra las costumbres que inspiran buena energía, esperanza y prosperidad, perfecto para regalar y compartir en familia.",
    kitContents: [
      "Muñeco de Año Viejo en tela",
      "Lata metálica decorativa “Feliz Navidad",
      "Fósforos en presentación especial",
      "Bolsas con elementos tradicionales para el ritual (lentejas y harina amarilla)",
      "Tarjeta con mensaje inspirador y espacio para dedicatoria",
      
    ],
    materials: [],
    images: [
      KitAñoViejo1,
      
    ]
  },
  {
    id: "Kit-Corporativo-Premium",
    name: "Kit Corporativo Premium",
    description: "Set elegante y funcional diseñado para profesionales que valoran la organización y el estilo. Ideal como obsequio empresarial en esta temporada.",
    kitContents: [
      "Maletín ejecutivo acolchado para laptop",
      "Termo tipo mug con tapa y pitillo metálico",
      "Libreta profesional de tapa dura",
      "Bolígrafo metálico de lujo en estuche individual",
      "Caja de presentación con detalles festivos",
      
    ],
    materials: [],
    images: [
      KitCorporativoPremium1,
      
    ]
  },
  {
    id: "Kit-Brindis",
    name: "Kit de Brindis Navideño",
    description: "Set clásico y elegante ideal para celebrar los momentos especiales de la temporada con un toque de distinción.",
    kitContents: [
      "Botella de vino tinto Gato Negro Cabernet Sauvignon",
      "Copa de vino de cristal grabada con mensaje festivo",
      "Caja decorativa con diseño navideño y moño rojo de regalo",
      
    ],
    materials: [],
    images: [
      KitBrindis1
      
    ]
  },
  {
    id: "Kit-Cafe",
    name: "Kit de Cafe Premium",
    description: "Set elegante para los amantes del café, ideal para regalar en esta temporada y disfrutar momentos cálidos con aroma y sabor excepcionales.",
    kitContents: [
      "Café Juan Valdez Molido Premium",
      "Prensa francesa con detalles en madera",
      "Termo metálico para bebidas calientes",
      "Caja rígida decorativa con mensaje “Feliz Navidad” y moño rojo",
      "Tarjeta personalizada de felicitación"
      
    ],
    materials: [],
    images: [
      KitCafe1
      
    ]
  },
   {
    id: "Kit-Chocolate",
    name: "Kit de Chocolate Caliente Navideño",
    description: "Set encantador con diseño inspirado en la magia de la Navidad, perfecto para regalar y disfrutar en familia durante las noches festivas.",
    kitContents: [
      "Taza metálica con diseño navideño de renos",
      "Frasco con mezcla para preparar chocolate caliente con malvaviscos",
      "Buzón decorativo “Letters to Santa” en color rojo",
      "Tarjeta personalizada con mensaje de felicitación navideña",
    
      
    ],
    materials: [],
    images: [
      KitChocolate1
      
    ]
  },
];

