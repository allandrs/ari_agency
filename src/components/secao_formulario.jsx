import React from "react";
import { Formulario } from "./formulario";

import Wpp from "../../public/whatsapp.png";
import Mail from "../../public/mail.png";

export default function SecaoFormulario() {
  return (
    <section id="contato" className="py-20 bg-[#0b112b]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: heading + info */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#06d2dd]/10 border border-[#06d2dd]/30 text-[#06d2dd] text-xs font-semibold px-4 py-2 rounded-full mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-[#06d2dd] animate-pulse" />
              Fale com a gente
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Pronto para{" "}
              <span className="text-[#06d2dd]">transformar</span> sua presença
              digital?
            </h2>

            <p className="text-gray-400 mt-5 text-sm leading-relaxed max-w-md">
              Preencha o formulário e entraremos em contato em até 24 horas.
              Adoraríamos entender seu projeto e trazer o melhor resultado para
              o seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:contato@devallandr.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#06d2dd] transition-colors duration-200 group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#06d2dd]/40 transition-all duration-200">
                  <img src={Mail} className="h-4" alt="e-mail" />
                </span>
                <span className="text-sm">contato@devallandr.com</span>
              </a>

              <a
                href="https://wa.me/5555997323505"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#06d2dd] transition-colors duration-200 group"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#06d2dd]/40 transition-all duration-200">
                  <img src={Wpp} className="h-4" alt="whatsapp" />
                </span>
                <span className="text-sm">(55) 98427-3497</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base">
                  📍
                </span>
                <span className="text-sm">Porto Alegre – RS</span>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-[#0b112b] mb-6">
              Envie sua mensagem
            </h3>
            <Formulario />
          </div>
        </div>
      </div>
    </section>
  );
}
