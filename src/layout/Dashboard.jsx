import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <p>Dashboard</p>
            <Outlet />
        </div>
    );
};

export default Dashboard;