import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const Dashboard = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Dashboard;