import React from 'react';
import Navbar from "./Navbar";

function HeroImage(props) {
    return (
        <div className='Hero'>
            <Navbar/>
                <div className='Hero-image'>
                    <div className='hero-text' style={{marginLeft:'150px'}}>
                        <h1 className='Enhancing heading' style={{fontSize:'60px',fontWeight:'normal',color:'#1E1E1E'}}>
                        Enhancing Brands,
                        </h1>
                        <h1 className='Enhancing heading' style={{fontSize:'60px',fontWeight:'normal',color:'#1E1E1E'}}>
                        Enhancing Lives
                        </h1>
                        <p className='text' style={{marginTop:"20px",fontSize:'20px',color:'#1E1E1E'}}>
                            We focus on deep customer insights to provide growth.
                        </p>
                        <button style={{font: 'bold',color:'white', background: '#CC2031',width:'130px',height:'70px', border:'none'}}>
                            Contact Us
                        </button>
                    </div>
                </div> 
        </div>

    );
}

export default HeroImage;