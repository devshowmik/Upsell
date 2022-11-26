import React from 'react';
import { FaEraser, FaHandsHelping, FaMagic, FaUser } from "react-icons/fa";

const WorksFlow = () => {
    return (
        <div className=" py-3 text-capitalize ">
            <div className="container">
                <h3 className='mb-4 fw-semibold fst-italic'>how it works</h3>
                <div className="row row-cols-1 row-cols-md-4 g-5 text-center">
                    <div className="col ">
                        <div className="card text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 m-0 '>
                                    <FaUser className='m-0 fs-2 text-center text-success' />
                                </span>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">Create Account</h5>
                                <p className="card-text "><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 m-0 '>
                                    <FaEraser className='m-0 fs-2 text-center text-success' />
                                </span>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">Post your Ad</h5>
                                <p className="card-text "><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 m-0 '>
                                    <FaHandsHelping className='m-0 fs-2 text-center text-success' />
                                </span>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">Get Offers</h5>
                                <p className="card-text "><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 m-0 '>
                                    <FaMagic className='m-0 fs-2 text-center text-success' />
                                </span>
                            </div>
                            <div className="card-body pb-0">
                                <h5 className="card-title">Get Offers</h5>
                                <p className="card-text "><small className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksFlow;