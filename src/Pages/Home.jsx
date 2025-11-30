import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedCar from '../Components/FeaturedCar';
import WhyRentWithUs from '../Components/RentWithUs';
import BookingProcess from '../Components/BookingSys';
import CustomerFeedback from '../Components/Feedback';
import LatestBlog from '../Components/LatestBlog';
import SearchImplement from '../Components/SearchImplement';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FeaturedCar></FeaturedCar>
            <WhyRentWithUs></WhyRentWithUs>
            <BookingProcess></BookingProcess>
            <CustomerFeedback></CustomerFeedback>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;