import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../auth/AuthProvider';
import { useAddUsersMutation } from '../../redux/features/api/baseApi';

const Register = () => {
    const [addUser] = useAddUsersMutation();
    const { createUser, updateUserInfo } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = ({name, photo, email, password}) => {
        createUser(email, password)
        .then( result =>{
            const createUser = result.user;
            updateUserInfo(name, photo)
            navigate('/')
            const userInfo = {email, password}
            addUser(userInfo)
        toast.success('Register New User..!!', {
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
            toast.error('Please, Use Another Gmail..!!', {
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
        updateUserInfo()
        .then( result => {})
        .catch( error =>{
            // console.log(error.message)
        })
        reset()
    }
    return (
        <div className='max-w-screen-md mx-auto p-2'>
            <ToastContainer />
            <h2 className='text-2xl font-semibold pt-2'>Registration Form!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 gap-2 bg-gray-50'>
                    <TextField {...register("name", { required: true })} id="standard-basic" label="UserName" variant="standard" />
                    <TextField {...register("photo", { required: true })} id="standard-basic" label="Photo Url" variant="standard" />
                    <TextField {...register("email", { required: true })} id="standard-basic" label="Email" variant="standard" />
                    <TextField {...register("password", { required: true })} id="standard-basic" label="Pasword" variant="standard" />
                    <span className='font-medium text-gray-700'><Link to="/login">Already An Account?</Link></span>
                    <input type="submit" className='bg-gray-500 w-full p-2 font-medium cursor-pointer hover:bg-white text-white hover:text-black transition hover:border border rounded-md' value="Register Now" />
                </div>
            </form>
        </div>
    );
};

export default Register;