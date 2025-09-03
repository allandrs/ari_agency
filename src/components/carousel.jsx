import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import Delivery from "../../public/delivery bebidas.png";
import Finances from "../../public/finances.png";
import Dark from "../../public/loginDark.png";
import Fisioplastic from "../../public/Fisioplastic.png";
import Compostura from "../../public/Compostura.png";

import CardCarousel from "./cardCarousel"

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;


  return (
    <div style={{padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button className='bg-white rounded-full w-6'>{'<'}</button>}
        rightChevron={<button className='bg-white rounded-full w-6'>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
		    infiniteLoop={true}
      >
        <CardCarousel img={Delivery} link={'https://allandrs.github.io/delivery_bebidas/'}/>
        <CardCarousel img={Finances} link={'https://allandrs.github.io/sistema-controle-financeiro/'}/>
        <CardCarousel img={Dark} link={'https://allandrs.github.io/tela-login-dark/'}/>
        <CardCarousel img={Fisioplastic} link={'https://fisioplastic.drisaagency.com/'}/>
        <CardCarousel img={Compostura} link={'https://clinicacompostura.drisaagency.com/'}/>
      </ItemsCarousel>
    </div>
  );
}
