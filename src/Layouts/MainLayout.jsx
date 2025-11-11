import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Pages/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;