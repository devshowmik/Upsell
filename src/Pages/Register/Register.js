import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const imageApiKey = process.env.REACT_APP_image_api_key;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // handle register
    const handleEmailRegister = data => {
        //handle upload profile picture
        const registerFormData = new FormData();
        registerFormData.append('photo', data.photo[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
            method: 'POST',
            body: registerFormData
        })
            .then(res => res.json())
            .then(imageUrl => {
                console.log(imageUrl)
            })
    }
    return (
        <div className='login d-flex align-items-center justify-content-center'>
            <div className="form-wrap p-4 shadow mx-auto">
                <form onSubmit={handleSubmit(handleEmailRegister)}>
                    <div className="mb-3">
                        <label htmlFor="loginName" className="form-label">Full Name <span className=' text-danger'>{errors?.name?.message}</span></label>
                        <input {...register('name', { required: 'required' })} type="text" className="form-control" id="loginName" placeholder="Jhon Dho" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address <span className=' text-danger'>{errors?.email?.message}</span></label>
                        <input {...register('email', { required: 'required' })} type="email" className="form-control" id="loginEmail" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="photo" className="form-label">Profile Photo <span className=' text-danger'>{errors?.email?.message}</span></label>
                        <input {...register('photo', { required: 'required' })} type="file" className="form-control" id="photo" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password{watch().password}</label>
                        <input {...register('password', { required: 'required', pattern: '([0-9]+(:[0-9]+)+).*([A-Za-z0-9]+( [A-Za-z0-9]+)+)' })} type="password" className="form-control" id="loginPassword" placeholder="name@example.com" />
                        {
                            errors.password
                            &&
                            <p className=' text-danger'>{errors?.password?.message}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <input className='btn btn-success form-control rounded-0' type="submit" value="Register" />
                    </div>
                </form>
                <div className="mb-3">
                    <p className=' text-muted text-capitalize'>Already Have an Account? <Link to='/login' className=' text-decoration-none' >login</Link> </p>
                    <input className='btn btn-success form-control rounded-0 text-capitalize' type="submit" value="Login with google" />
                </div>
            </div>
        </div>
    );
};

export default Register;