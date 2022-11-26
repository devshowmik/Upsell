import React from 'react';
import { FaLaptop } from "react-icons/fa";

const Home = () => {
    return (
        <div className="home-category py-3 text-capitalize">
            <div className="container">
                <h6>Browse items by category</h6>
                <div class="row row-cols-1 row-cols-md-4">
                    <div class="col">
                        <div class="card border-0 " >
                            <div class="row g-0 align-items-center">
                                <div class="col-md-2">
                                    <FaLaptop className='fs-1' style={{ color: '#000' }} />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">Laptop</h5>
                                        <p class="card-text "><small class="text-muted">636 products</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  border-0 text-capitalize" >
                            <div class="row g-0 align-items-center">
                                <div class="col-md-2">
                                    <FaLaptop className='fs-1' style={{ color: '#000' }} />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">Desktop</h5>
                                        <p class="card-text "><small class="text-muted">636 products</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  border-0 text-capitalize" >
                            <div class="row g-0 align-items-center">
                                <div class="col-md-2">
                                    <FaLaptop className='fs-1' style={{ color: '#000' }} />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">tablet</h5>
                                        <p class="card-text "><small class="text-muted">636 products</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card  border-0 text-capitalize" >
                            <div class="row g-0 align-items-center">
                                <div class="col-md-2">
                                    <FaLaptop className='fs-1' style={{ color: '#000' }} />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">Accessories</h5>
                                        <p class="card-text "><small class="text-muted">636 products</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;