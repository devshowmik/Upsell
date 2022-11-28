import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Checkout = ({ booking }) => {
    const { price, email, userName, _id } = booking;
    const stripe = useStripe();
    const elements = useElements();
    const [payError, setPayError] = useState('');
    const [trId, setTrId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://upsell-server-devshowmik.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price, booking]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email,
                        name: userName
                    },
                },
            },
        );
        if (error) {
            setPayError(error.message)
        } else {
            console.log(paymentIntent);
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://upsell-server-devshowmik.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        toast.success('payment success');
                        setTrId(paymentIntent.id);
                    }
                })
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success px-5 mt-5' disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-danger'>{payError}</p>
            <p className=''>transactionId: <b>{trId}</b></p>
        </>
    );
};

export default Checkout;