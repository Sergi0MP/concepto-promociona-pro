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


  
{/* 🖨️ SECCIÓN IMPRESIÓN 3D */}
<section className="relative py-24 overflow-hidden bg-[#0a0a0f]">

  {/* Fondo animado con rejilla y gradientes */}
  <div className="absolute inset-0 z-0">
    {/* Rejilla tipo blueprint */}
    <div className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Glow de fondo */}
    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-[80px]" />
  </div>

  <div className="relative z-10 container px-4 mx-auto">

    {/* ── TÍTULO CREATIVO ── */}
    <div className="text-center mb-20">

      {/* Badge superior */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 text-xs font-[Inter] uppercase tracking-widest mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        Nueva Categoría
      </div>

      {/* Título principal con efecto de capas */}
      <div className="relative inline-block mb-4">
        {/* Sombra decorativa desplazada */}
        <h2 className="absolute top-1 left-1 font-[Poppins] font-black text-4xl md:text-6xl lg:text-7xl text-indigo-900/60 select-none pointer-events-none whitespace-nowrap">
          IMPRESIÓN 3D
        </h2>
        {/* Texto con gradiente */}
        <h2
          className="relative font-[Poppins] font-black text-4xl md:text-6xl lg:text-7xl whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 30%, #06b6d4 65%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 30px rgba(99,102,241,0.5))",
          }}
        >
          IMPRESIÓN 3D
        </h2>
      </div>

      {/* Línea decorativa con ícono central */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-indigo-500" />
        <div className="w-8 h-8 rounded-full border-2 border-indigo-500 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
        </div>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-indigo-500" />
      </div>

      <p className="font-[Inter] text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
        Transformamos tus ideas en objetos reales. Cada pieza,{" "}
        <span className="text-indigo-300 font-medium">única</span> y diseñada a medida para tu marca.
      </p>
    </div>

    {/* ── GRID DE PRODUCTOS 3D ── */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

      {/* Tarjeta 1 — Llaveros y Accesorios */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
        {/* Espacio para imagen */}
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Placeholder — reemplazar con <img src="/3d/llaveros.webp" ... /> cuando tengas la imagen */}
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-indigo-500/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          {/* Badge de categoría */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            Accesorios
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
            Llaveros & Accesorios
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Llaveros, porta-tarjetas y accesorios personalizados con tu logo. Alta resolución de detalle.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-indigo-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Tarjeta 2 — Exhibidores y Stands (destacada, más grande en md) */}
      <div className="group relative rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-slate-900/40 backdrop-blur-sm hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] lg:row-span-1">
        {/* Espacio para imagen */}
        <div className="aspect-[4/3] bg-gradient-to-br from-indigo-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Placeholder */}
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-indigo-400/50 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-300/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-violet-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            ⭐ Más solicitado
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
            Exhibidores & Stands
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Exhibidores de productos, porta-folletos y displays corporativos impresos en 3D a tu medida.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-indigo-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Tarjeta 3 — Trofeos y Reconocimientos */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-cyan-500/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            Reconocimientos
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">
            Trofeos & Reconocimientos
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Premios corporativos, trofeos y reconocimientos únicos diseñados con tu identidad de marca.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Tarjeta 4 — Piezas Corporativas */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-sm hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)]">
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-violet-500/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-violet-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-violet-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            Corporativo
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
            Piezas Corporativas
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Logos en relieve, letras volumétricas, prototipos y piezas especiales para eventos corporativos.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-violet-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Tarjeta 5 — Figuras Decorativas */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-indigo-500/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-indigo-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            Decorativo
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-indigo-300 transition-colors">
            Figuras Decorativas
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Mascotas corporativas, figuras temáticas y decoraciones únicas que refuerzan tu identidad visual.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-indigo-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

      {/* Tarjeta 6 — Prototipado */}
      <div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/3 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
        <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl border-2 border-dashed border-cyan-500/40 flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-slate-500 text-xs font-[Inter]">Imagen próximamente</p>
          </div>
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-600/80 backdrop-blur-sm text-white text-xs font-[Inter] font-medium">
            Prototipado
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-[Poppins] font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">
            Prototipado Rápido
          </h3>
          <p className="text-slate-400 text-sm font-[Inter] leading-relaxed mb-4">
            Convierte tu idea en un prototipo funcional. Ideal para productos en desarrollo o presentaciones.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-cyan-400 text-xs font-[Inter] uppercase tracking-wider">Personalizable</span>
            <span className="text-slate-600 text-xs">→</span>
          </div>
        </div>
      </div>

    </div>

    {/* ── BANNER DE PROCESO ── */}
    <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20 bg-gradient-to-r from-indigo-950/60 via-slate-900/60 to-indigo-950/60 p-8 md:p-12">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99,102,241,0.6) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-[Poppins] font-bold text-lg">1</div>
          <h4 className="font-[Poppins] font-semibold text-white">Diseño</h4>
          <p className="text-slate-400 text-sm font-[Inter]">Nos compartes tu logo o idea y lo convertimos en un archivo 3D listo para imprimir.</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-[Poppins] font-bold text-lg">2</div>
          <h4 className="font-[Poppins] font-semibold text-white">Impresión</h4>
          <p className="text-slate-400 text-sm font-[Inter]">Imprimimos tu pieza con materiales de alta calidad en múltiples colores y acabados.</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-indigo-500/50 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-[Poppins] font-bold text-lg">3</div>
          <h4 className="font-[Poppins] font-semibold text-white">Entrega</h4>
          <p className="text-slate-400 text-sm font-[Inter]">Recibe tus piezas terminadas listas para usar, con envío a todo Colombia.</p>
        </div>
      </div>
    </div>

    {/* ── CTA ── */}
    <div className="text-center mt-12">
      <a
        href="https://wa.me/573000000000?text=Hola,%20quiero%20información%20sobre%20impresión%203D"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-[Poppins] font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Cotiza tu pieza 3D por WhatsApp
      </a>
      <p className="text-slate-500 text-sm font-[Inter] mt-4">Respondemos en menos de 24 horas · Envío a toda Colombia</p>
    </div>

  </div>
</section>









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

<WhatsAppButton />
<Footer />


    </div>
  );
};

export default Index;


