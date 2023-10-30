import React from 'react';
import { useGetCustomerQuery } from '../../redux/features/api/baseApi';
import { Avatar } from '@mui/material';

const ManageCustomer = () => {
    const { data: customers, isLoading, isError } = useGetCustomerQuery();
    console.log(customers)
    return (
        <div className='p-2 bg-slate-100 mt-2'>
            <h2 className='font-semibold text-gray-700'>Manage Customer :-</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 justify-between items-center py-3'>
                {
                    isLoading ? 'Loading...' : customers?.map((item) =>
                        <div key={item._id} className='p-2 border rounded-md bg-white'>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold uppercase'>{item.customerName}</p>
                                <p className='px-1 font-bold text-red-600 bg-slate-100 rounded-full'>{item.stock?.length}</p>
                            </div>
                            <span className='text-[12px] text-gray-700'>{item.phone}</span>
                            <div className='flex justify-between items-center mt-2'>
                                <Avatar alt="Remy Sharp" src="/mypp-circle.png" />
                                <div>
                                    <small className='p-1 bg-blue-500 text-white font-bold text-[10px] cursor-pointer'>REMOVE</small>
                                    <small className='p-1 bg-blue-500 text-white font-bold text-[10px] ml-1 cursor-pointer'>EDIT</small>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageCustomer;