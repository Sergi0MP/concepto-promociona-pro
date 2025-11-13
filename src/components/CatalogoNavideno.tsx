import { X } from 'lucide-react';

interface CatalogoNavidenoProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogoNavideno = ({ isOpen, onClose }: CatalogoNavidenoProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-2xl transition-all hover:scale-110"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="max-w-[95vw] w-full flex flex-col items-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          🎄 Catálogo Navideño 2025 🎁
        </h2>
        <iframe
          src="https://online.anyflip.com/qqfoi/rznr/index.html"
          style={{ width: "90vw", height: "80vh", border: "none" }}
          allowFullScreen
          scrolling="no"
          title="Catálogo Navideño 2025"
          className="rounded-xl bg-white shadow-xl"
        />
      </div>
    </div>
  );
};

export default CatalogoNavideno;





