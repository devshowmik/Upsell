import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../../Components/Global/Spinner/Spinner';

const MyProducts = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['MyProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`);
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
        console.log(id)
    }
    if (isLoading) {
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
                            <td><span onClick={() => handleAdvertisment(product._id)} className=' btn btn-success'>Advertised</span></td>
                            <td><Link to={`product/update/${product._id}`} className=' btn btn-warning'>Edit</Link> <span onClick={() => handleDlete(product._id)} className=' btn btn-danger'>Delete</span></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    );
};

export default MyProducts;