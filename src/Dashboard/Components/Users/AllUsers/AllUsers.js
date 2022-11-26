import React from 'react';
import thumb from '../../../../images/thumb.jpg';

const AllUsers = () => {
    return (
        <>
            <h3 className=' text-muted mt-3 text-capitalize'>all users</h3>
            <table className="table text-capitalize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Image</th>
                        <th scope="col">User Name</th>
                        <th scope="col">admin role</th>
                        <th scope="col">Make Admin</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><img src={thumb} alt="" className='rounded' width='50' /></td>
                        <td>Asus Probook</td>
                        <td>user</td>
                        <td><span className=' btn btn-success'>make admin</span></td>
                        <td><span className=' btn btn-warning'>Edit</span> <span className=' btn btn-danger'>Delete</span></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default AllUsers;