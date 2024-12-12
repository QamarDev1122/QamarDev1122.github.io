// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container px-5">
            <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={Logo} alt="Logo" style={{ height: '100px', width: 'auto', marginRight: '10px' }} />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    {/* <a className="nav-link" href="/">Home</a> */}
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/resume">Resume</Link>
                        {/* <a className="nav-link" href="/resume">Resume</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                        {/* <a className="nav-link" href="/projects">Projects</a> */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        {/* <a className="nav-link" href="/contact">Contact</a> */}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;

