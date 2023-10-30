import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { useSetCustomerMutation } from '../../redux/features/api/baseApi';

const AddCustomer = () => {
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();
    const [setCustomer] = useSetCustomerMutation();
    const onSubmit = ({ customerName, phone, price, quantity, brand, model }) => {

        const stock = [
            {
                price,
                quantity,
                brand,
                model
            }
        ]
        
        const loadData = {
            customerName,
            phone,
            stock
        }
        setCustomer(loadData);
        reset()
    }
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='lg:w-2/3 mx-auto'>
                <div className='flex justify-between items-center pb-3'>
                    <h2 className='text-xl font-medium'>Add Product : </h2>
                    <p className='text-gray-600'>dashboard <Link className='underline'>{location.pathname}</Link></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center'>
                        <TextField {...register("customerName", { required: true })} id="standard-basic" label="CustomerName" variant="standard" />
                        <TextField {...register("phone", { required: true })} id="standard-basic" label="Phone" variant="standard" />
                        <TextField {...register("brand", { required: true })} id="standard-basic" label="Brand" variant="standard" />
                        <TextField {...register("model", { required: true })} id="standard-basic" label="Model" variant="standard" />
                        <TextField {...register("quantity", { required: true })} id="standard-basic" label="Quantity" variant="standard" />
                        <TextField  {...register("price", { required: true })} id="standard-basic" label="Price" variant="standard" />
                        <input type="submit" className='bg-gray-500 w-full p-2 text-white font-medium  rounded-md cursor-pointer hover:bg-white hover:text-black transition hover:border border' value="Asigne" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;