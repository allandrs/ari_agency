import React from "react";
import { useImperativeHandle, forwardRef, useRef } from "react";

import Card from "./card_service";

import Responsive from "../../public/responsive.png";
import Website from "../../public/site-removebg-preview.png";
import SEO from "../../public/seo-removebg-preview.png";
import Design from "../../public/removebg.png";
import Api from "../../public/infografico-de-api-de-gradiente.png";
import Manutencao from "../../public/manutencao.png";

const SERVICES = [
  {
    titulo: "Responsividade",
    img: Responsive,
    texto1:
      "Mais de 60% dos acessos à internet são feitos por dispositivos móveis. Se o seu site não está perfeitamente ajustado para todos os tamanhos de tela, você está perdendo visitantes e vendas.",
  },
  {
    titulo: "SEO",
    img: SEO,
    texto1:
      "Seu site pode ter potencial, mas sem o SEO correto, ele fica invisível nas pesquisas do Google. A otimização de SEO irá atrair o público certo gerando mais conversões.",
  },
  {
    titulo: "Performance",
    img: Website,
    texto1:
      "Cada segundo conta! Sites lentos frustram usuários e, pior ainda, diminuem suas vendas. A otimização de performance garante que seu site carregue em tempo recorde.",
  },
  {
    titulo: "Design",
    img: Design,
    texto1:
      "Navegação simples e agradável para manter seus visitantes por mais tempo, focado na experiência do usuário (UX) e no design de interface (UI) para captar mais clientes.",
  },
  {
    titulo: "Integração de APIs",
    img: Api,
    texto1:
      "Com a integração de APIs, você pode conectar sua plataforma a diversos serviços externos, automatizando processos e criando uma experiência mais fluida para seus usuários.",
  },
  {
    titulo: "Suporte e Manutenção",
    img: Manutencao,
    texto1:
      "Para que sua loja ou site estejam sempre atualizados, funcionais e seguros, oferecemos suporte técnico contínuo, desde a solução de problemas até melhorias e atualizações.",
  },
];

const Services = forwardRef((props, ref) => {
  const compRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));

  return (
    <div id="services" className="bg-white w-full py-20" ref={compRef}>
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1537]">
            O que fazemos para{" "}
            <span className="text-[#06d2dd]">destacar</span> seu site na
            internet
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-lg">
            Soluções completas para transformar sua presença digital e aumentar
            seus resultados online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.titulo} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
});

Services.displayName = "Services";
export default Services;
