import { TableCell, TableRow, Tooltip } from '@mui/material';
import moment from 'moment';
import React from 'react';

const ProductList = ({ product, i, handleRemove }) => {
    const {_id, brand, model, price, quantity, createdAt} = product;
    return (
        <TableRow key={_id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{brand}</TableCell>
            <TableCell><p className='font-semibold'>{model}</p></TableCell>
            <TableCell>{price}</TableCell>
            <TableCell><p className='font-semibold'>{quantity}</p></TableCell>
            <TableCell>
                <Tooltip title={moment(createdAt).format('HH:mm A')} placement="left-start">
                    <p>{createdAt ? moment(createdAt).format('DD/MM/YY') : 'N/A'}</p>
                </Tooltip>
            </TableCell>
            <TableCell><button onClick={() => handleRemove(_id)} className='bg-blue-600 text-white p-1 rounded-sm'>DELETE</button></TableCell>
        </TableRow>
    );
};

export default ProductList;