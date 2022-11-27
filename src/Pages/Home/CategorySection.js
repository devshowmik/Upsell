import React from 'react';
import { FaCog, FaDesktop, FaLaptop, FaTabletAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CategorySection = () => {
    return (
        <div className="home-category py-3 text-capitalize ">
            <div className="container">
                <h3 className='mb-4 fw-semibold fst-italic'>Browse items by category</h3>
                <div className="row row-cols-1 row-cols-md-4 g-5 text-center">
                    <div className="col ">
                        <Link to='/category/laptop' className=' text-decoration-none text-dark'>
                            <div className="card text-capitalize rounded-0 py-3 h-100" >
                                <div className="card-image">
                                    <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                        <FaLaptop className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                    </span>
                                </div>
                                <div className="card-body pb-0">
                                    <h5 className="card-title">laptop</h5>
                                    <p className="card-text "><small className="text-muted">636 products</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to='/category/desktop' className=' text-decoration-none text-dark'>
                            <div className="card border text-capitalize rounded-0 py-3 h-100" >
                                <div className="card-image">
                                    <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                        <FaDesktop className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                    </span>
                                </div>
                                <div className="card-body pb-0">
                                    <h5 className="card-title">Desktop</h5>
                                    <p className="card-text "><small className="text-muted">636 products</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to='/category/tablet' className=' text-decoration-none text-dark'>
                            <div className="card border text-capitalize rounded-0 py-3 h-100" >
                                <div className="card-image">
                                    <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                        <FaTabletAlt className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                    </span>
                                </div>
                                <div className="card-body pb-0">
                                    <h5 className="card-title">tablet</h5>
                                    <p className="card-text "><small className="text-muted">636 products</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to='/category/accessories' className=' text-decoration-none text-dark'>
                            <div className="card border text-capitalize rounded-0 py-3 h-100" >
                                <div className="card-image">
                                    <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                        <FaCog className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                    </span>
                                </div>
                                <div className="card-body pb-0">
                                    <h5 className="card-title">accessories</h5>
                                    <p className="card-text "><small className="text-muted">636 products</small></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;