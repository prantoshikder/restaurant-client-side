import React from 'react';
import './ExclusiveCardItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const ExclusiveCardItem = (props) => {
    const {image, exclusiveTitle, exclusiveDesc} = props.exclusiveItem;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="exclusive-single-item">
                <div className="exclusive-single-img">
                    <img src={image} className="img-fluid" alt=""/>
                </div>
                <div className="exclusive-single-content">
                    <h2>{exclusiveTitle}</h2>
                    <p>{exclusiveDesc}</p>
                    <a href="#!" className="readMore-btn">Read More <FontAwesomeIcon className="icon" icon={faAngleDoubleRight} /></a>
                </div>
            </div>
        </div>
    );
};

export default ExclusiveCardItem;