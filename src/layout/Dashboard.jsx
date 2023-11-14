import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/shared/Header';
import Aside from '../components/sidebar/Aside';
import { FaBars, FaHome, FaPlus } from 'react-icons/fa';

const Dashboard = () => {
    const location = useLocation();
    const [arrow, setArrow] = useState(true);
    const handleOpenMenu = () =>{
        setArrow(!arrow)
    }
    return (
        <div className='max-w-md mx-auto h-screen bg-slate-50 relative'>
            <Header />
            <div className='h-[440px] overflow-y-auto'>
                {
                    location.pathname == '/' ? <Aside /> : <Outlet />
                }
            </div>
            <div className='p-3 w-full bg-slate-400 absolute bottom-0 right-0'>
                <div className='flex gap-2 justify-end items-center'>
                    <Link to="/" className='p-2 bg-blue-600 text-white rounded-md '><FaHome /></Link>
                    <button className='p-2 bg-blue-600 text-white rounded-md '><FaPlus /></button>
                    <button className='p-2 bg-blue-600 text-white rounded-md '><FaBars /></button>
                </div>
            </div>
            <div className={`absolute bg-gray-50 top-16 border ${arrow ? 'hidden' : 'block'}`}>
                    <div className="py-2 px-3 flex items-center gap-2">
                        <div>
                            <p className="font-medium">Ashaduzzaman</p>
                            <span className="text-blue-600 text-center text-[13px]">Administrator</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;