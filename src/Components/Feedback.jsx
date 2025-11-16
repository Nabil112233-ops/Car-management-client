import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "John Doe",
        feedback:
            "Amazing service! The booking process was smooth and the car was in perfect condition.",
        location: "Dhaka, Bangladesh",
    },
    {
        name: "Sarah Khan",
        feedback:
            "Very affordable and trustworthy service. I will definitely rent again!",
        location: "Chittagong, Bangladesh",
    },
    {
        name: "Michael Smith",
        feedback:
            "Great customer support and easy pickup process. Highly recommended!",
        location: "Sylhet, Bangladesh",
    },
];

const CustomerFeedback = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(autoSlide);
    }, []);

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center mb-10">
                    What Our <span className="text-blue-600">Customers Say</span>
                </h2>

                <div className="relative h-40 sm:h-48 lg:h-52 flex items-center justify-center">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-6 rounded-2xl shadow-lg w-full text-center"
                        >
                            <p className="text-gray-700 text-lg italic mb-4">
                                "{testimonials[index].feedback}"
                            </p>
                            <h3 className="text-xl font-semibold">{testimonials[index].name}</h3>
                            <p className="text-gray-500 text-sm">{testimonials[index].location}</p>
                        </motion.div>
                    </AnimatePresence>

                </div>

            </div>
        </div>
    );
};

export default CustomerFeedback;