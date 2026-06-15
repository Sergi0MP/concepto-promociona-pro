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
  onOpenMundial,
  onOpenNavidad,
}: CatalogosDeTemporadaProps) => (
  <section
    id="catalogos-temporada"
    className="relative w-full py-24 overflow-hidden"
    style={{ background: "#ffffff" }}
  >
    {/* ── FONDO BLANCO CON MANCHAS ── */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(72,79,157,0.1) 0%, rgba(72,79,157,0.03) 50%, transparent 75%)" }} />
      <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(244,230,0,0.15) 0%, rgba(244,230,0,0.04) 50%, transparent 75%)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(72,79,157,0.04) 0%, transparent 70%)" }} />
      {/* Línea superior */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #484F9D, #F4E600, #484F9D)" }} />
      {/* Línea inferior */}
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

        {/* Título 3D sobre fondo blanco */}
        <div className="relative inline-block mb-8">
          <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)", top: "8px", left: "8px", color: "rgba(244,230,0,0.45)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
            CATÁLOGOS
          </h2>
          <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)", top: "5px", left: "5px", color: "rgba(72,79,157,0.2)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
            CATÁLOGOS
          </h2>
          <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
            style={{ fontSize: "clamp(2rem, 7vw, 5rem)", top: "2px", left: "2px", color: "rgba(72,79,157,0.45)", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>
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

      {/* ── GRID PRINCIPAL: igual que la imagen ── */}
      {/* Izquierda: 2026 grande | Derecha: 2x2 */}
      <div className="w-full max-w-6xl mx-auto grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">

        {/* IZQUIERDA — Catálogo 2026 grande */}
        <div className="flex justify-center">
          <div
            className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-3 w-full max-w-xs md:max-w-none"
            onClick={onOpen2025}
          >
            {/* Sombra de color detrás */}
            <div className="absolute inset-0 rounded-2xl translate-y-4 scale-95 blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500"
              style={{ background: "linear-gradient(135deg, #484F9D, #F4E600)" }} />

            <div className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(72,79,157,0.2), 0 5px 20px rgba(244,230,0,0.1), 0 0 0 1px rgba(72,79,157,0.12)",
              }}>
              {/* Badge */}
              <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-[Inter] font-bold shadow-lg"
                style={{ background: "#F4E600", color: "#1a1a1a" }}>
                ⭐ Principal
              </div>
              <img
                src="/catalogo/2026.webp"
                alt="Catálogo 2026"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4" }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(72,79,157,0.35) 0%, transparent 55%)" }} />
            </div>

            <p className="mt-4 text-center font-[Poppins] font-bold text-lg" style={{ color: "#484F9D" }}>
              Catálogo 2026
            </p>
          </div>
        </div>

        {/* DERECHA — grid 2x2 */}
        <div className="grid grid-cols-2 gap-5">

          {/* Halloween */}
          <div className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col items-center"
            onClick={onOpenHalloween}>
            <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: "#484F9D" }} />
            <div className="relative rounded-xl overflow-hidden w-full"
              style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.1), 0 0 0 1px rgba(72,79,157,0.1)" }}>
              <img src="/catalogo/halloween/page1.webp" alt="Catálogo Halloween"
                className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(72,79,157,0.35) 0%, transparent 55%)" }} />
            </div>
            <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
              Catálogo Halloween
            </p>
          </div>

          {/* 2026 — en el grid derecho también aparece como slot pero más pequeño... */}
          {/* Amor y Amistad */}
          <div className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col items-center"
            onClick={onOpenAmor}>
            <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: "#F4E600" }} />
            <div className="relative rounded-xl overflow-hidden w-full"
              style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.1), 0 0 0 1px rgba(244,230,0,0.15)" }}>
              <img src="/catalogo/amor.webp" alt="Catálogo Amor y Amistad"
                className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(244,230,0,0.3) 0%, transparent 55%)" }} />
            </div>
            <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
              Catálogo Amor y Amistad
            </p>
          </div>

          {/* Navideño */}
          <div className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col items-center"
            onClick={onOpenNavidad}>
            <div className="absolute inset-0 rounded-xl translate-y-3 scale-95 blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-500"
              style={{ background: "#484F9D" }} />
            <div className="relative rounded-xl overflow-hidden w-full"
              style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.1), 0 0 0 1px rgba(72,79,157,0.1)" }}>
              <img src="/catalogo/navida.webp" alt="Catálogo Navideño"
                className="w-full object-cover" style={{ aspectRatio: "3/4" }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(72,79,157,0.35) 0%, transparent 55%)" }} />
            </div>
            <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "#484F9D" }}>
              Catálogo Navideño 2026
            </p>
          </div>

          {/* Mundial — archivo */}
          <div className="group relative cursor-pointer transition-all duration-400 hover:-translate-y-2 flex flex-col items-center opacity-45 hover:opacity-70"
            onClick={onOpenMundial}>
            <div className="relative rounded-xl overflow-hidden w-full"
              style={{ boxShadow: "0 10px 35px rgba(0,0,0,0.06)" }}>
              <img src="/catalogo/Mundial.webp" alt="Catálogo Mundial"
                className="w-full object-cover transition-all duration-500"
                style={{ aspectRatio: "3/4" }} />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-[Inter]"
                style={{ background: "rgba(0,0,0,0.5)", color: "rgba(255,255,255,0.7)" }}>
                Archivo
              </div>
            </div>
            <p className="mt-3 text-center font-[Inter] font-semibold text-sm" style={{ color: "rgba(0,0,0,0.35)" }}>
              Catálogo Mundial
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default CatalogosDeTemporada;


