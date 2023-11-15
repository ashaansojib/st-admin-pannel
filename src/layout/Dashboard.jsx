import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='dashboard'>
            <Header />
            {
                location.pathname == '/' ? <Aside /> : <Outlet />
            }
        </div>
    );
};

export default Dashboard;