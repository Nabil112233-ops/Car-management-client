import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedCar from '../Components/FeaturedCar';
import WhyRentWithUs from '../Components/RentWithUs';
import BookingProcess from '../Components/BookingSys';
import CustomerFeedback from '../Components/Feedback';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FeaturedCar></FeaturedCar>
            <WhyRentWithUs></WhyRentWithUs>
            <BookingProcess></BookingProcess>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;