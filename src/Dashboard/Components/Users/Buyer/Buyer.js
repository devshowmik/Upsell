import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../../../Components/Global/Spinner/Spinner';

const Buyer = () => {
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://upsell-server-devshowmik.vercel.app/users?role=Buyer`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner />
    }
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
                    {

                        users.map((user, i) => <tr key={user._id}>
                            <th scope="row">{i + 1}</th>
                            <td><img src={user?.photoURL} alt="" className='rounded' width='50' /></td>
                            <td>{user?.displayName}</td>
                            <td>{user?.userRole}</td>
                            <td>
                                {
                                    user?.userRole !== 'Admin'
                                    &&
                                    <span className=' btn btn-success'>make admin</span>
                                }
                            </td>
                            <td><span className=' btn btn-danger'>Delete</span></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default Buyer;