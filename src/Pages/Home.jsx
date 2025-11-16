import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedCar from '../Components/FeaturedCar';
import WhyRentWithUs from '../Components/RentWithUs';
import BookingProcess from '../Components/BookingSys';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FeaturedCar></FeaturedCar>
            <WhyRentWithUs></WhyRentWithUs>
            <BookingProcess></BookingProcess>
        </div>
    );
};

export default Home;