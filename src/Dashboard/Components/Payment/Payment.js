import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';
const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const data = useLoaderData();
    const { title, price } = data;
    console.log(title)
    return (
        <div>
            <p className=' fs-4 text-capitalize'>Your payment fot <span className="text-danger fw-bold">{title}</span> is <span className="text-danger fw-bold">{price}</span></p>
            <Elements stripe={stripePromise}>
                <Checkout booking={data} />
            </Elements>
        </div>
    );
};

export default Payment;