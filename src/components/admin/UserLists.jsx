import React from 'react';
import { useGetLoginUserQuery } from '../../redux/features/api/baseApi';
import { Skeleton } from '@mui/material';
import UserCard from './UserCard';

const UserLists = () => {
    const { data: users, isLoading } = useGetLoginUserQuery();
    return (
        <div className='p-2 bg-slate-50'>
            <p className='font-semibold'>All Logged Users: </p>
            <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                {
                    isLoading ? <>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} /></> : users.map((user, i) => <UserCard
                            key={user._id}
                            user={user}
                            i={i}
                        ></UserCard>)
                }
            </div>
        </div>
    );
};

export default UserLists;