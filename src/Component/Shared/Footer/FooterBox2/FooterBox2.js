import React from 'react';
import './FooterBox2.css';

const FooterBox2 = () => {
    return (
        <div className="footer-single-box">
            <div className="footer-title">
                <h3>Important Link</h3>
            </div>
            <div className="important-link">
                <ul>
                    <li><a href="#!">WHMCS-bridge</a></li>
                    <li><a href="#!">Search Domain</a></li>
                    <li><a href="#!">My Account</a></li>
                    <li><a href="#!">Shopping Cart</a></li>
                    <li><a href="#!">Our Shop</a></li>
                </ul>
            </div>
        </div>
    );
};

export default FooterBox2;