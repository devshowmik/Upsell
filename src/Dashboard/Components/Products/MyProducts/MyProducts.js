import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../../Components/Global/Spinner/Spinner';
import { AuthProvider } from '../../../../Context/AuthContext/AuthContext';

const MyProducts = () => {
    const { loginUser, loading } = useContext(AuthProvider);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['MyProducts', loginUser],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${loginUser?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const handleDlete = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('item Deleted Successfully');
                    refetch();
                }
            })
    }
    const handleAdvertisment = id => {
        const advertis = {
            advertis: true,
        };
        fetch(`http://localhost:5000/product/advertis/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertis)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    if (loading) {
        return <Spinner />
    }
    return (
        <>
            <table className="table text-capitalize">
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
                    {
                        products.map((product, i) => <tr key={product._id}>
                            <th scope="row">{i + 1}</th>
                            <td><img src={product.thumbImage} alt="" className='rounded' width='50' /></td>
                            <td>{product.title}</td>
                            <td>$ {product.price}</td>
                            <td>
                                {
                                    product.advertis
                                        ?
                                        <span className=' btn btn-success disabled'>Adverting</span>
                                        :
                                        <span onClick={() => handleAdvertisment(product._id)} className=' btn btn-success'>Advertised</span>
                                }
                            </td>
                            <td><Link to={`/dashboard/product/update/${product._id}`} className=' btn btn-warning'>Edit</Link> <span onClick={() => handleDlete(product._id)} className=' btn btn-danger'>Delete</span></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    );
};

export default MyProducts;