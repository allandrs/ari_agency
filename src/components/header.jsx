import React, { useState } from "react";

import "../style/header.css";

import DropDownMenu from "./dropdownmenu.jsx";

//images
import Logo from "../../public/LOGODRISA.png";
import softdeveloper from "../../public/software-developer-6521720-croped.jpg";
import verticalsdeveloper from "../../public/software-developer-6521720-vertical.jpg";
import freela from "../../public/freelance-work-7308505_1920-croped.png";
import dropdown from "../../public/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const Header = () => {

  // const scrollToService = () => {
  //   if (refToServices.current) {
  //     refToServices.current.scrollIntoView();
  //   }
  // };

  // const scrollToAbout = () => {
  //   if (refToAbout.current) {
  //     refToAbout.current.scrollIntoView();
  //   }
  // };

  

  const [openMenu, setOpenMenu] = useState(false);


  return (
    <>
      <header>
        <div className="bg-[#0b112b] relative max-h-[900px] md:min-h-[600px] w-{full} place-items-center">
          <img
              src={softdeveloper}
              className="absolute img-header opacity-[.2] invisible md:visible "
              alt=""
            />

          <div className="flex max-w-[1240px] w-full mx-auto h-15 relative  px-4 py-2 justify-between shadow-2xl items-center bg-contain border-none">
            
            <a href="/" className="flex-initial ml-1 md:ml-3">
              <img
                className="h-36"
                src={Logo}
                alt="logo"
              />
            </a>

            <nav className="hidden md:block flex justify-between items-center">
              <ul className="flex text-white gap-4 place-content-center font-semibold">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd]  transition duration-200 text-sm font-semibold"
                    
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                    
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                    
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#comofunciona"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Como funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="hover:text-[#06d2dd] transition duration-200 text-sm"
                  >
                    Contato
                  </a>
                </li> */}
              </ul>
            </nav>

            <div  className="md:w-[150px] flex items-center invisible md:visible">
              <a href="https://wa.me/5555984273497?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank" className="bg-[#06d2dd] text-white font-semibold rounded-md pl-1 w-28 h-7 mr-8 text-sm flex items-center justify-center">
                Contate-nos
              </a>
            </div>

            <div className=" md:hidden">
              <span className="text-white" onClick={() => setOpenMenu((prev) => !prev)}><img src={dropdown} className="mr-5" alt="menu"></img></span>
            </div>

            {
              openMenu && <DropDownMenu />
            }



          </div>

          <div className="divHeader max-w-[1240px] w-full mx-auto h-full relative">

            <img
              src={verticalsdeveloper}
              className="absolute img-header opacity-[.2] visible md:invisible h-96"
              alt=""
            />
            <img
              src={freela}
              className="absolute opacity-[.8] right-20 top-16 invisible md:visible"
              alt=""
            />
            <div className="flex absolute  mx-0 md:mx-8 mt-24">
              <div className="container-copy ml-[128px] md:ml-[19rem] w-[215px] md:w-[40rem]">
                <div className="w-full">
                  <h1 className="text box-h1-decoration-clone  text-xl md:text-2xl text-white transition   font-extrabold">
                    <span className="whitespace-nowrap">Na DRISA, criamos <span className=" text-[#06d2dd] ">sites e </span></span> <span className=" whitespace-nowrap  text-[#06d2dd]">lojas virtuais </span>
                    <span className="whitespace-nowrap">que impulsionam</span><br />sua marca e suas vendas.
                  </h1>
                </div>
                <p className="text-subtitle text-[12px] md:text-sm text-[#06d2dd] font-semibold mt-4 w-full">
                  Seu parceiro de confiança para entrega garantida de resultados.
                </p>
                <div className="button-title flex justify-start">
                  <button className=" mt-6 bg-[#06d2dd] text-white text-xs rounded-md w-28 h-7 font-semibold transition cursor-pointer animate-pulse">
                    <a href="https://wa.me/5555984273497?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank">Começe agora</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header