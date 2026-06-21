import React, { useState } from "react";

// ── TIPOS ──────────────────────────────────────────────────────────────────
interface Card {
  title: string;
  desc: string;
  badge: string;
  accent: string;
  sketchfabId?: string;
}

interface Step {
  n: string;
  title: string;
  desc: string;
  highlight: boolean;
}

// ── DATOS 3D ───────────────────────────────────────────────────────────────
const cards3D: Card[] = [
  { title: "Llaveros & Accesorios", desc: "Llaveros, porta-tarjetas y accesorios con tu logo. Alta resolución de detalle.", badge: "Accesorios", accent: "#484F9D", sketchfabId: "cd969cf1f9ee45c782be056e77c91d81" },
  { title: "Exhibidores & Stands", desc: "Exhibidores, porta-folletos y displays corporativos impresos en 3D a tu medida.", badge: "⭐ Más solicitado", accent: "#F4E600" },
  { title: "Trofeos & Reconocimientos", desc: "Premios y trofeos únicos diseñados con tu identidad de marca.", badge: "Reconocimientos", accent: "#484F9D" },
  { title: "Piezas Corporativas", desc: "Logos en relieve, letras volumétricas y piezas para eventos corporativos.", badge: "Corporativo", accent: "#F4E600" },
  { title: "Figuras Decorativas", desc: "Mascotas corporativas y figuras temáticas que refuerzan tu identidad visual.", badge: "Decorativo", accent: "#484F9D" },
  { title: "Prototipado Rápido", desc: "Convierte tu idea en un prototipo funcional para presentaciones.", badge: "Prototipado", accent: "#F4E600" },
];

const steps3D: Step[] = [
  { n: "01", title: "Diseño", desc: "Compártenos tu logo o idea y lo convertimos en un archivo 3D listo para imprimir.", highlight: false },
  { n: "02", title: "Impresión", desc: "Imprimimos tu pieza con materiales de alta calidad en múltiples colores y acabados.", highlight: true },
  { n: "03", title: "Entrega", desc: "Recibe tus piezas terminadas y listas para usar. Envío a toda Colombia.", highlight: false },
];

// ── DATOS MADERA ───────────────────────────────────────────────────────────
const cardsMadera: Card[] = [
  { title: "Letras & Logos en Madera", desc: "Letras volumétricas y logos corporativos cortados en madera de alta calidad.", badge: "Decorativo", accent: "#8B4513" },
  { title: "Cuadros & Señalética", desc: "Cuadros decorativos, letreros y señalética empresarial en madera y acrílico.", badge: "⭐ Más solicitado", accent: "#D4A017" },
  { title: "Accesorios en Acrílico", desc: "Porta-tarjetas, separadores y piezas decorativas en acrílico transparente o de color.", badge: "Acrílico", accent: "#8B4513" },
  { title: "Trofeos & Placas", desc: "Reconocimientos corporativos en madera y acrílico grabados con láser.", badge: "Reconocimientos", accent: "#D4A017" },
  { title: "Packaging & Cajas", desc: "Cajas de madera personalizadas para regalo corporativo. Ideal para kits de empresa.", badge: "Packaging", accent: "#8B4513" },
  { title: "Grabado Personalizado", desc: "Grabamos tu logo o mensaje en cualquier pieza de madera o acrílico con precisión láser.", badge: "Grabado", accent: "#D4A017" },
];

const stepsMadera: Step[] = [
  { n: "01", title: "Diseño", desc: "Nos envías tu logo o idea y preparamos el archivo vectorial para el corte.", highlight: false },
  { n: "02", title: "Corte & Grabado", desc: "Cortamos y grabamos con láser de alta precisión en madera o acrílico.", highlight: true },
  { n: "03", title: "Entrega", desc: "Recibes tus piezas terminadas y pulidas. Envío a toda Colombia.", highlight: false },
];

