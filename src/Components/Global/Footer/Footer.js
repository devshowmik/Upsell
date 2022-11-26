import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../logo.png';

const Footer = () => {
    return (
        <div className="footer bg-success text-white">
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <Link href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src={Logo} alt="" width='100' className='logo' />
                        </Link>
                        <p >© {new Date().getFullYear()}</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>Important links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">all products</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">Login</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">register</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">stay safe</Link></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>About Vector</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">about</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">terms and conditions</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">payments</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>Follow Vector</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">Facebook</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">Twitter</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">instagram</Link></li>
                            <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white-50 text-capitalize">Linkedin</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;