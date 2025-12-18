import React from "react";

export default function CardService({ titulo, img, texto1, texto2, texto3, texto4 }) {
  return (
    <div
      className="
        group
        w-[215px] h-[21rem]  /* altura fixa para todos os cards */
        rounded-lg p-3
        border border-[#0d1537]
        bg-white
        transition-[background-color,box-shadow] duration-150 ease-out
        hover:bg-[#0d1537] hover:shadow-lg
        overflow-hidden  /* evita que animações/escala vazem do card */
      "
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Círculo + imagem */}
        <div
          className="
            bg-[#06d2dd] rounded-full
            w-24 h-24 grid place-items-center
            transition-transform duration-150 ease-out will-change-transform
            group-hover:scale-105
          "
        >
          <img src={img} className="max-h-16 p-3" alt="logo" />
        </div>

        {/* Título */}
        <h2 className="font-bold pt-3 text-[#06d2dd]">
          {titulo}
        </h2>

        {/* Área de textos: ocupa o espaço disponível e não cresce além do card */}
        <div className="mt-2 flex-1 w-full overflow-hidden">
          <p className="text-[#0d1537] font-semibold text-xs transition-colors duration-100 ease-out group-hover:text-white">
            {texto1}
          </p>
          <p className="text-[#0d1537] text-xs mt-2 transition-colors duration-100 ease-out group-hover:text-white">
            {texto2}
          </p>
          <p className="text-[#0d1537] text-xs mt-2 transition-colors duration-100 ease-out group-hover:text-white">
            {texto3}
          </p>
          <p className="text-[#0d1537] text-xs mt-2 transition-colors duration-100 ease-out group-hover:text-white">
            {texto4}
          </p>
        </div>

        {/* Linha decorativa opcional */}
        <div className="mt-2 h-px w-10 bg-[#06d2dd]/40 transition-colors duration-150 group-hover:bg-white/30" />
      </div>
    </div>
  );
}
