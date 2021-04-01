import React from 'react';
import './Navbar.css';
import headerLogo from '../../../Assets/logo.png';

const Navbar = () => {
    return (
        <div className="header-menu">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#!"><img src={headerLogo} className="img-fluid" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#!">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Chefs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Contact</a>
                            </li>
                        </ul>
                        <div className="menu-btn my-2 my-lg-0">
                            <button className=" my-2 my-sm-0">Book A Table</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;