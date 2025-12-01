import React from "react";

const catalogos = [
  {
    titulo: "Catálogo Halloween",
    portada: "/catalogo/halloween/page1.png",
    enlace: "/pdfs/catalogo_halloween.pdf",
  },
  {
    titulo: "Catálogo 2025",
    portada: "/catalogo/2025.png",
    enlace: "/pdfs/catalogo_2025.pdf",
  },
  {
    titulo: "Catálogo Amor y Amistad",
    portada: "/catalogo/amor.png.png", // corrige doble .png
    enlace: "/pdfs/catalogo_amor_amistad.pdf",
  },
  {
    titulo: "Catálogo Mundial",
    portada: "/catalogo/Mundial.png", // pon aquí la portada real del mundial
    enlace: "/pdfs/catalogo_mundial.pdf", // no se usará si abres modal, pero lo dejamos por consistencia
  },
  // Más catálogos si quieres...
];

const LibroCatalogo = ({
  portada,
  titulo,
  enlace,
  onClick,
}: typeof catalogos[0] & { onClick?: (e: React.MouseEvent) => void }) => {
  if (onClick) {
    // SOLO para catálogos que abren modal (Anyflip)
    return (
      <div
        className="group flex flex-col items-center mx-4 my-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        onClick={onClick}
      >
        <div className="relative w-64 h-64 lg:w-80 lg:h-64 shadow-xl rounded-lg overflow-hidden bg-white flex items-stretch">
          <div className="w-full h-full flex items-center justify-center">
            <img src={portada} alt={titulo} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <span className="mt-3 text-center text-lg font-semibold text-gray-800 group-hover:text-violet-600 duration-300">
          {titulo}
        </span>
      </div>
    );
  }

  // Otros catálogos normales (con <a>)
  return (
    <a
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center mx-4 my-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="relative w-32 h-44 lg:w-40 lg:h-56 shadow-xl rounded-lg overflow-hidden bg-white flex items-stretch">
        <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-violet-600 to-violet-400 rounded-l-lg shadow-lg" />
        <div className="w-full h-full flex items-center justify-center">
          <img src={portada} alt={titulo} className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      <span className="mt-3 text-center text-lg font-semibold text-gray-800 group-hover:text-violet-600 duration-300">
        {titulo}
      </span>
    </a>
  );
};

interface CatalogosDeTemporadaProps {
  onOpenHalloween: (e: React.MouseEvent) => void;
  onOpen2025: (e: React.MouseEvent) => void;
  onOpenAmor: (e: React.MouseEvent) => void;
  onOpenMundial: (e: React.MouseEvent) => void;
}

const CatalogosDeTemporada = ({
  onOpenHalloween,
  onOpen2025,
  onOpenAmor,
  onOpenMundial,
}: CatalogosDeTemporadaProps) => (
  <section
    id="catalogos-temporada"
    className="w-full py-10 flex flex-col items-center relative"
    style={{
      backgroundImage: "url('/images/blanco.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2 className="text-3xl font-black mb-5 text-black text-center">
      Catálogos de Temporada
    </h2>

    <div className="flex flex-wrap justify-center gap-2 lg:gap-6">
      {catalogos.map((cat, idx) => {
        if (cat.titulo === "Catálogo Halloween") {
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenHalloween}
            />
          );
        }
        if (cat.titulo === "Catálogo 2025") {
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpen2025}
            />
          );
        }
        if (cat.titulo === "Catálogo Amor y Amistad") {
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenAmor}
            />
          );
        }
        if (cat.titulo === "Catálogo Mundial") {
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenMundial}
            />
          );
        }
        // Otros catálogos normales (con enlace)
        return (
          <LibroCatalogo
            key={idx}
            {...cat}
          />
        );
      })}
    </div>
  </section>
);

export default CatalogosDeTemporada;
