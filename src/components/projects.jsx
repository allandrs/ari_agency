import React from "react";
import Carousel from "./carousel";

export default function Projects() {
  return (
    <div id="portfolio" className="w-full bg-[#0b112b] py-20">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Alguns de{" "}
            <span className="text-[#06d2dd]">nossos</span> projetos
          </h2>
          <p className="text-gray-400 mt-4 text-sm max-w-lg">
            Soluções digitais que entregamos para nossos clientes com qualidade
            e excelência.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}
