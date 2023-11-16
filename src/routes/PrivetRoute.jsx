import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import { HashLoader } from 'react-spinners';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='w-[200px] mx-auto p-10'>
            <HashLoader color="#36d7b7" />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace={true}>Login</Navigate>
};

export default PrivetRoute;