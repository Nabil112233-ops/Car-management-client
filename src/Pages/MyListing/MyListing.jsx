import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import UpdateModal from './UpdateModal';
import ConfirmDeleteModal from './Deleted';
import { Link } from 'react-router';

const MyListing = () => {

    const { user } = useContext(AuthContext)
    const [cars, setCars] = useState([])
    const [selectedCar, setSelectedCar] = useState(null);
    const [deleteCar, setDeleteCar] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/my-listings?providerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setCars(data))
    }, [user])


    return (
        <div className="p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">My Listings</h1>

            {/* 🔥 EMPTY STATE UI */}
            {cars.length === 0 && (
                <div className="flex flex-col items-center justify-center mt-20 text-center">
                    <img
                        src="https://i.ibb.co.com/gLydNNYT/9315312.jpg"
                        alt="empty"
                        className="w-64 mb-6 animate-pulse"
                    />
                    <h2 className="text-2xl font-semibold text-gray-700">
                        No Cars Listed Yet
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You haven't added any cars to your listings. Start by adding a new car!
                    </p>

                    <Link to='/add-car' className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl">
                        + Add New Car
                    </Link>
                </div>
            )}

            {/* 🔥 LIST VIEW */}
            {cars.length > 0 && (
                <div className="overflow-x-auto rounded-xl shadow-lg">
                    <table className="w-full bg-white">
                        <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Car Name</th>
                                <th className="py-3 px-4 text-left">Category</th>
                                <th className="py-3 px-4 text-left">Rent Price</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cars.map((car) => (
                                <tr
                                    key={car._id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="py-3 px-4">{car.carName}</td>
                                    <td className="py-3 px-4">{car.category}</td>
                                    <td className="py-3 px-4">{car.rentPrice} ৳</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${car.status === "Booked"
                                                    ? "bg-red-100 text-red-600"
                                                    : "bg-green-100 text-green-600"
                                                }`}
                                        >
                                            {car.status}
                                        </span>
                                    </td>

                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => setSelectedCar(car)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-2"
                                        >
                                            Update
                                        </button>

                                        <button
                                            onClick={() => setDeleteCar(car)}
                                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* 🔥 Update Modal */}
            {selectedCar && (
                <UpdateModal car={selectedCar} setCars={setCars} setSelectedCar={setSelectedCar} />
            )}

            {/* 🔥 Delete Modal */}
            {deleteCar && (
                <ConfirmDeleteModal car={deleteCar} setCars={setCars} setDeleteCar={setDeleteCar} />
            )}
        </div>
    );
};

export default MyListing;