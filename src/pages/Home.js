import React from 'react';
import HeroImage from '../components/HeroImage';
import rect2 from '../media/Rectangle 2.png';
import rect3 from '../media/Rectangle 3.png';

function Home(props) {
    return (
        <>
            {/* <HeroImage/> */}
            <div className='about'>
                <div className='grid'>
                    <div className='grid-item'>
                        <h2>ABOUT US</h2>
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
                    <h1 style={{color:'red',marginRight:'6px'}}>Recreating</h1> <h1 style={{fontWeight:'lighter'}}>Stories and Experiences for manufacturing Industries</h1>
                </div>

                <div style={{textAlign:'center',marginTop:'30px',lineHeight: '55px'}}>
                    <h3>SERVICES</h3>
                    <p style={{marginTop:'-25px'}}>
                        We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, identity, innovation and inclusion and diversity.
                    </p>
                </div>
            </div>

        </>
    );
}

export default Home;