import { useState } from "react";
import DropDownMenu from "./dropdownmenu.jsx";

import Logo from "../../public/LOGODRISA.png";
import softdeveloper from "../../public/software-developer-6521720-croped.jpg";
import dropdown from "../../public/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre nós", href: "#about" },
  { label: "Como funciona", href: "#comofunciona" },
  { label: "Portfólio", href: "#portfolio" },
];

const MINI_CARDS = [
  { icon: "⚡", title: "Alta Performance", desc: "Sites rápidos e otimizados" },
  { icon: "📱", title: "100% Responsivos", desc: "Perfeitos em qualquer tela" },
  { icon: "🎯", title: "Foco em Conversão", desc: "Mais leads para seu negócio" },
];

const WPP_URL =
  "https://wa.me/5555997323505?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente.";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="bg-[#0b112b] relative min-h-[720px] w-full overflow-hidden">
        {/* Background image */}
        <img
          src={softdeveloper}
          className="absolute inset-0 w-full h-full object-cover opacity-[.08] select-none pointer-events-none"
          alt=""
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b112b] via-[#0b112b]/98 to-[#06d2dd]/10 pointer-events-none" />

        {/* Navbar */}
        <div className="relative z-10 flex max-w-[1240px] w-full mx-auto px-4 md:px-6 h-20 justify-between items-center">
          <a href="/">
            <img className="h-24 md:h-28" src={Logo} alt="logo DRISA" />
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-gray-300 hover:text-[#06d2dd] transition-colors duration-200 font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={WPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#06d2dd] hover:bg-[#05bbc5] text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#06d2dd]/30"
          >
            Contate-nos
          </a>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpenMenu((prev) => !prev)}
            aria-label="Abrir menu"
          >
            <img src={dropdown} className="h-6" alt="menu" />
          </button>

          {openMenu && <DropDownMenu />}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 md:px-6 pt-14 md:pt-20 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#06d2dd]/10 border border-[#06d2dd]/30 text-[#06d2dd] text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#06d2dd] animate-pulse" />
            Agência de Desenvolvimento Web
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
            Criamos{" "}
            <span className="text-[#06d2dd]">sites e lojas virtuais</span>{" "}
            que transformam visitantes em clientes.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
            Soluções digitais personalizadas para impulsionar seu negócio online.
            Design premium, performance máxima e foco em conversão.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={WPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#06d2dd] hover:bg-[#05bbc5] text-white font-semibold px-8 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-xl hover:shadow-[#06d2dd]/30"
            >
              Começar agora
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-[#06d2dd] hover:text-[#06d2dd] font-medium px-8 py-3.5 rounded-lg text-sm transition-all duration-200"
            >
              Ver portfólio
            </a>
          </div>

          {/* Mini Differentiator Cards */}
          <div className="flex flex-col sm:flex-row gap-3 mt-14">
            {MINI_CARDS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-[#06d2dd]/40 hover:bg-white/8 transition-all duration-200"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold">{title}</p>
                  <p className="text-gray-400 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
