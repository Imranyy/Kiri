import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import articleImage1 from '../media/blogPageImages/articleImage1.png';
import articleImage2 from '../media/blogPageImages/articleImage2.png';
import articleImage3 from '../media/blogPageImages/articleImage3.png';
import articleImage4 from '../media/blogPageImages/articleImage4.png';
import articleImage5 from '../media/blogPageImages/articleImage5.png';
import articleImage6 from '../media/blogPageImages/articleImage6.png';
import articleImage7 from '../media/blogPageImages/articleImage7.png';
import articleImage8 from '../media/blogPageImages/articleImage8.png';
import articleImage9 from '../media/blogPageImages/articleImage9.png';
import articleImage10 from '../media/blogPageImages/articleImage10.png';
import {Link} from 'react-router-dom';
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
                        {/* row1 */}
                        <div className='grid-blogs'>
                            <div className='card-blogs'>
                                <img src={articleImage1} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage2} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage3} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                        </div>
                        {/* row2 */}
                        <div className='grid-blogs'>
                            <div className='card-blogs'>
                                <img src={articleImage4} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage5} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='extra'>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>

                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>

                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>
                            </div>
                        </div>
                        {/* row3 */}
                        <div className='grid-blogs'>
                            <div className='extra'>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>
                                    
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>

                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'>Read Article</Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage6} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage7} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                        </div>
                        {/* row4 */}
                        <div className='grid-blogs'>
                            <div className='card-blogs'>
                                <img src={articleImage8} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage9} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                            <div className='card-blogs'>
                                <img src={articleImage10} alt='...'/>
                                <h3>Some Other Article</h3>
                                <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world.</p>
                                <Link to='/blog/article'><button>Read Article</button></Link>
                            </div>
                        </div>
                    </div>

                <Footer/>
            </div>
        </>
    );
}

export default BlogPage;