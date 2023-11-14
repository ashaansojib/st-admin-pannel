import React from 'react';
import { FaStoreAlt, FaUserAlt, FaUserEdit } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Customers from '../customerLists/Customers';
import { useGetCustomerQuery } from '../../redux/features/api/baseApi';
import { Skeleton } from '@mui/material';

const Aside = () => {
    const { data: customers, isLoading, isError } = useGetCustomerQuery();
    return (
        <aside className='overflow-hideen h-full'>
            <nav className='text-gray-700 px-2 overflow-y-auto'>
                {
                    isLoading ? <>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} /></> : customers?.map(item => <Customers
                            key={item._id}
                            item={item}
                        ></Customers>)
                }
            </nav>
        </aside>
    );
};

export default Aside;