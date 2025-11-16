import { motion } from "framer-motion";
import { Car, Wallet, ShieldCheck, Headphones } from "lucide-react";

const WhyRentWithUs = () => {
    const features = [
        {
            icon: <Car className="w-12 h-12 text-blue-600" />,
            title: "Easy Booking",
            desc: "Book any car within seconds through our fast and smooth booking process.",
        },
        {
            icon: <Wallet className="w-12 h-12 text-blue-600" />,
            title: "Affordable Rates",
            desc: "We offer competitive prices with top-quality service for every customer.",
        },
        {
            icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
            title: "Trusted Providers",
            desc: "All vehicles come from verified and trusted owners for your safety.",
        },
        {
            icon: <Headphones className="w-12 h-12 text-blue-600" />,
            title: "24/7 Support",
            desc: "Our team is available anytime to help with issues or questions.",
        },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-14"
                >
                    Why Rent With <span className="text-blue-600">Us?</span>
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
                        >
                            <div className="mb-4 flex justify-center">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-center mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm text-center">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyRentWithUs;
