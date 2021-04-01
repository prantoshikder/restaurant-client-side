import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FooterBox1 from './FooterBox1/FooterBox1';
import FooterBox2 from './FooterBox2/FooterBox2';
import FooterBox3 from './FooterBox3/FooterBox3';
import FooterBox4 from './FooterBox4/FooterBox4';

const Footer = () => {
    return (
        <div className="footer-part">
            <div className="footer-box-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6"><FooterBox1></FooterBox1></div>
                        <div className="col-lg-3 col-md-6 col-sm-6"><FooterBox2></FooterBox2></div>
                        <div className="col-lg-3 col-md-6 col-sm-6"><FooterBox3></FooterBox3></div>
                        <div className="col-lg-3 col-md-6 col-sm-6"><FooterBox4></FooterBox4></div>
                    </div>
                </div>
            </div>
            <div className="copy-right-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div class="copy-right-content">
                                <p>Copyright &copy;2021 All rights reserved | Developed by <span><a href="#!">Pranto Shikder</a></span></p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div class="copy-right-social">
                                <ul className="d-flex">
                                    <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                    <li><a href="#!"><FontAwesomeIcon icon={faBehance} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;