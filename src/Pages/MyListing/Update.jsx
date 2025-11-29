import React, { useState } from 'react';

const Update = ({ car, setCars, setSelectedCar }) => {

    const [formData, setFormData] = useState(car)

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/update-car/${car._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                setCars(prev => prev.map(c => c._id === car._id ? { ...c, ...formData } : c))
                setSelectedCar(null)
            })
    }


    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center animate-fadeIn">
            <div className="bg-white p-8 rounded-xl w-full max-w-xl shadow-2xl animate-zoomIn">
                <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
                    Update Car Info
                </h2>

                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        type="text"
                        className="w-full p-3 rounded-lg border"
                        defaultValue={car.carName}
                        onChange={(e) =>
                            setFormData({ ...formData, carName: e.target.value })
                        }
                    />

                    <textarea
                        className="w-full p-3 rounded-lg border"
                        defaultValue={car.description}
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                        }
                    />

                    <input
                        type="number"
                        className="w-full p-3 rounded-lg border"
                        defaultValue={car.rentPrice}
                        onChange={(e) =>
                            setFormData({ ...formData, rentPrice: e.target.value })
                        }
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Update Now
                    </button>

                    <button
                        onClick={() => setSelectedCar(null)}
                        className="w-full py-2 text-gray-600 hover:text-red-500"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;