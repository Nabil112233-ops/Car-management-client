import { motion } from "framer-motion";
import { Car, CalendarDays, CheckCircle, KeyRound } from "lucide-react";

const BookingProcess = () => {
    const steps = [
        {
            icon: <Car className="w-12 h-12 text-blue-600" />,
            title: "Choose Your Car",
            desc: "Browse our collection and pick the perfect car for your needs.",
        },
        {
            icon: <CalendarDays className="w-12 h-12 text-blue-600" />,
            title: "Select Date & Time",
            desc: "Pick your preferred rental dates and schedule easily.",
        },
        {
            icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
            title: "Confirm Your Booking",
            desc: "Review your details and complete the reservation securely.",
        },
        {
            icon: <KeyRound className="w-12 h-12 text-blue-600" />,
            title: "Pick Up & Drive",
            desc: "Collect the car and enjoy a smooth, comfortable ride.",
        },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    How It <span className="text-blue-600">Works</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-center mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-center text-sm">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingProcess;