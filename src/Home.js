import React from 'react';
import Navbar from './components/Navbar';

function Home(props) {
    return (
        <>
           <Navbar/>
           <div>
                <div className="row">
                    <div className="col-3" style={{background:'grey'}}>
                        col
                    </div>
                    <div className="col-9">
                        col
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Home;