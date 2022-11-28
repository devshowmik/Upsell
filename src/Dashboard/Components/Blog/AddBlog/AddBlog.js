import React from 'react';
import { useForm } from 'react-hook-form';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddBlog = data => {
        console.log(data)
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