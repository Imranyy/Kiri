import React from 'react';
import {Link} from "react-router-dom";
import logo from "../media/logo.jpg";
import menu from "../media/hamburger icon.png";
import Close from "../media/close icon.png";

function Navbar(props) {
    const showMenu=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="block";
    }
    const close=()=>{
        const navMenu=document.querySelector('.nav-menu')
        navMenu.style.display="none";
    }
    const about=()=>{
        close();
        document.querySelector('#about').scrollIntoView();
    }
    const contacts=()=>{
        close();
        document.querySelector('#contacts').scrollIntoView();
    }
    const news=()=>{
        close();
        document.querySelector('#news').scrollIntoView();
    }
    const services=()=>{
        close();
        document.querySelector('#services').scrollIntoView();
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
                            <Link onClick={about} className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={services} className="nav-link" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={news} className="nav-link" >News</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={contacts} className="nav-link">Contacts</Link>
                        </li> 
                        <li className="nav-item">
                            <img src={menu} alt='menu' onClick={showMenu}/>
                        </li> 
                    </ul>
                </div>
            </nav>

            <div className='nav-menu'>
                <img src={Close} alt='close' onClick={close}/><br/><br/>
                <ul>
                    <li><Link to='/' onClick={close} className="nav-link active" aria-current="page" >Home</Link></li><br/>
                    <li><Link onClick={about} className="nav-link" >About</Link></li><br/>
                    <li><Link onClick={services} className="nav-link" >Services</Link></li><br/>
                    <li> <Link onClick={news} className="nav-link" >News</Link></li><br/>
                    <li><Link onClick={contacts} className="nav-link">Contacts</Link></li><br/>
                </ul>
            </div>
        </>
    );
}

export default Navbar;