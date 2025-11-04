import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, MessageCircle, Package, Hash, Palette } from "lucide-react";
import { Product } from "@/data/products";

interface RegularProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  productImage?: string; // Imagen del producto desde productThumbnails
}

const RegularProductModal = ({ product, isOpen, onClose, productImage }: RegularProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  // Si el producto tiene múltiples imágenes en un array, o solo una imagen
  const images = product.image ? [product.image] : productImage ? [productImage] : [];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hola 👋, quiero cotizar el producto: ${product.name} (Código: ${product.sku})`);
    const phoneNumber = "573337013642";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-0">
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative w-full aspect-square bg-gradient-to-br from-secondary/10 to-primary/5">
            {images.length > 0 ? (
              <img
                src={images[currentImageIndex]}
                alt={`${product.name}`}
                className="w-full h-full object-cover"
              />
            ) : (
              // Fallback si no hay imagen
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl">📦</span>
              </div>
            )}
            
            {/* Navigation Arrows - Solo si hay múltiples imágenes */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}

            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              {product.category}
            </div>
          </div>

          {/* Product Information */}
          <div className="p-8">
            <DialogHeader>
              <DialogTitle className="font-[Poppins] font-bold text-3xl text-primary mb-4">
                {product.name}
              </DialogTitle>
            </DialogHeader>

            <p className="text-muted-foreground font-[Inter] text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* SKU */}
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
                <Hash className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-primary mb-1">Código SKU</h4>
                  <p className="font-[Inter] text-muted-foreground">{product.sku}</p>
                </div>
              </div>

              {/* Minimum Units */}
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
                <Package className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-primary mb-1">Cantidad Mínima</h4>
                  <p className="font-[Inter] text-muted-foreground">{product.minUnits} unidades</p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
                <Palette className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-[Poppins] font-semibold text-sm text-primary mb-1">Categoría</h4>
                  <p className="font-[Inter] text-muted-foreground">{product.category}</p>
                </div>
              </div>

              {/* Price (if available) */}
              {product.price && (
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl">
                  <span className="text-primary text-xl mt-1 flex-shrink-0">💰</span>
                  <div>
                    <h4 className="font-[Poppins] font-semibold text-sm text-primary mb-1">Precio</h4>
                    <p className="font-[Inter] text-muted-foreground">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Colors Available - Solo si hay colores */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="font-[Poppins] font-semibold text-xl text-primary mb-4">
                  Colores Disponibles
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div
                        className="w-12 h-12 rounded-full border-4 border-gray-200 shadow-md hover:scale-110 transition-transform cursor-pointer"
                        style={{ 
                          backgroundColor: color === 'transparent' ? '#ffffff' : color,
                          border: color === 'transparent' ? '4px dashed #ccc' : '4px solid #e5e5e5'
                        }}
                        title={color}
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Info */}
            <div className="mb-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
              <h3 className="font-[Poppins] font-semibold text-lg text-primary mb-3">
                ℹ️ Información Adicional
              </h3>
              <ul className="space-y-2 font-[Inter] text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Personalización disponible con tu logo o diseño</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Producto ideal para campañas promocionales y regalos corporativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Cotización personalizada según cantidad y acabados</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-[Poppins] font-semibold text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="h-5 w-5" />
              Cotiza este producto por WhatsApp
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegularProductModal;
