import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAddProductMutation } from '../../redux/features/api/baseApi';
import { ToastContainer, toast } from 'react-toastify';

const AddItem = () => {
    const navigate = useNavigate();
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
    const back = () =>{
        navigate(-1)
    }
    return (
        <div className='add-product'>
            <div className='page-header'>
                <h2 className='text-xl font-medium'>Add Product : </h2>
                <Button onClick={back} variant='primary'>Back</Button>
            </div>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-header'>
                    <TextField {...register("brand", { required: true })} id="standard-basic" label="Brand" variant="standard" />
                    <TextField {...register("model", { required: true })} id="standard-basic" label="Model" variant="standard" />
                    <TextField {...register("quantity", { required: true })} id="standard-basic" label="Quantity" variant="standard" />
                    <TextField  {...register("price", { required: true })} id="standard-basic" label="Price" variant="standard" />
                    <input type="submit" className='submit-btn' value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddItem;