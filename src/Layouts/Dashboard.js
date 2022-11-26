import React from 'react';
import { Outlet } from 'react-router-dom';
import DashMenu from '../Dashboard/Components/DashMenu/DashMenu';
import '../Dashboard/css/lib/menubar/sidebar.css'
import '../Dashboard/css/style.css'

const Dashboard = () => {
    return (
        <>
            <DashMenu />
            <div className="content-wrap">
                <div className="main">
                    <div className="container-fluid">
                        <section id="main-content">
                            <Outlet />
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="footer">
                                        <p>2018 © Admin Board. - <a href="/">example.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;