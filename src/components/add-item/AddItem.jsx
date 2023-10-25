import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';

const AddItem = () => {
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>Add Product : </h2>
                <p className='text-gray-600'>dashboard <Link className='underline'>{location.pathname}</Link></p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:w-2/3 grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center'>
                    <TextField {...register("brand", { required: true })} id="standard-basic" label="Brand" variant="standard" />
                    <TextField {...register("model", { required: true })} id="standard-basic" label="Model" variant="standard" />
                    <TextField {...register("quantity", { required: true })} id="standard-basic" label="Quantity" variant="standard" />
                    <TextField  {...register("price", { required: true })}id="standard-basic" label="Price" variant="standard" />
                    <input type="submit" className='bg-gray-500 w-full p-2 text-white font-medium  rounded-md cursor-pointer hover:bg-white hover:text-black transition hover:border' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;