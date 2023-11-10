import { Avatar } from '@mui/material';
import React from 'react';

const UserCard = ({ user, i }) => {
    const { email, _id } = user;
    return (
        <div className='p-2 bg-white'>
            <span>{email}</span>
            <br />
            <small>role: <small className='text-blue-600'>Visitor</small></small>
            <div className='flex justify-end gap-2 items-center'>
                <button className='p-1 bg-blue-600 text-white rounded-sm text-xs'>Admin</button>
                <button className='p-1 bg-blue-600 text-white rounded-sm text-xs'>User</button>
                <button className='p-1 bg-blue-600 text-white rounded-sm text-xs'>Remove</button>
            </div>
        </div>
    );
};

export default UserCard;