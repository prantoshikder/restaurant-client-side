import React, { useState } from 'react';
import ExclusiveCardItem from '../ExclusiveCardItem/ExclusiveCardItem';
import ExclusiveItemData from '../FakeData/ExclusiveItemData';
import './ExclusiveItem.css';

const ExclusiveItem = () => {
    const [exclusiveItem, setExclusiveItem] = useState(ExclusiveItemData);
    return (
        <section className="exclusive-item-part">
            <div className="container">
                <div className="section-heading">
                    <p>Popular Dishes</p>
                    <h1>Our Exclusive Items</h1>
                </div>
                <div>
                    <div className="row">
                        {
                            exclusiveItem.map(exclusiveItem => <ExclusiveCardItem key={exclusiveItem.id} exclusiveItem={exclusiveItem}></ExclusiveCardItem>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExclusiveItem;