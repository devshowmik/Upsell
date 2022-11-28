import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../../../Components/Global/Spinner/Spinner';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })
    //make admin
    const makeAdmin = id => {
        const admin = {
            userRole: 'Admin'
        }
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User Role Updated')
                }
                refetch()
            })
    }
    // Verify seller
    const VerifySeller = id => {
        const Verify = {
            verified: true
        }
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Verify)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('User verified')
                }
                refetch()
            })
    }
    const handleDeleteUser = id => {

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deleteCount > 0) {
                    toast.success('User Role deleted')
                }
                refetch()
            })
    }
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
                        <th scope="col">User role</th>
                        <th scope="col">Verify Seller</th>
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
                                    <span className={`btn btn-success ${user?.verified && 'disabled'}`} onClick={() => VerifySeller(user._id)}>Verify</span>
                                }
                            </td>
                            <td>
                                {
                                    <span className={`btn btn-success ${user?.userRole === 'Admin' && 'disabled'}`} onClick={() => makeAdmin(user._id)}>make admin</span>
                                }
                            </td>
                            <td><span className={`btn btn-danger ${users.length === 1 && 'disabled'}`} onClick={() => handleDeleteUser(user._id)}>Delete</span></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
    );
};

export default AllUsers;