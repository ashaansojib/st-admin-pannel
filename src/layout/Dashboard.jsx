import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';
import { FaDownload } from 'react-icons/fa';

const Dashboard = () => {
    const location = useLocation();
    return (
        <div className='max-w-screen-md mx-auto max-h-screen bg-slate-50'>
            <div className=''>
                <Header />
                {
                    location.pathname == '/' ? <Aside /> : <Outlet />
                }
            </div>
            {/* <Footer /> */}
            <div>
                <button className='p-2 bg-blue-600 text-white rounded-md flex items-center gap-2'><FaDownload /> Download</button>
            </div>
        </div>
    );
};

export default Dashboard;