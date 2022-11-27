import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login d-flex align-items-center justify-content-center'>
            <form className='p-4 shadow mx-auto'>
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input type="email" class="form-control" id="loginPassword" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <input className='btn btn-success form-control rounded-0' type="submit" value="Login" />
                </div>
                <div class="mb-3">
                    <p className=' text-muted text-capitalize'>New here? <Link to='/register' className=' text-decoration-none' >register</Link> </p>
                    <input className='btn btn-success form-control rounded-0 text-capitalize' type="submit" value="Login with google" />
                </div>
            </form>
        </div>
    );
};

export default Login;