import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductModal from "@/components/ProductModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { MessageCircle } from "lucide-react";
import RegularProductModal from "@/components/RegularProductModal";
import CatalogoNavideno from "@/components/CatalogoNavideno";
import CatalogosDeTemporada from "@/components/CatalogosDeTemporada";
import CatalogoHalloween from "@/components/CatalogoHalloween";
import Catalogo2025 from "@/components/Catalogo2025";
import CatalogoAmor from "@/components/CatalogoAmor";
import CatalogoMundial from "@/components/CatalogoMundial";
import About from "./About";
import VideoIntroModal from "@/components/VideoIntroModal";
import SeccionTaller from "@/components/SeccionTaller";

// 🔹 Nueva data de temporada escolar
import {
  productosEscolares,
  ProductoEscolar,
} from "@/data/productosEscolares";

// 🔹 Imágenes — rutas públicas WebP (sin imports estáticos, carga lazy automática)
const P1 = "/assets/productos1/";
const ES = "/assets/escolar/";


const Index = () => {
  // 🔹 Estado modal temporada escolar
  const [selectedProduct, setSelectedProduct] = useState<ProductoEscolar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🔹 Productos generales
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedRegularProduct, setSelectedRegularProduct] = useState<Product | null>(null);
  const [isRegularModalOpen, setIsRegularModalOpen] = useState(false);

  // 🔹 Catálogo navideño (flip / PDF)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // 🔹 Catálogos de temporada (modales)
  const [showCatalogoHalloween, setShowCatalogoHalloween] = useState(false);
  const [showCatalogo2025, setShowCatalogo2025] = useState(false);
  const [showCatalogoAmor, setShowCatalogoAmor] = useState(false);
  const [showCatalogoMundial, setShowCatalogoMundial] = useState(false);
  const [showCatalogoNavideno, setShowCatalogoNavideno] = useState(false);

  // 🔹 Modal de video de bienvenida
  const [showIntro, setShowIntro] = useState(false);
  // 🔹 Modal 3D
  const [show3DModal, setShow3DModal] = useState(false);
  const [sketchfabId, setSketchfabId] = useState("");

  const open3DModal = (id: string) => {
    setSketchfabId(id);
    setShow3DModal(true);
  };

  useEffect(() => {
    // Se abre al cargar la página
   
  }, []);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Hola!, quiero cotizar el producto: ${productName}`);
    const phoneNumber = "573337013642";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Click para productos de temporada escolar
  const handleProductClick = (product: ProductoEscolar) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Click para productos generales
  const handleRegularProductClick = (product: Product) => {
    setSelectedRegularProduct(product);
    setIsRegularModalOpen(true);
  };

  // 🔹 Thumbnails (generales + escolar)
  // 🚀 Rutas WebP en /public — sin imports estáticos, el browser carga solo lo visible
  const productThumbnails: { [key: string]: string } = {
    // generales
    prensa1:          `${P1}kit-prensa-francesa.webp`,
    taza2:            `${P1}tazaceramica.webp`,
    maquillaje1:      `${P1}set-motivacional.webp`,
    botella1:         `${P1}botella-motivador.webp`,
    rollerdeluxe1:    `${P1}rollerdeluxe.webp`,
    jaderoller1:      `${P1}jaderoller1.webp`,
    jaderoller2:      `${P1}jaderoller2.webp`,
    peine1:           `${P1}peine.webp`,
    brochas1:         `${P1}brochas.webp`,
    cosmetiquera1:    `${P1}cosmetiquera.webp`,
    essence1:         `${P1}essence.webp`,
    joyero1:          `${P1}joyero.webp`,
    agendas1:         `${P1}agendas.webp`,
    pelota1:          `${P1}antiestres.webp`,
    asado1:           `${P1}asado.webp`,
    maletas1:         `${P1}maletas.webp`,
    mochila1:         `${P1}mochila.webp`,
    setherramientas1: `${P1}setherramientas.webp`,
    setlinterna1:     `${P1}setlinterna.webp`,
    navaja1:          `${P1}navaja.webp`,
    metro1:           `${P1}metro.webp`,
    calibrador1:      `${P1}calibrador.webp`,
    mochilahielera1:  `${P1}mochilahielera.webp`,
    hielera1:         `${P1}hielera.webp`,
    setrecipiente1:   `${P1}setrecipiente.webp`,
    loncheratermica1: `${P1}loncheratermica.webp`,
    sanduchera1:      `${P1}sanduchera.webp`,
    portaviendas1:    `${P1}portaviendas.webp`,

    // escolares (IDs viejos — compatibilidad)
    cartucuaderno1:      `${ES}cartuchera1.webp`,
    lonchera1:           `${ES}lonchera1.webp`,
    crayolas1:           `${ES}crayolas1.webp`,
    tablero1:            `${ES}tablero1.webp`,
    lunch1:              `${ES}lunch1.webp`,
    libreta1:            `${ES}libretas1.webp`,
    kitlunch1:           `${ES}kitlunch1.webp`,
    termo1:              `${ES}termoo1.webp`,
    kitarte1:            `${ES}kitarte.webp`,
    marcadores1:         `${ES}marcadores.webp`,
    kitescolar1:         `${ES}kitescolar.webp`,
    kittodoenuno1:       `${ES}todoenuno.webp`,
    escritura1:          `${ES}escritura1.webp`,
    post1:               `${ES}post1.webp`,
    organizador1:        `${ES}organizador1.webp`,
    cartucheraacolchada1:`${ES}cartucheraacolchada1.webp`,

    // escolares en Productos Destacados (nuevos IDs)
    "escolar-cartuchera1":         `${ES}cartuchera1.webp`,
    "escolar-lonchera1":           `${ES}lonchera1.webp`,
    "escolar-crayolas1":           `${ES}crayolas1.webp`,
    "escolar-tablero1":            `${ES}tablero1.webp`,
    "escolar-lunch1":              `${ES}lunch1.webp`,
    "escolar-libreta1":            `${ES}libretas1.webp`,
    "escolar-kitlunch1":           `${ES}kitlunch1.webp`,
    "escolar-termo1":              `${ES}termoo1.webp`,
    "escolar-kitarte1":            `${ES}kitarte.webp`,
    "escolar-marcadores1":         `${ES}marcadores.webp`,
    "escolar-kitescolar1":         `${ES}kitescolar.webp`,
    "escolar-kittodoenuno1":       `${ES}todoenuno.webp`,
    "escolar-escritura1":          `${ES}escritura1.webp`,
    "escolar-post1":               `${ES}post1.webp`,
    "escolar-organizador1":        `${ES}organizador1.webp`,
    "escolar-cartucheraacolchada1":`${ES}cartucheraacolchada1.webp`,
  };

  // 🔹 Desactivar clic derecho
  useEffect(() => {
    const disableContext = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContext);
    return () => document.removeEventListener("contextmenu", disableContext);
  }, []);

const cards3D: { title: string; desc: string; badge: string; imgPath: string; accent: string; sketchfabId?: string }[] = [
    { title: "Llaveros & Accesorios", desc: "Llaveros, porta-tarjetas y accesorios con tu logo. Alta resolución de detalle.", badge: "Accesorios", imgPath: "/3d/llaveros.webp", accent: "#484F9D", sketchfabId: "cd969cf1f9ee45c782be056e77c91d81" },
    { title: "Exhibidores & Stands", desc: "Exhibidores, porta-folletos y displays corporativos impresos en 3D a tu medida.", badge: "⭐ Más solicitado", imgPath: "/3d/exhibidores.webp", accent: "#F4E600" },
    { title: "Trofeos & Reconocimientos", desc: "Premios y trofeos únicos diseñados con tu identidad de marca.", badge: "Reconocimientos", imgPath: "/3d/trofeos.webp", accent: "#484F9D" },
    { title: "Piezas Corporativas", desc: "Logos en relieve, letras volumétricas y piezas para eventos corporativos.", badge: "Corporativo", imgPath: "/3d/corporativo.webp", accent: "#F4E600" },
    { title: "Figuras Decorativas", desc: "Mascotas corporativas y figuras temáticas que refuerzan tu identidad visual.", badge: "Decorativo", imgPath: "/3d/figuras.webp", accent: "#484F9D" },
    { title: "Prototipado Rápido", desc: "Convierte tu idea en un prototipo funcional para presentaciones.", badge: "Prototipado", imgPath: "/3d/prototipo.webp", accent: "#F4E600" },
  ];

  const steps3D: { n: string; title: string; desc: string; yellow: boolean }[] = [
    { n: "01", title: "Diseño", desc: "Compártenos tu logo o idea y lo convertimos en un archivo 3D listo para imprimir.", yellow: false },
    { n: "02", title: "Impresión", desc: "Imprimimos tu pieza con materiales de alta calidad en múltiples colores y acabados.", yellow: true },
    { n: "03", title: "Entrega", desc: "Recibe tus piezas terminadas y listas para usar. Envío a toda Colombia.", yellow: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Modal de video de bienvenida */}
      <VideoIntroModal
        isOpen={showIntro}
        onClose={() => setShowIntro(false)}
      />

      <Header />

      {/* 🖼️ Hero Section con video de fondo */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 🎥 Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          id="background-video"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/definitivo.mp4" type="video/mp4" />
        </video>

        {/* 🌙 Capa oscura */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ✨ Contenido sobre el video */}
        <div className="relative z-10 container px-4 text-center">
          <h1 className="font-[Poppins] font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            {/* tu texto */}
          </h1>
        </div>

        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/60 z-[5]" />
      </section>

      <CatalogosDeTemporada
        onOpenHalloween={() => setShowCatalogoHalloween(true)}
        onOpen2025={() => setShowCatalogo2025(true)}
        onOpenAmor={() => setShowCatalogoAmor(true)}
        onOpenMundial={(e) => {
          e.preventDefault();
          setShowCatalogoMundial(true);
        }}
        onOpenNavidad={(e) => {
          e.preventDefault();
          setIsCatalogOpen(true);
        }}
      />

      <SeccionTaller />


  










{/* ⭐ Productos Destacados con Filtro por Categorías */}
<section 
  id="catalogo-productos"
  className="py-20 relative overflow-hidden"
  style={{
  background: 'linear-gradient(to top, rgba(102, 126, 234, 0.25) 0%, rgba(255, 255, 255, 0.05) 60%, transparent 100%)',
}}


>
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="h-1/2 w-full bg-gradient-to-b from-[#e6f0ff]/95 via-white/80 to-transparent" />
  </div>
  <div className="container px-4 relative z-10">
    <div className="text-center mb-12">
      <h2 className="font-[Poppins] font-bold text-3xl md:text-4xl text-primary mb-4">
        Productos Destacados
      </h2>
      <p className="max-w-2xl mx-auto font-[Inter] text-muted-foreground">
        Explora nuestra selección de productos promocionales más populares
      </p>
    </div>



    {/* 🎨 Barra de Filtros por Categoría */}
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {["Todos", "Escolar", "Maletas", "Hogar", "Cosmetiqueras y Organizadores", "Deportes", "Agendas","Bebidas", "Navidad","Belleza y Cuidado Personal", "Antiestres", "Herramientas", "Hieleras y Loncheras"].map((category) => {
        const filteredCount = category === "Todos" 
          ? products.length 
          : products.filter(p => p.category === category).length;
        
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-6 py-2.5 rounded-full font-[Poppins] font-medium text-sm
              transition-all duration-300 transform hover:scale-105
              ${selectedCategory === category
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-primary border-2 border-primary/20 hover:border-primary/40'
              }
            `}
          >
            {category}
            <span className={`ml-2 text-xs ${selectedCategory === category ? 'text-white/80' : 'text-muted-foreground'}`}>
              ({filteredCount})
            </span>
          </button>
        );
      })}
    </div>

    {/* 📊 Contador de productos */}
    <div className="text-center mb-6">
      <p className="text-sm text-muted-foreground font-[Inter]">
        Mostrando {selectedCategory === "Todos" 
          ? products.length 
          : products.filter(p => p.category === selectedCategory).length
        } productos
        {selectedCategory !== "Todos" && ` en ${selectedCategory}`}
      </p>
    </div>

    {/* 🛍️ Grid de Productos Filtrados */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {products
        .filter(product => selectedCategory === "Todos" || product.category === selectedCategory)
        .map((product, index) => (
          <article
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(72,79,157,0.25)] hover:-translate-y-2 animate-fade-up cursor-pointer"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => handleRegularProductClick(product)}

          >
            {/* Imagen del producto */}
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
  {productThumbnails[product.id] || product.image ? (
    <img
      src={productThumbnails[product.id] || product.image}
      alt={product.name}
      loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  ) : (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
      <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
        📦
      </span>
    </>
  )}

  <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
    {product.category}
  </div>
</div>


            {/* Contenido */}
            <div className="p-5">
              <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2 font-[Inter] line-clamp-2">
                {product.description}
              </p>
              <p className="text-sm text-muted-foreground mb-1 font-[Inter]">
                Código: <span className="font-semibold text-primary">{product.sku}</span>
              </p>
              <p className="text-xs text-muted-foreground mb-4 font-[Inter]">
                Mínimo: {product.minUnits} unidades
              </p>

              {/* Botón WhatsApp */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppClick(product.name);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#25D366", color: "white" }}
              >
                <MessageCircle className="h-4 w-4" /> Solicita este producto
              </button>
            </div>
          </article>
        ))}
    </div>

    {/* Mensaje cuando no hay productos */}
    {products.filter(product => selectedCategory === "Todos" || product.category === selectedCategory).length === 0 && (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="font-[Poppins] font-semibold text-xl text-primary mb-2">
          No hay productos en esta categoría
        </h3>
        <p className="text-muted-foreground">
          Intenta con otra categoría o selecciona "Todos"
        </p>
      </div>
    )}
  </div>
</section>

<About />



<WhyChooseUs />



{/* Catálogos de temporada */}


{/* Catálogos de temporada */}


{/* ...resto del código... */}


{/* MODAL FLIPBOOK DE HALLOWEEN - SOLO SE ABRE CON CLICK */}
{showCatalogoHalloween && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
      <button
        onClick={() => setShowCatalogoHalloween(false)}
        className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 z-10"
      >
        ✕
      </button>
      <iframe
        src="https://online.anyflip.com/qqfoi/niee/index.html"
        style={{ width: "90vw", height: "80vh", border: "none" }}
        allowFullScreen
        scrolling="no"
        title="Catálogo Halloween"
        className="rounded-xl"
      />
    </div>
  </div>
)}

