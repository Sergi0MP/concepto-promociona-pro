import React, { useState } from "react";
import { christmasProducts, ChristmasProduct } from "@/data/christmasProducts";
import { MessageCircle } from "lucide-react";

// ── COMPONENTE DE NIEVE ANIMADA ──────────────────────────────────────────────
const FallingSnow: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(35)].map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 10 + 10;
        const size = Math.random() * 4 + 2;
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${left}%`,
              top: `-20px`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `snowfall ${duration}s linear ${delay}s infinite`,
              opacity: 0,
            }}
          />
        );
      })}
      <style>{`
        @keyframes snowfall {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

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
          border: "1px solid rgba(46, 161, 46, 0.45)", // Borde verde
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
                      <span style={{ color: "#2ea12e", flexShrink: 0 }}>+</span> {/* Viñeta verde */}
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

// ── LOGO CSS: CC con gorro de Santa ──────────────────────────────────────────
const CCNavidadLogo: React.FC = () => (
  // Se aplicó scale(1.35) para ensanchar y agrandar el logo general
  <div className="relative select-none flex-shrink-0 mx-4" style={{ width: "160px", height: "160px", transform: "scale(1.35)", transformOrigin: "center" }}>
    <svg
      viewBox="0 0 160 160"
      width="160"
      height="160"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <path
        d="M130 80 A50 50 0 1 1 80 30"
        fill="none"
        stroke="#1a5c1a"
        strokeWidth="22"
        strokeLinecap="round"
      />
      <path
        d="M110 88 A34 34 0 1 1 76 54"
        fill="none"
        stroke="#9b1111"
        strokeWidth="16"
        strokeLinecap="round"
      />
      <text x="118" y="34" fill="#E8A032" fontSize="14" textAnchor="middle">+</text>
      <text x="128" y="48" fill="#E8A032" fontSize="9" textAnchor="middle">+</text>
      <text x="122" y="128" fill="#E8A032" fontSize="11" textAnchor="middle">+</text>
    </svg>

    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "28px",
        width: "68px",
        height: "13px",
        background: "white",
        borderRadius: "7px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        zIndex: 10,
      }}
    />
    <svg
      viewBox="0 0 80 40"
      width="80"
      height="40"
      style={{ position: "absolute", top: "-18px", left: "18px", zIndex: 10 }}
    >
      <polygon
        points="10,40 70,40 55,0"
        fill="#CC1111"
        style={{ filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.5))" }}
      />
    </svg>
    <div
      style={{
        position: "absolute",
        top: "-22px",
        left: "59px",
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        zIndex: 11,
      }}
    />
  </div>
);

// ── SNOWFLAKE SVG (Para fondo fijo) ──────────────────────────────────────────
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
        // Fondo base rojizo más brillante
        style={{ background: "linear-gradient(160deg, #2b0505 0%, #3d0808 50%, #0b1202 100%)" }}
      >
        {/* ── FONDO decorativo ── */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: "radial-gradient(circle, rgba(232,160,50,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }} />
          {/* Resplandor rojo superior más vivo y opaco */}
          <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #ff1111 0%, transparent 65%)" }} />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #2ea12e 0%, transparent 65%)" }} />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15"
            style={{ background: "radial-gradient(ellipse, #c8930a 0%, transparent 70%)" }} />

          {/* Copos de nieve fijos */}
          <Snowflake style={{ width: 28, height: 28, top: "8%", left: "5%", color: "rgba(255,255,255,0.1)", transform: "rotate(15deg)" }} />
          <Snowflake style={{ width: 18, height: 18, top: "15%", left: "12%", color: "rgba(232,160,50,0.15)", transform: "rotate(-20deg)" }} />
          <Snowflake style={{ width: 34, height: 34, top: "5%", right: "8%", color: "rgba(255,255,255,0.08)", transform: "rotate(30deg)" }} />
          <Snowflake style={{ width: 20, height: 20, top: "20%", right: "15%", color: "rgba(204,17,17,0.2)", transform: "rotate(-10deg)" }} />
          <Snowflake style={{ width: 24, height: 24, bottom: "15%", left: "7%", color: "rgba(232,160,50,0.15)", transform: "rotate(45deg)" }} />
          <Snowflake style={{ width: 16, height: 16, bottom: "25%", right: "6%", color: "rgba(255,255,255,0.1)", transform: "rotate(20deg)" }} />
          <Snowflake style={{ width: 22, height: 22, bottom: "10%", right: "20%", color: "rgba(204,17,17,0.15)", transform: "rotate(-30deg)" }} />
        </div>

        {/* Carga el efecto de nieve cayendo */}
        <FallingSnow />

        <div className="relative z-10 container px-4 mx-auto">

          {/* ── HERO DEL ENCABEZADO ── */}
          <div className="flex flex-col items-center mb-16">
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-14 w-full max-w-3xl mb-10 px-6 py-10 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
            >
              <CCNavidadLogo />

              <div className="flex flex-col items-center sm:items-start gap-1">
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

                <span
                  className="font-black leading-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.8rem)",
                    color: "#e61919", // Rojo más brillante para el título
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 12px rgba(230,25,25,0.3)",
                  }}
                >
                  CONCEPTO
                </span>

                <span
                  className="font-black leading-none"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(2rem, 6vw, 3.8rem)",
                    color: "#2ea12e", // Verde más brillante
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 12px rgba(46,161,46,0.3)",
                  }}
                >
                  CREATIVO
                </span>

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

            <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-md">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(46,161,46,0.6))" }} />
              <span style={{ color: "#E8A032", fontSize: "18px" }}>*</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>❄️</span>
              <span style={{ color: "#E8A032", fontSize: "18px" }}>*</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(46,161,46,0.6), transparent)" }} />
            </div>

            <p className="font-[Inter] text-base max-w-lg text-center leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}>
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
                  border: "1px solid rgba(46, 161, 46, 0.45)", // Bordes verdes
                  boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
                }}
                onClick={() => setSelectedProduct(product)}
              >
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
                      background: "rgba(46,161,46,0.18)",
                      color: "#4ade80",
                      border: "1px solid rgba(46,161,46,0.35)",
                    }}>
                    🎁 Kit Navideño
                  </div>

                  {product.images && product.images.length > 1 && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                      style={{ background: "rgba(0,0,0,0.55)", color: "rgba(255,255,255,0.65)" }}>
                      {"+" + (product.images.length - 1)}
                    </div>
                  )}

                  {/* Barra inferior que cambia de verde a dorado */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: "linear-gradient(90deg, #2ea12e, #E8A032)" }} />
                </div>

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
                          <span style={{ color: "#2ea12e", flexShrink: 0, fontSize: "8px", marginTop: "4px" }}>●</span>
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-[Poppins] font-bold text-base transition-all duration-300 hover:scale-105 relative z-10"
              style={{
                background: "linear-gradient(135deg, #e61919 0%, #8a0000 50%, #c8930a 100%)", // Rojo más fuerte
                color: "white",
                boxShadow: "0 0 40px rgba(230,25,25,0.4), 0 0 80px rgba(200,147,10,0.15)",
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ver catálogo navideño completo
            </a>
            <p className="mt-4 text-sm font-[Inter]" style={{ color: "rgba(255,255,255,0.35)" }}>
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