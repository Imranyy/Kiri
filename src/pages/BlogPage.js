import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function BlogPage(props) {
    return (
        <>
            <div className='blogPage'>
                <Navbar/>
                    <div className='header'>
                        <h1>The art of Storytelling</h1>
                    </div>
                <Footer/>
            </div>
        </>
    );
}

export default BlogPage;