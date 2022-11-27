import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import Logo from '../../../logo.png';

const Header = () => {
    const { loginUser } = useContext(AuthProvider);
    return (
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width='100' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vector-upsell-header" aria-controls="vector-upsell-header" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="vector-upsell-header">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold" to="/products">All Products</Link>
                        </li>
                    </ul>
                    <div className='d-flex gap-2'>
                        {
                            loginUser
                                ?
                                <Link className="btn text-white rounded-1 fw-semibold" to='/dashboard'><i className="bi bi-person-fill"></i> Dashboard</Link>
                                :
                                <Link className="btn text-white rounded-1 fw-semibold" to='/login'><i className="bi bi-person-fill"></i> login</Link>
                        }

                        <button className="btn btn-warning rounded-1 fw-semibold" type="submit">Add your product</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;