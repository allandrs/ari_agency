import React from "react";
import CardDepoimento from "./cardDepoimento";
import dep1 from "../../public/Dep1.png";
import dep2 from "../../public/Dep2.png";

const TESTIMONIALS = [
  {
    img: dep1,
    nome: "Lucas Mendes",
    empresa: "Eletrônicos MG",
    texto:
      "A DRISA transformou completamente nossa presença digital. O novo site ficou rápido, moderno e profissional. As vendas online cresceram 40% no primeiro mês!",
  },
  {
    img: dep2,
    nome: "Camila Rodrigues",
    empresa: "Studio Belle",
    texto:
      "Profissionalismo do início ao fim. O site ficou exatamente como eu imaginava e o atendimento foi impecável. Recomendo de olhos fechados!",
  },
  {
    initials: "RC",
    nome: "Rafael Costa",
    empresa: "TechBizz Consultoria",
    texto:
      "Precisávamos de uma landing page que convertesse bem. A DRISA entregou muito além do esperado — o design é sofisticado e os resultados foram imediatos.",
  },
];

const Depoimentos = () => (
  <section className="py-20 bg-white">
    <div className="max-w-[1240px] mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1537]">
          O que nossos <span className="text-[#06d2dd]">clientes dizem</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm">
          Resultados reais para negócios reais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <CardDepoimento key={t.nome} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
