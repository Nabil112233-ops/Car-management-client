import React, { useContext, useState } from 'react';
import { motion } from "framer-motion";
import { AuthContext } from '../Components/Provider/AuthProvider';
import { toast } from 'react-toastify';
import { API } from '../sevices/api';

const AddCar = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleAddCar = (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        const newCar = {
            carName: form.carName.value,
            description: form.description.value,
            category: form.category.value,
            rentPrice: form.rentPrice.value,
            location: form.location.value,
            imageURL: form.imageURL.value,
            status: "available",
            providerName: user?.displayName,
            providerEmail: user?.email,
        };

        API.addCar(newCar).then((res) => {
            setLoading(false);
            console.log('Add car response:', res);
            if (res.id) {
                console.log('Car added with ID:', res.id);
                toast.success("Car added successfully!");
                form.reset();
            }
        });
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Background Glow (Safe for click) */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 blur-[120px] opacity-40 animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 blur-[120px] opacity-40 animate-pulse pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 rounded-3xl p-6 sm:p-10 relative"
            >

                {/* Neon Border Overlay - FIXED */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent animate-glow-light pointer-events-none"></div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-8">
                    Add a New Car
                </h1>

                {/* Form */}
                <form
                    onSubmit={handleAddCar}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {/* Car Name */}
                    <div className="sm:col-span-2">
                        <label className="font-semibold text-gray-700">Car Name</label>
                        <input
                            type="text"
                            name="carName"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter car name"
                        />
                    </div>

                    {/* Description */}
                    <div className="sm:col-span-2">
                        <label className="font-semibold text-gray-700">Description</label>
                        <textarea
                            name="description"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 h-32 focus:ring-2 focus:ring-blue-400"
                            placeholder="Write car description..."
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="font-semibold text-gray-700">Category</label>
                        <select
                            name="category"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    {/* Rent Price */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Rent Price (Per Day)
                        </label>
                        <input
                            type="number"
                            name="rentPrice"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter rent price"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
                            placeholder="Enter location"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="font-semibold text-gray-700">
                            Car Image URL
                        </label>
                        <input
                            type="url"
                            name="imageURL"
                            required
                            className="w-full mt-2 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-400"
                            placeholder="Paste image URL"
                        />
                    </div>

                    {/* Provider Name */}
                    <div>
                        <label className="font-semibold text-gray-700">Provider Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="w-full mt-2 p-4 rounded-xl border bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Provider Email */}
                    <div>
                        <label className="font-semibold text-gray-700">Provider Email</label>
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            className="w-full mt-2 p-4 rounded-xl border bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="sm:col-span-2">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-semibold shadow-lg"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Adding..." : "Add Car"}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddCar;