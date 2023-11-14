import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';
import { FaBars, FaHome, FaPlus } from 'react-icons/fa';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='max-w-screen-md mx-auto h-full bg-slate-50 relative'>
            <Header />
            <div className='h-[480px] overflow-y-auto pb-2'>
                {
                    location.pathname == '/' ? <Aside /> : <Outlet />
                }
            </div>
            {/* <Footer /> */}
            <div className='absolute bottom-20 p-3 w-full bg-slate-400'>
                <div className='flex gap-2 justify-end items-center'>
                    <Link to="/" className='p-2 bg-blue-600 text-white rounded-md '><FaHome /></Link>
                    <button className='p-2 bg-blue-600 text-white rounded-md '><FaPlus /></button>
                    <button className='p-2 bg-blue-600 text-white rounded-md '><FaBars /></button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;