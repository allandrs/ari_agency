import React from "react";

export default function CardService({ titulo, img, texto1 }) {
  return (
    <div className="group w-full rounded-2xl p-6 border border-gray-100 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#06d2dd]/40 cursor-default">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="bg-[#06d2dd]/10 rounded-2xl w-16 h-16 grid place-items-center transition-all duration-300 group-hover:bg-[#06d2dd] group-hover:scale-110">
          <img src={img} className="max-h-10 p-1" alt={titulo} />
        </div>
        <h2 className="font-bold text-[#0b112b] text-sm">{titulo}</h2>
        <p className="text-gray-500 text-xs leading-relaxed">{texto1}</p>
      </div>
    </div>
  );
}
