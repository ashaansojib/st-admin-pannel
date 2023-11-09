import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAddProductMutation } from '../../redux/features/api/baseApi';
import { ToastContainer, toast } from 'react-toastify';

const AddItem = () => {
    const location = useLocation();
    const customerID = useParams();
    const [addProduct] = useAddProductMutation();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (item) => {

        // create random product id
        const randomID = Math.floor(100000 + Math.random() * 900000);

        item.productID = randomID;
        item.customerID = customerID.id;
        addProduct(item)

        // product add toast
        toast.success('One Product Added!!', {
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
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>Add Product : </h2>
                <p className='text-gray-600'>dashboard <Link className='underline'>{location.pathname}</Link></p>
            </div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='lg:w-2/3 grid md:grid-cols-2 grid-cols-1 gap-4 justify-between items-center'>
                    <TextField {...register("brand", { required: true })} id="standard-basic" label="Brand" variant="standard" />
                    <TextField {...register("model", { required: true })} id="standard-basic" label="Model" variant="standard" />
                    <TextField {...register("quantity", { required: true })} id="standard-basic" label="Quantity" variant="standard" />
                    <TextField  {...register("price", { required: true })} id="standard-basic" label="Price" variant="standard" />
                    <input type="submit" className='bg-gray-500 w-full p-2 font-medium cursor-pointer hover:bg-white text-white hover:text-black transition hover:border border rounded-md' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;