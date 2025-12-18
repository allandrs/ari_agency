import React from "react";
import { useImperativeHandle, forwardRef, useRef } from "react";
// import { useRef } from "react";


// import styled from "styled-components";

//components
import Card from "./card_service";
import Header from "./header";


//images
// import Vilabeer from "../../public/Vila-Beer.png";
// import Elmiz from "../../public/black-clean.png";
// import Darkz from "../../public/darkz.png";
// import Devfinance from "../../public/devfinance.png";
import Responsive from "../../public/responsive.png";
import Website from "../../public/site-removebg-preview.png"
import SEO from "../../public/seo-removebg-preview.png"
import Design from "../../public/removebg.png"
import Api from "../../public/infografico-de-api-de-gradiente.png"
import Manutencao from "../../public/manutencao.png"


// const Card = styled.Card.img.Manutencao`
//   width: 30px;
// `


const Services = forwardRef((props, ref) => { 


  
  
    // const ref = useRef(null);
    // const handleClick = () => {
    //   ref.current?.scrollIntoView({behavior: 'smooth'})
    // };
  

  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({behavior: "smooth", block: "start"});
      }
  })); 
  
  return (
      <>
        <div id="services" className="bg-white h-[148rem] md:h-[60rem] w-full relative flex flex-col items-center justify-center">
  
          <div className="flex flex-col md:w-[1240px] items-center align-middle justify-center place-items-center">

            <div className="flex flex-col items-center mx-2 md:mx-4 ">
              <h1 className="text-2xl font-extrabold text-[#0d1537] text-center">
              O que fazemos para<span className="text-[#06d2dd]"> destacar </span>seu site na internet
              </h1>
              <br />
            </div>
  
            <div className="flex flex-col mx-4 md:w-[48rem]">
              <div className="grid gap-5 grid-cols-1 md:grid-cols-3 place-items-center mt-10">
                <Card
                  titulo="Responsividade"
                  img={Responsive}
                  texto1="Mais de 60% dos acessos à internet são feitos por dispositivos móveis. Se o seu site não está perfeitamente ajustado para todos os tamanhos de tela, você está perdendo visitantes e vendas."
                />
                <Card
                  titulo="SEO"
                  img={SEO}
                  texto1="Seu site pode ter potencial, mas sem o SEO correto, ele fica invisível nas pesquisas do google. A otimização de SEO irá atrair o público certo gerando mais conversões."
                  // texto2="Corte custos Aumente a produtividade \n continuação"
                  // texto3="Corte custos Aumente a produtividade \n continuação"
                  // texto4="Corte custos Aumente a produtividade \n continuação"
                  />
                  <Card
                  titulo="Performance"
                  img={Website}
                  texto1="Cada segundo conta! Sites lentos frustram usuários e, pior ainda, diminuem suas vendas. A otimização de performance garante que seu site carregue em tempo recorde, oferecendo uma navegação rápida e fluida para seus clientes."
                  
                />
                <Card
                  titulo="Design"
                  img={Design}
                  texto1="Navegação simples e agradável para manter seus visitantes por mais tempo, focado na experiência do usuário (UX), assim como um bom design de interface do usuário (UI) é muito importante no sucesso na captação de clientes."
                />
                <Card
                  titulo="Integração de APIs"
                  img={Api}
                  texto1="Com a integração de APIs, você pode conectar sua plataforma a diversos serviços e ferramentas externas, automatizando processos e criando uma experiência mais fluida e eficiente para seus usuários."
                />
                <Card
                  titulo="Suporte e manutenção"
                  img={Manutencao}
                  texto1="Para que sua loja ou site estejam sempre atualizados, funcionais e seguros, oferecemos suporte técnico contínuo. Desde a solução de problemas até melhorias e atualizações, cuidamos para que sua loja virtual esteja sempre pronta para vender mais!"
                  man
                />
              </div>
            </div>

          </div>
          
        </div>
      </>
  );
});  

export default Services;