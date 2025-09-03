import React from "react";
// import { FloatingWhatsApp } from 'react-floating-whatsapp'

import "../style/chatbox.css";

import Logo from "../../public/LOGODRISA.png";
import Wpp from "../../public/whatsapp.png";
import Instagram from "../../public/instagram.png";
import Facebook from "../../public/facebook.png";
import Mail from "../../public/mail.png";
import Arrow from "../../public/right-arrow-removebg-preview.png"
// import Time from "../../public/time.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa-brands fa-instagram } from '@awesome.me/kit-KIT_CODE/icons'


export default function Footer() {
    return (
        <>
            <div id="footer" className="h-[410px] md:h-[160px]  bg-[#0b112b] text-white flex flex-col justify-center">

                <div className="flex flex-col justify-center place-items-start mx-10 md:mx-2 md:flex-row gap-12 mt-6">
                    <div className="flex gap-8">
                            <img className="h-20" src={Logo} alt="logo"/>
                            <div className=" md:visible top-[540px] right-[30px] md:top-[540px] md:right-[50px]  rounded-full w-12 h-12 flex justify-center items-center">
                    </div>
                    </div>

                    <div className="flex flex-col ">
                        <h1 className="text-base">Contato</h1>
        
                        <div className="flex gap-1 items-center">
                            <img src={Mail} className="h-6" alt="" />
                            <p className="text-xs">agenciadrisa@devadr.com</p>
                        </div>
                        <div className="flex gap-1 items-center">
                        <a href="https://wa.me/5555984273497?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank"  className="flex gap-1 items-center">
                                <img src={Wpp} className="h-6" alt="" />
                                <p className="text-xs"> (55) 98427-3497</p>
                            </a>
                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-1">
                            <h1 className="text-base">Siga-nos</h1>
                            <div className="flex gap-2">
                                <a href="https://www.instagram.com/agenciadrisa/" target="_blank"><img src={Instagram} className="h-8" alt="logo" /></a>
                                

                                <a href="https://www.facebook.com/profile.php?id=61568389666628" target="_blank"><img src={Facebook} className="h-8" alt="logo" /></a>
                                
                            </div>
                                                

                    </div>




                    <div className="fixed top-[460px] right-[30px] md:top-[480px] md:right-[50px] bg-blue-gray-600 rounded-full w-12 h-12 flex justify-center items-center">
                        <a href="https://wa.me/5555984273497?text=Me%20interessei%20pelos%20servi%C3%A7os%20da%20Ag%C3%AAncia%20DRISA%2C%20gostaria%20de%20conversar%20com%20um%20atendente." target="_blank"> 
                       
                            <img src={Wpp} alt=""/>
                        </a>
                    </div>



                </div>
                

                <div className="footerfooter flex justify-center items-center p-2 mt-6 border-solid border-gray-500 border-t-[0.1px] border-opacity-30">
                    <div>
                        <h1 className="text-xs text-gray-500 flex-wrap mx-2">Desenvolvido por Agência DRISA © | Políticas de privacidade  </h1>
                    </div>
                    
                </div>
                {/* <FloatingWhatsApp 
                phoneNumber="55997323505" 
                chatMessage="Olá, como posso ajudar?"
                accountName="Atendimento SYSRISA"
                statusMessage="Respondemos dentro de alguns minutos"
                chatboxHeight={280}
                notificationDelay={60}
                /> */}

            </div>
        </>
    )
}