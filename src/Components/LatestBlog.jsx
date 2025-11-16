import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
    {
        title: "How to Choose the Perfect Rental Car",
        desc: "Learn how to select the ideal car that fits your needs, budget, and comfort level.",
        image:
            "https://i.ibb.co.com/Pz6bdycm/download-1.jpg",
    },
    {
        title: "Tips for Long-Distance Travel",
        desc: "Prepare yourself for safe and comfortable long-distance trips with these useful tips.",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    },
    {
        title: "Best Cars for Family Trips",
        desc: "Find the most spacious, comfortable, and reliable cars for your next family vacation.",
        image:
            "https://i.ibb.co.com/DPWZRrxS/download.jpg",
    },
];

const LatestBlog = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Latest <span className="text-blue-600">Blog & Tips</span>
                </motion.h2>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-white shadow-md hover:shadow-xl rounded-2xl overflow-hidden group transition"
                        >
                            {/* Image */}
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    {blog.desc}
                                </p>

                                {/* Read More Button */}
                                <button className="flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
                                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default LatestBlog;