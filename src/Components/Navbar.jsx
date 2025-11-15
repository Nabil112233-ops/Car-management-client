import React, { useState } from 'react';
import logo from '../assets/Beige_Black_Simple_Modern_Car_Rental_Logo-removebg-preview.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Left Logo */}
                <div className='flex items-center'>
                    <img className='w-14 h-14' src={logo} alt="HireGari Logo" />
                    <div className="text-xl font-bold cursor-pointer">
                        HireGari
                    </div>
                </div>

                {/* Middle Desktop Menu */}
                <div className="hidden md:flex gap-6 text-lg">
                    <span className="hover:text-blue-500 cursor-pointer">Home</span>
                    <span className="hover:text-blue-500 cursor-pointer">Add Car</span>
                    <span className="hover:text-blue-500 cursor-pointer">My Listings</span>
                    <span className="hover:text-blue-500 cursor-pointer">My Bookings</span>
                    <span className="hover:text-blue-500 cursor-pointer">Browse Cars</span>
                </div>

                {/* Right side Profile/Login (dummy only) */}
                <div className="relative">
                    {/* Demo profile image */}
                    <img
                        src="https://i.pravatar.cc/50"
                        alt="Profile"
                        onClick={() => setDropdown(!dropdown)}
                        className="w-10 h-10 rounded-full cursor-pointer border"
                    />

                    {/* Dropdown */}
                    {dropdown && (
                        <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-48 p-3 z-50">
                            <p className="font-semibold">User Name</p>
                            <p className="text-sm text-gray-600">user@email.com</p>

                            <button className="mt-3 w-full bg-red-500 text-white py-1 rounded">
                                Log Out
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md p-4 flex flex-col gap-3 text-lg">
                    <span className="hover:text-blue-500 cursor-pointer">Home</span>
                    <span className="hover:text-blue-500 cursor-pointer">Add Car</span>
                    <span className="hover:text-blue-500 cursor-pointer">My Listings</span>
                    <span className="hover:text-blue-500 cursor-pointer">My Bookings</span>
                    <span className="hover:text-blue-500 cursor-pointer">Browse Cars</span>

                    {/* Mobile Profile info */}
                    <div className="flex flex-col gap-2 mt-3">
                        <p className="font-semibold">User Name</p>
                        <p className="text-sm">user@email.com</p>
                        <button className="bg-red-500 text-white py-1 rounded-md w-max px-3">
                            Log Out
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;