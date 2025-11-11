import React from 'react';
import logo from '../assets/Beige_Black_Simple_Modern_Car_Rental_Logo-removebg-preview.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 grid-cols-1 gap-10">

                {/* Logo + Website Name */}
                <div>
                    <div className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-15 h-15 rounded-full bg-white"
                        />
                        <h2 className="text-2xl font-bold">HireGari</h2>
                    </div>
                    <p className="text-gray-300 mt-3">
                        Your reliable platform for renting and listing cars easily.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact Info</h3>
                    <p className="text-gray-300">Phone: +880 1234-000000</p>
                    <p className="text-gray-300">Email: support@hiregari.com</p>
                    <p className="text-gray-300">Address: Dhaka, Bangladesh</p>
                </div>

                {/* Terms & Conditions */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Links</h3>
                    <p className="text-gray-300 cursor-pointer hover:text-blue-400">
                        Terms & Conditions
                    </p>
                    <p className="text-gray-300 cursor-pointer hover:text-blue-400">
                        Privacy Policy
                    </p>
                    <p className="text-gray-300 cursor-pointer hover:text-blue-400">
                        FAQ
                    </p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
                    <div className="flex flex-col gap-2 text-xs">
                        <div className='flex items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/3d-fluency/94/facebook-logo.png" alt="" />
                            <a href="#" className="hover:text-blue-400">Facebook</a>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="" />
                            <a href="#" className="hover:text-blue-400">Instagram</a>
                        </div>
                        <div className='flex items-center'>
                            <img className='w-10 h-10' src="https://img.icons8.com/3d-fluency/94/twitter-circled--v1.png" alt="" />
                            <a href="#" className="hover:text-blue-400">Twitter</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom line */}
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400">
                © 2025 HireGari. All Rights Reserved.
            </div>
        </footer>
    );
};
export default Footer;