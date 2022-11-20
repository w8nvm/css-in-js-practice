import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

const HomePage = () =>{
    return (
		<>
			<Hero />
			<Features />
            <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
            <Carousel />
		</>
	);
}

export default HomePage;