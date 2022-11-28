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
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;