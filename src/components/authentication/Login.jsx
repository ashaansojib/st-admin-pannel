import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (info) => {
        console.log(info)
        // product add toast
        toast.success('Login Successfull..!!', {
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
        reset()
    }
    return (
        <div className='max-w-screen-md mx-auto'>
            <ToastContainer />
            <h2 className='text-2xl font-semibold pt-2'>Login Area!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-2 bg-gray-50'>
                    <TextField {...register("email", { required: true })} id="standard-basic" label="Email" variant="standard" />
                    <TextField {...register("password", { required: true })} id="standard-basic" label="Pasword" variant="standard" />
                    <span className='font-medium text-gray-700'><Link to="/register">Don't Account?</Link></span>
                    <input type="submit" className='bg-gray-500 w-full p-2 font-medium cursor-pointer hover:bg-white text-white hover:text-black transition hover:border border rounded-md' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default Login;