import React from 'react';
// import Navbar from "./Navbar";

function HeroImage(props) {
    return (
        <>
            <div className='Hero-image'>
            {/* <Navbar/> */}
                <div>
                    <h1 className='Enhancing'>
                    Enhancing Brands, Enhancing Lives
                    </h1>
                    <p className='text'>
                        We focus on deep customer insights to provide growth.
                    </p>
                    <button className='btn btn-danger'>
                        Contact Us
                    </button>
                </div>
            </div> 
        </>
    );
}

export default HeroImage;