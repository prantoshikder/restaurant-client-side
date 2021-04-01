import React from 'react';
import './LatestBlogsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const LatestBlogsCard = (props) => {
    const { image, blogsDate, blogsNews, blogsTitle } = props.blogNews;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 mt-4">
            <div className="single-latest-blog">
                <div className="latest-blog-img">
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="latest-blog-content">
                    <div className="latest-blog-date">
                        <a href="#!">{blogsDate}</a>
                        <a href="#!"><span>#</span>{blogsNews}</a>
                    </div>
                    <h5><a href="#!">{blogsTitle}</a></h5>
                    <div className="blogs-btn">
                        <a href="#!">Read More <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogsCard;