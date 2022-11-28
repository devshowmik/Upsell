import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
const MyOrders = () => {
    const { loginUser } = useContext(AuthProvider);
    const { data: booking = [] } = useQuery({
        queryKey: ['booking', loginUser],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${loginUser?.email}`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <>
            <h3 className=' text-muted mt-3 text-capitalize'>My orders</h3>
            <table className="table text-capitalize">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Product image</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Paid Status</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booking.map((book, i) => <tr key={book._id}>
                            <th scope="row">{i + 1}</th>
                            <td><img src={book.image} alt="" className='rounded' width='50' /></td>
                            <td>{book.title}</td>
                            <td>$ {book.price}</td>
                            <td>{book.paidStatus ? <span className=' btn btn-success disabled'>paid</span> : <span className=' btn btn-warning disabled'>Pending</span>}</td>
                            <td>{book.email}</td>
                            <td><span className=' btn btn-warning' data-bs-toggle="modal" data-bs-target="#PaymentModal">pay</span> <span className=' btn btn-danger'>Delete</span></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    );
};

export default MyOrders;