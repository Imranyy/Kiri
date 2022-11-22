import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function BlogPage(props) {
    return (
        <>
            <div className='blogPage'>
               <div style={{paddingTop:'20px',marginBottom:'20px'}}>
                <Navbar/>
               </div>
                    <div className='header'>
                        <h1>The art of Storytelling</h1>
                        <button>Read Article</button>
                    </div>
                <Footer/>
            </div>
        </>
    );
}

export default BlogPage;