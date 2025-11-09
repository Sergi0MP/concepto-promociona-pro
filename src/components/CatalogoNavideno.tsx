import { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface CatalogoNavidenoProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogoNavideno = ({ isOpen, onClose }: CatalogoNavidenoProps) => {
  const totalPages = 5; // 🔢 Ajusta según tus páginas
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [zoom, setZoom] = useState(1);
  
  // Estados para el arrastre
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const goToPrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, 2.5));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, 0.8));
  };

  const handleResetZoom = () => {
    setZoom(1);
  };

  // Funciones para el arrastre
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartY(e.pageY - containerRef.current.offsetTop);
    setScrollLeft(containerRef.current.scrollLeft);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* 🎨 Animación de voltear página */}
      <style>{`
        @keyframes flip-animation {
          0% {
            transform: rotateY(0deg);
            opacity: 1;
          }
          50% {
            transform: rotateY(90deg);
            opacity: 0.3;
          }
          100% {
            transform: rotateY(0deg);
            opacity: 1;
          }
        }

        .page-flip {
          animation: flip-animation 0.6s ease-in-out;
        }
      `}</style>

      <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-2xl transition-all hover:scale-110"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="max-w-[95vw] w-full flex flex-col items-center">
          {/* Título */}
          <div className="text-center mb-6">
            <h2 className="text-white text-3xl font-bold mb-2">
              🎄 Catálogo Navideño 2025 🎁
            </h2>
            <span className="text-white/80 text-lg font-semibold bg-black/50 px-6 py-2 rounded-full">
              Página {currentPage + 1} de {totalPages}
            </span>
          </div>

          {/* Controles de Zoom */}
          <div className="flex gap-3 mb-4">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.8}
              className={`bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all ${
                zoom <= 0.8 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
              }`}
              title="Alejar (Zoom Out)"
            >
              <ZoomOut className="h-5 w-5 text-amber-600" />
            </button>

            <button
              onClick={handleResetZoom}
              className="bg-white/90 hover:bg-white px-4 py-2 rounded-full shadow-xl transition-all hover:scale-105 text-sm font-semibold text-amber-600"
              title="Restablecer Zoom"
            >
              {Math.round(zoom * 100)}%
            </button>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 2.5}
              className={`bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all ${
                zoom >= 2.5 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
              }`}
              title="Acercar (Zoom In)"
            >
              <ZoomIn className="h-5 w-5 text-amber-600" />
            </button>
          </div>

          {/* Controles y Libro */}
          <div className="flex items-center justify-center gap-6">
            {/* Botón anterior */}
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0 || isFlipping}
              className={`bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all flex-shrink-0 ${
                currentPage === 0 || isFlipping ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
              }`}
            >
              <ChevronLeft className="h-8 w-8 text-amber-600" />
            </button>

            {/* CONTENEDOR CON ARRASTRE Y ANIMACIÓN */}
            <div 
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              className="overflow-auto border-4 border-white/20 rounded-lg bg-black/30 p-4 select-none"
              style={{ 
                width: 'min(700px, 85vw)',
                height: '75vh',
                cursor: isDragging ? 'grabbing' : (zoom > 1 ? 'grab' : 'default'),
                userSelect: 'none',
              }}
            >
              <img
                src={`/catalogo/pagina-${currentPage + 1}.png`}
                alt={`Página ${currentPage + 1}`}
                className={`shadow-2xl rounded-lg bg-white mx-auto ${isFlipping ? 'page-flip' : ''}`}
                style={{
                  width: `${600 * zoom}px`,
                  height: 'auto',
                  pointerEvents: 'none',
                }}
                draggable={false}
              />
            </div>

            {/* Botón siguiente */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1 || isFlipping}
              className={`bg-white/90 hover:bg-white p-4 rounded-full shadow-xl transition-all flex-shrink-0 ${
                currentPage === totalPages - 1 || isFlipping ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
              }`}
            >
              <ChevronRight className="h-8 w-8 text-amber-600" />
            </button>
          </div>

          {/* Instrucciones */}
          <div className="text-center mt-6">
            <p className="text-white/80 text-sm">
              🖱️ Haz zoom y arrastra para leer • Usa las flechas para navegar
            </p>
            <p className="text-white/60 text-xs mt-2">
              {currentPage + 1} de {totalPages} páginas • Zoom: {Math.round(zoom * 100)}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogoNavideno;




