import React from 'react';

const AddProduct = () => {
    return (
        <div className='container-fluid'>
            <h3 className=' text-muted'>Add Your Product</h3>
            <form>
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
                <div className="row">
                    <div className="form-group col-md-4">
                        <label htmlFor="condition">Condition</label>
                        <select id="condition" className="form-control">
                            <option>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="condition">Estimated parches date</label>
                        <select id="condition" className="form-control">
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
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default AddProduct;