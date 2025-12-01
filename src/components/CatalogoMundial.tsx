import { X } from "lucide-react";

interface CatalogoMundialProps {
  isOpen: boolean;
  onClose: () => void;
}

const CatalogoMundial = ({ isOpen, onClose }: CatalogoMundialProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-2xl transition-all hover:scale-110"
        title="Cerrar catálogo"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="max-w-[98vw] w-full flex flex-col items-center">
        <h2 className="text-white text-2xl font-extrabold mb-3 text-center">
          Catálogo Mundial
        </h2>
        <iframe
  src="https://online.anyflip.com/qqfoi/oibt/index.html"
  style={{ width: "90vw", height: "80vh", border: "none" }}  // más grande y responsive
  allowFullScreen
  scrolling="no"
  title="Catálogo Mundial"
  className="rounded-xl bg-white shadow-xl max-w-5xl"
/>

      </div>
    </div>
  );
};

export default CatalogoMundial;
