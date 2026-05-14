import React from "react";
import "../style/chatbox.css";

import Logo from "../../public/agência drisa logo.png";
import Wpp from "../../public/whatsapp.png";
import Instagram from "../../public/instagram.png";
import Facebook from "../../public/facebook.png";
import Mail from "../../public/mail.png";

const WPP_URL =
  "https://wa.me/5555997323505?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente.";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-[#0b112b] text-white">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
            {/* Logo */}
            <div className="flex flex-col gap-4">
              <img className="h-28 w-auto object-contain" src={Logo} alt="logo DRISA" />

            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white mb-1">
                Navegação
              </h3>
              {[
                { label: "Home", href: "#" },
                { label: "Serviços", href: "#services" },
                { label: "Sobre nós", href: "#about" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Contato", href: "#contato" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 text-xs hover:text-[#06d2dd] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white mb-1">
                Contato
              </h3>
              <a
                href="mailto:contato@devallandr.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#06d2dd] transition-colors duration-200"
              >
                <img src={Mail} className="h-4 flex-shrink-0" alt="email" />
                <span className="text-xs">contato@devallandr.com</span>
              </a>
              <a
                href={WPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#06d2dd] transition-colors duration-200"
              >
                <img src={Wpp} className="h-4 flex-shrink-0" alt="whatsapp" />
                <span className="text-xs">(55) 99732-3505</span>

              </a>
              <p className="text-gray-400 text-xs">Porto Alegre – RS</p>
              <p className="text-gray-400 text-xs">
                Seg. a Sáb., das 9h às 18h
              </p>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white mb-1">
                Redes sociais
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/agenciadrisa/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#06d2dd]/50 hover:bg-[#06d2dd]/10 transition-all duration-200"
                >
                  <img src={Instagram} className="h-5" alt="Instagram" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568389666628"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#06d2dd]/50 hover:bg-[#06d2dd]/10 transition-all duration-200"
                >
                  <img src={Facebook} className="h-5" alt="Facebook" />
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-2">
                CNPJ: 41.653.566/0001-08
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-500 text-xs">
              Desenvolvido por Agência DRISA ©{" "}
              {new Date().getFullYear()}
            </p>
            <p className="text-gray-500 text-xs">
              Políticas de privacidade
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={WPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
        aria-label="Falar no WhatsApp"
      >
        <img src={Wpp} className="h-7" alt="WhatsApp" />
      </a>
    </>
  );
}
