import React, { useContext, useState } from 'react';
import logo from '../assets/Beige_Black_Simple_Modern_Car_Rental_Logo-removebg-preview.png';
import { Link } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const { user, setUser, signOut } = useContext(AuthContext)

    const handleSignOut = () => {
        signOut()
            .then(res => {
                setUser(null)
                toast.success('Sign out succesfully')
            })
            .catch(() => {
                toast.error('Please try again later')
            })
    }

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Left Logo */}
                <div>
                    <Link to="/" className='flex items-center'>
                        <img className='w-14 h-14' src={logo} alt="HireGari Logo" />
                        <div className="text-xl font-bold cursor-pointer">
                            HireGari
                        </div>
                    </Link>
                </div>

                {/* Middle Desktop Menu */}
                <div className="hidden md:flex gap-6 text-lg">
                    <Link to="/" className="hover:text-blue-500 font-bold cursor-pointer">Home</Link>
                    {
                        user &&
                        <div className='flex gap-6'>
                            <Link to='/add-car' className="hover:text-blue-500 font-bold cursor-pointer">Add Car</Link>
                            <Link to='/my-listings' className="hover:text-blue-500 font-bold cursor-pointer">My Listings</Link>
                            <Link className="hover:text-blue-500 font-bold cursor-pointer">My Bookings</Link>
                        </div>
                    }
                    <Link to="/browse-cars" className="hover:text-blue-500 font-bold cursor-pointer">Browse Cars</Link>
                </div>

                {/* Right side Profile/Login (dummy only) */}
                <div>
                    {
                        user ?
                            (<div className="relative">
                                {/* Demo profile image */}
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    onClick={() => setDropdown(!dropdown)}
                                    className="w-10 h-10 rounded-full cursor-pointer border"
                                />

                                {/* Dropdown */}
                                {dropdown && (
                                    <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-48 p-3 z-50">
                                        <p className="font-semibold">{user.displayName}</p>
                                        <p className="text-sm text-gray-600">{user.email}</p>

                                        <button onClick={handleSignOut} className="mt-3 w-full bg-red-500 text-white py-1 rounded">
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                            ) : (
                                <div className='hidden md:flex items-center justify-center'>
                                    <Link
                                        to='/login'
                                        className="relative px-5 py-2 m-2 text-blue-500 font-bold text-lg rounded-full overflow-hidden shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        <div className="animated-gradient-bg"></div>
                                        <span className="relative z-10">Login</span>
                                    </Link>
                                    <Link
                                        to='/register'
                                        className="relative px-5 py-2 m-2 text-blue-500 font-bold text-lg rounded-full overflow-hidden shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        <div className="animated-gradient-bg"></div>
                                        <span className="relative z-10">Register</span>
                                    </Link>
                                </div>
                            )
                    }
                </div>


                <div>

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
                    <Link to='/' className="hover:text-blue-500 font-bold cursor-pointer">Home</Link>
                    {
                        user &&
                        <div className='flex gap-6'>
                            <Link to='/add-car' className="hover:text-blue-500 font-bold cursor-pointer">Add Car</Link>
                            <Link to='/my-listings' className="hover:text-blue-500 font-bold cursor-pointer">My Listings</Link>
                            <Link className="hover:text-blue-500 font-bold cursor-pointer">My Bookings</Link>
                        </div>
                    }
                    <Link to='/browse-cars' className="hover:text-blue-500 font-bold cursor-pointer">Browse Cars</Link>

                    {/* Mobile Profile info */}
                    {
                        user ? (
                            <div className="flex flex-col gap-2 mt-3">
                                <p className="font-semibold">{user.displayName}</p>
                                <p className="text-sm">{user.email}</p>
                                <button onClick={handleSignOut} className="bg-red-500 text-white py-1 rounded-md w-max px-3">
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <div className='flex items-center justify-center'>
                                <Link
                                    to='/login'
                                    className="relative px-5 py-2 m-2 text-blue-500 font-bold text-lg rounded-full overflow-hidden shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <div className="animated-gradient-bg"></div>
                                    <span className="relative z-10">Login</span>
                                </Link>
                                <Link
                                    to='/register'
                                    className="relative px-5 py-2 m-2 text-blue-500 font-bold text-lg rounded-full overflow-hidden shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                                >
                                    <div className="animated-gradient-bg"></div>
                                    <span className="relative z-10">Register</span>
                                </Link>
                            </div>
                        )
                    }

                </div>
            )}
        </nav>
    );
};

export default Navbar;