import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { emailLogin, loginUser } = useContext(AuthProvider);
    const { register, handleSubmit } = useForm();
    const handleEmailLogin = data => {
        console.log(data)
        emailLogin(data.email, data.password)
            .then(res => {
                navigate('/dashboard');
                toast.success(`${loginUser.displayName} logged in successfully`)
            })
    }
    return (
        <div className='login d-flex align-items-center justify-content-center'>
            <div className="form-wrap shadow p-4">
                <form onSubmit={handleSubmit(handleEmailLogin)}>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                        <input {...register('email')} type="email" className="form-control" id="loginEmail" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input {...register('password')} type="password" className="form-control" id="loginPassword" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <input className='btn btn-success form-control rounded-0' type="submit" value="Login" />
                    </div>
                </form>
                <div className="mb-3">
                    <p className=' text-muted text-capitalize'>New here? <Link to='/register' className=' text-decoration-none' >register</Link> </p>
                    <input className='btn btn-success form-control rounded-0 text-capitalize' type="submit" value="Login with google" />
                </div>
            </div>
        </div>
    );
};

export default Login;