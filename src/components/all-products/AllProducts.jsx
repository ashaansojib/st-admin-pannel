import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const AllProducts = () => {
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>All Product Lists : </h2>
                <p className='text-gray-600'>dashboard / pathname</p>
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
                            <TableRow>
                                <TableCell>01.</TableCell>
                                <TableCell>Oppo</TableCell>
                                <TableCell>A54</TableCell>
                                <TableCell>1750TK</TableCell>
                                <TableCell>2</TableCell>
                                <TableCell>12/10/23</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default AllProducts;