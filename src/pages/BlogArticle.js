import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import articleImage1 from "../media/blogPageImages/articleImage1.png";
import articleImage2 from "../media/blogPageImages/articleImage2.png";

function BlogArticle(props) {
    return (
        <>
            <div className='blog-article'>
                <div style={{paddingTop:'20px',marginBottom:'20px'}}>
                    <Navbar/>
                </div>
                <div className='blog-article-header'></div>
                <div className='article-content'>
                    <h1>Advertising Trends 2022/2023</h1>
                    <p>
                        Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.
                        We appreciate you! We support you! We cheer you on!

                        Kiri Marketing Consultants is a digital marketing and PR agency based in Kenya that supports mission driven companies, social enterprises and nonprofit organizations. We are passionate about supporting our clients changing the world and bringing about
                        positive impact hence our tagline, enhancing brands, enhancing lives.

                        Our team is result oriented and dedicated to helping you meet your organizational goals through creative, innovative and authentic digital marketing, branding and PR strategies.
                    </p>

                    <p>
                        Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.
                        We appreciate you! We support you! We cheer you on!

                        Kiri Marketing Consultants is a digital marketing and PR agency based in Kenya that supports mission driven companies, social enterprises and nonprofit organizations. We are passionate about supporting our clients changing the world and bringing about
                        positive impact hence our tagline, enhancing brands, enhancing lives.

                        Our team is result oriented and dedicated to helping you meet your organizational goals through creative, innovative and authentic digital marketing, branding and PR strategies.
                    </p>
                    <h3>What’s Outdated?</h3>
                    <p>
                        Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.
                        We appreciate you! We support you! We cheer you on!
                    </p>
                </div>
                {/* more article */}
                    <div className='more-article'>
                        <h2>More Articles</h2>
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
                            <Link to='/blogs'>See More &rarr;</Link>
                        </div>
                    </div>
                <Footer/>
            </div>
            
        </>
    );
}

export default BlogArticle;