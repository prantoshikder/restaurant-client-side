import React from 'react';
import './FoodItemsCard.css';

const FoodItemsCard = (props) => {
    const { image, foodTitle, foodDescription, foodPrice } = props.foodMenu;
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
            <div className="single-special-food d-flex">
                <div className="special-food-img">
                    <img src={image} alt=""/>
                </div>
                <div className="special-food-content">
                    <h2>{foodTitle}</h2>
                    <p>{foodDescription}</p>
                    <h5>{foodPrice}</h5>
                </div>
            </div>
        </div>
    );
};

export default FoodItemsCard;