import React from "react";



// import Card from "./card_projects";
import Carousel from "./carousel"

export default function Projects() {
    return (
        <>
            <div className="w-full bg-[#0b112b] pb-[4rem]">
                <div id="portfolio" className="ctner max-w-[1440px] w-full mx-auto h-[450px] px-4">
                    <div className="flex flex-col items-center pt-16 mx-2 md:mx-4 ">
                        <h1 className="text-3xl font-extrabold text-white text-center">
                        Alguns de <span className="text-[#06d2dd]"> nossos </span>projetos
                        </h1>
                        <br />
                    </div>
                    <div>
                        <Carousel />
                    </div>
                </div>
            </div>
        </>
    )
}