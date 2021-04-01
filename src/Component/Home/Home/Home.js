import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BookingTable from '../BookingTable/BookingTable';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import ExclusiveItem from '../ExclusiveItem/ExclusiveItem';
import FoodItems from '../FoodMenu/FoodItems/FoodItems/FoodItems';
import HeroArea from '../HeroArea/HeroArea';
import Ingredients from '../Ingredients/Ingredients';
import LatestBlogs from '../LatestBlogs/LatestBlogs';
import OurChefs from '../OurChefs/OurChefs';
import OurHistory from '../OurHistory/OurHistory';

const Home = () => {
    return (
        <>
            <HeroArea></HeroArea>
            <ExclusiveItem></ExclusiveItem>
            <OurHistory></OurHistory>
            <Ingredients></Ingredients>
            <FoodItems></FoodItems>
            <OurChefs></OurChefs>
            <BookingTable></BookingTable>
            <CustomerFeedback></CustomerFeedback>
            <LatestBlogs></LatestBlogs>
            <Footer></Footer>
        </>
    );
};

export default Home;