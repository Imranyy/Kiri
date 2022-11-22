import React from 'react';
import { Link } from 'react-router-dom';
import location from '../media/LOCATION.png';
import phone from '../media/PHONE.png';
import mail from '../media/MAIL.png';
import fb from '../media/facebook.png';
import insta from '../media/insta.png';
import twitter from '../media/twitter.png';
import linkedIn from '../media/linkdin.png';

function Footer(props) {
    return (
        <>
            <footer>
               <div className='content'>
                    <div>
                        <h2>Service</h2>
                        <ul style={{listStyle:'none'}}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Service</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <ul style={{listStyle:'none'}}>
                            <li style={{display:'flex'}}>
                                <img src={location} alt='..'/>
                                <div style={{display:'inline-block', marginLeft:'20px'}}>
                                    <p>Office Address</p><h3>Kisumu some place</h3>
                                </div>
                            </li>
                            <li style={{display:'flex'}}>
                                <img src={mail} alt='..'/>
                                <div style={{display:'inline-block',marginLeft:'20px'}}>
                                    <p>Email Us</p><h3>someemaildress@email.com</h3>
                                </div>
                            </li>
                            <li style={{display:'flex'}}>
                                <img src={phone} alt='..'/>
                                <div style={{diplay:'inline-block',marginLeft:'20px'}}>
                                    <p>Call Us</p><h3>+25470090099848</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
               </div>
            <div className='social-icons'>
                <a href='#' target='_blank'><img src={fb} alt="..."/></a>
                <a href='#' target='_blank'><img style={{marginLeft:'50px'}} src={twitter} alt="..."/></a>
                <a href='#' target='_blank'><img style={{marginLeft:'50px'}} src={linkedIn} alt="..."/></a>
                <a href='#' target='_blank'><img style={{marginLeft:'50px'}} src={insta} alt="..."/></a>
            </div>
            <p align='center'>©2022 Kiri Marketing and PR Consultants </p>
            </footer>
        </>
    );
}

export default Footer;