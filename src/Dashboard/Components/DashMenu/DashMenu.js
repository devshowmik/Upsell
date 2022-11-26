import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashMenu = () => {
    return (
        <>
            <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div className="nano">
                    <div className="nano-content">
                        <ul className='px-3'>
                            <div className="logo"><a href="index.html">
                                <img src="images/logo.png" alt="" /><span>Focus</span>
                            </a></div>
                            <div className="product">
                                <li className="label">Product</li>
                                <p className='text-white mb-0 d-flex justify-content-between align-items-center'
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample"
                                    aria-expanded="false"
                                    aria-controls="collapseExample">
                                    Product <span><FaAngleDown /></span>
                                </p>
                                <li className='ps-3 collapse' id="collapseExample">
                                    <Link to='/dashboard/products' className="sidebar-sub-toggle">
                                        All products
                                    </Link>
                                    <Link to='/dashboard/add-product' className="sidebar-sub-toggle">
                                        Add product
                                    </Link>
                                </li>
                            </div>
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
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" >
                                <li><a className="dropdown-item" href="/">Settings</a></li>
                                <li><a className="dropdown-item" href="/">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashMenu;