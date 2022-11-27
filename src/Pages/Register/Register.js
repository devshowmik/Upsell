import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const Register = () => {
    const { emailRegister, updateUserInfo } = useContext(AuthProvider)
    const imageApiKey = process.env.REACT_APP_image_api_key;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()
    // handle register
    const handleEmailRegister = data => {
        console.log(data)

        emailRegister(data.email, data.password)
            .then(res => {
                //handle upload profile picture
                const registerFormData = new FormData();
                registerFormData.append('image', data.image[0]);
                fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
                    method: 'POST',
                    body: registerFormData
                })
                    .then(res => res.json())
                    .then(imageUrl => {
                        const update = {
                            displayName: data.name,
                            photoURL: imageUrl?.data?.url
                        };
                        updateUserInfo(update);
                        toast.success('Register Successes');
                        navigate('/dashboard')
                    })
                    .catch(errors => console.log(errors))
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
                        <input {...register('image', { required: 'required' })} type="file" className="form-control" id="photo" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password{watch().password}</label>
                        <input {...register('password', { required: 'required' })} type="password" className="form-control" id="loginPassword" placeholder="name@example.com" />
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