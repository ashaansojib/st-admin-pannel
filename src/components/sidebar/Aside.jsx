import React from 'react';
import { FaFileAlt, FaPen, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside>
            <h2 className='text-2xl font-semibold'>Management</h2>
            <nav className='text-gray-700'>
                <p className='text-sm'>Main Menu</p>
                <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to='/all-products'>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaFileAlt />
                        Product List
                    </div>
                </NavLink>
                <NavLink to='/add-product' className={({isActive}) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaPen />
                        Add Product
                    </div>
                </NavLink>
                <NavLink to='/manage-users' className={({isActive}) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaUserAlt />
                        Manage Users
                    </div>
                </NavLink>
            </nav>
        </aside>
    );
};

export default Aside;