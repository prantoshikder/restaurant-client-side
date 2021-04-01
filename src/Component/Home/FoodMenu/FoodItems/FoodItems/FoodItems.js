import React, { useState } from 'react';
import FoodMenuData from '../../../FakeData/FoodMenuData';
import FoodMenu from '../../FoodMenu';
import FoodItemsCard from '../FoodItemsCard/FoodItemsCard';
import './FoodItems.css';

const SpecialFood = () => {
    const [foodMenu, setFoodMenu] = useState(FoodMenuData);
    const [selectedMenu, setSelectedMenu] = useState("special");
    return (
        <>
            <div className="special-food-part">
                <div className="container">
                <FoodMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></FoodMenu>
                    <div className="row">
                        {
                            foodMenu.filter((special) => selectedMenu === special.category).map(foodMenu => <FoodItemsCard key={foodMenu.id} foodMenu={foodMenu}></FoodItemsCard>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialFood;