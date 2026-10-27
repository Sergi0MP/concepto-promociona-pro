import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { products, Product } from "@/data/products";
import { MessageCircle } from "lucide-react";
import RegularProductModal from "@/components/RegularProductModal";
import CatalogoNavideno from "@/components/CatalogoNavideno";
import CatalogosDeTemporada from "@/components/CatalogosDeTemporada";
import Catalogo2025 from "@/components/Catalogo2025";
import CatalogoAmor from "@/components/CatalogoAmor";
import CatalogoMundial from "@/components/CatalogoMundial";
import About from "./About";
import SeccionTaller from "@/components/SeccionTaller";
import SeccionNavidad from "@/components/SeccionNavidad";

// 🔹 Prefijos de rutas públicas WebP
const P1 = "/assets/productos1/";
const ES = "/assets/escolar/";

// 🔹 Número de WhatsApp como constante
const WHATSAPP_NUMBER = "573337013642";

// 🔹 Thumbnails fuera del componente — no se recrea en cada render
const productThumbnails: { [key: string]: string } = {
  // generales
  bolsomarca1:       P1 + "bolsomarca.webp",
  iman1:             P1 + "iman.webp",
  agendaestuche1:    P1 + "agendaestuche.webp",
  bingo1:            P1 + "bingo.webp",
  agendaajedrez1:    P1 + "agendaajedrez.webp",
  agendacartuchera1: P1 + "agendacartuchera.webp",
  porta1:            P1 + "portatarjetas.webp",
  portapc1:          P1 + "portapc.webp",
  cosmo1:            P1 + "cosmo1.webp",
  prensa1:           P1 + "kit-prensa-francesa.webp",
  taza2:             P1 + "tazaceramica.webp",
  orga1:             P1 + "organizadores.webp",
  botella1:          P1 + "botella-motivador.webp",
  rollerdeluxe1:     P1 + "rollerdeluxe.webp",
  jaderoller1:       P1 + "jaderoller1.webp",
  jaderoller2:       P1 + "jaderoller2.webp",
  peine1:            P1 + "peine.webp",
  brochas1:          P1 + "brochas.webp",
  cosmetiquera1:     P1 + "cosmetiquera.webp",
  essence1:          P1 + "essence.webp",
  joyero1:           P1 + "joyero.webp",
  agendas1:          P1 + "agendas.webp",
  pelota1:           P1 + "antiestres.webp",
  asado1:            P1 + "asado.webp",
  maletas1:          P1 + "maletas.webp",
  mochila1:          P1 + "mochila.webp",
  setherramientas1:  P1 + "setherramientas.webp",
  setlinterna1:      P1 + "setlinterna.webp",
  navaja1:           P1 + "navaja.webp",
  metro1:            P1 + "metro.webp",
  calibrador1:       P1 + "calibrador.webp",
  mochilahielera1:   P1 + "mochilahielera.webp",
  hielera1:          P1 + "hielera.webp",
  setrecipiente1:    P1 + "setrecipiente.webp",
  loncheratermica1:  P1 + "loncheratermica.webp",
  sanduchera1:       P1 + "sanduchera.webp",
  portaviendas1:     P1 + "portaviendas.webp",

  // escolares (IDs viejos — compatibilidad)
  cartucuaderno1:       ES + "cartuchera1.webp",
  lonchera1:            ES + "lonchera1.webp",
  crayolas1:            ES + "crayolas1.webp",
  tablero1:             ES + "tablero1.webp",
  lunch1:               ES + "lunch1.webp",
  libreta1:             ES + "libretas1.webp",
  kitlunch1:            ES + "kitlunch1.webp",
  termo1:               ES + "termoo1.webp",
  kitarte1:             ES + "kitarte.webp",
  marcadores1:          ES + "marcadores.webp",
  kitescolar1:          ES + "kitescolar.webp",
  kittodoenuno1:        ES + "todoenuno.webp",
  escritura1:           ES + "escritura1.webp",
  post1:                ES + "post1.webp",
  organizador1:         ES + "organizador1.webp",
  cartucheraacolchada1: ES + "cartucheraacolchada1.webp",

  // escolares en Productos Destacados (nuevos IDs)
  "escolar-cartuchera1":          ES + "cartuchera1.webp",
  "escolar-lonchera1":            ES + "lonchera1.webp",
  "escolar-crayolas1":            ES + "crayolas1.webp",
  "escolar-tablero1":             ES + "tablero1.webp",
  "escolar-lunch1":               ES + "lunch1.webp",
  "escolar-libreta1":             ES + "libretas1.webp",
  "escolar-kitlunch1":            ES + "kitlunch1.webp",
  "escolar-termo1":               ES + "termoo1.webp",
  "escolar-kitarte1":             ES + "kitarte.webp",
  "escolar-marcadores1":          ES + "marcadores.webp",
  "escolar-kitescolar1":          ES + "kitescolar.webp",
  "escolar-kittodoenuno1":        ES + "todoenuno.webp",
  "escolar-escritura1":           ES + "escritura1.webp",
  "escolar-post1":                ES + "post1.webp",
  "escolar-organizador1":         ES + "organizador1.webp",
  "escolar-cartucheraacolchada1": ES + "cartucheraacolchada1.webp",
};

const Index = () => {
  // 🔹 Productos generales
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedRegularProduct, setSelectedRegularProduct] = useState<Product | null>(null);
  const [isRegularModalOpen, setIsRegularModalOpen] = useState(false);

  // 🔹 Catálogos de temporada (modales)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [showCatalogoHalloween, setShowCatalogoHalloween] = useState(false);
  const [showCatalogo2025, setShowCatalogo2025] = useState(false);
  const [showCatalogoAmor, setShowCatalogoAmor] = useState(false);
  const [showCatalogoMundial, setShowCatalogoMundial] = useState(false);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent("Hola!, quiero cotizar el producto: " + productName);
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message, "_blank");
  };

  // Click para productos generales
  const handleRegularProductClick = (product: Product) => {
    setSelectedRegularProduct(product);
    setIsRegularModalOpen(true);
  };

  // 🔹 Desactivar clic derecho
  useEffect(() => {
    const disableContext = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableContext);
    return () => document.removeEventListener("contextmenu", disableContext);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/images/newfondo.png"
          alt="Fondo de bienvenida"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 container px-4 text-center">
          <h1 className="font-[Poppins] font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            {/* texto del hero */}
          </h1>
        </div>

        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/60 z-[5]" />
      </section>

      {/* ── 2. NAVIDAD ──────────────────────────────────────────────────────── */}
      <SeccionNavidad />

      {/* ── 3. TALLER 3D & LÁSER ────────────────────────────────────────────── */}
      <SeccionTaller />

      {/* ── 4. CATÁLOGOS DE TEMPORADA ───────────────────────────────────────── */}
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

      {/* ── 5. PRODUCTOS DESTACADOS ─────────────────────────────────────────── */}
      <section
        id="catalogo-productos"
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(to top, rgba(102, 126, 234, 0.25) 0%, rgba(255, 255, 255, 0.05) 60%, transparent 100%)",
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
            {["Todos", "Escolar", "Maletas", "Hogar", "Cosmetiqueras y Organizadores", "Deportes", "Agendas", "Bebidas", "Navidad", "Belleza y Cuidado Personal", "Antiestres", "Herramientas", "Hieleras y Loncheras", "Oficina", "Juegos"].map((category) => {
              const filteredCount = category === "Todos"
                ? products.length
                : products.filter(p => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={
                    "px-6 py-2.5 rounded-full font-[Poppins] font-medium text-sm transition-all duration-300 transform hover:scale-105 " +
                    (selectedCategory === category
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-white text-primary border-2 border-primary/20 hover:border-primary/40")
                  }
                >
                  {category}
                  <span className={"ml-2 text-xs " + (selectedCategory === category ? "text-white/80" : "text-muted-foreground")}>
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
              {selectedCategory !== "Todos" && " en " + selectedCategory}
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
                  style={{ animationDelay: (index * 50) + "ms" }}
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

      {/* ── 6. QUIÉNES SOMOS ────────────────────────────────────────────────── */}
      <About />

      {/* ── 7. POR QUÉ ELEGIRNOS ────────────────────────────────────────────── */}
      <WhyChooseUs />

      {/* ── MODALES ─────────────────────────────────────────────────────────── */}

      {/* MODAL FLIPBOOK DE HALLOWEEN */}
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

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;


