import React from 'react';
import './Ingredients.css';
import ingredientsImage1 from '../../../Assets/ingredientsImage/ingradient-img1.png';
import ingredientsImage2 from '../../../Assets/ingredientsImage/ingradient-img2.png';
import ingredientsImage3 from '../../../Assets/ingredientsImage/ingradient-img3.png';

const Ingredients = () => {
    return (
        <div className="ingredients-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <div className="ingredients-content">
                            <h1>Fine ingredients</h1>
                            <p>If you’ve been to one of our restaurants, you’ve seen – and
                            tasted – what keeps our customers coming back for more.
                            Perfect materials and freshly baked food, delicious Lambda
                            cakes, muffins, and gourmet coffees make us hard to resist!
                            Stop in today and check us out!</p>
                            <div className="ingredients-images">
                                <ul className="d-flex justify-content-center align-items-baseline">
                                    <li>
                                        <img src={ingredientsImage1} className="img-fluid" alt="" />
                                    </li>
                                    <li>
                                        <img src={ingredientsImage2} className="img-fluid" alt="" />
                                    </li>
                                    <li>
                                        <img src={ingredientsImage3} className="img-fluid" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ingredients;