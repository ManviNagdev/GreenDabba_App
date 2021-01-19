import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
//import Pricing from '../../Pricing';
import Products from '../../Products';
import { productData, productDataTwo } from '../../Products/Data';
function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <Products heading='Start Cooking ...' />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjFour} />
        </>
    );
}

export default Home;