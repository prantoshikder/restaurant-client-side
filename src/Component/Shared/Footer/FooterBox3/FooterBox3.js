import React from 'react';
import './FooterBox3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const FooterBox3 = () => {
    return (
        <div className="footer-single-box">
            <div className="footer-title">
                <h3>Contact us</h3>
            </div>
            <div className="contact-info">
                <div className="phone d-flex">
                    <FontAwesomeIcon className="icon"icon={faPhoneAlt} />
                    <p>+880-1758-668855 <br/>+880-1846-000111</p>
                </div>
                <div className="address d-flex">
                    <FontAwesomeIcon className="icon"icon={faLocationArrow} />
                    <p>Dhanmondi-27 <br/>Dhaka, Bangladesh</p>
                </div>
                <div className="email d-flex">
                    <FontAwesomeIcon className="icon"icon={faEnvelope} />
                    <p>prantoshikder24@gmail.com <br/>michelescok24@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBox3;