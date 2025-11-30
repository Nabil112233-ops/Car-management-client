import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import BrowseCar from './Pages/BrowseCar.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Register from './Pages/Register.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Private Route/PrivateRoute.jsx';
import CarDetails from './Pages/CarDetails.jsx';
import AddCar from './Pages/AddCar.jsx';
import MyListings from './Pages/MyListings/MyListings.jsx';
import MyBooking from './Pages/MyBooking.jsx';
import NotFound from './Pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/browse-cars',
        element: <BrowseCar></BrowseCar>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/car/:id',
        element: <PrivateRoute>
          <CarDetails></CarDetails>
        </PrivateRoute>
      },
      {
        path: '/add-car',
        element: <PrivateRoute>
          <AddCar></AddCar>
        </PrivateRoute>
      },
      {
        path: '/my-listings',
        element: <PrivateRoute>
          <MyListings></MyListings>
        </PrivateRoute>
      },
      {
        path: '/my-booking',
        element: <PrivateRoute>
          <MyBooking></MyBooking>
        </PrivateRoute>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
