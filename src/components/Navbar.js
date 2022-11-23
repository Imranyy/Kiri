import React from 'react';
import {Link} from "react-router-dom";
function Navbar(props) {
    return (
        <>
            <nav className="navbar" >
                <div className="brand">
                    <Link to='/' className="navbar-brand">Kiri</Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/news' className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contacts' className="nav-link">Contacts</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;