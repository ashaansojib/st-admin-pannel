import { IconButton } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Admin Pannel</h2>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </div>
    );
};

export default Header;