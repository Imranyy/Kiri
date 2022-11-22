import React from 'react';
// import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import articleImage1 from '../media/blogPageImages/articleImage1.png';
import articleImage2 from '../media/blogPageImages/articleImage2.png';
import articleImage3 from '../media/blogPageImages/articleImage3.png';
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
                    {/* blogs section */}
                    <div className='blogs'>
                        <div className='grid-blogs'>
                            <div className='card-blogs'>
                                <img src={articleImage1} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <button>Read Article</button>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage2} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <button>Read Article</button>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage3} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <button>Read Article</button>
                            </div>
                        </div>
                    </div>

                {/* <Footer/> */}
            </div>
        </>
    );
}

export default BlogPage;