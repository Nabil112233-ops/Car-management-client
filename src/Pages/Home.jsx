import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedCar from '../Components/FeaturedCar';
import WhyRentWithUs from '../Components/RentWithUs';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FeaturedCar></FeaturedCar>
            <WhyRentWithUs></WhyRentWithUs>
        </div>
    );
};

export default Home;