import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading/Loading';
import { div } from 'framer-motion/client';

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <div className='flex flex-col min-h-screen'>
            {navigation.state === 'loading' && (<div className='fixed inset-0 z-[9999] bg-white/80 backdrop-blur-sm flex justify-center items-center'><Loading></Loading></div>)}
            <Navbar></Navbar>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;