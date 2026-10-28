import React from "react";

interface CatalogosDeTemporadaProps {
  onOpenHalloween: (e: React.MouseEvent) => void;
  onOpen2025: (e: React.MouseEvent) => void;
  onOpenAmor: (e: React.MouseEvent) => void;
  onOpenMundial: (e: React.MouseEvent) => void;
  onOpenNavidad: (e: React.MouseEvent) => void;
}

const CatalogosDeTemporada = ({
  onOpenHalloween,
  onOpen2025,
  onOpenAmor,
  onOpenNavidad,
}: CatalogosDeTemporadaProps) => (
  <section
    id="catalogos-temporada"
    className="relative w-full py-24 overflow-hidden"
    style={{ background: "#ffffff" }}
  >
    {/* ── FONDO ── */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(72,79,157,0.1) 0%, rgba(72,79,157,0.03) 50%, transparent 75%)" }} />
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(244,230,0,0.15) 0%, rgba(244,230,0,0.04) 50%, transparent 75%)" }} />
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #484F9D, #F4E600, #484F9D)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #F4E600, #484F9D, #F4E600)" }} />
    </div>

    <div className="relative z-10 container px-4 mx-auto">

      {/* ── TÍTULO ── */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-[Inter] uppercase tracking-widest"
          style={{ border: "1px solid rgba(72,79,157,0.3)", background: "rgba(72,79,157,0.06)", color: "#484F9D" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#484F9D" }} />
          Colecciones · Concepto Creativo
        </div>

        <div className="relative inline-block mb-8">
          <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)", top: "8px", left: "8px", color: "rgba(244,230,0,0.45)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
            CATÁLOGOS
          </h2>
          <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)", top: "4px", left: "4px", color: "rgba(72,79,157,0.35)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
            CATÁLOGOS
          </h2>
          <h2 className="relative font-[Poppins] font-black"
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              background: "linear-gradient(135deg, #484F9D 0%, #3a4190 40%, #c8a800 75%, #F4E600 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 2px 8px rgba(72,79,157,0.15))",
            }}>
            CATÁLOGOS
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-0.5 flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, transparent, #484F9D)" }} />
          <div className="w-3 h-3 rotate-45 border-2"
            style={{ borderColor: "#F4E600", background: "rgba(244,230,0,0.3)" }} />
          <div className="h-0.5 flex-1 max-w-[100px]"
            style={{ background: "linear-gradient(90deg, #484F9D, transparent)" }} />
        </div>

        <p className="font-[Inter] text-base max-w-lg mx-auto" style={{ color: "rgba(0,0,0,0.45)" }}>
          Explora nuestras colecciones temáticas y encuentra el regalo perfecto para cada ocasión
        </p>
      </div>

      {/* ── GRID: catálogo 2026 a la izquierda (span 2 filas) + 3 a la derecha ── */}
      <div
        className="w-full max-w-5xl mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {/* ── 2026: ocupa col 1, filas 1 y 2 ── */}
        <div
          className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-3"
          style={{ gridColumn: "1", gridRow: "1 / span 2" }}
          onClick={onOpen2025}
        >
          <div className="absolute inset-0 rounded-2xl translate-y-4 scale-95 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"
            style={{ background: "linear-gradient(135deg, #484F9D, #F4E600)" }} />
          <div className="relative rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(72,79,157,0.2), 0 0 0 1px rgba(72,79,157,0.12)" }}>
            <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-[Inter] font-bold shadow-lg"
              style={{ background: "#F4E600", color: "#1a1a1a" }}>
              ⭐ Principal
            </div>
            <img
              src="/catalogo/2026.webp"
              alt="Catálogo 2026"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4", display: "block" }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(72,79,157,0.35) 0%, transparent 55%)" }} />
          </div>
          <p className="mt-4 text-center font-[Poppins] font-bold text-base" style={{ color: "#484F9D" }}>
            Catálogo 2026
          </p>
        </div>

        {/* ── Halloween: col 2, fila 1 ── */}
        <div
          className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col"
          style={{ gridColumn: "2", gridRow: "1" }}
          onClick={onOpenHalloween}
        >
          <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
            style={{ background: "#484F9D" }} />
          <div className="relative rounded-xl overflow-hidden w-full"
            style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.12), 0 0 0 1px rgba(72,79,157,0.1)" }}>
            <img
              src="/catalogo/halloween/page1.webp"
              alt="Catálogo Halloween"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4", display: "block" }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(72,79,157,0.35) 0%, transparent 55%)" }} />
          </div>
          <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
            Catálogo Halloween
          </p>
        </div>

        {/* ── Navideño: col 3, fila 1 ── */}
        <div
          className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col"
          style={{ gridColumn: "3", gridRow: "1" }}
          onClick={onOpenNavidad}
        >
          <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
            style={{ background: "#CC1111" }} />
          <div className="relative rounded-xl overflow-hidden w-full"
            style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.1), 0 0 0 1px rgba(204,17,17,0.15)" }}>
            <img
              src="/catalogo/navida.webp"
              alt="Catálogo Navideño"
              className="w-full object-cover"
              style={{ aspectRatio: "3/4", display: "block" }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(204,17,17,0.3) 0%, transparent 55%)" }} />
          </div>
          <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
            Catálogo Navideño 2026
          </p>
        </div>

        {/* ── Amor y Amistad: col 2-3, fila 2 ── */}
        <div
          className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col"
          style={{ gridColumn: "2 / span 2", gridRow: "2" }}
          onClick={onOpenAmor}
        >
          <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
            style={{ background: "#F4E600" }} />
          <div className="relative rounded-xl overflow-hidden w-full"
            style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.1), 0 0 0 1px rgba(244,230,0,0.15)" }}>
            <img
              src="/catalogo/amor.webp"
              alt="Catálogo Amor y Amistad"
              className="w-full object-cover"
              style={{ aspectRatio: "16/7", display: "block", objectPosition: "center" }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(244,230,0,0.25) 0%, transparent 55%)" }} />
          </div>
          <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
            Amor y Amistad
          </p>
        </div>

      </div>
    </div>
  </section>
);

export default CatalogosDeTemporada;

