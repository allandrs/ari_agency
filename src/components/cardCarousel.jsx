import React from "react";

export default function CardCarousel({ img, link }) {
  return (
    <div className="flex flex-col items-center justify-between h-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
      {/* Imagem */}
      <div className="w-full h-52 flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={img}
          alt="Card"
          className="object-cover w-full h-full rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Botão */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg shadow hover:from-cyan-600 hover:to-teal-600 transition-all duration-300"
      >
        Confira
      </a>
    </div>
  );
}
