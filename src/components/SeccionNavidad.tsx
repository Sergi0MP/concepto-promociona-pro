import React, { useState } from "react";
import { christmasProducts, ChristmasProduct } from "@/data/christmasProducts";
import { MessageCircle } from "lucide-react";

// ── MODAL ────────────────────────────────────────────────────────────────────
interface ModalProps {
  product: ChristmasProduct | null;
  onClose: () => void;
}

const NavidadModal: React.FC<ModalProps> = ({ product, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);

  if (!product) return null;

  const imgs = product.images || [];

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hola! Quiero cotizar el kit navideño: " + product.name);
    window.open("https://wa.me/573337013642?text=" + msg, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-3xl w-[94vw] max-h-[90vh] overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, #1a0808 0%, #220c0c 100%)",
          border: "1px solid rgba(220,50,50,0.3)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          style={{ fontSize: "20px" }}
        >x</button>

        <div className="md:w-1/2 flex-shrink-0 relative" style={{ minHeight: "280px" }}>
          <div className="w-full h-full" style={{ background: "linear-gradient(135deg, #150606 0%, #1f0a0a 100%)" }}>
            {imgs.length > 0 ? (
              <img
                src={imgs[imgIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ minHeight: "280px", maxHeight: "400px" }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-7xl" style={{ minHeight: "280px" }}>🎄</div>
            )}
          </div>
          {imgs.length > 1 && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-3">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className="w-12 h-12 rounded-lg overflow-hidden border-2 transition-all"
                  style={{ borderColor: i === imgIndex ? "#E8A032" : "rgba(255,255,255,0.2)" }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="md:w-1/2 p-6 flex flex-col justify-between gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{ background: "rgba(232,160,50,0.12)", color: "#E8A032", border: "1px solid rgba(232,160,50,0.3)" }}>
              🎁 Kit Navideño
            </span>
            <h3 className="font-[Poppins] font-bold text-xl text-white mb-3">{product.name}</h3>
            <p className="font-[Inter] text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              {product.description}
            </p>
            {product.kitContents && product.kitContents.length > 0 && (
              <div>
                <p className="font-[Poppins] font-semibold text-xs uppercase tracking-wider mb-2"
                  style={{ color: "#E8A032" }}>
                  Contenido del kit
                </p>
                <ul className="space-y-1">
                  {product.kitContents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-[Inter]"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      <span style={{ color: "#CC1111", flexShrink: 0 }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-[Poppins] font-bold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: "#25D366", color: "white" }}
          >
            <MessageCircle className="h-4 w-4" />
            Cotizar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

// ── LOGO CC NAVIDEÑO — SVG fiel al original, moderno ─────────────────────────
const CCNavidadLogo: React.FC = () => (
  <div className="relative select-none flex-shrink-0" style={{ width: "170px", height: "190px" }}>
    <svg
      viewBox="0 0 170 190"
      width="170"
      height="190"
      style={{ overflow: "visible", filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.55))" }}
    >
      <defs>
        {/* Gradiente verde para C exterior */}
        <linearGradient id="gradVerde" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d8a2d" />
          <stop offset="45%" stopColor="#1a6a1a" />
          <stop offset="100%" stopColor="#0f4a0f" />
        </linearGradient>
        {/* Gradiente rojo para C interior */}
        <linearGradient id="gradRojo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e03030" />
          <stop offset="45%" stopColor="#b01010" />
          <stop offset="100%" stopColor="#7a0808" />
        </linearGradient>
        {/* Sombra interior para dar volumen */}
        <filter id="innerGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Brillo dorado para estrellitas */}
        <filter id="goldGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ─ C EXTERIOR VERDE (grande, ocupa la mayor parte) ─ */}
      {/* Arco principal — trazo grueso verde con degradado */}
      <path
        d="M148 95
           A63 63 0 1 1 95 32"
        fill="none"
        stroke="url(#gradVerde)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      {/* Borde inferior de la C verde para dar efecto 3D */}
      <path
        d="M148 95
           A63 63 0 1 1 95 32"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="0 1"
        style={{ transform: "translate(1px, 2px)" }}
      />

      {/* ─ C INTERIOR ROJA (más pequeña, desplazada hacia abajo-derecha) ─ */}
      <path
        d="M138 108
           A44 44 0 1 1 94 64"
        fill="none"
        stroke="url(#gradRojo)"
        strokeWidth="20"
        strokeLinecap="round"
      />
      {/* Brillo superior de la C roja */}
      <path
        d="M138 108
           A44 44 0 1 1 94 64"
        fill="none"
        stroke="rgba(255,200,200,0.15)"
        strokeWidth="4"
        strokeLinecap="round"
        style={{ transform: "translate(-1px, -1px)" }}
      />

      {/* ─ GORRO DE SANTA ─ */}
      {/* Banda blanca base */}
      <rect x="52" y="34" width="74" height="14" rx="7" fill="white" opacity="0.95" />
      <rect x="52" y="34" width="74" height="7" rx="4" fill="rgba(220,220,220,0.5)" />

      {/* Cuerpo del gorro (rojo, curvo y con volumen) */}
      <path
        d="M56 34 Q75 10 95 0 Q105 12 118 22 Q108 28 104 34 Z"
        fill="#CC1111"
      />
      <path
        d="M56 34 Q75 10 95 0 Q105 12 118 22 Q108 28 104 34 Z"
        fill="url(#gradRojo)"
        opacity="0.9"
      />
      {/* Brillo del gorro */}
      <path
        d="M80 8 Q85 4 92 2 Q96 8 98 14 Q90 10 80 8 Z"
        fill="rgba(255,255,255,0.25)"
      />
      {/* Pliegue/doblez del gorro */}
      <path
        d="M104 34 Q110 30 118 22"
        fill="none"
        stroke="rgba(100,0,0,0.35)"
        strokeWidth="2"
      />

      {/* Pompón blanco */}
      <circle cx="95" cy="5" r="11" fill="white" opacity="0.95" />
      <circle cx="92" cy="3" r="4" fill="rgba(255,255,255,0.6)" />
      <circle cx="97" cy="7" r="2.5" fill="rgba(200,200,200,0.4)" />

      {/* ─ ESTRELLITAS DORADAS decorativas ─ */}
      <g filter="url(#goldGlow)">
        {/* Estrella grande arriba derecha */}
        <text x="148" y="45" fill="#E8A032" fontSize="16" textAnchor="middle" fontWeight="bold">✦</text>
        {/* Estrella pequeña */}
        <text x="158" y="62" fill="#E8A032" fontSize="9" textAnchor="middle">✦</text>
        {/* Estrella abajo derecha */}
        <text x="152" y="148" fill="#E8A032" fontSize="12" textAnchor="middle">✦</text>
      </g>
    </svg>
  </div>
);

// ── SNOWFLAKE SVG ────────────────────────────────────────────────────────────
const Snowflake: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="none" style={{ ...style, position: "absolute", pointerEvents: "none" }}>
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="2" r="1.2" fill="currentColor"/>
    <circle cx="12" cy="22" r="1.2" fill="currentColor"/>
    <circle cx="2" cy="12" r="1.2" fill="currentColor"/>
    <circle cx="22" cy="12" r="1.2" fill="currentColor"/>
    <circle cx="4.93" cy="4.93" r="1.2" fill="currentColor"/>
    <circle cx="19.07" cy="19.07" r="1.2" fill="currentColor"/>
    <circle cx="19.07" cy="4.93" r="1.2" fill="currentColor"/>
    <circle cx="4.93" cy="19.07" r="1.2" fill="currentColor"/>
  </svg>
);

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
const SeccionNavidad: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ChristmasProduct | null>(null);

  return (
    <>
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0d0404 0%, #1a0606 50%, #0b0f02 100%)", marginTop: "-2px" }}
      >
        {/* ── DEGRADADO DE ENTRADA — funde con el Hero superior ── */}
        <div
          className="absolute top-0 left-0 right-0 z-[1] pointer-events-none"
          style={{ height: "100px", background: "linear-gradient(to bottom, #0d0404 0%, transparent 100%)" }}
        />

        {/* ── DEGRADADO DE SALIDA — funde hacia SeccionTaller ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
          style={{ height: "100px", background: "linear-gradient(to bottom, transparent 0%, #0b0f02 100%)" }}
        />

        {/* ── FONDO decorativo ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: "radial-gradient(circle, rgba(232,160,50,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #9b1111 0%, transparent 65%)" }} />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1a5c1a 0%, transparent 65%)" }} />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10"
            style={{ background: "radial-gradient(ellipse, #c8930a 0%, transparent 70%)" }} />

          <Snowflake style={{ width: 28, height: 28, top: "8%", left: "5%", color: "rgba(255,255,255,0.06)", transform: "rotate(15deg)" }} />
          <Snowflake style={{ width: 18, height: 18, top: "15%", left: "12%", color: "rgba(232,160,50,0.12)", transform: "rotate(-20deg)" }} />
          <Snowflake style={{ width: 34, height: 34, top: "5%", right: "8%", color: "rgba(255,255,255,0.05)", transform: "rotate(30deg)" }} />
          <Snowflake style={{ width: 20, height: 20, top: "20%", right: "15%", color: "rgba(204,17,17,0.15)", transform: "rotate(-10deg)" }} />
          <Snowflake style={{ width: 24, height: 24, bottom: "15%", left: "7%", color: "rgba(232,160,50,0.10)", transform: "rotate(45deg)" }} />
          <Snowflake style={{ width: 16, height: 16, bottom: "25%", right: "6%", color: "rgba(255,255,255,0.07)", transform: "rotate(20deg)" }} />
          <Snowflake style={{ width: 22, height: 22, bottom: "10%", right: "20%", color: "rgba(204,17,17,0.10)", transform: "rotate(-30deg)" }} />
        </div>

        <div className="relative z-10 container px-4 mx-auto">

          {/* ── HERO DEL ENCABEZADO — estilo logo Navidad 2026 ── */}
          <div className="flex flex-col items-center mb-16">

            {/* Marca navideña — sin tarjeta, layout limpio */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-2xl mb-10 px-6 py-6"
            >
              {/* Lado izquierdo: logo CC con gorro */}
              <CCNavidadLogo />

              {/* Lado derecho: texto */}
              <div className="flex flex-col items-center sm:items-start gap-1">
                {/* Pill badge "TEMPORADA NAVIDAD" */}
                <div
                  className="inline-flex items-center px-4 py-1 rounded-full mb-3"
                  style={{
                    border: "1px solid rgba(180,130,80,0.55)",
                    color: "rgba(200,160,80,0.75)",
                    background: "rgba(200,160,80,0.06)",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.18em",
                    fontSize: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  Temporada Navidad
                </div>

                {/* CONCEPTO — rojo oscuro */}
                <span
                  className="font-black leading-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.8rem)",
                    color: "#8B0000",
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 12px rgba(139,0,0,0.3)",
                  }}
                >
                  CONCEPTO
                </span>

                {/* CREATIVO — verde oscuro */}
                <span
                  className="font-black leading-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.8rem)",
                    color: "#1a5c1a",
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 12px rgba(26,92,26,0.3)",
                  }}
                >
                  CREATIVO
                </span>

                {/* NAVIDAD 2026 — dorado metálico */}
                <span
                  className="font-black leading-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.8rem)",
                    background: "linear-gradient(90deg, #c8930a 0%, #E8A032 30%, #f5c842 55%, #d4a017 80%, #b8860b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                    filter: "drop-shadow(0 2px 8px rgba(200,147,10,0.35))",
                  }}
                >
                  NAVIDAD 2026
                </span>
              </div>
            </div>

            {/* Separador decorativo */}
            <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-md">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(204,17,17,0.6))" }} />
              <span style={{ color: "#E8A032", fontSize: "18px" }}>*</span>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>🎄</span>
              <span style={{ color: "#E8A032", fontSize: "18px" }}>*</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(204,17,17,0.6), transparent)" }} />
            </div>

            <p className="font-[Inter] text-base max-w-lg text-center leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)" }}>
              Kits especiales para esta temporada.{" "}
              <span style={{ color: "#E8A032" }} className="font-semibold">Cada regalo, único</span>{" "}
              y personalizado con tu logo.
            </p>
          </div>

          {/* ── GRID DE PRODUCTOS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
            {christmasProducts.map((product, index) => (
              <article
                key={product.id || index}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "linear-gradient(135deg, #1a0808 0%, #220c0c 100%)",
                  border: "1px solid rgba(232,160,50,0.55)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 10px rgba(232,160,50,0.12), inset 0 0 0 1px rgba(232,160,50,0.08)",
                  transition: "box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.5), 0 0 18px rgba(232,160,50,0.55), 0 0 40px rgba(232,160,50,0.2), inset 0 0 0 1px rgba(232,160,50,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,50,0.9)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), 0 0 10px rgba(232,160,50,0.12), inset 0 0 0 1px rgba(232,160,50,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,50,0.55)";
                }}
                onClick={() => setSelectedProduct(product)}
              >
                {/* Imagen */}
                <div className="aspect-square relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #150606 0%, #1f0a0a 100%)" }}>
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">🎄</div>
                  )}

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(to top, rgba(10,3,3,0.7) 0%, transparent 50%)" }} />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      background: "rgba(204,17,17,0.18)",
                      color: "#ff6b6b",
                      border: "1px solid rgba(204,17,17,0.35)",
                    }}>
                    🎁 Kit Navideño
                  </div>

                  {product.images && product.images.length > 1 && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{ background: "rgba(0,0,0,0.55)", color: "rgba(255,255,255,0.65)" }}>
                      {"+" + (product.images.length - 1)}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: "linear-gradient(90deg, #CC1111, #E8A032)" }} />
                </div>

                {/* Contenido */}
                <div className="p-4">
                  <h3 className="font-[Poppins] font-bold text-sm mb-1 line-clamp-2"
                    style={{ color: "rgba(255,255,255,0.92)" }}>
                    {product.name}
                  </h3>

                  <p className="text-xs font-[Inter] line-clamp-2 mb-3"
                    style={{ color: "rgba(255,255,255,0.38)" }}>
                    {product.description}
                  </p>

                  {product.kitContents && product.kitContents.length > 0 && (
                    <div className="mb-3">
                      {product.kitContents.slice(0, 2).map((item, i) => (
                        <p key={i} className="flex items-start gap-1 text-xs font-[Inter]"
                          style={{ color: "rgba(255,255,255,0.28)" }}>
                          <span style={{ color: "#CC1111", flexShrink: 0, fontSize: "8px", marginTop: "4px" }}>●</span>
                          <span className="line-clamp-1">{item}</span>
                        </p>
                      ))}
                      {product.kitContents.length > 2 && (
                        <p className="text-xs font-[Inter] mt-1"
                          style={{ color: "rgba(232,160,50,0.55)" }}>
                          {"+" + (product.kitContents.length - 2) + " items más"}
                        </p>
                      )}
                    </div>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const msg = encodeURIComponent("Hola! Quiero cotizar el kit: " + product.name);
                      window.open("https://wa.me/573337013642?text=" + msg, "_blank");
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    style={{ background: "#25D366", color: "white" }}
                  >
                    <MessageCircle className="h-3 w-3" /> Cotizar
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ── CTA FINAL ── */}
          <div className="text-center">
            <a
              href="https://wa.me/573337013642?text=Hola,%20quiero%20ver%20el%20cat%C3%A1logo%20de%20kits%20navide%C3%B1os%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-[Poppins] font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #CC1111 0%, #8a0000 50%, #c8930a 100%)",
                color: "white",
                boxShadow: "0 0 40px rgba(204,17,17,0.35), 0 0 80px rgba(200,147,10,0.12)",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ver catálogo navideño completo
            </a>
            <p className="mt-4 text-sm font-[Inter]" style={{ color: "rgba(255,255,255,0.22)" }}>
              Personalización con tu logo · Envío a toda Colombia
            </p>
          </div>

        </div>
      </section>

      {/* ── MODAL ── */}
      <NavidadModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default SeccionNavidad;