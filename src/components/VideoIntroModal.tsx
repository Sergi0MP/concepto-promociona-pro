import { useEffect } from "react";

interface VideoIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoIntroModal: React.FC<VideoIntroModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
    <div className="relative w-[98%] h-[85%] max-w-[1400px] bg-black rounded-xl overflow-hidden shadow-2xl">
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-black/70 text-white w-9 h-9 flex items-center justify-center text-2xl hover:bg-black/90"
        aria-label="Cerrar video"
      >
        ×
      </button>

      <video
        src="/videos/gif.mp4"
        autoPlay
        muted
        loop 
        playsInline
        className="w-full h-full object-contain bg-black"
      />
    </div>
  </div>
);
};


export default VideoIntroModal;
