import React from 'react';
import Navbar from "./Navbar";

function HeroImage(props) {
    return (
        <div className='Hero'>
            <Navbar/>
                <div className='Hero-image'>
                    <div className='hero-text'>
                        <h1 className='Enhancing'>
                        Enhancing Brands,<br/>
                        Enhancing Lives
                        </h1>
                        <p className='text'>
                            We focus on deep customer insights to provide growth.
                        </p>
                        <button style={{}}>
                            Contact Us
                        </button>
                    </div>
                </div> 
        </div>

    );
}

export default HeroImage;