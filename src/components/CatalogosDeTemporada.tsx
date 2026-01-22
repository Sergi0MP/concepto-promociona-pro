import React from "react";

const catalogos = [
  {
    titulo: "Catálogo Halloween",
    portada: "/catalogo/halloween/page1.png",
    enlace: "/pdfs/catalogo_halloween.pdf",
  },
  {
    titulo: "Catálogo 2026",
    portada: "/catalogo/2025.png",
    enlace: "/pdfs/catalogo_2025.pdf",
  },
  {
    titulo: "Catálogo Amor y Amistad",
    portada: "/catalogo/amor.png", // corregido doble .png
    enlace: "/pdfs/catalogo_amor_amistad.pdf",
  },
  {
    titulo: "Catálogo Navideño 2026",
    portada: "/catalogo/navida.png",
    enlace: "/pdfs/catalogo_navidad_2025.pdf",
  },
  {
    titulo: "Catálogo Mundial",
    portada: "/catalogo/Mundial.png",
    enlace: "/pdfs/catalogo_mundial.pdf",
  },
  
];

const LibroCatalogo = ({
  portada,
  titulo,
  enlace,
  onClick,
}: typeof catalogos[0] & { onClick?: (e: React.MouseEvent) => void }) => {
  const esMundial = titulo === "Catálogo Mundial";

  const sizeClasses = esMundial
    ? "w-[420px] h-[520px]"      // MUCHO más grande
    : "w-56 h-80 md:w-64 md:h-88"; // catálogos normales más grandes

  const contenido = (
    <div
      className={`relative ${sizeClasses} shadow-xl rounded-2xl overflow-hidden bg-white flex items-stretch`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={portada}
          alt={titulo}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    onClick ? (
      <div
        className="group flex flex-col items-center mx-2 my-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
        onClick={onClick}
      >
        {children}
      </div>
    ) : (
      <a
        href={enlace}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center mx-2 my-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      >
        {children}
      </a>
    );

  return (
    <Wrapper>
      {contenido}
      <span className="mt-3 text-center text-base md:text-lg font-semibold text-gray-800 group-hover:text-violet-600 duration-300">
        {titulo}
      </span>
    </Wrapper>
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
  className="w-full py-10 flex flex-col items-center"
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

  <div className="w-full max-w-7xl px-4 mx-auto grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
    {/* Izquierda: Mundial */}
    <div className="flex justify-center">
      {catalogos
        .filter((cat) => cat.titulo === "Catálogo Mundial")
        .map((cat, idx) => (
          <LibroCatalogo
            key={idx}
            {...cat}
            onClick={onOpenMundial}
          />
        ))}
    </div>

    {/* Derecha: grid 4 más grandes y alineados */}
    <div className="grid grid-cols-2 gap-6">
      {catalogos.map((cat, idx) => {
        if (cat.titulo === "Catálogo Mundial") return null;

        if (cat.titulo === "Catálogo Halloween")
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenHalloween}
            />
          );
        if (cat.titulo === "Catálogo 2026")
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpen2025}
            />
          );
        if (cat.titulo === "Catálogo Amor y Amistad")
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenAmor}
            />
          );
        if (cat.titulo === "Catálogo Navideño 2026")
          return (
            <LibroCatalogo
              key={idx}
              {...cat}
              onClick={onOpenNavidad}
            />
          );

        return <LibroCatalogo key={idx} {...cat} />;
      })}
    </div>
  </div>
</section>

);

export default CatalogosDeTemporada;


