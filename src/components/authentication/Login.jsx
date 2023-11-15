import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../auth/AuthProvider';
import { useAddUsersMutation } from '../../redux/features/api/baseApi';

const Login = () => {
    const [addUser] = useAddUsersMutation();
    const { userLogin, loginWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = ({ email, password }) => {
        userLogin(email, password)
            .then(result => {
                const loggetUser = result.user;
                const userInfo = {
                    email,
                    password,
                }
                navigate('/')
                addUser(userInfo)
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
            .catch(error => {
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
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                const googleUser = result.user;
                const userInfo = { email: googleUser.email, password: 'asha' }
                addUser(userInfo)
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
            .catch(error => {
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
        <div className='max-w-md mx-auto p-2'>
            <ToastContainer />
            <h2 className='text-2xl font-semibold pt-2'>Login Area!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-header'>
                    <TextField {...register("email", { required: true })} id="standard-basic" label="Email" variant="standard" />
                    <TextField {...register("password", { required: true })} id="standard-basic" label="Pasword" variant="standard" />
                    <div className='flex justify-between items-center gap-2'>
                        <p className='font-medium text-gray-700'><Link to="/register">Don't Account?</Link></p>
                        <Button onClick={handleGoogleLogin} variant='primary'>Google Login</Button>
                    </div>
                    <input type="submit" className="submit-btn" value="Login Here" />
                </div>
            </form>
        </div>
    );
};

export default Login;