import React from "react";



// import Card from "./card_projects";
import Carousel from "./carousel"

export default function Projects() {
    return (
        <>
            <div className="w-full bg-[#0b112b] py-14 flex justify-center items-center place-items-center">
                <div id="portfolio" className="ctner flex flex-col align-middle justify-center max-w-[1240px] w-full mx-auto h-[450px] px-4">
                    <div className="flex flex-col items-center mx-2 md:mx-4 ">
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