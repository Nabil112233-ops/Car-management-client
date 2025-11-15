import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            "id": 1,
            "title": "Drive Your Dream Car",
            "description": "Affordable and flexible car rentals for daily commutes, trips, and business.",
            "image": "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
        },
        {
            "id": 2,
            "title": "Wide Range of Cars",
            "description": "Choose from economy, luxury, SUV, and family cars suited to your needs.",
            "image": "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
        },
        {
            "id": 3,
            "title": "Easy Booking Process",
            "description": "Book your car in minutes with our fast and secure online reservation system.",
            "image": "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
        }
    ]

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };


    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-xl">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-10 text-white">
                        <h2 className="text-4xl font-bold mb-3">{slide.title}</h2>
                        <p className="text-lg max-w-xl">{slide.description}</p>
                    </div>
                </div>
            ))}


            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/50 p-3 rounded-full backdrop-blur hover:bg-white"
            >
                <ChevronLeft />
            </button>


            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/50 p-3 rounded-full backdrop-blur hover:bg-white"
            >
                <ChevronRight />
            </button>
        </div>
    );
};

export default HeroSlider;