// ── COMPONENTE ─────────────────────────────────────────────────────────────
const SeccionTaller: React.FC = () => {
  const [tab, setTab] = useState<"3d" | "madera">("3d");
  const [show3DModal, setShow3DModal] = useState(false);
  const [sketchfabId, setSketchfabId] = useState("");

  const open3DModal = (id: string) => {
    setSketchfabId(id);
    setShow3DModal(true);
  };

  const is3D = tab === "3d";

  const palette = is3D
    ? {
        glowL: "#484F9D",
        glowR: "#F4E600",
        badgeBg: "rgba(72,79,157,0.1)",
        badgeColor: "#F4E600",
        badgeBorder: "rgba(244,230,0,0.3)",
        dot: "#F4E600",
        titleLayers: ["#5a5200", "#1a1f5c", "#484F9D"],
        titleGradient: "linear-gradient(135deg, #8a90d4 0%, #484F9D 30%, #6b73c9 50%, #c8b800 75%, #F4E600 100%)",
        titleGlow: "drop-shadow(0 0 20px rgba(244,230,0,0.3))",
        separatorL: "linear-gradient(90deg, transparent, #484F9D)",
        separatorR: "linear-gradient(90deg, #484F9D, transparent)",
        diamond: "#F4E600",
        diamondBg: "rgba(244,230,0,0.15)",
        cardBg: "linear-gradient(135deg, #0b0d28 0%, #0f1235 100%)",
        textColor: "rgba(255,255,255,0.5)",
        textCards: "rgba(255,255,255,0.9)",
        textCardsDesc: "rgba(255,255,255,0.4)",
        stepTitle: "text-white",
        stepDesc: "rgba(255,255,255,0.4)",
        ctaBg: "linear-gradient(135deg, #484F9D 0%, #2e3480 50%, #F4E600 100%)",
        ctaColor: "#06071a",
        ctaGlow: "0 0 40px rgba(72,79,157,0.5), 0 0 80px rgba(244,230,0,0.15)",
        ctaFooter: "rgba(255,255,255,0.25)",
        waLink: "https://wa.me/573337013642?text=Hola,%20quiero%20información%20sobre%20desarrollos%203D",
      }
    : {
        glowL: "#8B4513",
        glowR: "#D4A017",
        badgeBg: "rgba(139,69,19,0.1)",
        badgeColor: "#8B4513",
        badgeBorder: "rgba(139,69,19,0.3)",
        dot: "#8B4513",
        titleLayers: ["rgba(139,69,19,0.15)", "rgba(139,69,19,0.3)", "rgba(139,69,19,0.5)"],
        titleGradient: "linear-gradient(135deg, #8B4513 0%, #6b3310 40%, #a0530e 65%, #D4A017 100%)",
        titleGlow: "drop-shadow(0 2px 8px rgba(139,69,19,0.25))",
        separatorL: "linear-gradient(90deg, transparent, #8B4513)",
        separatorR: "linear-gradient(90deg, #8B4513, transparent)",
        diamond: "#8B4513",
        diamondBg: "rgba(139,69,19,0.15)",
        cardBg: "rgba(255,255,255,0.85)",
        textColor: "rgba(60,30,10,0.6)",
        textCards: "#3c1e0a",
        textCardsDesc: "rgba(60,30,10,0.6)",
        stepTitle: "text-[#3c1e0a]",
        stepDesc: "rgba(60,30,10,0.55)",
        ctaBg: "linear-gradient(135deg, #8B4513 0%, #5c2d0d 50%, #D4A017 100%)",
        ctaColor: "#fff8ee",
        ctaGlow: "0 0 30px rgba(139,69,19,0.3)",
        ctaFooter: "rgba(60,30,10,0.35)",
        waLink: "https://wa.me/573337013642?text=Hola,%20quiero%20información%20sobre%20corte%20láser%20y%20madera",
      };

  const cards = is3D ? cards3D : cardsMadera;
  const steps = is3D ? steps3D : stepsMadera;
  const sectionTitle = is3D ? "DESARROLLOS 3D" : "CORTE LÁSER & MADERA";
  const sectionSubtitle = is3D
    ? "Transformamos tus ideas en objetos reales."
    : "Precisión láser sobre madera y acrílico.";
  const sectionHighlight = is3D ? "Cada pieza, única" : "Cada corte, exacto";

  return (
    <>
      <section
        className="relative py-24 overflow-hidden transition-all duration-700"
        style={{ background: is3D ? "#06071a" : "#fdf6ee" }}
      >
        {/* ── FONDO ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {is3D ? (
            <>
              <div className="absolute inset-0" style={{
                backgroundImage: "linear-gradient(rgba(72,79,157,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(72,79,157,0.25) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }} />
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "linear-gradient(rgba(72,79,157,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(72,79,157,0.12) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }} />
              <div className="absolute -top-20 -left-20 w-[700px] h-[700px] rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #484F9D 0%, transparent 70%)" }} />
              <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-15"
                style={{ background: "radial-gradient(circle, #F4E600 0%, transparent 70%)" }} />
            </>
          ) : (
            <>
              {/* Vetas de madera simuladas */}
              <div className="absolute inset-0" style={{
                backgroundImage: "repeating-linear-gradient(178deg, transparent, transparent 22px, rgba(139,90,43,0.07) 23px, rgba(139,90,43,0.07) 24px)",
              }} />
              <div className="absolute inset-0" style={{
                backgroundImage: "repeating-linear-gradient(182deg, transparent, transparent 40px, rgba(101,60,20,0.05) 41px, rgba(101,60,20,0.05) 42px)",
              }} />
              {/* Mancha cálida izquierda */}
              <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
                style={{ background: "radial-gradient(circle, #d4956a 0%, transparent 70%)" }} />
              {/* Mancha oscura derecha */}
              <div className="absolute -bottom-10 -right-10 w-[400px] h-[400px] rounded-full opacity-15"
                style={{ background: "radial-gradient(circle, #7a4010 0%, transparent 70%)" }} />
              {/* Línea superior */}
              <div className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #8B4513, #D4A017, #8B4513)" }} />
              {/* Línea inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #D4A017, #8B4513, #D4A017)" }} />
            </>
          )}
        </div>

        <div className="relative z-10 container px-4 mx-auto">

          {/* ── TABS ── */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => setTab("3d")}
              className="relative px-6 py-3 rounded-2xl font-[Poppins] font-bold text-sm transition-all duration-300"
              style={{
                background: is3D ? "rgba(72,79,157,0.25)" : "rgba(139,69,19,0.08)",
                border: is3D ? "2px solid #484F9D" : "2px solid rgba(139,69,19,0.2)",
                color: is3D ? "#F4E600" : "rgba(139,69,19,0.5)",
                boxShadow: is3D ? "0 0 20px rgba(72,79,157,0.4)" : "none",
              }}
            >
              <span className="flex items-center gap-2">
                <span style={{ fontSize: "16px" }}>⬡</span>
                Desarrollos 3D
              </span>
              {is3D && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: "#F4E600" }} />
              )}
            </button>

            <button
              onClick={() => setTab("madera")}
              className="relative px-6 py-3 rounded-2xl font-[Poppins] font-bold text-sm transition-all duration-300"
              style={{
                background: !is3D ? "rgba(139,69,19,0.12)" : "rgba(255,255,255,0.04)",
                border: !is3D ? "2px solid #8B4513" : "2px solid rgba(255,255,255,0.1)",
                color: !is3D ? "#8B4513" : "rgba(255,255,255,0.4)",
                boxShadow: !is3D ? "0 0 20px rgba(139,69,19,0.2)" : "none",
              }}
            >
              <span className="flex items-center gap-2">
                <span style={{ fontSize: "16px" }}>✦</span>
                Corte Láser & Madera
              </span>
              {!is3D && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ background: "#8B4513" }} />
              )}
            </button>
          </div>

          {/* ── TÍTULO ── */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-[Inter] uppercase tracking-widest"
              style={{ border: `1px solid ${palette.badgeBorder}`, background: palette.badgeBg, color: palette.badgeColor }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: palette.dot }} />
              Nueva Categoría · Concepto Creativo
            </div>

            <div className="relative inline-block mb-8" style={{ paddingTop: "12px", paddingLeft: "12px" }}>
              <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
                style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", top: "10px", left: "10px", color: palette.titleLayers[0], letterSpacing: "-0.02em" }}>
                {sectionTitle}
              </h2>
              <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
                style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", top: "6px", left: "6px", color: palette.titleLayers[1], letterSpacing: "-0.02em" }}>
                {sectionTitle}
              </h2>
              <h2 className="absolute font-[Poppins] font-black select-none pointer-events-none"
                style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", top: "3px", left: "3px", color: palette.titleLayers[2], letterSpacing: "-0.02em" }}>
                {sectionTitle}
              </h2>
              <h2 className="relative font-[Poppins] font-black"
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  background: palette.titleGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: palette.titleGlow,
                }}>
                {sectionTitle}
              </h2>
            </div>

            <div className="flex items-center justify-center gap-4 mb-7">
              <div className="h-px flex-1 max-w-[120px]" style={{ background: palette.separatorL }} />
              <div className="w-3 h-3 rotate-45 border-2" style={{ borderColor: palette.diamond, background: palette.diamondBg }} />
              <div className="h-px flex-1 max-w-[120px]" style={{ background: palette.separatorR }} />
            </div>

            <p className="font-[Inter] text-lg max-w-xl mx-auto leading-relaxed" style={{ color: palette.textColor }}>
              {sectionSubtitle}{" "}
              <span style={{ color: palette.glowR }} className="font-semibold">{sectionHighlight}</span>{" "}
              y diseñada a medida para tu marca.
            </p>
          </div>

          {/* ── GRID TARJETAS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {cards.map((card) => (
              <div key={card.title}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  border: `1px solid ${card.accent}30`,
                  background: is3D ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)",
                  boxShadow: is3D ? "none" : "0 4px 20px rgba(139,69,19,0.08)",
                }}>

                <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                  style={{ background: palette.cardBg }}>
                  <div className="text-center px-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center"
                      style={{ border: `2px dashed ${card.accent}50` }}>
                      <svg className="w-8 h-8" style={{ color: card.accent + "80" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-[Inter]" style={{ color: is3D ? "rgba(255,255,255,0.2)" : "rgba(139,69,19,0.4)" }}>
                      Imagen próximamente
                    </p>
                  </div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-[Inter] font-semibold"
                    style={{
                      background: `${card.accent}20`,
                      color: card.accent,
                      border: `1px solid ${card.accent}40`,
                      backdropFilter: "blur(8px)",
                    }}>
                    {card.badge}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ background: card.accent }} />
                </div>

                <div className="p-5">
                  <h3 className="font-[Poppins] font-bold text-lg mb-2" style={{ color: palette.textCards }}>
                    {card.title}
                  </h3>
                  <p className="text-sm font-[Inter] leading-relaxed mb-4" style={{ color: palette.textCardsDesc }}>
                    {card.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-[Inter] uppercase tracking-wider" style={{ color: card.accent }}>
                      Personalizable
                    </span>
                    {card.sketchfabId && (
                      <button
                        onClick={() => open3DModal(card.sketchfabId!)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-[Inter] font-semibold transition-all duration-300 hover:scale-105"
                        style={{ background: card.accent, color: "#06071a" }}
                      >
                        ↻ Ver en 3D
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── BANNER PASOS ── */}
          <div className="relative rounded-2xl p-8 md:p-12 mb-12 overflow-hidden"
            style={{
              border: `1px solid ${palette.glowL}25`,
              background: is3D ? `${palette.glowL}08` : "rgba(255,255,255,0.6)",
              boxShadow: is3D ? "none" : "0 4px 30px rgba(139,69,19,0.08)",
            }}>
            {is3D && (
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{
                backgroundImage: "linear-gradient(rgba(72,79,157,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(72,79,157,0.2) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }} />
            )}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {steps.map((step) => (
                <div key={step.n} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-[Poppins] font-black text-xl"
                    style={{
                      border: `2px solid ${step.highlight ? palette.glowR : palette.glowL}`,
                      background: step.highlight ? `${palette.glowR}15` : `${palette.glowL}15`,
                      color: step.highlight ? palette.glowR : palette.glowL,
                    }}>
                    {step.n}
                  </div>
                  <h4 className="font-[Poppins] font-bold text-lg" style={{ color: palette.textCards }}>{step.title}</h4>
                  <p className="text-sm font-[Inter] max-w-xs" style={{ color: palette.stepDesc }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center">
            <a
              href={palette.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-[Poppins] font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: palette.ctaBg,
                color: palette.ctaColor,
                boxShadow: palette.ctaGlow,
              }}
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {is3D ? "Cotiza tu pieza 3D por WhatsApp" : "Cotiza tu pieza láser por WhatsApp"}
            </a>
            <p className="mt-4 text-sm font-[Inter]" style={{ color: palette.ctaFooter }}>
              Respondemos en menos de 24 horas · Envío a toda Colombia
            </p>
          </div>

        </div>
      </section>

      {/* ── MODAL 3D ── */}
      {show3DModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setShow3DModal(false)}
        >
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ width: "min(90vw, 800px)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3"
              style={{ background: "#0f1235", borderBottom: "1px solid rgba(72,79,157,0.3)" }}>
              <div>
                <p className="font-[Poppins] font-bold text-white text-sm">Vista 360°</p>
                <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Arrastra para rotar · Pellizca para hacer zoom
                </p>
              </div>
              <button
                onClick={() => setShow3DModal(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                style={{ fontSize: "20px" }}
              >
                ×
              </button>
            </div>

            <div style={{ position: "relative", paddingBottom: "60%", background: "#06071a" }}>
              <iframe
                src={"https://sketchfab.com/models/" + sketchfabId + "/embed?autostart=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&transparent=1"}
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                title="Visor 3D"
              />
            </div>

            <div className="px-5 py-3 flex items-center justify-between"
              style={{ background: "#0f1235", borderTop: "1px solid rgba(72,79,157,0.3)" }}>
              <p className="font-[Inter] text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                Modelo 3D · Concepto Creativo
              </p>
              <a
                href="https://wa.me/573337013642?text=Hola,%20quiero%20cotizar%20este%20producto%203D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full font-[Poppins] font-bold text-xs"
                style={{ background: "#484F9D", color: "#F4E600" }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeccionTaller;