import React from 'react';
import './FooterBox4.css';

const FooterBox4 = () => {
    return (
        <div className="footer-single-box">
            <div className="footer-title">
                <h3>Newsletter</h3>
            </div>
            <div className="news-content">
                <p>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p>
                <div className="news-subscribe">
                    <input type="text" className="form-control"placeholder="Email Address" autocomplete="off"/>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    );
};

export default FooterBox4;