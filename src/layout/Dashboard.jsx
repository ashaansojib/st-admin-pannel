import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='max-w-screen-md mx-auto'>
            {/* <div className='md:grid grid-cols-5 p-2'>
                <Aside />
                <div className='col-span-4'>
                    <div className='hidden md:block'>
                    <Header />
                    </div>
                    <Outlet />
                </div>
            </div>
            <Footer /> */}
            <div>
                <Header />
                {
                    location.pathname == '/' ? <Aside /> : <Outlet />
                }
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;