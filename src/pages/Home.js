import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import rect2 from '../media/Rectangle 2.png';
import articleImage1 from "../media/articleImage1.png";
import articleImage2 from "../media/articleImage2.png";
import history from '../media/historyImage.png'

function Home(props) {
    return (
        <>
            <HeroImage/>
            {/* about section */}
            <div className='about'>
                <div className='grid'>
                    <div className='grid-item'>
                        <h2 className='heading' style={{fontWeight:'bold'}}>ABOUT US</h2>
                            <p>
                                One thing that sets us apart from other digital marketing agencies is that we are mission-driven and deeply invested in our clients’ work. We believe that mission-driven companies and social enterprises play a significant role in supporting the economic development and sustainability of the country.<br/><br/>
                                Because you focus on changing the world, you deserve the best digital marketing, branding, and PR team to help you achieve your goals and increase impact work. One that understands the importance of telling your brand story, how to say it, and where to direct it.
                            </p><br/>
                        <h3>Mission Statement!</h3>
                        To contribute to client’s business growth through result oriented, innovative and creative strategies that will deliver the WOW factor.<br/><br/>

                        <h3>Core Values</h3>
                        <ul>
                            <li>Professionalism</li>
                            <li>Integrity</li>
                            <li>Passion driven</li>
                            <li>Authenticity</li>
                        </ul>
                    </div>

                    <div className='grid-item2'>
                        <div className='rectangle2'></div>
                        <img className='rectangle3' src={rect2} alt="."/>
                    </div>
                </div>

                <div style={{display:'flex',justifyContent:'center',marginTop:'50px',lineHeight: '55px'}}>
                    <h1 className= 'heading' style={{color:'red',marginRight:'6px'}}>Recreating</h1> 
                    <h1 className= 'heading' style={{fontWeight:'normal'}}>Stories and Experiences for manufacturing Industries</h1>
                </div>

                <div style={{textAlign:'center',marginTop:'30px',lineHeight: '55px'}}>
                    <h3 className='heading' >SERVICES</h3>
                    <p style={{marginTop:'-25px'}}>
                        We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, identity, innovation and inclusion and diversity.
                    </p>
                </div>
            </div>
            {/* picture section */}
            <div className='pic-grid'>
                <div className='grid-item-1'></div>
                <div className='grid-item-2'></div>
                <div className='grid-item-3'></div>
                <div className='grid-item-4'></div>
            </div>
            {/* testimony section */}
            <div className='testimony'>
                <div style={{textAlign:"center"}}>
                    <h2 className='heading'>TESTIMONIALS</h2>
                    <p>We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, identity, innovation and inclusion and diversity.</p>
                </div>
                {/* testimony cards */}
                <div style={{paddingLeft:'100px',paddingRight:'100px',paddingBottom:'10px'}}>
                    <div className='card-grid-1'>
                        <div className='grid-card-1'></div>
                        <div className='grid-card-2'></div>
                    </div>
                    <div className='card-grid-2'>
                        <div className='grid-card-3'>
                            <p className='heading'>Recreating Stories and Experiences for manufacturing Industries Recreating Stories and Experiences for manufacturing IndustriesRecreating Stories and Experiences for manufacturing Industries</p>
                        </div>
                        <div className='grid-card-4'></div>
                    </div>
                    {/* percentage */}
                    <div className='grid-percentage'>
                        <div className='grid-percentage-1'>

                        </div>
                        <div className='grid-percentage-2'>

                        </div>
                        <div className='grid-percentage-3'>

                        </div>
                        <div className='grid-percentage-4'>

                        </div>
                    </div>
                </div>
            </div>
            {/* history section */}
            <div className='history-section'>
                <div className='grid-history'>
                    <div className='grid-history-1'>
                        <div className='reflection'></div>
                        <img src={history} alt='...'/>
                    </div>
                    <div className='grid-history-2'>
                        <h4>Our history</h4>
                        <p>Kiri Marketing Consultants is a Private Limited company founded in 2020 during the Covid 19 pandemic.

                            Our Founder has been a beneficiary of many missions driven projects especially ones that support women entrepreneurs for sustainable impact. She also has professional experience working for a Non-Profit organization. Her experiences and such initiatives have enabled her to harness her skills as a team leader and helped her gain a better perspective when it comes to mission-driven companies.

                            “The company was initially a Social Media Management company for small entrepreneurs and start-up companies and was birthed out of passion. With time and through more experience and realization of the gap in the market, there was a need to re-strategize and rebrand to full Digital Marketing, Branding and PR Agency for mission driven companies, social enterprises and nonprofit organizations.”

                            Eileen, Founder/ CEO.
                        </p>
                    </div>
                </div>
            </div>
            {/* recent article section */}
            <div className='recent-articles'>
                <h4>RECENT ARTICLES</h4>
                <h2>Get Updated on the latest trends</h2>
                <div className='grid-article'>
                    <div className='grid-article-1'>
                        <img src={articleImage1} alt='..'/>
                        <h3>News article title</h3>
                        <p>Short description Short description Short description Short description Short description</p>
                    </div>
                    <div className='grid-article-1'>
                        <img src={articleImage2} alt='..'/>
                        <h3>News article title</h3>
                        <p>Short description Short description Short description Short description Short description</p>
                    </div>
                </div>
            </div>


            {/* talk more section */}
            <div className='talk-more'>
                <div className='grid-talk-more'>
                    <div className='grid-talk-1'>
                        <h1>Let’s talk about building your reputation</h1>
                    </div>
                    <div className='grid-talk-2'>
                        <form>
                            <h3 style={{marginBottom:"20px",width:"242px",height:"44px",fontSize:'40px',fontWeight:'bolder'}}>Get in touch</h3>
                            <label>Name</label><br/>
                            <input type="text" required/><br/><br/>
                            <label>Email</label><br/>
                            <input type='email' required/><br/><br/>
                            <label>Phone</label><br/>
                            <input type="number" required/><br/><br/>
                            <label>Message</label><br/>
                            <textarea required></textarea><br/>
                            <button>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;