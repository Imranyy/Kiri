import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import rect2 from '../media/Rectangle 2.svg';
import articleImage1 from "../media/articleImage1.png";
import articleImage2 from "../media/articleImage2.png";
import history from '../media/historyImage.png';
import leftArrowIcon from '../media/Vector (1).png';
import rightArrowIcon from '../media/Vector.png';
import image4 from '../media/image 4.png';
import image5 from '../media/image 5.png';
import image6 from '../media/image 6.png';
import image7 from '../media/image 7.png';
import image8 from '../media/image 8.png';
import image9 from '../media/image 9.png';
import image11 from '../media/image 11.png';
import person from '../media/person.png';
import network from '../media/network.png';
import eye from '../media/eye.png';
import plane from '../media/aeroplane.png';
import profile1 from '../media/Profile1.png';
import profile2 from '../media/Profile2.png';
import profile3 from '../media/Profile3.png';
import profile4 from '../media/Profile4.png';
import toast from "react-hot-toast";
import Image1 from '../media/Public\ relations.png';
import Image2 from '../media/Brand\ Management.png';
import Image3 from '../media/Digital\ Marketing.png';
import Image4 from "../media/Training.png";

function Home(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState(0);
    const [text,setText]=useState('');
    const [sendButton,setSendButton]=useState(<button>Send Message</button>);
    //send email
    const sendMail=async(e)=>{
        const form=document.querySelector('form');
        e.preventDefault();
        try {
            setSendButton(<><button><i>Sending...</i></button></>);
            const url='https://kiri-api.onrender.com/api/send';
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    name,
                    email,
                    phone:number,
                    message:text
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            form.reset();
            const parseRes=await response.json();
            console.log(parseRes);
            setSendButton(<button>Sending message</button>);
        } catch (error) {
            form.reset();
            setSendButton(<button>Send Message</button>);
            toast.success('Email sent successfully');
            console.log(error.message);
        }
    }
   
    return (
        <>
            <HeroImage/>
            {/* about section */}
            <div className='about'>
                <div className='grid'>
                    <div className='grid-item'>
                        <h2 className='heading' style={{fontWeight:'bold' ,paddingBottom: '20px', fontSize: '30px'}}>ABOUT US</h2>
                            <p>
                                One thing that sets us apart from other digital marketing agencies is that we are mission-driven and deeply invested in our clients’ work. We believe that mission-driven companies and social enterprises play a significant role in supporting the economic development and sustainability of the country.<br/><br/>
                                Because you focus on changing the world, you deserve the best digital marketing, branding, and PR team to help you achieve your goals and increase impact work. One that understands the importance of telling your brand story, how to say it, and where to direct it.
                            </p><br/>
                        <h3 style={{paddingBottom: '5px', fontSize: '25px', fontWeight:'normal'}}>Mission Statement!</h3>
                        To contribute to client’s business growth through result oriented, innovative and creative strategies that will deliver the WOW factor.<br/><br/>

                        <h3 style={{fontSize: '25px', fontWeight:'normal'}}>Core Values</h3>
                        <ul>
                            <li>Professionalism</li>
                            <li>Integrity</li>
                            <li>Passion driven</li>
                            <li>Authenticity</li>
                        </ul>
                    </div>

                    <div>
                        <img className='rectangle2' src={rect2} alt="about us"/>
                    </div>
                </div>

                <div className='vectorbuld2'>
                    <div style={{display:'flex',justifyContent:'center',marginTop:'50px',fontSize: '20px'}}>
                        <h1 className= 'heading' style={{color:'#CC2031',marginRight:'6px'}}>Recreating</h1> 
                        <h1 className= 'heading' style={{fontWeight:'normal'}}>Stories and Experiences for manufacturing Industries</h1>
                    </div>

                    <div style={{textAlign:'center',marginTop:'30px'}}>
                        <h3 className='heading' style={{fontSize: '30px', paddingBottom: '10px', paddingTop: '40px'}}>SERVICES</h3>
                        <span style={{fontSize: '20px', textAlign: 'center'}}>
                            We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, <br/>identity, innovation and inclusion and diversity.
                        </span>
                    </div>
                </div>
            </div>
            {/* picture section */}
            {/* <div className='grid-container'>
                <div className='grid-item-1'></div>
                <div className='grid-item-2'></div>
                <div className='grid-item-3'></div>
                <div className='grid-item-4'></div>
            </div> */}
            <div>
                <div className='gallery'>
                    <figure className='gallery__item grid-item-1'>
                        <img src={Image1} className="gallery__img" alt="Image 1"/>
                    </figure>
                    <figure className='gallery__item grid-item-2'>
                        <img src={Image2} className="gallery__img" alt="Image 2"/>
                    </figure>
                    <figure className='gallery__item grid-item-3'>
                        <img src={Image3} className="gallery__img" alt="Image 3"/>
                    </figure>
                    <figure className='gallery__item grid-item-4'>
                        <img src={Image4} className="gallery__img" alt="Image 4"/>
                    </figure>
                </div>
            </div>

            {/* testimony section */}
            <div className='testimony'>
                <div style={{textAlign:"center"}}>
                    <h2 className='heading' style={{fontSize: '30px'}}>TESTIMONIALS</h2>
                    <p style={{fontSize: '20px', paddingTop: '10px'}}>Think we’re bluffing? See what people we’ve worked with think about us.</p>
                </div>
                {/* testimony cards */}
                <div style={{paddingLeft:'100px',paddingRight:'100px',paddingBottom:'10px'}}>
                    <div className='card-grid-1'>
                        <div className='grid-card'>
                            <p className='heading'>
                            Our brand has exponentially grown to explore social media avenues as it was operating offline. Choosing long term partnership with Kiri Marketing consultancy has broadened our relationship and sales growth experience. Her advice and expertise go a long way in enhancing brand needs & values.
                            </p>
                            <div className='card-footer'>
                                <img width="50" height="50" src={profile1} alt="..."/>
                                <p>
                                Annet Obat &amp; Anita Lukelesia<br/>
                                Co-Founders, Laette Closet
                                </p>
                            </div>
                        </div>
                        <div className='grid-card'>
                            <p className='heading'>
                            Kiri marketing Consultants is a perfect balance between professionalism and personality. They take their time to dig in and find out what the company needs to expand their market. Their strategies have helped us in aligning our company goals which has seen us grow and sign-up new clients.
                            </p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile2} alt="..."/>
                                <p>
                                Evelyne Wandanda<br/>
                                Co-founder and managing partner, Innerblast Consultants
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='card-grid-2'>
                        <div className='grid-card'>
                            <p className='heading'>
                            Talent Industry acknowledges the partnership offered by Kiri Marketing Consultants in the success of the 2022 East Africa Poetic Hour Battle on 20th May 2022. We would like to thank them for their outstanding service in event planning, marketing, branding and corporate ushering.
                            </p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile3} alt="..."/>
                                <p>
                                Godfrey Emoja<br/>
                                Managing Director, Talent Industry
                                </p>
                            </div>
                        </div>
                        <div className='grid-card'>
                            <p className='heading'>Recreating Stories and Experiences for manufacturing Industries Recreating Stories and Experiences for manufacturing IndustriesRecreating Stories and Experiences for manufacturing Industries</p>
                            <div className='card-footer'>
                            <img width="50" height="50" src={profile4} alt="..."/>
                                <p>
                                    Bryce Zeibu<br/>
                                    CTA, Spify
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* percentage */}
                    <div className='grid-percentage'>
                        <div className='grid-percentage-1'>
                             <img src={person} alt='...'/><h2>37+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className='grid-percentage-2'>
                            <img src={network} alt='...'/><h2>98%</h2>
                            <p>Positive Feedback</p>
                        </div>
                        <div className='grid-percentage-3'>
                            <img src={eye} alt='...'/><h2>835+</h2>
                            <p>Loyal Followers</p>
                        </div>
                        <div className='grid-percentage-4'>
                            <img src={plane} alt='...'/><h2>50+</h2>
                            <p>Projects Delivered</p>
                        </div>
                    </div>

                    {/* worked with */}
                    <div className='worked-with'>
                        <h4>we’ve worked with</h4>
                        <div className='company-image'>
                            <img width='10' height='15' src={leftArrowIcon} style={{cursor:'pointer'}} alt='...'/>
                                <img width='65' height='50' src={image4} alt='...'/>
                                <img width='65' height='50' src={image5} alt='...'/>
                                <img width='65' height='50' src={image6} alt='...'/>
                                <img width='65' height='50' src={image7} alt='...'/>
                                <img width='65' height='50' src={image8} alt='...'/>
                                <img width='65' height='50' src={image9} alt='...'/>
                                <img width='65' height='50' src={image11} alt='...'/>
                            <img width='10' height='15' src={rightArrowIcon} style={{cursor:'pointer'}} alt='...'/>
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
                        <form onSubmit={sendMail}>
                            <h3 style={{marginBottom:"20px",width:"242px",height:"44px",fontSize:'40px',fontWeight:'bolder'}}>Get in touch</h3>
                            <label>Name</label><br/>
                            <input type="text" onChange={(e)=>setName(e.target.value)} required/><br/><br/>
                            <label>Email</label><br/>
                            <input type='email' onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
                            <label>Phone</label><br/>
                            <input type="number" onChange={(e)=>setNumber(e.target.value)} required/><br/><br/>
                            <label>Message</label><br/>
                            <textarea onChange={(e)=>setText(e.target.value)} required></textarea><br/>
                            {sendButton}
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Home;