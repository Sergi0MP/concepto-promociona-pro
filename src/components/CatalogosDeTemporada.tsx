// components/CatalogosDeTemporada.tsx
import React from "react";

const catalogos = [
  {
    titulo: "Catálogo Halloween",
    portada: "/assets/catalogos/halloween.jpg", // Cambia la ruta
    enlace: "/pdfs/catalogo_halloween.pdf",
  },
  {
    titulo: "Catálogo 2025",
    portada: "/assets/catalogos/2025.jpg",
    enlace: "/pdfs/catalogo_2025.pdf",
  },
  {
    titulo: "Catálogo Día del Padre",
    portada: "/assets/catalogos/dia_padre.jpg",
    enlace: "/pdfs/catalogo_dia_padre.pdf",
  },
  // Agrega más catálogos aquí
];

const LibroCatalogo = ({ portada, titulo, enlace }: typeof catalogos[0]) => (
  <a
    href={enlace}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center mx-4 my-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  >
    <div className="relative w-32 h-44 lg:w-40 lg:h-56 shadow-xl rounded-lg overflow-hidden bg-white flex items-stretch">
      {/* Lomo visual */}
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-violet-600 to-violet-400 rounded-l-lg shadow-lg" />
      {/* Portada */}
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

const CatalogosDeTemporada = () => (
  <section className="w-full py-10 flex flex-col items-center bg-gradient-to-b from-white to-violet-50">
    <h2 className="text-3xl font-bold mb-5 text-violet-700 text-center">
      Catálogos de Temporada
    </h2>
    <div className="flex flex-wrap justify-center gap-2 lg:gap-6">
      {catalogos.map((cat, idx) => (
        <LibroCatalogo key={idx} {...cat} />
      ))}
    </div>
  </section>
);

export default CatalogosDeTemporada;
