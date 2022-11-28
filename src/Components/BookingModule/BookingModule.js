import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';

const BookingModule = ({ booking }) => {
    const { loginUser } = useContext(AuthProvider);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleBooking = data => {
        const bookingData = {
            userName: loginUser.displayName,
            image: booking.image,
            title: booking.title,
            productId: booking._id,
            price: booking.price,
            email: loginUser.email,
            condition: booking.condition,
            sellerLocation: booking.division,
            meetingLocation: data.meetingLocation,
            buyerPhone: data.phone,
            paidStatus: false

        }
        fetch(`http://localhost:5000/booking?id=${booking._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`${booking.title} booking Success`)
                }

            })
            .catch(error => console.log(error))
    }
    return (

        <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog rounded" style={{ backgroundImage: `url(${booking?.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center' }}>
                <div className="modal-content" >
                    <form onSubmit={handleSubmit(handleBooking)}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{booking?.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3 row">
                                <div className="col-sm-8">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <input type="text" disabled className="form-control" id="staticEmail" defaultValue={loginUser?.email} />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="price" className="col-sm-2 col-form-label">price</label>
                                    <input type="text" disabled className="form-control" id="price" defaultValue={booking?.price} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-4">
                                    <label htmlFor="category" className="col-sm-2 col-form-label">Category</label>
                                    <input type="text" disabled className="form-control" id="category" defaultValue={booking?.category} />
                                </div>
                                <div className="col-sm-3">
                                    <label htmlFor="condition" className="col-sm-2 col-form-label">Condition</label>
                                    <input type="text" disabled className="form-control" id="condition" defaultValue={booking?.condition} />
                                </div>
                                <div className="col-sm-5">
                                    <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
                                    <input type="text" disabled className="form-control" id="location" defaultValue={booking?.division} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-sm-12">
                                    <label htmlFor="description" className="col-sm-2 col-form-label">description</label>
                                    <textarea disabled className="form-control" id="description" rows="5" defaultValue={booking?.description}></textarea>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col-12">
                                    <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">phoneNumber </label>
                                    <input {...register('phone', { required: true, minLength: 11, maxLength: 11 })} type='number' className="form-control" id="phoneNumber" />
                                    {errors?.phone?.type === 'minLength' && 'phone number must contains 11 digits'}
                                    {errors?.phone?.type === 'maxLength' && 'you can not use more than 11 digits'}
                                </div>
                                <div className="col-12">
                                    <label htmlFor="meetingLocation" className=" col-form-label">Meeting Location {errors?.meetingLocation?.message}</label>
                                    <input {...register('meetingLocation', { required: 'required' })} type='text' className="form-control" id="meetingLocation" />
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Book now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModule;