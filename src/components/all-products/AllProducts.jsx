import React from 'react';

const AllProducts = () => {
    return (
        <div className='bg-gray-100 mt-2 p-3'>
            <div className='flex justify-between items-center pb-3'>
                <h2 className='text-xl font-medium'>All Product Lists : </h2>
                <p className='text-gray-600'>dashboard / pathname</p>
            </div>
            {/* product table */}
            <div className='bg-white rounded-lg p-3 overflow-x-auto'>
                <div className='grid grid-cols-7 justify-between items-center gap-2 font-medium border p-2'>
                    <h4>SL</h4>
                    <h4>Brand</h4>
                    <h4>Model</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Date</h4>
                    <h4>Actions</h4>
                </div>
                <div className='grid grid-cols-7 justify-between items-center gap-2 p-2 border mt-1 text-gray-600'>
                    <span>1.</span>
                    <p>Oppo</p>
                    <p>A31</p>
                    <p>1200TK</p>
                    <p>2</p>
                    <p>12/10/23 <br /> 11:23 AM</p>
                    <p>Delete</p>
                </div>
                <div className='grid grid-cols-7 justify-between items-center gap-2 p-2 border mt-1'>
                    <span>1.</span>
                    <p>Oppo</p>
                    <p>A31</p>
                    <p>1200TK</p>
                    <p>2</p>
                    <p>12/10/23 <br /> 11:23 AM</p>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;