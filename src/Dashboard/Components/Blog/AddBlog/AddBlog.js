import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageApiKey = process.env.REACT_APP_image_api_key;
    const navigate = useNavigate();
    const handleAddBlog = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const productData = {
                    title: data.title,
                    price: data.price,
                    uploadDate: new Date().toISOString().slice(0, 10),
                    image: imageData.data.url,
                    description: data.description,
                }

                fetch('https://upsell-server-devshowmik.vercel.app/blogs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success(`blog added successfully`);
                            navigate('/dashboard/blogs')
                        }
                    })
            })
    }
    return (
        <div className='container-fluid'>
            <h3 className=' text-muted mt-3'>Add Your Product</h3>
            <form className=' text-capitalize' onSubmit={handleSubmit(handleAddBlog)}>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="title">Blog Title <span className='text-danger'>{errors?.title?.message}</span></label>
                        <input {...register('title', { required: 'required' })} type="text" className="form-control" id="title" placeholder="Blog Title" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="image">Blog image <span className='text-danger'>{errors?.image?.message}</span></label>
                        <input {...register('image', { required: 'required' })} type="file" className="form-control" id="image" accept="image/png, image/jpeg" />
                    </div>
                </div>
                <div className="form-group col-md-12 mb-3">
                    <label htmlFor="description" className="form-label">Blog Details<span className='text-danger'>{errors?.description?.message}</span></label>
                    <textarea  {...register('description', { required: 'required' })} className="form-control" id="description" rows="3" placeholder='Blog Details'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </div>
    );
};

export default AddBlog;