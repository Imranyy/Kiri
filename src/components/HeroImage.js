import React from 'react';
// import Navbar from "./Navbar";

function HeroImage(props) {
    return (
        <>
            <div className='Hero-image'>
            {/* <Navbar/> */}
                <div className='hero-text' style={{marginLeft:'150px'}}>
                    <h1 className='Enhancing' style={{fontSize:'40px',fontWeight:'bolder',color:'#1E1E1E'}}>
                    Enhancing Brands, Enhancing Lives
                    </h1>
                    <p className='text' style={{marginTop:"20px",fontSize:'20px',color:'#1E1E1E'}}>
                        We focus on deep customer insights to provide growth.
                    </p>
                    <button style={{marginTop:"20px", color:'white', background:'red',width:'100px',height:'50px', border:'none'}}>
                        Contact Us
                    </button>
                </div>
            </div> 
        </>
    );
}

export default HeroImage;