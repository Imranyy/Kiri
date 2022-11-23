import React from 'react';
import {Link} from "react-router-dom";
import logo from "../media/logo.jpg";
function Navbar(props) {
    const showMenu=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="block";
    }
    const close=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="none";
    }
    return (
        <>
            <nav className="navbar" >
                <div className="brand">
                    <Link to='/' className="navbar-brand"><img className='logo' src={logo} alt="Kiri"/></Link>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/news' className="nav-link" >News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contacts' className="nav-link">Contacts</Link>
                        </li> 
                        <li className="nav-item">
                            <button onClick={showMenu}>Menu</button>
                        </li> 
                    </ul>
                </div>
            </nav>

            <div className='nav-menu'>
                <button onClick={close}>Close</button><br/><br/>
                <ul>
                    <li><Link to='/' className="nav-link active" aria-current="page" >Home</Link></li><br/>
                    <li><Link to='/about' className="nav-link" >About</Link></li><br/>
                    <li><Link to='/services' className="nav-link" >Services</Link></li><br/>
                    <li> <Link to='/news' className="nav-link" >News</Link></li><br/>
                    <li><Link to='/contacts' className="nav-link">Contacts</Link></li><br/>
                </ul>
            </div>
        </>
    );
}

export default Navbar;