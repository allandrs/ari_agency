import { useImperativeHandle, forwardRef, useRef } from "react";
import Aboutus from "../../public/undraw_building_websites_i78t.svg";

const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "100%", label: "Responsivos" },
  { value: "24h", label: "Suporte pós-entrega" },
];

const About = forwardRef((props, ref) => {
  const compRef = useRef();

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));

  return (
    <div
      id="about"
      className="flex items-center justify-center bg-[#0b112b] py-20"
      ref={compRef}
    >
      <div className="max-w-[1240px] w-full px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text side */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-[#06d2dd]">Sobre</span>{" "}
            <span className="text-white">nós</span>
          </h2>

          <p className="text-gray-400 mt-6 text-sm leading-relaxed">
            Na{" "}
            <span className="text-[#06d2dd] font-bold">Agência DRISA</span>,
            somos especialistas em criar sites, landing pages e lojas virtuais
            que transformam negócios{" "}
            <span className="text-white font-semibold">
              e impulsionam vendas.
            </span>{" "}
            Com uma equipe experiente em design e desenvolvimento, entregamos
            soluções que não apenas impressionam visualmente, mas também são
            otimizadas para resultados concretos.
          </p>

          <p className="mt-5 text-gray-400 text-sm leading-relaxed">
            Do planejamento ao lançamento,{" "}
            <span className="text-white font-semibold">
              trabalhamos lado a lado com nossos clientes
            </span>{" "}
            para entender suas necessidades e criar soluções personalizadas com
            foco em performance, escalabilidade e conversão.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-[#06d2dd]">
                  {value}
                </span>
                <span className="text-gray-400 text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration side */}
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={Aboutus}
            className="w-80 md:w-96 opacity-90"
            alt="Desenvolvimento de sites"
          />
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";
export default About;
