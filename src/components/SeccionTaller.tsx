import React, { useState } from "react";

interface Card {
  title: string;
  desc: string;
  badge: string;
  accent: string;
  sketchfabId?: string;
  images?: string[];
  fullDesc?: string;
}

interface Step {
  n: string;
  title: string;
  desc: string;
  highlight: boolean;
}

const cards3D: Card[] = [
 {
    title: "Soporte Celular Corazón 3D",
    desc: "Soporte de escritorio para celular en forma de corazón anatómico impreso en 3D. Ideal para médicos y personal de salud.",
    fullDesc: "Soporte de escritorio para celular con diseño de corazón anatómico impreso en 3D con alto detalle. Sostiene el teléfono en el ángulo perfecto para videollamadas, consultas y escritorio. Ideal como regalo corporativo para médicos, cardiólogos, clínicas y hospitales. Disponible en rojo y colores personalizados. Se puede agregar tu logo en la base.",
    badge: "Escritorio",
    accent: "#484F9D",
    sketchfabId: "cd969cf1f9ee45c782be056e77c91d81",
    images: ["/3d/soporte-corazon-1.png", "/3d/soporte-corazon-2.png"],
  },
  {
    title: "Soporte para Latas",
    desc: "Soporte personalizado para latas, ideal para eventos y regalos corporativos.",
    fullDesc: "Soporte ergonómico para latas de bebida, impreso en 3D con material resistente. Perfecto para eventos empresariales, reuniones y regalos corporativos. Disponible en negro y colores personalizados. Incluye tu logo grabado o en relieve.",
    badge: "⭐ Más solicitado",
    accent: "#F4E600",
    images: ["/3d/soporte-latas-1.png", "/3d/soporte-latas-2.png"],
  },
  {
    title: "Porta Pastillas Llavero",
    desc: "Llavero funcional con compartimento para pastillas, ideal para médicos, enfermeras y personal de salud.",
    fullDesc: "Llavero porta pastillas impreso en 3D, con tapa rosca segura y compartimento interno para guardar pastillas, vitaminas o pequeños objetos. Disponible en múltiples colores. Ideal como regalo corporativo para clínicas, hospitales, laboratorios farmacéuticos y personal de salud. Personalizable con tu logo.",
    badge: "Llaveros",
    accent: "#484F9D",
    images: ["/3d/porta-pastillas-1.png", "/3d/porta-pastillas-2.png"],
  },
  {
    title: "Fútbol de Mesa con los Dedos",
    desc: "Juego de fútbol impreso en 3D para jugar con los dedos. Ideal para eventos, activaciones de marca y regalos corporativos.",
    fullDesc: "Set de fútbol de mesa impreso en 3D compuesto por dos tacos (zapatos) que se ponen en los dedos y un balón con textura realista. Perfecto para activaciones de marca, eventos deportivos, regalos corporativos y momentos de entretenimiento en la oficina. Disponible en múltiples colores y personalizable con tu logo.",
    badge: "Juegos",
    accent: "#F4E600",
    images: ["/3d/futbol-dedos-1.png", "/3d/futbol-dedos-2.png"],
  },
 {
    title: "Soporte Celular Estetoscopio",
    desc: "Soporte para celular en forma de estetoscopio impreso en 3D. Perfecto para médicos y personal de salud.",
    fullDesc: "Soporte de escritorio para celular con diseño de estetoscopio impreso en 3D. Funcional y decorativo a la vez — sostiene el teléfono en ángulo perfecto para videollamadas o visualización. Ideal como regalo corporativo para médicos, clínicas, hospitales y laboratorios farmacéuticos. Disponible en negro y colores personalizados.",
    badge: "Escritorio",
    accent: "#484F9D",
    images: ["/3d/soporte-estetoscopio-1.png", "/3d/soporte-estetoscopio-2.png"],
  },
  {
    title: "Pastillero Semanal 3D",
    desc: "Pastillero circular impreso en 3D con compartimentos para cada día de la semana. Práctico y personalizable.",
    fullDesc: "Pastillero circular impreso en 3D con 7 compartimentos giratorios, uno por cada día de la semana (SUN, MON, TUE, WED, THU, FRI, SAT). Diseño compacto, fácil de abrir y resistente. Ideal como regalo corporativo para clínicas, hospitales, laboratorios farmacéuticos y pacientes. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Salud",
    accent: "#F4E600",
    images: ["/3d/pastillero-semana-1.png", "/3d/pastillero-semana-2.png"],
  },
   {
    title: "Calendario Navidad 3D",
    desc: "Calendario de navidad impreso en 3D con diseño temático. Perfecto para decorar tu espacio.",
    fullDesc: "Calendario de navidad impreso en 3D con diseño temático y detalles en relieve. ideal para decorar tu espacio. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Navidad",
    accent: "#f41800",
    images: ["/3d/calendario-navidad.webp"],
  },
  {
    title: "Luz Personalizable 3D",
    desc: "Luz decorativa impresa en 3D con diseño personalizable. Perfecta para crear ambientes únicos en tu árbol de navidad.",
    fullDesc: "Luz decorativa impresa en 3D con diseño personalizable y detalles en relieve. Ideal para crear ambientes únicos en espacios residenciales o comerciales. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Navidad",
    accent: "#005b1a",
    images: ["/3d/luz.webp"],
  },
  {
    title: "Calendario Navidad Premium 3D",
    desc: "Calendario de navidad impreso en 3D con diseño temático y detalles en relieve. Perfecto para regalar a clientes y empleados.",
    fullDesc: "Calendario de navidad impreso en 3D con diseño temático y detalles en relieve. Cada bloque muestra un diseño diferente, ideal para decorar tu espacio. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Navidad",
    accent: "#f41800",
    images: ["/3d/calendariopremium.webp"],
  },
   {
    title: "Campanas 3D",
    desc: "Campanas decorativas impresas en 3D con diseño personalizable y detalles en relieve. Perfectas para crear ambientes únicos en tu árbol de navidad.",
    fullDesc: "Campanas decorativas impresas en 3D con diseño personalizable y detalles en relieve. Ideal para crear ambientes únicos en espacios residenciales o comerciales. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Navidad",
    accent: "#005b1a",
    images: ["/3d/campanas.webp"],
  },
  {
    title: "Gorro Navidad 3D",
    desc: "Gorro de navidad impreso en 3D con diseño temático y detalles en relieve. Perfecto para decorar con dulces.",
    fullDesc: "Gorro de navidad impreso en 3D con diseño temático y detalles en relieve. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Navidad",
    accent: "#f41800",
    images: ["/3d/gorro.webp"],
  },
  {
    title: "Porta Velas Halloween 3D",
    desc: "Porta velas en forma de fantasmas impreso en 3D con diseño temático y detalles en relieve. Perfecto para decorar tu espacio de Halloween.",
    fullDesc: "Porta velas en forma de fantasmas impreso en 3D con diseño temático y detalles en relieve. Ideal para crear ambientes únicos en espacios residenciales o comerciales. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Halloween",
    accent: "#ff832b",
    images: ["/3d/portavelas.webp"],
  },
   {
    title: "Porta Velas Sombrero Halloween 3D",
    desc: "Porta velas en forma de sombreros de bruja impreso en 3D con diseño temático y detalles en relieve. Perfecto para decorar tu espacio de Halloween.",
    fullDesc: "Porta velas en forma de sombreros de bruja impreso en 3D con diseño temático y detalles en relieve. Ideal para crear ambientes únicos en espacios residenciales o comerciales. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Halloween",
    accent: "#ff832b",
    images: ["/3d/sombrerobruja.webp"],
  },
   {
    title: "Porta Velas calabaza Halloween 3D",
    desc: "Porta velas en forma de calabaza impreso en 3D con diseño temático y detalles en relieve. Perfecto para decorar tu espacio de Halloween.",
    fullDesc: "Porta velas en forma de calabaza impreso en 3D con diseño temático y detalles en relieve. Ideal para crear ambientes únicos en espacios residenciales o comerciales. Personalizable con tu logo o nombre de marca en el centro o la base.",
    badge: "Halloween",
    accent: "#ff832b",
    images: ["/3d/calabaza.webp"],
  },
];

