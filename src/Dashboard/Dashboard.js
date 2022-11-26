import React from 'react';

const Dashboard = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 200 + "px", height: '100vh' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link active" aria-current="page">
                        <i class="bi bi-house-door"></i> Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link text-white">
                        <i class="bi bi-speedometer2"></i>  Dashboard
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link text-white">
                        <i class="bi bi-table"></i>  Orders
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link text-white">
                        <i class="bi bi-grid"></i>   Products
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link text-white">
                        <i class="bi bi-people"></i>  Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" >
                    <li><a className="dropdown-item" href="/">New project...</a></li>
                    <li><a className="dropdown-item" href="/">Settings</a></li>
                    <li><a className="dropdown-item" href="/">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;