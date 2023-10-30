import React from 'react';
import { useGetCustomerQuery, useRemoveCustomerMutation } from '../../redux/features/api/baseApi';
import { Avatar, Skeleton } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageCustomer = () => {
    const { data: customers, isLoading, isError } = useGetCustomerQuery();
    const [removeId] = useRemoveCustomerMutation();
    const removeCustomer = (id) => {
        toast.success('Customer removed successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            theme: "light"
        });
        removeId(id)
    }
    return (
        <div className='p-2 bg-slate-100 mt-2'>
            <ToastContainer />
            <h2 className='font-semibold text-gray-700'>Manage Customer :-</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 justify-between items-center py-3'>
                {
                    isLoading ?
                        <Skeleton variant="rectangular" width={210} height={60} /> :
                        customers?.map((item) =>
                            <div key={item._id} className='p-2 border rounded-md bg-white'>
                                <div className='flex justify-between items-center'>
                                    <p className='font-bold uppercase'>{item.customerName}</p>
                                    <p className='px-1 font-bold text-red-600 bg-slate-100 rounded-full'>{item.stock?.length}</p>
                                </div>
                                <span className='text-[12px] text-gray-700'>{item.phone}</span>
                                <p className='font-medium text-sm italic'>This is our premium customer!!</p>
                                <div className='flex justify-between items-center mt-2'>
                                    <Avatar alt="Remy Sharp" src="/mypp-circle.png" />
                                    <div>
                                        <small onClick={() => removeCustomer(item._id)} className='p-1 bg-blue-500 text-white font-bold text-[10px] cursor-pointer'>REMOVE</small>
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