const steps3D: Step[] = [
  { n: "01", title: "Diseño", desc: "Compártenos tu logo o idea y lo convertimos en un archivo 3D listo para imprimir.", highlight: false },
  { n: "02", title: "Impresión", desc: "Imprimimos tu pieza con materiales de alta calidad en múltiples colores y acabados.", highlight: true },
  { n: "03", title: "Entrega", desc: "Recibe tus piezas terminadas y listas para usar. Envío a toda Colombia.", highlight: false },
];

const cardsMadera: Card[] = [
  {
    title: "Rompecabezas Corazón Anatómico",
    desc: "Rompecabezas en acrílico a corte láser con diseño de corazón anatómico a todo color. Ideal para médicos y personal de salud.",
    fullDesc: "Rompecabezas decorativo en acrílico cortado con láser con diseño anatómico detallado del corazón humano, en colores rojo, azul y rosado. Cada pieza está perfectamente cortada con precisión láser. Ideal como regalo corporativo para médicos, cardiólogos, estudiantes de medicina, clínicas y laboratorios farmacéuticos. Incluye caja de presentación. Personalizable con tu logo.",
    badge: "⭐ Más solicitado",
    accent: "#8B4513",
    images: ["/3d/rompecabezas-corazon-1.png", "/3d/rompecabezas-corazon-2.png"],
  },
  {
    title: "Portavasos ",
    desc: "Portavasos grabado en corte laser",
    fullDesc: "Señalética corporativa, cuadros decorativos y letreros en madera y acrílico. Grabado con láser de alta precisión. Perfectos para recepciones, pasillos y espacios de trabajo. Personalización completa con tu identidad visual.",
    badge: "⭐ Más solicitado",
    accent: "#D4A017",
    images: ["/3d/portavasos.webp"],
  },
  {
    title: "Juego de Madera Tetris",
    desc: "Set de piezas de madera para jugar Tetris, ideal para niños y adultos.",
    fullDesc: "Set de piezas de madera para jugar Tetris, ideal para niños y adultos. Fabricadas con madera de alta calidad y acabados suaves. Perfecto para desarrollar habilidades de lógica y concentración.",
    badge: "Juegos",
    accent: "#8B4513",
    images: ["/3d/tetris.webp"],
  },
  {
    title: "Atrapasueños en Madera",
    desc: "Atrapasueños decorativo en madera con diseño personalizado y grabado láser.",
    fullDesc: "Atrapasueños decorativo en madera con diseño personalizado y grabado láser. Ideal para decoración de interiores, habitaciones y espacios creativos. Personalizable con tu logo o mensaje especial.",
    badge: "Decoración",
    accent: "#D4A017",
    images: ["/3d/atrapasueños.webp"],
  },
  {
    title: "AbreBotellas Personalizado",
    desc: "Abre botellas de madera grabado con tu logo o mensaje. Perfecto para regalos corporativos y kits de bienvenida.",
    fullDesc: "Abre botellas de madera grabado con tu logo o mensaje. Perfecto para regalos corporativos y kits de bienvenida. Disponibles en varios tamaños. Ideal para presentaciones premium de productos y kits de bienvenida.",
    badge: "Hogar",
    accent: "#8B4513",
    images: ["/3d/abrelatas.webp"],
  },
  {
    title: "Decoración Navidad",
    desc: "Decoración navideña en madera para muestras de alcohol. Personalizable con tu logo o mensaje especial.",
    fullDesc: "Decoración navideña en madera para muestras de alcohol. Personalizable con tu logo o mensaje especial. Ideal para regalos corporativos, kits de bienvenida y decoración de eventos navideños.",
    badge: "Navidad",
    accent: "#D4A017",
    images: ["/3d/decoracion-navidad.webp"],
  },
  {
    title: "Porta Notas Acrilico",
    desc: "Porta notas de acrílico con diseño personalizado y grabado láser.",
    fullDesc: "Porta notas de acrílico con diseño personalizado y grabado láser. Ideal para oficinas, escritorios y espacios de trabajo. Personalizable con tu logo o mensaje especial.",
    badge: "Oficina",
    accent: "#4617d4",
    images: ["/3d/porta-notas.webp"],
  },
];

