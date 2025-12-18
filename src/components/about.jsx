import { useImperativeHandle, forwardRef, useRef } from "react";

import Aboutus from "../../public/undraw_building_websites_i78t.svg"

const About = forwardRef((props, ref) => {

    const compRef = useRef();
    useImperativeHandle(ref, () => ({
      scrollIntoView: () => {
        compRef.current.scrollIntoView({behavior: "smooth", block: "start"});
        }
    })); 

    return (
        <>
            <div id="about" className="flex items-center justify-center h-[950px]  md:h-[600px] bg-[#0b112b]" ref={compRef}> 
                <div className=" px-6 w-[1240px] flex flex-col md:flex-row  items-center py-10 text-left">
                    
                    <div className="md:w-1/2 flex flex-col justify-center pt-2">  
                        <div>
                            <h1 className="text-3xl font-bold text-[#06d2dd]">Sobre <span className="text-white">nós</span></h1>
                        </div>
                        <p className="text-gray-400 mt-5">
                        Na <span className="text-[#06d2dd] font-bold">Agência DRISA</span>, somos especialistas em criar lojas virtuais que transformam negócios <span className="text-white font-bold">e impulsionam vendas.</span> Com uma equipe experiente em design e desenvolvimento de sites, entregamos soluções que não apenas impressionam visualmente, mas também são otimizadas para resultados concretos. Seja uma loja virtual poderosa ou um site institucional estratégico,<span className="font-bold text-white"> trabalhamos lado a lado com nossos clientes para entender suas necessidades e criar soluções personalizadas e inovadoras.</span>  
                        </p>

                        <p className="mt-5 text-gray-400 ">
                            Do planejamento ao lançamento, garantimos que cada detalhe esteja alinhado aos seus objetivos, com foco em performance, escalabilidade e conversão.
                        </p>
                    </div>

                    <div className="flex items-center justify-center mb-10 md:w-1/2 mt-8 md:mt-0">
                        <img src={Aboutus} className="relative w-96 animate-pulse" alt="" />
                    </div>

                </div>
            </div>
            

        </>
    )

})

export default About;

