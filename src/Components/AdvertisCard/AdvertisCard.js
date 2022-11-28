import React from 'react';
import { FaClock, FaListAlt, FaMapMarkerAlt, FaTh } from 'react-icons/fa';

const AdvertisCard = ({ ads, setBooking }) => {
    const { title, image, category, date, division, price, originalPrice, condition, uploadDate
    } = ads;
    return (
        <>
            <div className="col">
                <div className="card text-capitalize rounded-0 p-3 h-100" >
                    <div className="card-image text-center">
                        <img className='img-fluid w-100' src={image} alt="" />
                    </div>
                    <div className="card-body pt-2 p-0 ">
                        <h5 className="card-title">{title}</h5>
                    </div>
                    <div className="info">
                        <p className="card-text mb-1"><small className="text-muted d-flex align-items-center gap-1"><FaTh />{category}</small></p>
                        <p className="card-text mb-1"><small className="text-muted d-flex align-items-center gap-1"><FaClock />{uploadDate}</small></p>
                        <p className="card-text mb-1"><small className="text-muted d-flex align-items-center gap-1"><FaClock />{date}</small></p>
                        <p className="card-text mb-1"><small className="text-muted d-flex align-items-center gap-1"><FaMapMarkerAlt />{division}</small></p>
                        <p className="card-text mb-1"><small className="text-muted d-flex align-items-center gap-1"><FaListAlt />{condition}</small></p>
                        <p className="card-text mb-1 fw-bold fs-4 text-danger">$ {price} <small className='fs-6 text-muted fw-normal text-decoration-line-through'>{originalPrice}</small></p>
                        <input onClick={() => setBooking(ads)} className='btn btn-success form-control rounded-0 text-capitalize' type="submit" value="Book now" data-bs-toggle="modal" data-bs-target="#exampleModal" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvertisCard;