import React from "react";

const StarIcon = () => (
  <svg className="w-4 h-4 text-[#06d2dd]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function CardDepoimento({ img, initials, nome, empresa, texto }) {
  return (
    <div className="group flex flex-col gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#06d2dd]/30 transition-all duration-300 hover:-translate-y-1">
      {/* Quote mark */}
      <svg
        className="w-8 h-8 text-[#06d2dd]/30"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8h1v4l6-4h.1C17.1 24 10 20 10 8zm12 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h1v4l6-4h.1C29.1 24 22 20 22 8z" />
      </svg>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        &ldquo;{texto}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        {img ? (
          <img
            src={img}
            className="w-11 h-11 rounded-full object-cover border-2 border-[#06d2dd]/30"
            alt={nome}
          />
        ) : (
          <div className="w-11 h-11 rounded-full bg-[#06d2dd] flex items-center justify-center text-white font-bold text-sm border-2 border-[#06d2dd]/50 flex-shrink-0">
            {initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-[#0b112b] text-sm">{nome}</p>
          <p className="text-gray-400 text-xs">{empresa}</p>
        </div>
      </div>
    </div>
  );
}
