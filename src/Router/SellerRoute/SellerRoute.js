import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Global/Spinner/Spinner';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useUserRole from '../../Hooks/useAdmin';

const SellerRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthProvider);
    const [userRole, loadingRole] = useUserRole(loginUser?.email);
    console.log(userRole)
    const location = useLocation();
    if (loading || loadingRole) {
        return <Spinner />
    }
    if (loginUser) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;