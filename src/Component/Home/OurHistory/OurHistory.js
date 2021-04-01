import React from 'react';
import './OurHistory.css';
import historyImage from '../../../Assets/ourHistory-img.png';

const OurHistory = () => {
    return (
        <div className="our-history-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="our-history-img text-center">
                            <img src={historyImage} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="our-history-content">
                            <span>Our History</span>
                            <h2>Where The Food’s As Good As The Root Beer.</h2>
                            <h5>Satisfying people hunger for simple pleasures</h5>
                            <p>May over was. Be signs two. Spirit. Brought said dry own firmament lesser best sixth deep abundantly bearing, him, gathering you blessed bearing he our position best ticket in month hole deep</p>
                            <div className="history-btn">
                                <a href="#!">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHistory;