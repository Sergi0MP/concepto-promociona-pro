import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { ChristmasProduct } from "@/data/christmasProducts";
import { ProductoEscolar } from "@/data/productosEscolares";
import { Product } from "@/data/products";

export type AnyProduct = ChristmasProduct | ProductoEscolar | Product;

export interface ProductModalProps {
  product: AnyProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola 👋, quiero cotizar el producto: ${product.name}`
    );
    const phoneNumber = "573337013642";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => (prev + 1) % (product.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + (product.images?.length || 1)) %
        (product.images?.length || 1)
    );
  };

  const images = product.images ?? [];
  console.log("images en modal:", images);


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-0">
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative w-full flex justify-center items-center aspect-square bg-gradient-to-br from-secondary/10 to-primary/5">
            {images.length > 0 && (
              <img
                src={images[currentImageIndex]}
                alt={`${product.name} - imagen ${currentImageIndex + 1}`}
                className="max-w-[500px] max-h-[70vh] w-auto h-auto mx-auto my-0 rounded-2xl transition-all duration-300 shadow-lg"
                style={{
                  objectFit: "contain",
                  display: "block",
                }}
              />
            )}

            {/* Navigation Arrows */}
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
              </>
            )}

            {/* Image Counter */}
            {images.length > 0 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
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

            {/* Kit Contents (solo si existe) */}
            {"kitContents" in product &&
              product.kitContents &&
              product.kitContents.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-[Poppins] font-semibold text-xl text-primary mb-3">
                    Contenido del Kit
                  </h3>
                  <ul className="space-y-2">
                    {product.kitContents.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-[Inter] text-muted-foreground"
                      >
                        <span className="text-secondary mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Materials (solo si existe) */}
            {"materials" in product &&
              product.materials &&
              product.materials.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-[Poppins] font-semibold text-xl text-primary mb-3">
                    Materiales
                  </h3>
                  <ul className="space-y-2">
                    {product.materials.map((material, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-[Inter] text-muted-foreground"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-[Poppins] font-semibold text-base transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle className="h-5 w-5" />
              Solicita este producto
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;

