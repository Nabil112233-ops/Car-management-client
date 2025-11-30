import React from 'react';
import { toast } from 'react-toastify';

const Deleted = ({ car, setDeleteCar, setCars }) => {

    const handleDelete = () => {
        fetch(`http://localhost:5000/delete-car/${car._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                setCars(prevCars => prevCars.filter(c => c._id !== car._id))
                toast.success('Car deleted successfully!');
                setDeleteCar(null);
            })
    }

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center animate-fadeIn">
            <div className="bg-white p-8 rounded-xl w-full max-w-md text-center shadow-xl animate-zoomIn">
                <h2 className="text-2xl font-bold text-gray-800">
                    Are you sure you want to delete?
                </h2>
                <p className="mt-3 text-gray-600">
                    Car: <b>{car.carName}</b>
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={handleDelete}
                        className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Yes, Delete
                    </button>

                    <button
                        onClick={() => setDeleteCar(null)}
                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deleted;