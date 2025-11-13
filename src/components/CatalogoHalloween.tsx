import React from "react";

const CatalogoHalloween = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
      <button
        onClick={onClose}
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
);

export default CatalogoHalloween;

