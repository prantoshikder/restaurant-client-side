import React, { useState } from 'react';
import './ScrollToTop.css';
import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100){
        setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    window.addEventListener('scroll', checkScrollTop)
    
    return (
        <div className="scroll-to-top" onClick={scrollTop} style={{color: 'white', display: showScroll ? 'flex' : 'none'}}>
            <FontAwesomeIcon className="icon" icon={faChevronUp} />
        </div>
    );
};

export default ScrollToTop;