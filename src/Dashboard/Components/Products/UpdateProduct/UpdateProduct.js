import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { _id, title, price, email, division, mobileNumber, city, zip, description, date } = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleUpdateProduct = data => {
        const updateData = {
            title: data.title,
            price: data.price,
            city: data.city,
            division: data.division || division,
            zip: data.zip,
            description: data.description,
        };
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('update success')
                }
            })
    }
    return (
        <div className='container-fluid'>
            <h3 className=' text-muted mt-3'>Update Your Product</h3>
            <form className=' text-capitalize' onSubmit={handleSubmit(handleUpdateProduct)}>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="title">Product Title <span className='text-danger'>{errors?.title?.message}</span></label>
                        <input {...register('title')} defaultValue={title} type="text" className="form-control" id="title" placeholder="Product Title" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="price">Product Price <span className='text-danger'>{errors?.price?.message}</span></label>
                        <input {...register('price')} defaultValue={price} type="number" className="form-control" id="price" placeholder="Product Price" />
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <label htmlFor="image">Product image <span className='text-danger'>{errors?.image?.message}</span></label>
                    <input type="file" className="form-control" id="image" accept="image/png, image/jpeg" disabled />
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="condition">Condition <span className='text-danger'>{errors?.condition?.message}</span></label>
                        <select id="condition" className="form-control" {...register('condition')}>
                            <option defaultValue='Excellent'>Excellent</option>
                            <option defaultValue='Good'>Good</option>
                            <option defaultValue='Fair'>Fair</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="date">Estimated purchase date <span className='text-danger'>{errors?.date?.message}</span></label>
                        <input type="date" className="form-control" id="date" defaultValue={date} disabled placeholder="Email" {...register('date')} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="category">Category <span className='text-danger'>{errors?.category?.message}</span></label>
                        <select id="category" className="form-control" disabled {...register('category')}>
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" defaultValue={email} className="form-control" id="email" placeholder="Email" disabled />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="mobileNumber">Mobile Number <span className='text-danger'>{errors?.mobileNumber?.message}</span></label>
                        <input {...register('mobileNumber')} defaultValue={mobileNumber} type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="division">Divisions <span className='text-danger'>{errors?.division?.message}</span></label>
                        <select id="division" className="form-control" {...register('division')}>
                            <option defaultValue='Barisal'>Barisal Division</option>
                            <option defaultValue='Chittagong'>Chittagong Division</option>
                            <option defaultValue='Dhaka'>Dhaka Division</option>
                            <option defaultValue='Khulna'>Khulna Division</option>
                            <option defaultValue='Mymensingh'>Mymensingh Division</option>
                            <option defaultValue='Rajshahi'>Rajshahi Division</option>
                            <option defaultValue='Rangpur'>Rangpur Division</option>
                            <option defaultValue='Sylhet'>Sylhet Division</option>

                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="city">City</label>
                        <input {...register('city')} defaultValue={city} type="text" className="form-control" id="city" placeholder="Your City" />

                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip</label>
                        <input {...register('zip')} defaultValue={zip} type="text" className="form-control" id="zipCode" />
                    </div>
                </div>
                <div className="form-group col-md-12 mb-3">
                    <label htmlFor="description" className="form-label">Description about your product <span className='text-danger'>{errors?.description?.message}</span></label>
                    <textarea  {...register('description', { required: 'required' })} defaultValue={description} className="form-control" id="description" rows="3" placeholder='Brif Description about your product'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;