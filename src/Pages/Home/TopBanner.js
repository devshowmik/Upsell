import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bgImage from '../../images/bn.jpg'

const TopBanner = () => {
    return (
        <div className="banner mt-4">
            <div className="container bg-success text-white">
                <div className="row">
                    <div className="col-md-6 py-5 ps-5">
                        <h2 className='fw-bold fs-1'>Placing Ads Has Never Been Easier!</h2>
                        <ul class="list-group list-group-flush mb-3">
                            <li class="list-group-item bg-success text-white border-0 ps-0 pt-0 fw-semibold d-flex align-items-center gap-1"><FaArrowRight />Submit your ads</li>
                            <li class="list-group-item bg-success text-white border-0 ps-0 pt-0 fw-semibold d-flex align-items-center gap-1"><FaArrowRight />promote your ads</li>
                            <li class="list-group-item bg-success text-white border-0 ps-0 pt-0 fw-semibold d-flex align-items-center gap-1"><FaArrowRight />save favorite ads</li>
                            <li class="list-group-item bg-success text-white border-0 ps-0 pt-0 fw-semibold d-flex align-items-center gap-1"><FaArrowRight />add more</li>

                        </ul>
                        <Link to='' className='btn btn-warning fw-semibold text-capitalize rounded-1'>register now</Link>
                    </div>
                    <div className="col-md-6"
                        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center right', backgroundSize: 'cover' }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;