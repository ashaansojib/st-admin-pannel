import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';

const Dashboard = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-5 p-2'>
                <Aside />
                <div className='col-span-4'>
                    <Header />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;