import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div className="hero-area-part">
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="hero-area-content">
                            <h5>Expensive But The Best</h5>
                            <h1>Deliciousness jumping into the mouth</h1>
                            <p>Together creeping heaven upon third dominion be upon won't darkness rule land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning</p>
                            <div className="bannerBtn d-flex">
                                <div className="bannerBtn-inner">
                                    <a href="#!">Reservation</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;