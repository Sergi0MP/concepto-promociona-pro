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
    portada: "/catalogo/amor.png.png", // corregido doble .png
    enlace: "/pdfs/catalogo_amor_amistad.pdf",
  },
  {
    titulo: "Catálogo Mundial",
    portada: "/catalogo/Mundial.png",
    enlace: "/pdfs/catalogo_mundial.pdf",
  },
  {
    titulo: "Catálogo Navideño 2025",
    portada: "/catalogo/pagina-1.png",
    enlace: "/pdfs/catalogo_navidad_2025.pdf",
  },
];

const LibroCatalogo = ({
  portada,
  titulo,
  enlace,
  onClick,
}: typeof catalogos[0] & { onClick?: (e: React.MouseEvent) => void }) => {
  const esMundial = titulo === "Catálogo Mundial";

  // Versión que abre modal (onClick)
  if (onClick) {
    return (
      <div
        className="group flex flex-col items-center mx-4 my-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        onClick={onClick}
      >
        <div
          className={
            esMundial
              ? "relative w-72 h-96 md:w-[420px] md:h-[520px] shadow-xl rounded-3xl overflow-hidden bg-white flex items-stretch"
              : "relative w-64 h-64 lg:w-80 lg:h-64 shadow-xl rounded-lg overflow-hidden bg-white flex items-stretch"
          }
        >
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={portada}
              alt={titulo}
              className="w-full h-full object-cover"
            />
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
          <img
            src={portada}
            alt={titulo}
            className="w-full h-full object-cover rounded-lg"
          />
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
    className="w-full py-10 flex flex-col items-center relative"
    style={{
      backgroundImage: "url('/images/fondoblanco.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <h2 className="text-3xl font-black mb-8 text-black text-center">
      Catálogos de Temporada
    </h2>

    {/* Contenedor principal: izquierda grande + derecha grid */}
    <div className="w-full max-w-6xl mx-auto grid gap-6 md:gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
      {/* Izquierda: Catálogo Mundial grande */}
      <div className="flex justify-center">
        {catalogos
          .filter((cat) => cat.titulo === "Catálogo Mundial")
          .map((cat, idx) => (
            <div
              key={idx}
              className="w-full max-w-lg md:max-w-xl"
            >
              <LibroCatalogo
                {...cat}
                onClick={onOpenMundial}
              />
            </div>
          ))}
      </div>

      {/* Derecha: 4 catálogos en grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {catalogos.map((cat, idx) => {
          if (cat.titulo === "Catálogo Mundial") return null;

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
          if (cat.titulo === "Catálogo Navideño 2025") {
            return (
              <LibroCatalogo
                key={idx}
                {...cat}
                onClick={onOpenNavidad}
              />
            );
          }

          return (
            <LibroCatalogo
              key={idx}
              {...cat}
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default CatalogosDeTemporada;

