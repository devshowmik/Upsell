import React from 'react';
const MyOrders = () => {
    return (
        <>
            <h3 className=' text-muted mt-3 text-capitalize'>all buyer</h3>
            <table className="table text-capitalize">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Asus Probook</td>
                        <td>$ 453</td>
                        <td>unpaid</td>
                        <td>Email</td>
                        <td><span className=' btn btn-warning'>pay</span> <span className=' btn btn-danger'>Delete</span></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>mackbook pro</td>
                        <td>$ 1253</td>
                        <td>paid</td>
                        <td>Email</td>
                        <td><span className=' btn btn-warning disabled'>pay</span> <span className=' btn btn-danger'>Delete</span></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default MyOrders;