import React from 'react';
import { FaCog, FaDesktop, FaLaptop, FaTabletAlt } from "react-icons/fa";
const CategorySection = () => {
    return (
        <div className="home-category py-3 text-capitalize ">
            <div className="container">
                <h3 className='mb-4 fw-semibold fst-italic'>Browse items by category</h3>
                <div class="row row-cols-1 row-cols-md-4 g-5 text-center">
                    <div class="col ">
                        <div class="card text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                    <FaLaptop className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                </span>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">laptop</h5>
                                <p class="card-text "><small class="text-muted">636 products</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                    <FaDesktop className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                </span>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">Desktop</h5>
                                <p class="card-text "><small class="text-muted">636 products</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                    <FaTabletAlt className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                </span>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">tablet</h5>
                                <p class="card-text "><small class="text-muted">636 products</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card border text-capitalize rounded-0 py-3 h-100" >
                            <div className="card-image">
                                <span className='p-3 bg-light m-0 rounded-circle d-inline-flex'>
                                    <FaCog className='m-0 fs-4 text-center' style={{ color: '#000' }} />
                                </span>
                            </div>
                            <div class="card-body pb-0">
                                <h5 class="card-title">accessories</h5>
                                <p class="card-text "><small class="text-muted">636 products</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;