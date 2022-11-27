import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AdvertisCard from '../../Components/AdvertisCard/AdvertisCard';

const Products = () => {
    const products = useLoaderData();
    return (
        <div className=" py-3 text-capitalize">
            <div className="container">
                <h3 className='mb-4 fw-semibold fst-italic'>Browse All products</h3>
                <div className="row row-cols-1 row-cols-md-4 g-5">
                    {
                        products.map(product => <AdvertisCard key={product._id} ads={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;