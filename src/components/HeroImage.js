import React from 'react';
import Navbar from "./Navbar";

function HeroImage(props) {
    const contacts=()=>{
        document.querySelector('#contacts').scrollIntoView();
    }
    return (
        <div className='Hero'>
            <Navbar/>
                <div className='Hero-image'>
                    <div className='hero-text' style={{marginLeft:'150px'}}>
                        <h1 className='heading' style={{fontSize:'50px',fontWeight:'lighter',color:'#1E1E1E'}}>
                        Enhancing Brands,
                        </h1>
                        <h1 className='heading' style={{fontSize:'50px',fontWeight:'lighter',color:'#1E1E1E'}}>
                        Enhancing Lives
                        </h1>
                        <p className='text'>
                            We focus on deep customer insights to provide growth.
                        </p>
                        <button onClick={contacts}>
                            Contact Us
                        </button>
                    </div>
                </div> 
        </div>

    );
}

export default HeroImage;