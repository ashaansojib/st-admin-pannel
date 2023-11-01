import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { FaBuffer, FaChartLine, FaDownload, FaPlus } from "react-icons/fa";
import moment from 'moment'
import { useRemoveSingleProductMutation } from '../../redux/features/api/baseApi';
const AllProducts = () => {
    const location = useLocation();
    const singleCustomer = useLoaderData();
    const [removeProduct] = useRemoveSingleProductMutation();
    // manage single product delete function
    const handleDeleteProduct = (id) => {
        if (id) {
            removeProduct({ customerID: singleCustomer._id, productID: id })
        }
        console.log(singleCustomer._id, id)
    }
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>All Product Lists : </h2>
                <p className='text-gray-600'>dashboard <span className='underline'>{location.pathname}</span></p>
            </div>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-semibold text-gray-600'>Average Ammount: ( 3450 TK )</h2>
                <div className='flex justify-between items-center gap-3'>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaChartLine /></button>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaBuffer /></button>
                    <button className='p-2 bg-blue-600 text-white rounded-md flex items-center gap-2'><FaDownload /> Download</button>
                    <Link to={`/add-product/${singleCustomer._id}`}><button className='p-3 bg-blue-600 text-white rounded-md'><FaPlus /></button></Link>
                </div>
            </div>
            {/* product table */}
            <div className='rounded-lg p-3'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className='font-medium'>
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
                                singleCustomer?.stock.map((product, i) =>
                                    <TableRow key={i}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{product.brand}</TableCell>
                                        <TableCell><p className='font-semibold'>{product.model}</p></TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell><p className='font-semibold'>{product.quantity}</p></TableCell>
                                        <TableCell>
                                            <Tooltip title={moment(product?.createdAt).format('HH:mm A')} placement="left-start">
                                                <p>{product.createdAt ? moment(product.createdAt).format('DD/MM/YY') : 'N/A'}</p>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell><button onClick={() => handleDeleteProduct(product?.productID)} className='bg-blue-600 text-white p-1 rounded-sm'>DELETE</button></TableCell>
                                    </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div >
    );
};

export default AllProducts;