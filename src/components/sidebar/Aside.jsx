import React from 'react';
import { FaStoreAlt, FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Customers from '../customerLists/Customers';
import { useGetCustomerQuery } from '../../redux/features/api/baseApi';
import { Skeleton } from '@mui/material';

const Aside = () => {
    const { data: customers, isLoading, isError } = useGetCustomerQuery();
    return (
        <aside className='overflow-y-auto h-full'>
            
            <nav className='text-gray-700 px-2'>
                {
                    isLoading ? <>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} /></> : customers?.map(item => <Customers
                            key={item._id}
                            item={item}
                        ></Customers>)
                }
                {/* other lists in side
                <NavLink to='/' className={({ isActive }) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaStoreAlt />
                        Packages Stock
                    </div>
                </NavLink>
                <NavLink to='/manage-customer' className={({ isActive }) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaUserEdit />
                        Manage Customer
                    </div>
                </NavLink>
                <NavLink to='admin/manage-users' className={({ isActive }) => isActive ? 'active' : 'default'}>
                    <div className='flex items-center gap-3 font-medium py-2 border-b'>
                        <FaUserAlt />
                        Manage Users
                    </div>
                </NavLink> */}
            </nav>
        </aside>
    );
};

export default Aside;