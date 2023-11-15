import { Avatar } from '@mui/material';
import React from 'react';

const UserCard = ({ user, makeAdmin, makeUser, removeUser }) => {
    const { email, _id, role } = user;

    return (
        <div className='p-2 bg-white mb-2 rounded-md'>
            <div className='flex justify-between'>
                <div>
                    <Avatar src='/mypp-circle.png' alt='Image' />
                    <span>{email}</span>
                </div>
                <span>Role: <span className='text-blue-600'>{role ? role : 'User'}</span></span>
            </div>
            <div className='flex gap-2 items-center'>
                <button onClick={() => makeAdmin(_id)} className='p-1 bg-blue-600 text-white rounded-sm text-xs'>Admin</button>
                <button onClick={() => makeUser(_id)} className='p-1 bg-blue-600 text-white rounded-sm text-xs'>User</button>
                <button onClick={() => removeUser(_id)} className='p-1 bg-blue-600 text-white rounded-sm text-xs'>Remove</button>
            </div>
        </div>
    );
};

export default UserCard;