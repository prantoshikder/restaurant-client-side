import React from 'react';
import './OurChefsCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import chefsImage1 from '../../../Assets/OurChefsImage/chefs_1.png';
import chefsImage2 from '../../../Assets/OurChefsImage/chefs_2.png';
import chefsImage3 from '../../../Assets/OurChefsImage/chefs_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const OurChefsCard = () => {
    // const { image, chefsName, chefsDescription } =  props.ourChefs;
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
            <Slider {...settings}>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage1} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Adam Billiard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage2} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Fred Macyard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage3} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Justin Stuard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage1} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Adam Billiard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage2} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Fred Macyard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
                <div className="single-chefs-member p-2">
                    <div className="single-chefs-img">
                        <img src={chefsImage3} className="img-fluid" alt=""/>
                        <div className="chefs-social">
                            <ul className="d-flex">
                                <li><a href="#!"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-chefs-content">
                        <h4>Justin Stuard</h4>
                        <h6>Chef Master</h6>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default OurChefsCard;