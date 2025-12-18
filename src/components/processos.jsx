import React from "react";
import styled from 'styled-components'

//images
import Gears from "../../public/Gear@1x-3.4s-200px-200px.svg";
import Meeting from "../../public/undraw_meeting_re_i53h.svg";
import Arrow from "../../public/arrow-158377_1280-removebg-preview.png";
import Approval from "../../public/undraw_accept_request_re_d81h.svg"
import Test from "../../public/undraw_split_testing_l1uw.svg"
import Build from "../../public/build.png"
import Finish from "../../public/undraw_confirmation_re_b6q5.svg"

//components
import CardProcessos from "./card_processos.jsx";

export default function Processos() {
  
  // const CardProcessos = styled.margin`
  //   margin: 2rem;
  // `

  return (
    <>
      <div id="comofunciona" className="flex  w-full h-[1700px] md:h-[1050px] justify-center bg-[white] relative align-middle">
        <div className="w-[800px] bg-gradient-to-r from-[#65b4ff] via-[#d5eced] to-[#c2ebed] rounded-xl my-16 mx-2 justify-center items-center align-middle">
          <div className="flex justify-center items-center align-middle shrink-0 gap-4 text-4xl mt-8 text-center">
            <div className="invisible">di</div>
            <h1 className="text-3xl md:text-4xl">Como funciona</h1>
            <img src={Build} className="h-10 flex-none" alt="" />
          </div>
          <div className="md:grid md:grid-cols-2 mx-2 md-w-96 justify-center place-items-center items-start md:h-72 mt-10 ">
            <CardProcessos
              titulo="1º Passo - Briefing"
              subtitulo="Entendendo suas necessidades"
              img={Meeting}
              texto="Entendendo seu negócio, objetivos e funcionalidades necessárias." 
              // texto2="Aqui capturarmos a essência da sua marca e planejamos um projeto que atenda às suas expectativas."
            />
            <CardProcessos
              titulo="2º Passo - Desenvolvimento"
              subtitulo="Transformando ideias em realidade"
              img={Gears}
              texto="Com o briefing em mãos, iniciamos o desenvolvimento do design e a estrutura do seu site." 
              // texto2="Garantindo a responsividade, usabilidade e uma navegação intuitiva, atentos para os detalhes técnicos para que o site seja ágil, seguro e otimizado para SEO."
            />
            <CardProcessos
              titulo="3º Passo - Aprovação"
              subtitulo="Transformando ideias em realidade"
              img={Approval}
              texto="Após o desenvolvimento, apresentamos o site para sua avaliação." 
              // texto2="Você revisa o layout, funcionalidades e conteúdo. Ajustamos conforme necessário para que tudo fique exatamente como você imaginou."
            />
            <CardProcessos
              titulo="4º Passo - Entrega"
              subtitulo="Hora de decolar!!"
              img={Finish}
              texto="Após sua aprovação e testes finais, lançamos sua plataforma ao mundo para dar início ao seu sucesso online!" 
              // texto2="Publicamos a plataforma e monitoramos o funcionamento                 inicial para garantir que esteja tudo rodando perfeitamente. Agora você tem uma presença digital sólida, pronta para gerar resultados."
              
            />
          </div>
        </div>
      </div>
    </>
  );
}
