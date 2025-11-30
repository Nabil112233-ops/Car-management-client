import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden px-4">

            {/* Floating Lights */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 blur-[150px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 blur-[150px] opacity-40 animate-pulse"></div>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-10 max-w-lg text-center"
            >
                {/* Number Animation */}
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    404
                </motion.h1>

                <p className="mt-4 text-gray-600 text-lg">
                    Oops! The page you're looking for doesn't exist.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <Link
                        to="/"
                        className="inline-block mt-6 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:shadow-blue-300/50 transition-transform hover:scale-105"
                    >
                        Go Back Home
                    </Link>
                </motion.div>
            </motion.div>

            {/* Moving Circles Animation */}
            <motion.div
                className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-40"
                animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
                transition={{ repeat: Infinity, duration: 10 }}
            />

            <motion.div
                className="absolute w-16 h-16 bg-purple-200 rounded-full opacity-40"
                animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
                transition={{ repeat: Infinity, duration: 12 }}
            />
        </div>
    );
};

export default NotFound;