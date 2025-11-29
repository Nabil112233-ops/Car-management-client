import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { motion } from "framer-motion";
import { AuthContext } from '../Components/Provider/AuthProvider';
import { toast } from 'react-toastify';

const CarDetails = () => {

    const { id } = useParams();
    const [cars, setCars] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/car/${id}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [id])

    const { carName, description, category, rentPrice, location, imageURL, providerName, providerEmail, status } = cars;

    const handleBook = () => {
        const bookingInfo = {
            carID: id,
            carName,
            imageURL,
            rentPrice,
            providerEmail,
            bookedBy: user?.email,
            date: new Date().toLocaleString()
        }

        fetch('http://localhost:5000/car-booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Car booked successfully!')

                    fetch(`http://localhost:5000/update-status/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ status: 'unavailable' })
                    })
                        .then(res => res.json())
                        .then(() => {
                            setCars(prev => ({ ...prev, status: 'unavailable' }))
                        })
                }
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-10 px-4 relative overflow-hidden">

            {/* 🌈 Floating Soft Lights */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 blur-[150px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 blur-[150px] opacity-40 animate-pulse"></div>

            {/* 🌟 Glassmorphism Card */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto backdrop-blur-xl bg-white/70 border border-white/50 shadow-2xl rounded-3xl overflow-hidden relative"
            >

                {/* Neon Border Animation (light toned) */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent animate-glow-light pointer-events-none"></div>

                {/* Hero Image */}
                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    src={imageURL}
                    alt={carName}
                    className="w-full h-[380px] object-cover rounded-t-3xl"
                />

                {/* Content */}
                <div className="p-8 text-gray-800 space-y-6">

                    {/* Title */}
                    <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {carName}
                    </h1>

                    <p className="text-gray-700 text-lg leading-relaxed">{description}</p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Car Information */}
                        <div className="bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Car Information</h3>

                            <p><span className="text-gray-500">Category:</span> {category}</p>
                            <p><span className="text-gray-500">Location:</span> {location}</p>
                            <p>
                                <span className="text-gray-500">Rent Price:</span>{" "}
                                <span className="text-blue-600 font-semibold">৳{rentPrice} / day</span>
                            </p>
                            <p>
                                <span className="text-gray-500">Status:</span>{" "}
                                <span className={status === "available" ? "text-green-600" : "text-red-600"}>
                                    {status}
                                </span>
                            </p>
                        </div>

                        {/* Provider Info */}
                        <div className="bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Provider Information</h3>

                            <p><span className="text-gray-500">Name:</span> {providerName}</p>
                            <p><span className="text-gray-500">Email:</span> {providerEmail}</p>
                        </div>

                    </div>

                    {/* Book Now Button */}
                    <motion.button
                        whileHover={{ scale: 1.07, boxShadow: "0 0 20px #60a5fa" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBook}
                        disabled={status === 'unavailable'}
                        className={`w-full mt-6 py-4 rounded-xl text-white font-semibold text-xl shadow-xl transition-all 
                            ${status === "unavailable"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-purple-300/60"}`}
                    >
                        Book Now
                    </motion.button>

                </div>
            </motion.div>
        </div>
    );
};

export default CarDetails;