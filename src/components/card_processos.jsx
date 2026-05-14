import React from "react";

export default function CardProcessos({ step, subtitulo, img, texto }) {
  return (
    <div className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#06d2dd]/40 transition-all duration-300 hover:-translate-y-1">
      <div className="w-10 h-10 rounded-full bg-[#06d2dd] text-white font-extrabold text-sm flex items-center justify-center mb-5 shadow-md shadow-[#06d2dd]/30">
        {step}
      </div>
      <img
        src={img}
        className="w-24 h-24 object-contain mb-5"
        alt={subtitulo}
      />
      <h3 className="font-bold text-[#0b112b] text-sm mb-2">{subtitulo}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{texto}</p>
    </div>
  );
}
