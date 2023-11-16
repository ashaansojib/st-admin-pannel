import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSetCustomerMutation } from '../../redux/features/api/baseApi';
import { ToastContainer, toast } from 'react-toastify';

const AddCustomer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [setCustomer] = useSetCustomerMutation();
    const onSubmit = ({ customerName, phone}) => {
        const loadData = {
            customerName,
            phone,
        }
        // customer add toast
        toast.success('Customer added successfully', {
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
        setCustomer(loadData);
        reset()
        navigate('/')
    }
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='mx-auto'>
                <ToastContainer />
                <div className='page-header'>
                    <h2 className='page-title'>Add Product : </h2>
                    <p className='text-gray-600'>dashboard <Link className='underline'>{location.pathname}</Link></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-header'>
                        <TextField {...register("customerName", { required: true })} id="standard-basic" label="CustomerName" variant="standard" />
                        <TextField {...register("phone", { required: true })} id="standard-basic" label="Phone" variant="standard" />
                        <input type="submit" className='submit-btn' value="Asigne" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;