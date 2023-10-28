import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { FaBuffer, FaChartLine, FaDownload, FaPlus } from "react-icons/fa";
const AllProducts = () => {
    const location = useLocation();
    const singleCustomer = useLoaderData();
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>All Product Lists : </h2>
                <p className='text-gray-600'>dashboard <span className='underline'>{location.pathname}</span></p>
            </div>
            <div className='flex justify-between items-center p-3'>
                <h2 className='text-xl font-medium text-gray-400'>Products</h2>
                <div className='flex justify-between items-center gap-3'>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaChartLine /></button>
                    <button className='p-3 bg-blue-600 text-white rounded-md'><FaBuffer /></button>
                    <button className='p-2 bg-blue-600 text-white rounded-md flex items-center gap-2'><FaDownload /> Download</button>
                    <Link to='/add-product'><button className='p-3 bg-blue-600 text-white rounded-md'><FaPlus /></button></Link>
                </div>
            </div>
            {/* product table */}
            <div className='rounded-lg p-3'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className='font-medium'>
                                <TableCell>#SL</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Model</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                singleCustomer?.stock.map((product, i) =>
                                    <TableRow key={i}>
                                        <TableCell>01.</TableCell>
                                        <TableCell>{product.brand}</TableCell>
                                        <TableCell>{product.model}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell>{product.quantity}</TableCell>
                                        <TableCell>12/10/23</TableCell>
                                        <TableCell>Delete</TableCell>
                                    </TableRow>)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default AllProducts;