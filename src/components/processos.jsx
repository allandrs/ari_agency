import React from "react";

import Gears from "../../public/Gear@1x-3.4s-200px-200px.svg";
import Meeting from "../../public/undraw_meeting_re_i53h.svg";
import Approval from "../../public/undraw_accept_request_re_d81h.svg";
import Finish from "../../public/undraw_confirmation_re_b6q5.svg";

import CardProcessos from "./card_processos.jsx";

const STEPS = [
  {
    step: 1,
    subtitulo: "Briefing",
    img: Meeting,
    texto:
      "Entendemos seu negócio, objetivos e funcionalidades necessárias para planejar um projeto alinhado à sua marca.",
  },
  {
    step: 2,
    subtitulo: "Desenvolvimento",
    img: Gears,
    texto:
      "Com o briefing em mãos, desenvolvemos o design e a estrutura do seu site com foco em usabilidade e SEO.",
  },
  {
    step: 3,
    subtitulo: "Aprovação",
    img: Approval,
    texto:
      "Você revisa layout, funcionalidades e conteúdo. Ajustamos o que for necessário para ficar exatamente como imaginou.",
  },
  {
    step: 4,
    subtitulo: "Entrega",
    img: Finish,
    texto:
      "Após sua aprovação e testes finais, lançamos sua plataforma e acompanhamos os primeiros dias online.",
  },
];

export default function Processos() {
  return (
    <div id="comofunciona" className="w-full py-20 bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b112b]">
            Como <span className="text-[#06d2dd]">funciona</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-lg">
            Do briefing ao lançamento, cada etapa é pensada para entregar o
            melhor resultado para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <CardProcessos key={step.step} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
}
