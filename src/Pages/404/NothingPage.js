import React from 'react';
import { Link } from 'react-router-dom';

const NothingPage = () => {
    return (
        <div className='text-center nothing-found d-flex bg-success bg-gradient justify-content-center align-items-center' style={{ height: '100vh' }}>
            <div>
                <h2 className='display-2 fw-bolder text-white'>Page Not Found</h2>
                <Link to='/' className='text-white fs-4 fw-semibold'>Go to Home page</Link>
            </div>
        </div>
    );
};

export default NothingPage;