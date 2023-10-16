import React from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside>
            <h2 className='text-2xl font-semibold'>Management</h2>
            <nav className='text-gray-700'>
                <p className='text-sm'>Main Menu</p>
                <NavLink to='/dashboard'>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaFileAlt />
                        Product List
                    </div>
                </NavLink>
                <NavLink to='/dashboard'>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaFileAlt />
                        Add Product
                    </div>
                </NavLink>
            </nav>
        </aside>
    );
};

export default Aside;