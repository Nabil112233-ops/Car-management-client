import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Loading from './Loading/Loading';

const FeaturedCar = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/featuredCars')
            .then(res => res.json())
            .then(data => setCars(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className='grid grid-cols-1 gap-6'>
            <Loading></Loading>
        </div>
    }

    

    const cardCars = cars.map(car => {
        const { carName, _id, imageURL, rentPrice, category, providerName, status } = car;
        return (
                <div
                    key={_id}
                    className="bg-white shadow-md rounded-xl p-4 flex flex-col relative"
                >
                    <span className={`absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full ${status === "available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {status}
                    </span>
                    <img className='w-[368px] h-[250px] duration-300 bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all' src={imageURL} alt="" />
                    <h3 className="text-xl font-semibold">{carName}</h3>

                    <p className="text-gray-700 mt-2">
                        <span className="font-semibold">৳{rentPrice}</span> / day
                    </p>

                    <p className="text-gray-500">Model: {category}</p>
                    <p className="text-gray-500">Provider: {providerName}</p>

                    <Link
                        to={`/car/${car._id}`}
                        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition"
                    >
                        View Details
                    </Link>
                </div>
        );
    });
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Featured Cars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardCars}
            </div>
        </section>
    )
};

export default FeaturedCar;