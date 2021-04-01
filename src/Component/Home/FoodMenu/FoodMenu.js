import React from 'react';
import './FoodMenu.css';

const FoodMenu = ({setSelectedMenu, selectedMenu}) => {
    return (
        <div className="food-menu-part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <p>Popular Menu</p>
                            <h1>Delicious Food Menu</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="food-menu">
                            <ul className="d-flex">
                                <li className={selectedMenu === "special" ? "active" : ""} onClick={() => setSelectedMenu("special")} href="#!">Special</li>
                                <li className={selectedMenu === "breakfast" ? "active" : ""} onClick={() => setSelectedMenu("breakfast")} href="#!">Breakfast</li>
                                <li className={selectedMenu === "launch" ? "active" : ""} onClick={() => setSelectedMenu("launch")} href="#!">Launch</li>
                                <li className={selectedMenu === "dinner" ? "active" : ""} onClick={() => setSelectedMenu("dinner")} href="#!">Dinner</li>
                                <li className={selectedMenu === "sneaks" ? "active" : ""} onClick={() => setSelectedMenu("sneaks")} href="#!">Sneaks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodMenu;