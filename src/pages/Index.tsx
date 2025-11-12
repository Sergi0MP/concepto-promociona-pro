import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductModal from "@/components/ProductModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { christmasProducts, ChristmasProduct } from "@/data/christmasProducts";
import { MessageCircle } from "lucide-react";
import RegularProductModal from "@/components/RegularProductModal";
import { Product } from "@/data/products";
import CatalogoNavideno from "@/components/CatalogoNavideno";
import CatalogosDeTemporada from "@/components/CatalogosDeTemporada";


import kitBienestar1 from "@/assets/christmas/kit-bienestar-1.png";
import kitSpa1 from "@/assets/christmas/kit-spa-1.png";
import kitAromaterapia1 from "@/assets/christmas/kit-aromaterapia-1.png";
import kitDescanso1 from "@/assets/christmas/kit-descanso-1.png";
import kitCocteleria1 from "@/assets/christmas/Kit-bar.png";
import Kityogabeige1 from "@/assets/christmas/Kit-yoga-beige.png";
import Setcalma1 from "@/assets/christmas/Set-calma1.png";
import NocheVelitas1 from "@/assets/christmas/Noche-velitas.png";
import VinoCaliente1 from "@/assets/christmas/Kit-Vino-Caliente_1.png";
import TablaQuesos1 from "@/assets/christmas/Kit-Tabla-Quesos.png";
import KitGym1 from "@/assets/christmas/Kit-Gym.png";
import KitEntretenimiento1 from "@/assets/christmas/Kit-Entretenimiento.png";
import Prensa1 from "@/assets/productos1/kit-prensa-francesa.png";
import tazaceramica1 from "@/assets/productos1/taza.ceramica.png";
import maquillaje1 from "@/assets/productos1/set-motivacional.png";
import termo1 from "@/assets/productos1/botella-motivador.png";
import KitGalletas1 from "@/assets/christmas/Kit-Galletas.png";
import KitCuidadoPersonal1 from "@/assets/christmas/Kit-cuidado1.png";
import KitCorporativo1 from "@/assets/christmas/Kit-Corporativo1.png";
import KitAñoViejo1 from "@/assets/christmas/Kit-Año-Viejo.png";
import KitCorporativoPremium1 from "@/assets/christmas/Kit-Corporativo-Premium.png";
import KitBrindis1 from "@/assets/christmas/Kit-Brindis.png";
import KitCafe1 from "@/assets/christmas/Kit-Cafe.png";
import KitChocolate1 from "@/assets/christmas/Kit-Chocolate.png";
const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<ChristmasProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedRegularProduct, setSelectedRegularProduct] = useState<Product | null>(null);
  const [isRegularModalOpen, setIsRegularModalOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Hola!, quiero cotizar el producto: ${productName}`);
    const phoneNumber = "573337013642";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleProductClick = (product: ChristmasProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleRegularProductClick = (product: Product) => {
    setSelectedRegularProduct(product);
    setIsRegularModalOpen(true);
  };

  const productThumbnails: { [key: string]: string } = {
    "kit-bienestar": kitBienestar1,
    "kit-spa": kitSpa1,
    "kit-aromaterapia": kitAromaterapia1,
    "kit-descanso": kitDescanso1,
    "kit-cocteleria": kitCocteleria1,
    "kit-yoga-beige": Kityogabeige1,
    "Set-calma-lujo": Setcalma1,
    "Noche-Velitas": NocheVelitas1,
    "Vino-caliente": VinoCaliente1,
    "Tabla-quesos": TablaQuesos1,
    "Kit-Gym": KitGym1,
    "Kit-Entretenimiento": KitEntretenimiento1,
    "Kit-Galletas": KitGalletas1,
    "Kit-Cuidado-Personal": KitCuidadoPersonal1,
    "Kit-Corporativo": KitCorporativo1,
    "Kit-Año-Viejo": KitAñoViejo1,
    "Kit-Corporativo-Premium": KitCorporativoPremium1,
    "Kit-Brindis": KitBrindis1,
    "Kit-Cafe": KitCafe1,
    "Kit-Chocolate": KitChocolate1,
    //productos
    "prensa1": Prensa1,
    "taza2": tazaceramica1,
    "maquillaje1": maquillaje1,
    "botella1": termo1,
  };
  useEffect(() => {
  const disableContext = (e: MouseEvent) => {
    e.preventDefault();
  };

  // Bloquea el menú contextual en toda la página
  document.addEventListener("contextmenu", disableContext);

  // limpieza al desmontar
  return () => {
    document.removeEventListener("contextmenu", disableContext);
  };
}, []);



  return (
    <div className="min-h-screen bg-background">
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
          <source src="/videos/fondonavidad.mp4" type="video/mp4" />
        </video>

        {/* 🌙 Capa oscura para que el texto resalte */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* ✨ Contenido sobre el video */}
        <div className="relative z-10 container px-4 text-center">
          <h1 className="font-[Poppins] font-bold text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            Bienvenido a Concepto Creativo
          </h1>
        </div>
        
    {/* 🎨 NUEVO: Degradado de transición en la parte inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/60 z-[5]"></div>
      </section>
  
{/* 🎄 Christmas Products Section */}
<section
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/seccion-navidad.jpg')",
    color: "#b8860b",
  }}
>
  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-[5]"></div>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 container px-4">

    {/* 🎄 BOTÓN DEL CATÁLOGO NAVIDEÑO */}
    {/* ...botón, título y descripción igual que antes ... */}

    <div className="max-w-7xl mx-auto space-y-6">

      {/* Fila 1: 4 productos (0-3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {christmasProducts.slice(0, 4).map((product) => (
          <article key={product.id} onClick={() => handleProductClick(product)} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer animate-fade-up">
            <div className="aspect-square overflow-hidden">
              <img src={productThumbnails[product.id]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 font-[Inter] line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Ver detalles</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Fila 2: 2 productos (4,5) + flyer a la derecha */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {christmasProducts.slice(4, 6).map((product) => (
          <article key={product.id} onClick={() => handleProductClick(product)} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer animate-fade-up">
            <div className="aspect-square overflow-hidden">
              <img src={productThumbnails[product.id]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 font-[Inter] line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Ver detalles</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
        <div className="lg:col-span-2 sm:col-span-2 relative group cursor-pointer animate-fade-up rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col justify-center">
          <img src="/flyers/flyer-navidad.png" alt="Promoción Navidad" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-[Poppins] font-bold text-2xl mb-2">¡Ofertas Especiales!</h3>
              <p className="text-sm">Descubre nuestras promociones navideñas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fila 3: 4 productos (6-9) abajo del flyer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {christmasProducts.slice(6, 10).map((product) => (
          <article key={product.id} onClick={() => handleProductClick(product)} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer animate-fade-up">
            <div className="aspect-square overflow-hidden">
              <img src={productThumbnails[product.id]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 font-[Inter] line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Ver detalles</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Fila 4: flyer izquierdo y 2 productos (10,11) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 sm:col-span-2 relative group cursor-pointer animate-fade-up rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col justify-center">
          <img src="/flyers/flyer-navidad2.png" alt="Flyer Navidad 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-[Poppins] font-bold text-2xl mb-2">¡Flyer Especial Navidad!</h3>
              <p className="text-sm">Nuevas oportunidades de regalo</p>
            </div>
          </div>
        </div>
        {christmasProducts.slice(10, 12).map((product) => (
          <article key={product.id} onClick={() => handleProductClick(product)} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer animate-fade-up">
            <div className="aspect-square overflow-hidden">
              <img src={productThumbnails[product.id]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 font-[Inter] line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Ver detalles</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Resto de productos: 12 hasta 19 */}
      {christmasProducts.length > 12 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {christmasProducts.slice(12, 20).map((product) => (
            <article key={product.id} onClick={() => handleProductClick(product)} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer animate-fade-up">
              <div className="aspect-square overflow-hidden">
                <img src={productThumbnails[product.id]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-[Poppins] font-semibold text-lg mb-2 line-clamp-2 text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-[Inter] line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver detalles</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

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
      {["Todos", "Café", "Hogar", "Maquillaje", "Deportes", "Oficina"].map((category) => {
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
              {productThumbnails[product.id] ? (
                <img
                  src={productThumbnails[product.id]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                // Fallback si no hay imagen
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10 group-hover:scale-105 transition-transform duration-500" />
                  <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                    📦
                  </span>
                </>
              )}
              
              {/* Badge de categoría */}
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



<WhyChooseUs />

      {/* Catálogos de temporada */}
      <CatalogosDeTemporada />

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
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;



