import React from 'react';
import { useGetLoginUserQuery, useMakeAdminMutation, useRemoveUserMutation } from '../../redux/features/api/baseApi';
import { Skeleton } from '@mui/material';
import UserCard from './UserCard';

const UserLists = () => {
    const { data: users, isLoading } = useGetLoginUserQuery();
    const [updateData, {data, error}] = useMakeAdminMutation();
    const [removeUserId] = useRemoveUserMutation();
    const makeAdmin = (_id) => {
        const updateInfo = {role: 'admin'}
        updateData({id: _id, data: updateInfo})
    }
    const makeUser = (_id) =>{
        const updateInfo = {role: 'user'}
        updateData({id: _id, data: updateInfo})
    }
    const removeUser = (id) =>{
        removeUserId(id)
    }
    return (
        <div className='p-2'>
            <p className='page-title'>All Logged Users: </p>
            <div className='manage-page-container'>
                {
                    isLoading ? <>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} /></> : users.map((user) => <UserCard
                            key={user._id}
                            user={user}
                            makeAdmin={makeAdmin}
                            makeUser={makeUser}
                            removeUser={removeUser}
                        ></UserCard>)
                }
            </div>
        </div>
    );
};

export default UserLists;