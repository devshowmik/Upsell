import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Global/Spinner/Spinner';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthProvider);
    const location = useLocation();
    if (loading) {
        return <Spinner />
    }
    if (!loginUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;