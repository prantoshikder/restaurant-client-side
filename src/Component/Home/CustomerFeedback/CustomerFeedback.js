import React from 'react';
import './CustomerFeedback.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import customerReviewImg1 from '../../../Assets/CustomerReviewImage/person_1.jpg';
import customerReviewImg2 from '../../../Assets/CustomerReviewImage/person_2.jpg';
import customerReviewImg3 from '../../../Assets/CustomerReviewImage/person_3.jpg';

const CustomerFeedback = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className="customer-feedback-part">
            <div className="container">
                <div className="section-heading">
                    <p>Testimonials</p>
                    <h1>Customers Feedback</h1>
                </div>
                <div>
                    <Slider {...settings}>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg1} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg2} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg3} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg1} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg2} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                        <div className="single-customer-review p-2">
                            <div className="customer-img">
                                <img src={customerReviewImg3} className="img-fluid" alt=""/>
                            </div>
                            <div className="customer-content">
                                <h5>John Doe</h5>
                                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;