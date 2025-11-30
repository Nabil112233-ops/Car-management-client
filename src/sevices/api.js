import { b } from "framer-motion/client";
import { apiClient } from "../apiClient";

export const API = {
    login: (data) => apiClient("/login", { method: "POST", body: data }),
    register: (data) => apiClient("/register", { method: "POST", body: data }),
    addCar: (data) => apiClient("/add-car", { method: "POST", body: data }),

    getFeatured: () => apiClient("/featuredCars"),
    getBrowseCars: () => apiClient("/browse-cars"),

    getMyListings: (email) => apiClient(`/my-listings/${email}`),

    updateCar: (id, data) =>
        apiClient(`/update-car/${id}`, { method: "PUT", body: data }),

    deleteCar: (id) =>
        apiClient(`/delete-car/${id}`, { method: "DELETE" }),

    bookCar: (data) => apiClient("/book-car", { method: "POST", body: data }),

    getMyBookings: (email) => apiClient(`/my-bookings/${email}`),

    updateCarStatus: (id, data) => apiClient(`/update-status/${id}`, { method: "PATCH", body: data }),

    carBooking: (data) => apiClient("/car-booking", { method: "POST", body: data }),
};
