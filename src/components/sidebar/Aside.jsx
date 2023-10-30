import React, { useEffect, useState } from 'react';
import { FaStoreAlt, FaUserAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Customers from '../customerLists/Customers';
import { useGetCustomerQuery } from '../../redux/features/api/baseApi';

const Aside = () => {
    const { data: customers, isLoading, isError } = useGetCustomerQuery();
    console.log(customers)
    return (
        <aside className='overflow-y-auto h-full'>
            <h2 className='text-2xl font-semibold'>ST Manage App</h2>
            <nav className='text-gray-700 pe-2'>
                <p className='text-sm text-blue-600'>Customer Lists</p>
                {
                    isLoading ? 'Loading..' : customers?.map(item => <Customers
                        key={item._id}
                        item={item}
                    ></Customers>)
                }
                {/* other lists in side */}
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaStoreAlt />
                        Packages Stock
                    </div>
                </NavLink>
                <NavLink to='admin/manage-users' className={({ isActive }) => isActive ? 'active' : 'default'}>
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