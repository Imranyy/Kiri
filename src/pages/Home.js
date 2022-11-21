import React from 'react';
import HeroImage from '../components/HeroImage';
import rect2 from '../media/Rectangle 2.png';

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
        </>
    );
}

export default Home;