const stepsMadera: Step[] = [
  { n: "01", title: "Diseño", desc: "Nos envías tu logo o idea y preparamos el archivo vectorial para el corte.", highlight: false },
  { n: "02", title: "Corte & Grabado", desc: "Cortamos y grabamos con láser de alta precisión en madera o acrílico.", highlight: true },
  { n: "03", title: "Entrega", desc: "Recibes tus piezas terminadas y pulidas. Envío a toda Colombia.", highlight: false },
];

const SeccionTaller: React.FC = () => {
  const [tab, setTab] = useState<"3d" | "madera">("3d");
  const [show3DModal, setShow3DModal] = useState(false);
  const [sketchfabId, setSketchfabId] = useState("");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [imgIndex, setImgIndex] = useState(0);

  const open3DModal = (id: string) => {
    setSketchfabId(id);
    setShow3DModal(true);
  };

  const openCardModal = (card: Card) => {
    setSelectedCard(card);
    setImgIndex(0);
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
        titleColor: "#a5abf0",
        titleShadow: "3px 3px 0 #1a1f5c, 6px 6px 0 #0d1040, 0 0 30px rgba(244,230,0,0.25)",
        separatorL: "linear-gradient(90deg, transparent, #484F9D)",
        separatorR: "linear-gradient(90deg, #484F9D, transparent)",
        diamond: "#F4E600",
        diamondBg: "rgba(244,230,0,0.15)",
        cardBg: "linear-gradient(135deg, #0b0d28 0%, #0f1235 100%)",
        textColor: "rgba(255,255,255,0.5)",
        textCards: "rgba(255,255,255,0.9)",
        textCardsDesc: "rgba(255,255,255,0.4)",
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
        titleColor: "#8B4513",
        titleShadow: "3px 3px 0 rgba(139,69,19,0.2), 6px 6px 0 rgba(139,69,19,0.1), 0 0 20px rgba(212,160,23,0.15)",
        separatorL: "linear-gradient(90deg, transparent, #8B4513)",
        separatorR: "linear-gradient(90deg, #8B4513, transparent)",
        diamond: "#8B4513",
        diamondBg: "rgba(139,69,19,0.15)",
        cardBg: "rgba(255,255,255,0.85)",
        textColor: "rgba(60,30,10,0.6)",
        textCards: "#3c1e0a",
        textCardsDesc: "rgba(60,30,10,0.6)",
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
        {/* FONDO */}
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
              <div className="absolute inset-0" style={{
                backgroundImage: "repeating-linear-gradient(178deg, transparent, transparent 22px, rgba(139,90,43,0.07) 23px, rgba(139,90,43,0.07) 24px)",
              }} />
              <div className="absolute inset-0" style={{
                backgroundImage: "repeating-linear-gradient(182deg, transparent, transparent 40px, rgba(101,60,20,0.05) 41px, rgba(101,60,20,0.05) 42px)",
              }} />
              <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30"
                style={{ background: "radial-gradient(circle, #d4956a 0%, transparent 70%)" }} />
              <div className="absolute -bottom-10 -right-10 w-[400px] h-[400px] rounded-full opacity-15"
                style={{ background: "radial-gradient(circle, #7a4010 0%, transparent 70%)" }} />
              <div className="absolute top-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #8B4513, #D4A017, #8B4513)" }} />
              <div className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, #D4A017, #8B4513, #D4A017)" }} />
            </>
          )}
        </div>

        <div className="relative z-10 container px-4 mx-auto">

          {/* TABS */}
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

          {/* TÍTULO */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-[Inter] uppercase tracking-widest"
              style={{ border: `1px solid ${palette.badgeBorder}`, background: palette.badgeBg, color: palette.badgeColor }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: palette.dot }} />
              Nueva Categoría · Concepto Creativo
            </div>

            <h2 className="font-[Poppins] font-black mb-8 block"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
                color: palette.titleColor,
                textShadow: palette.titleShadow,
              }}>
              {sectionTitle}
            </h2>

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

          {/* GRID TARJETAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{
                  border: `1px solid ${card.accent}30`,
                  background: is3D ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)",
                  boxShadow: is3D ? "none" : "0 4px 20px rgba(139,69,19,0.08)",
                }}
                onClick={() => openCardModal(card)}
              >
                {/* Imagen o placeholder */}
                <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                  style={{ background: palette.cardBg }}>
                  {card.images ? (
                    <img
                      src={card.images[0]}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
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
                  )}

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
                    <span className="text-xs font-[Inter]" style={{ color: card.accent + "80" }}>
                      Ver detalles →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* BANNER PASOS */}
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

          {/* CTA */}
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

      {/* MODAL PRODUCTO */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              maxWidth: "860px",
              background: "#ffffff",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
              style={{ background: "rgba(0,0,0,0.06)", fontSize: "20px", color: "#333" }}
            >×</button>

            <div className="flex flex-col md:flex-row">

              {/* IZQUIERDA — Imagen(es) */}
              <div className="md:w-[45%] flex-shrink-0">
                {selectedCard.images && selectedCard.images.length > 0 ? (
                  <>
                    {/* Imagen principal */}
                    <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", background: "#f5f5f5" }}>
                      <img
                        src={selectedCard.images[imgIndex]}
                        alt={selectedCard.title}
                        className="w-full h-full object-cover"
                      />
                      {selectedCard.images.length > 1 && (
                        <>
                          <button
                            onClick={() => setImgIndex((imgIndex - 1 + selectedCard.images!.length) % selectedCard.images!.length)}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
                            style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
                          >‹</button>
                          <button
                            onClick={() => setImgIndex((imgIndex + 1) % selectedCard.images!.length)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
                            style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
                          >›</button>
                        </>
                      )}
                    </div>
                    {/* Miniaturas */}
                    {selectedCard.images.length > 1 && (
                      <div className="flex gap-2 p-3" style={{ background: "#f8f8f8", borderTop: "1px solid #eee" }}>
                        {selectedCard.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            className="rounded-lg overflow-hidden flex-shrink-0 transition-all"
                            style={{
                              width: "58px",
                              height: "58px",
                              border: i === imgIndex ? `2px solid ${selectedCard.accent}` : "2px solid transparent",
                              opacity: i === imgIndex ? 1 : 0.5,
                            }}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  /* Placeholder si no hay imágenes */
                  <div className="flex items-center justify-center" style={{ aspectRatio: "1/1", background: "#f0f2ff" }}>
                    <div className="text-center px-8">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-2xl flex items-center justify-center"
                        style={{ background: selectedCard.accent + "15", border: `2px dashed ${selectedCard.accent}40` }}>
                        <svg className="w-10 h-10" style={{ color: selectedCard.accent + "60" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-[Inter]" style={{ color: "rgba(0,0,0,0.3)" }}>Imagen próximamente</p>
                    </div>
                  </div>
                )}

                {/* Botón Ver en 3D si tiene sketchfabId */}
                {selectedCard.sketchfabId && (
                  <button
                    onClick={() => { setSelectedCard(null); open3DModal(selectedCard.sketchfabId!); }}
                    className="w-full py-3 font-[Poppins] font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                    style={{ background: "#484F9D", color: "#F4E600" }}
                  >
                    ↻ Ver modelo en 3D interactivo
                  </button>
                )}
              </div>

              {/* DERECHA — Información */}
              <div className="md:w-[55%] flex flex-col p-6 md:p-8">

                {/* Badge */}
                <span className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-[Inter] font-semibold mb-4"
                  style={{ background: selectedCard.accent + "15", color: selectedCard.accent, border: `1px solid ${selectedCard.accent}30` }}>
                  {selectedCard.badge}
                </span>

                {/* Título */}
                <h2 className="font-[Poppins] font-bold text-2xl mb-3" style={{ color: "#1a1a2e" }}>
                  {selectedCard.title}
                </h2>

                {/* Descripción larga */}
                <p className="font-[Inter] text-sm leading-relaxed mb-6" style={{ color: "rgba(0,0,0,0.55)" }}>
                  {selectedCard.fullDesc || selectedCard.desc}
                </p>

                {/* Info adicional */}
                <div className="rounded-xl p-4 mb-6" style={{ background: "#f8f9ff", border: "1px solid #e8eaf6" }}>
                  <p className="font-[Poppins] font-semibold text-sm mb-3" style={{ color: "#484F9D" }}>
                    ℹ️ Información adicional
                  </p>
                  <ul className="space-y-1.5">
                    {["Personalización con tu logo o diseño", "Ideal para regalos y eventos corporativos", "Cotización personalizada según cantidad"].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-[Inter]" style={{ color: "rgba(0,0,0,0.5)" }}>
                        <span style={{ color: selectedCard.accent }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Botón WhatsApp */}
                <a
                  href={"https://wa.me/573337013642?text=Hola,%20quiero%20información%20sobre%20" + encodeURIComponent(selectedCard.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-[Poppins] font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: "#25D366", color: "white" }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar cotización por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3D */}
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
              >×</button>
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