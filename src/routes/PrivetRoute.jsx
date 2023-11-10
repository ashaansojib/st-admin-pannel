import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='my-container p-10 text-center'>
            <p>Please Wait Your Data is Comming...</p>
            <button className="btn loading">loading</button>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace={true}>Login</Navigate>
};

export default PrivetRoute;