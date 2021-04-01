import React from 'react';
// import ChefsData from '../FakeData/ChefsData';
import OurChefsCard from '../OurChefsCard/OurChefsCard';
import './OurChefs.css';

const OurChefs = () => {
    // const [ourChefs, setOurChefs] = useState(ChefsData);
    return (
        <div className="our-chefs-part">
            <div className="container">
                <div className="section-heading">
                    <p>Team Member</p>
                    <h1>Our Experience Chefs</h1>
                </div>
                <div>
                    <div>
                        {/* {
                            ourChefs.map(ourChefs => <OurChefsCard key={ourChefs.id} ourChefs={ourChefs}></OurChefsCard>)
                        } */}
                        <OurChefsCard></OurChefsCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChefs;