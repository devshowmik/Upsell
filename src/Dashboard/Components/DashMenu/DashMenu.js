import React from 'react';

const DashMenu = () => {
    return (
        <>
            <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div className="nano">
                    <div className="nano-content">
                        <ul>
                            <div className="logo"><a href="index.html">
                                <img src="images/logo.png" alt="" /><span>Focus</span>
                            </a></div>
                            <div className="product">
                                <li className="label ms-3">Apps</li>
                                <li><a href='/' className="sidebar-sub-toggle"><i className="ti-bar-chart-alt"></i> Charts <span
                                    className="sidebar-collapse-icon ti-angle-down"></span></a>
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