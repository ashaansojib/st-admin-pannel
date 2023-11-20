import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const navBar = <>
        <NavLink className={({isActive})=>{isActive ? 'active' : 'default'}} to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </>
    return (
        <div className='p-2'>
            <div className="my-container flex justify-between items-center">
                <Link to="/" className='text-2xl font-semibold'>Applify</Link>
                <div>
                    {navBar}
                </div>
                <button className='my-btn'>Download</button>
            </div>
        </div>
    );
};

export default Header;