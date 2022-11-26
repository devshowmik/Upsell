import React from 'react';
import thumb from '../../../../images/thumb.jpg';

const MyProducts = () => {
    return (
        <table class="table text-capitalize">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Advertise</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><img src={thumb} alt="" className='rounded' width='50' /></td>
                    <td>Asus Probook</td>
                    <td>$ 620</td>
                    <td><span className=' btn btn-success'>Advertised</span></td>
                    <td><span className=' btn btn-warning'>Edit</span> <span className=' btn btn-danger'>Delete</span></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td><img src={thumb} alt="" className='rounded' width='50' /></td>
                    <td>Macbook Pro</td>
                    <td>$ 1220</td>
                    <td><span className=' btn btn-secondary disabled'>Advertising</span></td>
                    <td><span className=' btn btn-warning'>Edit</span> <span className=' btn btn-danger'>Delete</span></td>
                </tr>
            </tbody>
        </table>
    );
};

export default MyProducts;