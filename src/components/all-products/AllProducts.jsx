import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaBuffer, FaChartLine, FaDownload, FaPlus } from "react-icons/fa";
import ProductList from './ProductList';
import { useRemoveSingleProductMutation } from '../../redux/features/api/baseApi';
const AllProducts = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const singleProductList = useLoaderData();
    const userId = useParams();
    const [removeID] = useRemoveSingleProductMutation();
    const handleRemove = (id) => {
        removeID(id);
    }
    const back = () => {
        navigate(-1)
    }
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>All Product Lists : </h2>
                <Button onClick={back} variant='primary'>Back</Button>
            </div>
            <div className='hidden md:flex justify-between items-center p-3'>
                <h2 className='font-semibold text-gray-600'>Average Ammount: ( 3450 TK )</h2>
                <div className='flex justify-between items-center gap-3'>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaChartLine /></button>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaBuffer /></button>
                    <button className='p-2 bg-blue-600 text-white rounded-md flex items-center gap-2'><FaDownload /> Download</button>
                    <Link to={`/add-product/${userId.id}`}><button className='p-3 bg-blue-600 text-white rounded-md'><FaPlus /></button></Link>
                </div>
            </div>
            {/* product table */}
            <div className='rounded-lg p-1'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><p className='font-semibold text-gray-600'>#SL</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Brand</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Model</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Price</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Quantity</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Time</p></TableCell>
                                <TableCell><p className='font-semibold text-gray-600'>Actions</p></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                singleProductList?.map((product, i) => <ProductList
                                    key={product._id}
                                    product={product}
                                    i={i}
                                    handleRemove={handleRemove}
                                ></ProductList>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    );
};

export default AllProducts;