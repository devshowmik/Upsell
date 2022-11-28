import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../../Components/Global/Spinner/Spinner';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import useUserRole from '../../../Hooks/useAdmin';

const DashMenu = () => {
    const { loginUser, loading, handleLogOut } = useContext(AuthProvider);
    const navigate = useNavigate()
    const [userRole] = useUserRole(loginUser?.email)
    if (loading) {
        return <Spinner />
    }
    const logoutUser = (event) => {
        handleLogOut(event)
            .then(() => {
                navigate('/')
            })
    }
    return (
        <>
            <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div className="nano">
                    <div className="nano-content">
                        <ul className='px-3'>
                            <div className="logo"><a href="index.html">
                                <img src="images/logo.png" alt="" /><span>Focus</span>
                            </a></div>
                            {
                                userRole === 'Seller'
                                &&
                                <>
                                    <div className="product">
                                        <li className="label">Product</li>
                                        <li className='ps-3 ' id="">
                                            <Link to='/dashboard' className="sidebar-sub-toggle">
                                                All products
                                            </Link>
                                            <Link to='/dashboard/add-product' className="sidebar-sub-toggle">
                                                Add product
                                            </Link>
                                        </li>
                                    </div>
                                    <div className="message">
                                        <li className="label">Meeting</li>
                                        <li className='ps-3 ' >
                                            <Link to='/dashboard/add-product' className="sidebar-sub-toggle">
                                                Booked Products
                                            </Link>
                                        </li>
                                    </div>

                                </>
                            }

                            {
                                userRole === 'Admin'
                                &&
                                <>

                                    <div className="user">
                                        <li className="label">Users</li>
                                        <li className='ps-3'>
                                            <Link to='/dashboard/users' className='sidebar-sub-toggle'>All Users</Link>
                                        </li>
                                        <li className='ps-3 ' >
                                            <Link to='/dashboard/buyer' className="sidebar-sub-toggle">Buyer</Link>
                                        </li>
                                        <li className='ps-3 ' >
                                            <Link to='/dashboard/seller' className="sidebar-sub-toggle">Seller</Link>
                                        </li>
                                    </div>

                                    <div className="user">
                                        <li className="label">Blog</li>
                                        <li className='ps-3'>
                                            <Link to='/dashboard/blogs' className='sidebar-sub-toggle'>All blogs</Link>
                                        </li>
                                        <li className='ps-3 ' >
                                            <Link to='/dashboard/add-blog' className="sidebar-sub-toggle">Add Blog</Link>
                                        </li>
                                    </div>
                                </>

                            }
                            {
                                userRole === 'Buyer'
                                &&
                                <li className='mb-0'>
                                    <p> <Link to='/dashboard/my-orders' className='text-white text-decoration-none'>My Orders</Link></p>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container-fluid py-2">
                    <div className=" d-flex justify-content-between align-items-center">
                        <div className="text-start">
                            <div className="hamburger sidebar-toggle">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="dropdown text-end">
                            <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={loginUser.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" >
                                <li><a className="dropdown-item" href="/">{loginUser.displayName}</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a onClick={logoutUser} className="dropdown-item" href="/">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashMenu;