import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageApiKey = process.env.REACT_APP_image_api_key;
    const handleAddProduct = data => {
        // console.log(data.image[0].name)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageApiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const productData = {
                    title: data.title,
                    price: data.price,
                    category: data.category,
                    condition: data.condition,
                    date: data.date,
                    image: imageData.data.url,
                    thumbImage: imageData.data.thumb.url,
                    division: data.division,
                    email: data.email,
                    mobileNumber: data.mobileNumber,
                    zip: data.zip,
                    city: data.city,
                    description: data.description,
                }

                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success(`${productData.title} added successfully`)
                        }
                    })
            })
    }
    return (
        <div className='container-fluid'>
            <h3 className=' text-muted mt-3'>Add Your Product</h3>
            <form className=' text-capitalize' onSubmit={handleSubmit(handleAddProduct)}>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="title">Product Title <span className='text-danger'>{errors?.title?.message}</span></label>
                        <input {...register('title', { required: 'required' })} type="text" className="form-control" id="title" placeholder="Product Title" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="price">Product Price <span className='text-danger'>{errors?.price?.message}</span></label>
                        <input {...register('price', { required: 'required' })} type="number" className="form-control" id="price" placeholder="Product Price" />
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <label htmlFor="image">Product image <span className='text-danger'>{errors?.image?.message}</span></label>
                    <input {...register('image', { required: 'required' })} type="file" className="form-control" id="image" accept="image/png, image/jpeg" />
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="condition">Condition <span className='text-danger'>{errors?.condition?.message}</span></label>
                        <select id="condition" className="form-control" {...register('condition', { required: 'required' })}>
                            <option >Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="date">Estimated purchase date <span className='text-danger'>{errors?.date?.message}</span></label>
                        <input type="date" className="form-control" id="date" placeholder="Email" {...register('date', { required: 'required' })} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="category">Category <span className='text-danger'>{errors?.category?.message}</span></label>
                        <select id="category" className="form-control" {...register('category', { required: 'required' })}>
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" disabled {...register('email')} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="mobileNumber">Mobile Number <span className='text-danger'>{errors?.mobileNumber?.message}</span></label>
                        <input {...register('mobileNumber')} type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="division">Divisions <span className='text-danger'>{errors?.division?.message}</span></label>
                        <select id="division" className="form-control" {...register('division', { required: 'required' })}>
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">City</label>
                        <select id="inputState" className="form-control"  {...register('city')}>
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip</label>
                        <input {...register('zip')} type="text" className="form-control" id="zipCode" />
                    </div>
                </div>
                <div className="form-group col-md-12 mb-3">
                    <label htmlFor="description" className="form-label">Description about your product <span className='text-danger'>{errors?.description?.message}</span></label>
                    <textarea  {...register('description', { required: 'required' })} className="form-control" id="description" rows="3" placeholder='Brif Description about your product'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;