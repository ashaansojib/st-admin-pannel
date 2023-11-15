import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { useRemoveSingleProductMutation } from '../../redux/features/api/baseApi';
const AllProducts = () => {
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
        <div className='product-container'>
            <div className='page-header'>
                <h2 className='page-title'>Manage Customer :-</h2>
                <div>
                    <Button onClick={back} variant='primary'>Back</Button>
                    <Button variant='primary'><Link to={`/add-product/${userId.id}`}>Add</Link></Button>
                </div>
            </div>
            {/* product table */}
            <div className='rounded-lg p-1'>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><p className='table-title'>#SL</p></TableCell>
                                <TableCell><p className='table-title'>Brand</p></TableCell>
                                <TableCell><p className='table-title'>Model</p></TableCell>
                                <TableCell><p className='table-title'>Price</p></TableCell>
                                <TableCell><p className='table-title'>Quantity</p></TableCell>
                                <TableCell><p className='table-title'>Time</p></TableCell>
                                <TableCell><p className='table-title'>Actions</p></TableCell>
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