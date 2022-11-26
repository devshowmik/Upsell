import React from 'react';

const AddProduct = () => {
    return (
        <div className='container-fluid'>
            <h3 className=' text-muted mt-3'>Add Your Product</h3>
            <form className=' text-capitalize'>
                <div className="row">
                    <div className="form-group col-md-10">
                        <label htmlFor="title">Product Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Product Title" />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="price">Product Price</label>
                        <input type="number" className="form-control" id="price" placeholder="Product Price" />
                    </div>
                </div>

                <div className="form-group col-md-12">
                    <label htmlFor="image">Product image</label>
                    <input type="file" className="form-control" id="image" accept="image/png, image/jpeg" />
                </div>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="condition">Condition</label>
                        <select id="condition" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="date">Estimated purchase date</label>
                        <input type="date" className="form-control" id="date" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="category">Category</label>
                        <select id="category" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="number" className="form-control" id="mobileNumber" placeholder="Mobile Number" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="division">Divisions</label>
                        <select id="division" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">City</label>
                        <select id="inputState" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="zipCode">Zip</label>
                        <input type="text" className="form-control" id="zipCode" />
                    </div>
                </div>
                <div className="form-group col-md-12 mb-3">
                    <label htmlFor="description" className="form-label">Description about your product</label>
                    <textarea className="form-control" id="description" rows="3" placeholder='Brif Description about your product'></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;