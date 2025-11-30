import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { motion } from "framer-motion";

const MyBooking = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        API.getMyBookings(user.email).then(setBookings);
    }, [user?.email]);


    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6">

            <h1 className="text-4xl font-bold text-center mb-8 p-4
                bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Bookings
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                {bookings.map((book, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white shadow-xl rounded-2xl p-5 border border-gray-200 
                            hover:shadow-blue-200 transition-all"
                    >
                        <img
                            src={book.imageURL}
                            alt=""
                            className="w-full h-52 object-cover rounded-xl mb-4"
                        />

                        <h3 className="text-xl font-bold">{book.carName}</h3>

                        <p className="text-gray-600 mt-1">
                            Rent: <span className="font-semibold text-blue-600">৳{book.rentPrice}</span>
                        </p>

                        <p className="text-gray-600">
                            Provider: {book.providerEmail}
                        </p>

                        <p className="text-gray-500 text-sm mt-2">Booked On: {book.date}</p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                                text-white rounded-lg shadow-md"
                        >
                            View Details
                        </motion.button>
                    </motion.div>
                ))}

            </div>
        </div>
    );
};

export default MyBooking;