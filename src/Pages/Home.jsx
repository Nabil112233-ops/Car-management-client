import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedCars from '../Components/FeaturedCars';
import WhyRentWithUs from '../Components/RentWithUs';
import BookingProcess from '../Components/BookingSys';
import CustomerFeedback from '../Components/Feedback';
import LatestBlog from '../Components/LatestBlog';
const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FeaturedCars></FeaturedCars>
            <WhyRentWithUs></WhyRentWithUs>
            <BookingProcess></BookingProcess>
            <CustomerFeedback></CustomerFeedback>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;