
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Global/Spinner/Spinner';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import useUserRole from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthProvider);
    const [userRole, loadingRole] = useUserRole(loginUser?.email);
    const location = useLocation();
    if (loading || loadingRole) {
        return <Spinner />
    }
    if (loginUser && userRole === 'Admin') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;