<ProductModal
  product={selectedProduct}
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
<RegularProductModal
  product={selectedRegularProduct}
  isOpen={isRegularModalOpen}
  onClose={() => setIsRegularModalOpen(false)}
  productImage={selectedRegularProduct ? productThumbnails[selectedRegularProduct.id] : undefined}
/>
<CatalogoNavideno 
  isOpen={isCatalogOpen} 
  onClose={() => setIsCatalogOpen(false)} 
/>
<Catalogo2025
  isOpen={showCatalogo2025}
  onClose={() => setShowCatalogo2025(false)}
/>
<CatalogoAmor
  isOpen={showCatalogoAmor}
  onClose={() => setShowCatalogoAmor(false)}
/>
<CatalogoMundial
  isOpen={showCatalogoMundial}
  onClose={() => setShowCatalogoMundial(false)}
/>
{/* Modal 3D */}
{show3DModal && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center"
    style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
    onClick={() => setShow3DModal(false)}
  >
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ width: "min(90vw, 800px)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3"
        style={{ background: "#0f1235", borderBottom: "1px solid rgba(72,79,157,0.3)" }}>
        <div>
          <p className="font-[Poppins] font-bold text-white text-sm">Vista 360°</p>
          <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Arrastra para rotar · Pellizca para hacer zoom
          </p>
        </div>
        <button
          onClick={() => setShow3DModal(false)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
          style={{ fontSize: "18px" }}
        >
          ×
        </button>
      </div>

      {/* Visor */}
      <div style={{ position: "relative", paddingBottom: "60%", background: "#06071a" }}>
        <iframe
          src={`https://sketchfab.com/models/${sketchfabId}/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&transparent=1`}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          title="Visor 3D"
        />
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex items-center justify-between"
        style={{ background: "#0f1235", borderTop: "1px solid rgba(72,79,157,0.3)" }}>
        <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Modelo 3D escaneado · Concepto Creativo
        </p>
        <a
        href="https://wa.me/573337013642?text=Hola,%20quiero%20cotizar%20este%20producto%203D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full font-[Poppins] font-bold text-xs"
            style={{ background: "#484F9D", color: "#F4E600" }}
          >
            Cotizar por WhatsApp
          </a>
      </div>
    </div>
  </div>
)}
{/* Modal 3D */}
{show3DModal && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center"
    style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
    onClick={() => setShow3DModal(false)}
  >
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ width: "min(90vw, 800px)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-5 py-3"
        style={{ background: "#0f1235", borderBottom: "1px solid rgba(72,79,157,0.3)" }}>
        <div>
          <p className="font-[Poppins] font-bold text-white text-sm">Vista 360°</p>
          <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Arrastra para rotar · Pellizca para hacer zoom
          </p>
        </div>
        <button
          onClick={() => setShow3DModal(false)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/10"
          style={{ fontSize: "18px" }}
        >
          ×
        </button>
      </div>

      <div style={{ position: "relative", paddingBottom: "60%", background: "#06071a" }}>
        <iframe
          src={`https://sketchfab.com/models/${sketchfabId}/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&transparent=1`}
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          title="Visor 3D"
        />
      </div>

      <div className="px-5 py-3 flex items-center justify-between"
        style={{ background: "#0f1235", borderTop: "1px solid rgba(72,79,157,0.3)" }}>
        <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Modelo 3D escaneado · Concepto Creativo
        </p>
        <a
          href="https://wa.me/573337013642?text=Hola,%20quiero%20cotizar%20este%20producto%203D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full font-[Poppins] font-bold text-xs"
          style={{ background: "#484F9D", color: "#F4E600" }}
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  </div>
)}


<WhatsAppButton />
<Footer />


    </div>
  );
};

export default Index;


