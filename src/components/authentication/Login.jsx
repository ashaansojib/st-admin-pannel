import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../auth/AuthProvider';

const Login = () => {
    const {userLogin, loginWithGoogle} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = ({email, password}) => {
        console.log(email, password)
        userLogin(email, password)
        .then( result =>{
            const loggetUser = result.user;
            console.log(loggetUser)
            navigate('/')
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
        })
        .catch( error =>{
            // product add toast
        toast.error('Invalid Email or Password..!!', {
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
        })
        reset()
    }
    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then( result =>{
            const googleUser = result.user;
            console.log(googleUser)
            navigate('/')
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
        })
        .catch( error =>{
            toast.error('Try Again and Again..!!', {
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
        })
    }
    return (
        <div className='max-w-screen-md mx-auto'>
            <ToastContainer />
            <h2 className='text-2xl font-semibold pt-2'>Login Area!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-2 bg-gray-50'>
                    <TextField {...register("email", { required: true })} id="standard-basic" label="Email" variant="standard" />
                    <TextField {...register("password", { required: true })} id="standard-basic" label="Pasword" variant="standard" />
                    <div className='flex justify-between items-center gap-2'>
                    <p className='font-medium text-gray-700'><Link to="/register">Don't Account?</Link></p>
                    <Button onClick={handleGoogleLogin} variant='primary'>Google Login</Button>
                    </div>
                    <input type="submit" className='bg-gray-500 w-full p-2 font-medium cursor-pointer hover:bg-white text-white hover:text-black transition hover:border border rounded-md' value="Login Here" />
                </div>
            </form>
        </div>
    );
};

export default Login;