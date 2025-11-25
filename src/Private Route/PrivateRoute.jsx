import React, { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white/90 p-6 rounded-lg flex items-center gap-4 shadow-lg">
                <span className="loading loading-ring loading-xl"></span>
                <span className="text-gray-800 font-medium">Loading...</span>
            </div>
        </div>
    }
    if (user && user.emailVarified) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} ></Navigate>

};

export default PrivateRoute;